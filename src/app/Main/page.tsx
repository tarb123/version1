'use client';
import React, { useState, useCallback, useMemo, useEffect} from 'react';
import toast from "react-hot-toast";
import QuestionBlock from '../PP/QuestionBlock';
import type { Answer, QuestionData } from '../PP/QuestionBlock';
import ResultsPage from '../PP/ResultsPage';
import { skillList, traitList, skillCategoryMapping, broadSkillCategories, TraitCategory, careerDatabase} from "../quizData";
import '../../App.css'; 
import CustomAlert from '../components/CustomAlert';

interface Candidate {
  name: string;
  email: string;
  age: string;
  history?: {
    oldName: string;
    oldEmail: string;
    oldAge: string;
    changedAt: string;
  }[];
}

interface CheckData {
  exists: boolean;
  candidate: Candidate;
}

function App() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [showSlider, setShowSlider] = useState(false);
  const [quizState, setQuizState] = useState('quiz');
  const [finalScores, setFinalScores] = useState<{ [key: string]: number } | null>(null);// Granular skill scores (weighted)
  const [traitScores, setTraitScores] = useState<{ [key: string]: number } | null>(null); // High-level trait scores (1-5 scale approx)
  const [careerMatches, setCareerMatches] = useState<{ name: string; score: number }[] | null>(null); // Career match results
  const [currentIndex, setCurrentIndex] = useState(0); // ⭐ Track current question
  const memoizedCareerDb = useMemo(() => careerDatabase, []);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [checkData, setCheckData] = useState<CheckData | null>(null);
  
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
  const fetchQuestions = async () => {
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      if (data.success) {setQuestions(data.questions);} 
      else {console.error('❌ Failed to load questions:', data.message); }
    } 
    
    catch (err) { console.error('❌ Error fetching questions from backend:', err); }
  };
  fetchQuestions();
});

const handleAnswerChange = useCallback(
  (questionId: string, selectedValue: string | number) => {
    setSelectedAnswers((prevAnswers) => ({ 
      ...prevAnswers, 
      [questionId]: selectedValue }));

    // Only auto-advance for non-text questions
    const currentQ = questions[currentIndex];
    if (currentQ && currentQ.type !== "text") {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  },
  [currentIndex, questions]
);

const goToNext = () => {if (currentIndex < questions.length - 1) {setCurrentIndex((prev) => prev + 1);}};
const goToPrevious = () => { setCurrentIndex((prev) => Math.max(prev - 1, 0));};

type SelectedAnswers = {
   [questionId: string]: string | number;
  };
      
const getFormatWeight = (questionType: 'likert' | 'forced' | 'sjt'| 'text' | 'select') => {
  switch (questionType) {
    case 'likert': return 1.0;
    case 'forced': return 1.2;
    case 'sjt': return 1.4;
    default: return 1.0;
}};

  // --- Function to Calculate Max Possible Weighted Score for a Granular Skill ---
  // Needed for accurate normalization of category scores
  const calculateMaxSkillScore = useCallback((skillToCalc: string) => {
    let maxScore = 0;
    questions.forEach(question => {
      const formatWeight = getFormatWeight(question.type);
      const traitWeight = question.traitWeight || 1.0;
      const sectionWeight = question.sectionWeight || 1.0;
      const fullQuestionWeight = formatWeight * traitWeight * sectionWeight;

      let maxBaseForQuestion = 0;
      
        question.answers?.forEach((answer: Answer) => {
        const scores = answer.scores as unknown as Record<string, number> | undefined;
        
        if (scores && scores[skillToCalc] !== undefined) {
          const baseScore = Number(scores[skillToCalc]);
          
          if (!isNaN(baseScore) && baseScore > maxBaseForQuestion) {
            maxBaseForQuestion = baseScore;
          }

        }
      });
      maxScore += maxBaseForQuestion * fullQuestionWeight;
    });
    // Add a small epsilon to prevent division by zero if max is zero
    return maxScore > 0 ? maxScore : 1;
    }, [questions]);

  // Memoize max scores for performance
  const maxSkillScores = useMemo(() => {
    
    const maxScores: Record<string, number> = {};
    skillList.forEach(skill => {
      maxScores[skill] = calculateMaxSkillScore(skill); 
    });
      return maxScores;
    }, [calculateMaxSkillScore] );
     
  const unansweredQuestionIds = questions
  .filter((q) => !selectedAnswers[q.id])
  .map((q) => q.id);

const handleSubmit = async () => {
  
  if (unansweredQuestionIds.length > 0) {
    alert("❌ Please answer all questions before submitting.");
    return;
  }

    const email = String(selectedAnswers["INFO-EMAIL"] || "");

  try {
    const checkRes = await fetch(`/api/candidates?email=${email}`);
    const data = await checkRes.json();

    if (data.exists && data.candidate) 
    {
      setCheckData(data); // ✅ Save candidate data for later use
      setAlertMessage("Do you want to continue with previous details?");
      setShowAlert(true);
      return; // wait for user action
    }

    await saveResponses();
    generateReport();
  } 

  catch (error: unknown) 
  {
    console.error("❌ Error in handleSubmit:", error);
    alert("⚠️ Something went wrong. Please try again.");
  }

  // --- Initialize Accumulators ---
  // const skillScoresAcc = skillList.reduce((acc, skill) => {
  //   acc[skill] = 0;
  //   return acc;
  // }, {} as { [key: string]: number });

  // const traitScoreAcc = traitList.reduce((acc, trait) => {
  //   acc[trait] = { weightedScoreSum: 0, weightSum: 0 };
  //   return acc;
  // }, {} as { [key: string]: { weightedScoreSum: number; weightSum: number } });

 // --- Perform Dual Calculation in One Pass ---
  // questions.forEach(question => {
  //   const selectedValue = selectedAnswers[question.id];
  //   let selectedAnswerData = null;
  //   if (!selectedValue) return;

  //   if (question.type === "likert" && question.answers) {
  //     selectedAnswerData = question.answers.find(
  //       (ans) => "value" in ans && (ans).value === selectedValue
  //     );
  //   } else if (question.answers) {
  //     selectedAnswerData = question.answers.find((ans) => ans.id === selectedValue);
  //   }

  //   if (selectedAnswerData) {
  //     const formatWeight = getFormatWeight(question.type);
  //     const traitWeight = question.traitWeight || 1.0;
  //     const fullQuestionWeight = formatWeight * traitWeight;
                
  //     // 1. Accumulate Granular Skill Score Contributions
  //     if (selectedAnswerData.scores) {
  //       const scores = selectedAnswerData.scores as unknown as Record<string, number>;
  //       for (const skill in scores) {
  //         if (skillScoresAcc.hasOwnProperty(skill)) {
  //           const baseSkillScore = Number(scores[skill]);
  //           if (!isNaN(baseSkillScore)) {
  //             skillScoresAcc[skill] += baseSkillScore * fullQuestionWeight;
  //           }
  //         }
  //       }
  //     }

      // 2. Accumulate Direct Trait Score Contribution
  //     const primaryTrait = selectedAnswerData.primaryTraitOverride || question.primaryTrait;
  //       const baseScoreForTrait = selectedAnswerData.baseScoreValue;
  //       if (primaryTrait && traitScoreAcc.hasOwnProperty(primaryTrait) && baseScoreForTrait !== undefined) {
  //       const baseScoreNum = Number(baseScoreForTrait);
  //         if(!isNaN(baseScoreNum)) {
  //          traitScoreAcc[primaryTrait].weightedScoreSum += baseScoreNum * fullQuestionWeight;
  //          traitScoreAcc[primaryTrait].weightSum += fullQuestionWeight;
  //         }
  //     }
  //   }
  // });

  // --- Finalize Scores ---
  // const finalSkillScores: { [key: string]: number } = {}; // Raw weighted scores
  // const normalizedSkillScores: { [key: string]: number } = {}; // Normalized 0-100 for category aggregation

  // for (const skill in skillScoresAcc) {
  //   const rawScore = parseFloat(skillScoresAcc[skill].toFixed(3));
  //   finalSkillScores[skill] = rawScore;
  //   // Normalize granular skill score 0-100 based on calculated max
  //   normalizedSkillScores[skill] = maxSkillScores[skill] > 0
  //   ? Math.max(0, Math.min(100, (rawScore / maxSkillScores[skill]) * 100))
  //   : 0;
  // }

  // setFinalScores(finalSkillScores);// Store raw weighted scores

  // const finalTraitScores: { [key: string]: number } = {}; // Weighted average base score (1-5 range approx)
  // const normalizedTraitScores: { [key: string]: number } = {}; // Normalized 0-100 for matching
  
  // for (const trait in traitScoreAcc) {
  //   let avgScore = 0;
  //   if (traitScoreAcc[trait].weightSum > 0) {
  //     avgScore = traitScoreAcc[trait].weightedScoreSum / traitScoreAcc[trait].weightSum;
  //   }
  //   finalTraitScores[trait] = parseFloat(avgScore.toFixed(3));
  //   // Normalize trait score 0-100 (assuming practical range 1-5)
  //   normalizedTraitScores[trait] = Math.max(0, Math.min(100, ((avgScore - 1) / 4) * 100));
  // }
  // setTraitScores(finalTraitScores); // Store 1-5 range scores for display

  // // --- Calculate Broad Skill Category Scores (0-100) for Matching ---
  // const normalizedCategoryScores: Record<string, number> = {};
        
  // broadSkillCategories.forEach((categoryKey: TraitCategory) => {
  // const skillsInCategory = skillCategoryMapping[categoryKey];
  //   let categoryScoreSum = 0;
  //   let count = 0;
    
  //   if (skillsInCategory) {
  //   skillsInCategory.forEach((skillKey: string) => {
      
  //   if (normalizedSkillScores[skillKey] !== undefined) {
  //   categoryScoreSum += normalizedSkillScores[skillKey]; // Average the normalized skill scores
  //   count++;
  //   }

  //   });
  // }
  //   normalizedCategoryScores[categoryKey] = count > 0 ? parseFloat((categoryScoreSum / count).toFixed(1)) : 0;
  // });
          
  // // Add relevant MI traits to the category scores object for matching
  // normalizedCategoryScores['LogicalMathematical'] = normalizedTraitScores['LogicalMathematical'];
  // normalizedCategoryScores['Spatial'] = normalizedTraitScores['Spatial'];
  
  // --- Calculate Career Matches ---
  // const matches = calculateCareerMatches(normalizedTraitScores, normalizedSkillScores);
  // setCareerMatches(matches);

  // setQuizState("results");
  // window.scrollTo(0, 0);

};
  
const saveResponses = async () => {
  const likertResponses = questions
    .filter((q) => q.type === "likert")
    .map((q) => ({
      questionId: q.id,
      responseText:
        q.options?.find((opt) => opt.value === selectedAnswers[q.id])?.label ||
        "No response",
      responseValue:
        typeof selectedAnswers[q.id] === "number"
          ? selectedAnswers[q.id]
          : null,
    }));

  const forcedResponses = questions
    .filter((q) => q.type === "forced")
    .map((q) => ({
      questionId: q.id,
      optionKey:
        q.answers?.find((ans) => ans.id === selectedAnswers[q.id])?.optionKey ||
        "No response",
    }));

  const sjtResponses = questions
    .filter((q) => q.type === "sjt")
    .map((q) => ({
      questionId: q.id,
      optionKey:
        q.answers?.find((ans) => ans.id === selectedAnswers[q.id])?.optionKey ||
        "No response",
    }));

  const payload = {
    name: selectedAnswers["INFO-NAME"] || "",
    email: selectedAnswers["INFO-EMAIL"] || "",
    age: selectedAnswers["INFO-AGE"] || "",
    likertResponses,
    forcedResponses,
    sjtResponses,
  };

  console.log("📤 Submitting to backend:", payload);
  const res = await fetch("/api/saveResponses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(await res.text());

  toast.success("✅ Responses saved successfully!");
};

const generateReport = () =>  {
  
  // --- Initialize Accumulators ---
const skillScoresAcc = skillList.reduce((acc, skill) => {
  acc[skill] = 0; return acc;}
  , {} as { [key: string]: number });

const traitScoreAcc = traitList.reduce((acc, trait) => {
  acc[trait] = { weightedScoreSum: 0, weightSum: 0 };  return acc; }
, {} as { [key: string]: { weightedScoreSum: number; weightSum: number } });

  // --- Perform Dual Calculation in One Pass ---
  questions.forEach(question => {
    const selectedValue = selectedAnswers[question.id];
    let selectedAnswerData = null;
    if (!selectedValue) return;

    if (question.type === "likert" && question.answers) {
      selectedAnswerData = question.answers.find((ans) => "value" in ans && (ans).value === selectedValue);
    } else if (question.answers) {
      selectedAnswerData = question.answers.find((ans) => ans.id === selectedValue);
    }

    if (selectedAnswerData) {
      const formatWeight = getFormatWeight(question.type);
      const traitWeight = question.traitWeight || 1.0;       
      const sectionWeight = question.sectionWeight || 1.0;
      const fullQuestionWeight = formatWeight * traitWeight * sectionWeight;
                      
      // 1. Accumulate Granular Skill Score Contributions
      if (selectedAnswerData.scores) {
        const scores = selectedAnswerData.scores as unknown as Record<string, number>;
        
        for (const skill in scores) {
          if (skillScoresAcc.hasOwnProperty(skill)) {
            const baseSkillScore = Number(scores[skill]);
            if (!isNaN(baseSkillScore)) {
              skillScoresAcc[skill] += baseSkillScore * fullQuestionWeight;
            }
          }
        }

      }

  // 2. Accumulate Direct Trait Score Contribution
    const primaryTrait = selectedAnswerData.primaryTraitOverride || question.primaryTrait;
    const baseScoreForTrait = selectedAnswerData.baseScoreValue;
    if (primaryTrait && traitScoreAcc.hasOwnProperty(primaryTrait) && baseScoreForTrait !== undefined) {
     const baseScoreNum = Number(baseScoreForTrait);
        if(!isNaN(baseScoreNum)) {
          traitScoreAcc[primaryTrait].weightedScoreSum += baseScoreNum * fullQuestionWeight;
          traitScoreAcc[primaryTrait].weightSum += fullQuestionWeight;
        }
                }
    
  }


  });

  // --- Finalize Scores ---
  const finalSkillScores: { [key: string]: number } = {}; // Raw weighted scores
  const normalizedSkillScores: { [key: string]: number } = {}; // Normalized 0-100 for category aggregation

  for (const skill in skillScoresAcc) {
    const rawScore = parseFloat(skillScoresAcc[skill].toFixed(3));
    finalSkillScores[skill] = rawScore;
    // Normalize granular skill score 0-100 based on calculated max
    normalizedSkillScores[skill] = maxSkillScores[skill] > 0 
    ? Math.max(0, Math.min(100, (rawScore / maxSkillScores[skill]) * 100)) 
    : 0;
  }
  
  setFinalScores(finalSkillScores);

  const finalTraitScores: { [key: string]: number } = {};
  const normalizedTraitScores: { [key: string]: number } = {};
  
  for (const trait in traitScoreAcc) {
    let avgScore = 0;
    if (traitScoreAcc[trait].weightSum > 0) {
      avgScore = traitScoreAcc[trait].weightedScoreSum / traitScoreAcc[trait].weightSum;
    }
    finalTraitScores[trait] = parseFloat(avgScore.toFixed(3));
    // Normalize trait score 0-100 (assuming practical range 1-5)
    normalizedTraitScores[trait] = Math.max(0, Math.min(100, ((avgScore - 1) / 4) * 100));
  }
  
  setTraitScores(finalTraitScores); // Store 1-5 range scores for display

  // --- Calculate Broad Skill Category Scores (0-100) for Matching ---
  const normalizedCategoryScores: Record<string, number> = {};
        
  broadSkillCategories.forEach((categoryKey: TraitCategory) => {
  const skillsInCategory = skillCategoryMapping[categoryKey];
    let categoryScoreSum = 0;
    let count = 0;
    
    if (skillsInCategory) {
    skillsInCategory.forEach((skillKey: string) => {
      
    if (normalizedSkillScores[skillKey] !== undefined) {
    categoryScoreSum += normalizedSkillScores[skillKey]; // Average the normalized skill scores
    count++;
    }

    });
  }
    normalizedCategoryScores[categoryKey] = count > 0 ? parseFloat((categoryScoreSum / count).toFixed(1)) : 0;
  });
          
  // Add relevant MI traits to the category scores object for matching
  normalizedCategoryScores['LogicalMathematical'] = normalizedTraitScores['LogicalMathematical'];
  normalizedCategoryScores['Spatial'] = normalizedTraitScores['Spatial'];
  
  // --- Calculate Career Matches ---
  const matches = calculateCareerMatches(normalizedTraitScores, normalizedSkillScores);
  setCareerMatches(matches);

  setQuizState("results");
  window.scrollTo(0, 0);
};

// --- NEW: Career Matching Function ---
type ScoreRecord = Record<string, number>;

const calculateCareerMatches = (normTraitScores:ScoreRecord, normCategoryScores:ScoreRecord) => {
  
  const results = memoizedCareerDb.map(career => {
    
    const traits = career.traits  as Record<string, number>;
    let traitScoreSum = 0;
    let traitWeightSum = 0;
    for (const traitName in traits) {
    
    const traitKey = traitName === 'Openness to Experience' ? 'Openness' : traitName;
    const candidateScore = normTraitScores[traitKey];
    const weight = traits[traitName];
        
    if (candidateScore !== undefined && weight !== undefined) 
    {
      traitScoreSum += candidateScore * weight;
      traitWeightSum += weight;
    }
      
    }
        
   const traitMatch = traitWeightSum > 0 ? (traitScoreSum / traitWeightSum) : 0;
    let skillScoreSum = 0;
    let skillWeightSum = 0;
    for (const skillCatName in career.skills) {
    // Map career doc skill names to our category keys
    
    let categoryKey = skillCatName;
     if (skillCatName === 'Analytical & Problem-Solving') categoryKey = 'AnalyticalProblemSolving';
     if (skillCatName === 'Communication & Influence') categoryKey = 'CommunicationInfluence';
     if (skillCatName === 'Self-Management') categoryKey = 'SelfManagement';
     if (skillCatName === 'Interpersonal & Team') categoryKey = 'InterpersonalTeam';
     if (skillCatName === 'Leadership & Initiative') categoryKey = 'LeadershipInitiative';
     if (skillCatName === 'Learning & Development') categoryKey = 'LearningDevelopment';
     if (skillCatName === 'Ethical Professional') categoryKey = 'EthicalProfessional';
     if (skillCatName === 'Logical-Mathematical Intelligence') categoryKey = 'LogicalMathematical'; // Map MI traits
     if (skillCatName === 'Spatial Intelligence') categoryKey = 'Spatial'; // Map MI traits

     const candidateScore = normCategoryScores[categoryKey];
     const weight = career.skills[categoryKey as keyof typeof career.skills];
      
     if (candidateScore !== undefined && weight !== undefined) {
      skillScoreSum += candidateScore * weight;
      skillWeightSum += weight;
     }
      
      else {
       console.warn(`Missing score or weight for category ${categoryKey} in career ${career.name}`)
      }
     }
            
    const skillMatch = skillWeightSum > 0 ? (skillScoreSum / skillWeightSum) : 0;
    // Final weighted score (0-100 scale)
    const overallMatch = (traitMatch * 0.4) + (skillMatch * 0.6);
    return {
    name: career.name,
    score: parseFloat(overallMatch.toFixed(1)) // Keep one decimal for percentage
    };
       
});

// Sort by score descending
 results.sort((a, b) => b.score - a.score);
  return results;
};

const handleRestart = () => {
  setSelectedAnswers({});
  setFinalScores(null);
  setTraitScores(null);
  setCareerMatches(null); // Reset career matches
  setQuizState('quiz');
  window.scrollTo(0, 0);
};

const currentQuestion = questions[currentIndex];

return (
  <>
  {quizState === 'quiz' && (

    <div className="flex flex-col md:flex-row ">
    {/* Sidebar for Desktop */}
  <div className="hidden md:block border border-white backdrop-blur-md shadow-xl rounded-xl fixed top-20 left-3 w-64 h-[70vh] overflow-y-auto p-2 mt-10">
        
        <div className="mt-2 py-1 backdrop-blur-lg rounded-xl shadow-md flex justify-between items-center">
            
          <button className="transition-transform duration-300 ease-in-out transform text-2xl text-[#081b9c] hover:scale-110"
           onClick={() => setShowSlider(prev => !prev)}>
              
              <div className="p-3 py-1 text-left text-sm font-extrabold text-black">Status:{Object.keys(selectedAnswers).length}/{questions.length}</div>
    
              <span className={`px-3 py-0 text-left inline-block transition-transform duration-300 text-xl`}>
                {showSlider ? '🙉' : '🙈'}
                <span className="text-sm text-black font-bold">{showSlider ? ' Hide' : ' Wanna see'}</span>
              </span>

          </button>

        </div>

        {showSlider && (
        <div className="mt-2 rounded-xl bg-white shadow-xl ring-1 ring-black/10 overflow-hidden">
          <div className="max-h-80 overflow-y-auto divide-y divide-gray2">
            {questions.map((q, idx) => (
              <button 
                className={`w-full text-left px-4 py-3 text-xs transition duration-200 ${
                idx === currentIndex
                ? 'bg-white text-black font-semibold'
                : !selectedAnswers[q.id]
                ? 'bg-white text-Red font-semibold'
                : 'hover:bg-gray2 text-Blue font-semibold'}`}
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                >
                  {idx + 1}. {q.text.length > 50 ? q.text.slice(0, 50) + '...' : q.text}
              </button>
             ))}
          </div>
        </div>
        )}
  </div>
    {/* Quiz Container  */}
    <div className="mx-auto mt-20 mb-40 md:ml-72 w-full md:w-[50%] max-w-3xl rounded-lg shadow-md px-4 sm:px-5 py-5 bg-white"
      id="quiz-container">
          <h1 className="text-xl font-bold">خودی</h1><h3 className="text-lg text-center font-bold quiz-subheading">Personality Assessment</h3>

          <div id="quiz-questions" className="mb-6">
            {questions.map((question, index) => index === currentIndex ? (
              <QuestionBlock 
                key={question.id} 
                questionData={question} 
                questionIndex={index}
                selectedAnswerValue={selectedAnswers[question.id]} 
                onAnswerChange={handleAnswerChange}
              />
              ) : null
            )}
          </div>

          <div className="navigation-buttons flex justify-between mt-4">
            {currentIndex > 0 && (
              <button className="bg-gradient-to-t from-gray via-Red to-Red text-white font-medium py-2 px-4 rounded"
                onClick={goToPrevious}
              >
                Previous
              </button>
            )}

            {currentIndex < questions.length - 1 ? (
              <button className="bg-gradient-to-t from-gray via-Red to-Red text-white font-medium py-2 px-4 rounded"
                onClick={goToNext} disabled={!currentQuestion || !selectedAnswers[currentQuestion.id]}>
                Next
              </button>

            ) : (
              <button className="bg-green1 text-white font-medium py-2 px-4 rounded"
                onClick={handleSubmit} disabled={ !currentQuestion || !selectedAnswers[currentQuestion.id] || unansweredQuestionIds.length > 0 } >
                View Results
              </button>
            )}
          </div>
          
    </div>

    </div>
  )}

  {quizState === 'results' && finalScores && traitScores && careerMatches && (
    
    <ResultsPage
      skillScores={finalScores}
      traitScores={traitScores}
      skillCategories={skillCategoryMapping}
      careerMatches={careerMatches}
      onRestart={handleRestart}
      candidateName={String(selectedAnswers["INFO-NAME"] || "")}
      candidateEmail={String(selectedAnswers["INFO-EMAIL"] || "")}
    />
   )}
  {/* ✅ Paste here, at the very bottom */}
{showAlert && checkData && (
  <CustomAlert
    message={alertMessage}
    onConfirm={async () => {
      setSelectedAnswers((prev) => ({
        ...prev,
        "INFO-NAME": checkData.candidate.name,
        "INFO-EMAIL": checkData.candidate.email,
        "INFO-AGE": checkData.candidate.age,
      }));
      setShowAlert(false);
      try {
        await saveResponses();
        generateReport();
      } catch (err) {
        console.error("❌ Error saving:", err);
        alert("Failed to save responses or generate report");
      }
    }}
    onCancel={() => {
      setSelectedAnswers((prev) => ({
        ...prev,
        "INFO-NAME": "",
        "INFO-EMAIL": "",
        "INFO-AGE": "",
      }));
      setShowAlert(false);
    }}
  />
)}

  </>

);};
export default App;