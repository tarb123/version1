'use client';
import React, { useState, useCallback, useMemo, useEffect} from 'react';
import QuestionBlock from '../PP/QuestionBlock';
import type { Answer, QuestionData } from '../PP/QuestionBlock';
import ResultsPage from '../PP/ResultsPage';
import '../../App.css';
import { skills as skillList, traitList, skillCategoryMapping, careerDatabase} from '../quizData';
  function App() {
    // const [questions, setQuestions] = useState<any[]>([]); 
const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [quizState, setQuizState] = useState('quiz');
    const [finalScores, setFinalScores] = useState<{ [key: string]: number } | null>(null);// Granular skill scores (weighted)
    const [traitScores, setTraitScores] = useState<{ [key: string]: number } | null>(null); // High-level trait scores (1-5 scale approx)
    const [careerMatches, setCareerMatches] = useState<{ name: string; score: number }[] | null>(null); // Career match results
    const [currentIndex, setCurrentIndex] = useState(0); // ⭐ Track current question
    const memoizedCareerDb = useMemo(() => careerDatabase, []);
   
  useEffect(() => {
  const fetchQuestions = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/questions');
      const data = await res.json();
      if (data.success) {
        setQuestions(data.questions);
      } else {
        console.error('❌ Failed to load questions:', data.message);
      }
    } catch (err) {
      console.error('❌ Error fetching questions from backend:', err);
    }
  };
  fetchQuestions();
}, []);


   const handleAnswerChange = useCallback((questionId: string, selectedValue: string | number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: selectedValue }));
    // Automatically go to next question if not last
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
  setCurrentIndex((prev) => Math.max(prev - 1, 0));
};

  type SelectedAnswers = {
    [questionId: string]: string | number;
  };
      
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const getFormatWeight = (questionType: 'likert' | 'forced' | 'sjt') => {
  switch (questionType) {
    case 'likert': return 1.0;
    case 'forced': return 1.2;
    case 'sjt': return 1.4;
    default: return 1.0;
  }
};

    // --- Function to Calculate Max Possible Weighted Score for a Granular Skill ---
    // Needed for accurate normalization of category scores
    const calculateMaxSkillScore = useCallback((skillToCalc: string) => {
        let maxScore = 0;
        questions.forEach(question => {
            const formatWeight = getFormatWeight(question.type);
            const traitWeight = question.traitWeight || 1.0;
            // const sectionWeight = questions.sectionWeight || 1.0;
            // const fullQuestionWeight = formatWeight * traitWeight * sectionWeight;
            const fullQuestionWeight = formatWeight * traitWeight;

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
    }, [calculateMaxSkillScore]
    );
     
const handleSubmit = async () => {
  
  try {    
  const likertResponses = questions
  .filter(q => q.type === 'likert')
  .map(q => {
    const selectedValue = selectedAnswers[q.id];
    const option = q.options?.find((opt) => opt.value === selectedValue);
    return {
    questionId: q.id,
    responseText: option?.label || 'No response',
    responseValue: typeof selectedValue === 'number' ? selectedValue : null,
    };
   });

  const forcedResponses = questions
  .filter(q => q.type === 'forced')
  .map(q => {
    const selectedId = selectedAnswers[q.id];
    const selectedAnswer = q.answers?.find((ans) => ans.id === selectedId);
    return {
    questionId: q.id,
    optionKey: selectedAnswer && 'optionKey' in selectedAnswer? selectedAnswer.optionKey : 'No response',
    };
  });

  const sjtResponses = questions
  .filter(q => q.type === 'sjt')
  .map(q => {
  const selectedId = selectedAnswers[q.id];
  const selectedAnswer = q.answers?.find((ans) => ans.id === selectedId);
  return {
  questionId: q.id,
  optionKey: selectedAnswer && 'optionKey' in selectedAnswer? selectedAnswer.optionKey : 'No response',
  };
  });
  
  const payload = { likertResponses, forcedResponses, sjtResponses,}; // 📦 Final payload
  console.log("📤 Submitting to backend:", payload); // 🔍 Log for debug
  
  const userName = localStorage.getItem('userName'); // 🔁 get name stored earlier

  const res = await fetch('http://localhost:5000/api/saveResponses', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   name: userName, // 🆕 send it to backend
   likertResponses, forcedResponses, sjtResponses
  }),
  });

  if (!res.ok) {
  const errText = await res.text();
  throw new Error(`Failed to save responses. Server said: ${errText}`);
  }

  console.log('✅ All responses saved successfully!');
} 
  
  catch (error) {
    console.error('❌ Error in handleSubmit:', error);
  }

  if (Object.keys(selectedAnswers).length !== questions.length) {
   alert(`Please answer all ${questions.length} questions before submitting.`);
    return;
  }
        
  // --- Initialize Accumulators ---
  const skillScoresAcc: { [key: string]: number } = skillList.reduce((acc, skill) => {
  acc[skill] = 0;
  return acc;
  }, {} as { [key: string]: number });
        
  const traitScoreAcc: { [key: string]: { weightedScoreSum: number; weightSum: number };} = traitList.reduce((acc, trait) => {
    
  acc[trait] = { weightedScoreSum: 0, weightSum: 0 };
   return acc;
  }, {} as {
    [key: string]: { weightedScoreSum: number; weightSum: number };
   });
    
    // --- Perform Dual Calculation in One Pass ---
    questions.forEach(question => {
    const selectedValue = selectedAnswers[question.id];
    let selectedAnswerData = null;
     if (!selectedValue) return;
     if (question.type === 'likert') 
    {
    // selectedAnswerData = question.answers.find(ans => ans.value === selectedValue);
     if (question.type === 'likert'){
     selectedAnswerData = question.answers.find(
     (ans) => 'value' in ans && ans.value === selectedValue
     );} 
     } 
    else 
    {
    selectedAnswerData = question.answers.find((ans) => ans.id === selectedValue);
    }

    if (selectedAnswerData) {
      const formatWeight = getFormatWeight(question.type);
      const traitWeight = question.traitWeight || 1.0;
      // const sectionWeight = question.sectionWeight || 1.0;
      // const fullQuestionWeight = formatWeight * traitWeight * sectionWeight;
      const fullQuestionWeight = formatWeight * traitWeight;

    // 1. Accumulate Granular Skill Score Contributions
    if (selectedAnswerData.scores) {
      // const scores = selectedAnswerData.scores as Record<string, number>;
      const scores = selectedAnswerData.scores as unknown as Record<string, number>;

        for (const skill in scores) {
          if (skillScoresAcc.hasOwnProperty(skill)) 
          {
            const baseSkillScore = Number(scores[skill]);
            if (!isNaN(baseSkillScore))
            {
             skillScoresAcc[skill] += baseSkillScore * fullQuestionWeight;
            }
          }
        }
    }  
 
  }
});

  // --- Finalize & Normalize Scores ---
  const finalSkillScores: {  // Raw weighted scores
    [key: string]: number 
  } = {};  
  
  const normalizedSkillScores: { // Normalized 0-100 for category aggregation
    [key: string]: number 
  } = {};   

  for (const skill in skillScoresAcc) {
    
    const rawScore = parseFloat(skillScoresAcc[skill].toFixed(3));
    
    finalSkillScores[skill] = rawScore;
    
    normalizedSkillScores[skill] = maxSkillScores[skill] > 0 // Normalize granular skill score 0-100 based on calculated max
     ? Math.max(0, Math.min(100, (rawScore / maxSkillScores[skill]) * 100))
     : 0;
  }
        
  setFinalScores(finalSkillScores); // Store raw weighted scores

  const finalTraitScores: { [key: string]: number } = {}; // Weighted average base score (1-5 range approx)     
  const normalizedTraitScores: { [key: string]: number } = {}; // Normalized 0-100 for matching
       
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
  setQuizState('results');

  // --- Calculate Broad Skill Category Scores (0-100) for Matching ---
  type CategoryKey =
  | 'CommunicationInfluence'
  | 'AnalyticalProblemSolving'
  | 'SelfManagement'
  | 'InterpersonalTeam'
  | 'LeadershipInitiative'
  | 'LearningDevelopment'
  | 'EthicalProfessional';
      
  const skillCategoryMapping: Record<CategoryKey, string[]> = {
  CommunicationInfluence: [],
  AnalyticalProblemSolving: [],
  SelfManagement: [],
  InterpersonalTeam: [],
  LeadershipInitiative: [],
  LearningDevelopment: [],
  EthicalProfessional: [],
  };
      
  const normalizedCategoryScores: Record<CategoryKey, number> = {} as Record<CategoryKey, number>;
  const broadSkillCategories: CategoryKey[] = Object.keys(skillCategoryMapping) as CategoryKey[];
      
  broadSkillCategories.forEach((categoryKey) => {
        
    const skillsInCategory = skillCategoryMapping[categoryKey];
      let categoryScoreSum = 0;
      let count = 0;
      
      skillsInCategory.forEach((skillKey) => {
          
      if (normalizedSkillScores[skillKey] !== undefined) {
        categoryScoreSum += normalizedSkillScores[skillKey];
        count++;
      }

    });
      
      normalizedCategoryScores[categoryKey] = count > 0
      ? parseFloat((categoryScoreSum / count).toFixed(1))
      : 0;
  });
      
  // Add relevant MI traits to the category scores object for matching
  normalizedCategoryScores['LogicalMathematical' as CategoryKey] = normalizedTraitScores['LogicalMathematical'];
  normalizedCategoryScores['Spatial' as CategoryKey] = normalizedTraitScores['Spatial'];
  
  // --- Calculate Career Matches ---
  const matches = calculateCareerMatches(normalizedTraitScores, normalizedCategoryScores);
  setCareerMatches(matches);

  setQuizState('results');
  window.scrollTo(0, 0);
};

  const currentQuestion = questions[currentIndex];

  // --- NEW: Career Matching Function ---
  type ScoreRecord = Record<string, number>;

  const calculateCareerMatches = (normTraitScores:ScoreRecord, normCategoryScores:ScoreRecord) => {
    const results = memoizedCareerDb.map(career => {
      const traits = career.traits  as Record<string, number>;
      let traitScoreSum = 0;
      let traitWeightSum = 0;
        
      for (const traitName in traits) {
      const traitKey = traitName === 'Openness to Experience' ? 'Openness' : traitName;
      const candidateScore = normTraitScores[traitKey as keyof typeof normTraitScores];
      const weight = traits[traitName];
        
      if (candidateScore !== undefined && weight !== undefined) {
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
   
// return (
//   <div className="relative min-h-screen bg-gray-100">
//     {/* Playlist Box - Fixed on the left side */}
// <div className="fixed top-20 left-3 w-64 h-[75vh] overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg p-2 mt-10">
//   <h2 className="text-lg font-nastaleeq font-semibold text-center mb-3 border-b pb-2">خودی</h2>

//   <div className="flex flex-col gap-2">
//     {questions.map((q, idx) => (
//       <button
//         key={q.id}
//         onClick={() => setCurrentIndex(idx)}
//         className={`text-left px-2 py-2 rounded-md text-xs transition ${
//           idx === currentIndex
//             ? 'bg-Blue text-white font-semibold'
//             : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//         }`}
//       >
//         <span className="block">{q.text}</span>
//       </button>
//     ))}
//   </div>
// </div>


//     {/* Centered Quiz Section */}
//     <div className="flex justify-center items-center pt-10">
      // <div id="quiz-container"
      //  className="w-full max-w-2xl
      //  bg-white rounded-lg shadow-md p-4
      //   mt-20
      //    px-10
      //    ">
//         <h1 className="text-2xl font-bold mb-2">Personality Assessment</h1>
//         <label className="text-gray-600 text-sm mb-4 block">
//           Please answer all questions thoughtfully.
//         </label>

//         <div id="quiz-questions" className="mb-6">
//           {questions.map((question, index) =>
//             index === currentIndex ? (
//               <QuestionBlock
//                 key={question.id}
//                 questionData={question}
//                 questionIndex={index}
//                 selectedAnswerValue={selectedAnswers[question.id]}
//                 onAnswerChange={handleAnswerChange}
//               />
//             ) : null
//           )}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="navigation-buttons flex justify-between">
//           {currentIndex > 0 && (
//             <button
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
//               onClick={goToPrevious}
//             >
//               Previous
//             </button>
//           )}

//           {currentIndex < questions.length - 1 ? (
//             <button
//               className="bg-blue-500 hover:bg- text-white font-medium py-2 px-4 rounded"
//               onClick={goToNext}
//               disabled={!currentQuestion || !selectedAnswers[currentQuestion.id]}
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               className="bg-green-500 hover:bg-green text-white font-medium py-2 px-4 rounded"
//               onClick={handleSubmit}
//               disabled={!currentQuestion || !selectedAnswers[currentQuestion.id]}
//             >
//               View Results
//             </button>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Results Section (unchanged) */}
//     {quizState === 'results' &&
//       finalScores &&
//       traitScores &&
//       careerMatches && (
//         <ResultsPage
//           skillScores={finalScores}
//           traitScores={traitScores}
//           skillCategories={skillCategoryMapping}
//           careerMatches={careerMatches}
//           onRestart={handleRestart}
//         />
//       )}
//   </div>
// );

return (
  <>
  {quizState === 'quiz' && (
  <div className="flex">
    
    {/* ✅ Playlist Sidebar */}
      
      <div className="fixed top-20 left-3 w-64 h-[75vh] overflow-y-auto bg-white border border-gray rounded-lg shadow-lg p-2 mt-10">
        
        <h2 className="text-lg text-[#ff0505] font-nastaleeq font-semibold text-center mb-2 border-b-2 border-black pb-2">خودی</h2>
          
          <div className="flex flex-col gap-2">
            {questions.map((q, idx) => (
            <button key={q.id} onClick={() => setCurrentIndex(idx)}
            className={`text-left px-2 py-2 rounded-md text-xs transition ${ idx === currentIndex
            ? 'bg-Blue text-white font-semibold'
            : 'bg-gray3 hover:bg-gray2 text-black font-bold'
            }`}
            >
              <span className="block">{q.text}</span>
            </button>
            ))}
          </div>

      </div>

        {/* ✅ Quiz Container */}
        <div id="quiz-container" 
        className="ml-72 mx-auto mt-20 mb-20 w-full max-w-3xl rounded-lg shadow-md px-10 py-14 bg-white"
        >
          <h1 className="text-xl font-bold">خودی</h1>
          <h3 className="text-lg text-center font-bold quiz-subheading">Personality Assessment</h3>
          <label className="text-sm mb-1 block"> Please answer all questions thoughtfully.</label>

          <div id="quiz-questions" className="mb-6">
            {questions.map((question, index) =>
              index === currentIndex ? (
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

          <div className="navigation-buttons flex justify-between">
            {currentIndex > 0 && (
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
                onClick={goToPrevious}
              >
                Previous
              </button>
            )}

            {currentIndex < questions.length - 1 ? (
              <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded"
                onClick={goToNext}
                disabled={!currentQuestion || !selectedAnswers[currentQuestion.id]}
              >
                Next
              </button>
            ) : (
              <button className="bg-green-500 text-white font-medium py-2 px-4 rounded"
                onClick={handleSubmit}
                disabled={!currentQuestion || !selectedAnswers[currentQuestion.id]}
              >
                View Results
              </button>
            )}
          </div>
        </div>
      </div>
    )}

    {quizState === 'results' &&
      finalScores &&
      traitScores &&
      careerMatches && (
        <ResultsPage
          skillScores={finalScores}
          traitScores={traitScores}
          skillCategories={skillCategoryMapping}
          careerMatches={careerMatches}
          onRestart={handleRestart}
        />
      )}
  </>
);};
export default App;