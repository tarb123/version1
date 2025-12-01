"use client";
import React from "react";
import SpiderChart from "./SpiderChart";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Brain, MessageCircle, ShieldCheck, Users, Trophy, BookOpen, UserCheck, } from "lucide-react";
import DISCCircularChart from "./DISCCircularChart";
import MIBarChart from "./MIBarChart";
import WorkingWithNumbersScore from "./Attributes/Abilities/WorkingwithNum";
import WorkingWithWordsScore from "./Attributes/Abilities/WorkingwithWord";
import WorkingWithShapesScore from "./Attributes/Abilities/WorkingwithShape";
import WorkingWithPeopleScore from "./Attributes/Motivation & Interests/WorkingwithPeople";
import WorkingWithDataScore from "./Attributes/Motivation & Interests/WorkingwithData";
import WorkingWithThingsScore from "./Attributes/Motivation & Interests/WorkingwithThing";

import { QuestionData } from "./QuestionBlock";


const formatName = (camelCaseName: string) => {
  if (!camelCaseName) return "";
  if (camelCaseName === "BigFive") return "Big Five";
  if (camelCaseName === "HonestyHumility") return "Honesty-Humility";
  if (camelCaseName === "MultipleIntelligences") return "Multiple Intelligences";
  if (camelCaseName === "DISC") return "DISC Styles";
  
  if (camelCaseName === "CommunicationInfluence") return "Communication & Influence Skills";
  if (camelCaseName === "AnalyticalProblemSolving") return "Analytical & Problem-Solving Skills";
  if (camelCaseName === "SelfManagement") return "Self-Management Skills";
  if (camelCaseName === "InterpersonalTeam") return "Interpersonal & Team Skills";
  if (camelCaseName === "LeadershipInitiative") return "Leadership & Initiative Skills";
  if (camelCaseName === "LearningDevelopment") return "Learning & Development Skills";
  if (camelCaseName === "EthicalProfessional") return "Ethical Professional Skills";
  
  if (camelCaseName === "LogicalMathematical") return "Logical-Mathematical";
  if (camelCaseName === "BodilyKinesthetic") return "Bodily-Kinesthetic";
  
  if (camelCaseName === "Emotional Stability") return "Emotional Stability";
  
  const result = camelCaseName.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
  
};

interface Match {
  score: number; name: string;
}

interface CareerMatchProfileProps {
  matches: Match[];
}

const CareerMatchProfile: React.FC<CareerMatchProfileProps> = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return <p>Career match data not available.</p>;
  }

  const topMatches = matches.slice(0, 5);
  const calculateMatchBarWidth = (score: number) =>
    Math.max(0, Math.min(100, score));
  return (
    <div className="career-match-profile">
      
      <h3>Career Match Profile</h3>
      <ol className="career-match-list">
        {topMatches.map((match, index) => (
          
          <li key={match.name}>
            
            <div className="career-match-item text-sm">
              <span className="career-rank">{index + 1}. </span>
              <span className="career-name">{match.name} </span>
              <span className="career-score" style={{ color: "green" }}> {Math.round(match.score)}%</span>
              {/* <span className="career-score" style={{ color: "Green" }} >  {match.score}% </span> */}
            </div>

            <div className="score-bar-container career-match-bar-container" title={`Match Score: ${Math.round(match.score)}%`}>
              <div className="score-bar career-match-bar" style={{ width: `${calculateMatchBarWidth(match.score)}%` }}></div>
            </div>

          </li>

        ))}

      </ol>
    </div>
  );
};

// interface TraitGroupSectionWithBarProps {
//   title: string;
//   traitData: Record<string, number | null | undefined>;
// }

// const TraitGroupSectionWithBar = ({ title, traitData, }: TraitGroupSectionWithBarProps) => {
//   if (!traitData || Object.keys(traitData).length === 0) return null;

//   const calculateBarWidth = (score: number) => {
//     const minScore = 1;
//     const maxScore = 5;
//     const percentage = ((score - minScore) / (maxScore - minScore)) * 100;
//     return Math.max(0, Math.min(100, percentage));
//   };

//   return (
// <div className="trait-section trait-section-list">
//   <h4>{title}</h4>
//   <ul>
//     {Object.entries(traitData)
//       .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
//       .map(([traitKey, scoreValue]) => {
//         const score = Number(scoreValue);
//         const isValidScore = !isNaN(score);
//         return (
//           <li key={traitKey}>
//             <div className="trait-label-score">
//               <strong>{formatName(traitKey)}:</strong>
//               {isValidScore ? score : "N/A"}
//             </div>
//             {isValidScore && (
//               <div
//                 className="score-bar-container"
//                 title={`Score: ${score} out of 5`}
//               >
//                 <div style={{ width: `${calculateBarWidth(score)}%` }}></div>
//               </div>
//             )}
//           </li>
//         );
//       })}
//   </ul>
// </div>

//   );
// };

interface CategorizedSkillsProps {
  categories: Record<string, string[]>;
  scores: Record<string, number | null | undefined>;
}

 const iconMap: Record<string, React.ReactNode> = {
  AnalyticalProblemSolving: (
    <Brain className="w-8 h-8 text-blue-600 bg-blue-100 p-1.5 rounded-full shadow-sm" />
  ),
  CommunicationInfluence: (
    <MessageCircle className="w-8 h-8 text-green-600 bg-green-100 p-1.5 rounded-full shadow-sm" />
  ),
  EthicalProfessional: (
    <ShieldCheck className="w-8 h-8 text-yellow-600 bg-yellow-100 p-1.5 rounded-full shadow-sm" />
  ),
  InterpersonalTeam: (
    <Users className="w-8 h-8 text-purpleShades-600 bg-purpleShades-100 p-1.5 rounded-full shadow-sm" />
  ),
  LeadershipInitiative: (
    <Trophy className="w-8 h-8 text-orange-600 bg-orange-100 p-1.5 rounded-full shadow-sm" />
  ),
  LearningDevelopment: (
    <BookOpen className="w-8 h-8 text-pink bg-pinkShades-100 p-1.5 rounded-full shadow-sm" />
  ),
  SelfManagement: (
    <UserCheck className="w-8 h-8 text-teal-600 bg-teal-100 p-1.5 rounded-full shadow-sm" />
  ),
};

const CategorizedSkills = ({ categories, scores }: CategorizedSkillsProps) => {
  if (!categories || !scores) return null;

  const categoryOrder = [
    "CommunicationInfluence", "AnalyticalProblemSolving", "SelfManagement", "InterpersonalTeam", "LeadershipInitiative", "LearningDevelopment", "EthicalProfessional",
  ];

return (
  <div className="w-full max-w-4xl mx-auto mt-6">

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
      {categoryOrder.map((categoryKey) => {
        const skillKeys = categories[categoryKey];
        const relevantSkills =
          skillKeys?.filter((key) => scores[key] !== undefined) || [];

        if (relevantSkills.length === 0) return null;

        const total = relevantSkills.reduce(
          (sum, key) => sum + (scores[key] || 0),
          0
        );
        const mean = total / relevantSkills.length;const meanFormatted = mean.toFixed(2);
return (
  <div key={categoryKey} className="group flex flex-col items-start justify-between bg-white border border-gray2 rounded-lg 
     p-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-[2px] space-y-1">
    {/* Icon */}
    {iconMap[categoryKey]}

    {/* Label */}
    <span className="text-sm sm:text-sm font-serif text-black mt-1">
      {formatName(categoryKey)}
    </span>

    {/* Score Bar */}
    <div className="w-full h-1.5 bg-gray rounded-full mt-2 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-green-500 transition-all duration-500"
        style={{ width: `${mean * 10}%` }}
      ></div>
    </div>

    {/* Score Number */}
    <span className="text-xs font-medium font-serif text-black mt-1">
      Avg: <span className="font-bold font-sans text-black">{meanFormatted}</span>
    </span>
  </div>
);

      })}
    </div>
  </div>
);};

interface ResultsPageProps {
  skillScores: Record<string, number>;
  traitScores: Record<string, number>;
  skillCategories: Record<string, string[]>;
  careerMatches: Match[];
  onRestart: () => void;
  candidateName: string; // 👈 added
  candidateEmail: string; // 👈 added
  // ✅ ADD THESE:
  allQuestions: QuestionData[];
  userResponses: Record<string, string | number | undefined>;}

const ResultsPage: React.FC<ResultsPageProps> = ({
  skillScores,
  traitScores,
  skillCategories,
  careerMatches,
  // onRestart,
  candidateName,
  candidateEmail,
  allQuestions,
  userResponses,
}) => {
    // const [workingWithNumbersScoreState, setWorkingWithNumbersScoreState] = useState<number | undefined>(undefined);

  const downloadPDF = () => {
    const input = document.getElementById("results-container");
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft > 0) {
        position -= pdf.internal.pageSize.getHeight();
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save("Candidate_Report.pdf");
    });
  };

  if (!skillScores || !traitScores || !skillCategories || !careerMatches) {
    return (
      <p>Loading results or encountering data issue...</p>
    );
  }

  const bigFiveLabels = [
    "Openness",
    "Conscientiousness",
    "Extraversion",
    "Agreeableness",
    "Emotional Stability",
  ];
  const bigFiveData = bigFiveLabels.map((label) => traitScores[label] ?? 0);
  const bigFiveChartData = { labels: bigFiveLabels, data: bigFiveData };

  // const honestyHumilityListData = {
  //   "Honesty-Humility": traitScores.HonestyHumility ?? 0,
  // };

  const miLabels = [
    "Linguistic",
    "LogicalMathematical",
    "Spatial",
    "BodilyKinesthetic",
    "Musical",
    "Interpersonal",
    "Intrapersonal",
    "Naturalist",
  ];
  const miData = miLabels.map((label) => traitScores[label.replace("-", "")] ?? 0);
  const miChartData = { labels: miLabels, data: miData };

  const discLabels = ["Dominance", "Influence", "Steadiness", "Compliance"];
  const discData = discLabels.map((label) => traitScores[label] ?? 0);
  const discChartData = { labels: discLabels, data: discData };

  return (
    <div>
      <div id="results-container">
        <h1 className="text-lg">
          Candidate Identification Report <span style={{ color: "Red" }}>CIR</span>
        </h1>
        {candidateName && (
          <h1>Candidate Name:{" "}<span className="font-semibold">{candidateName}</span></h1>
        )}
        {candidateEmail && (
          <h1 className="font-semibold">Email: {candidateEmail}</h1>
        )}

        <CareerMatchProfile matches={careerMatches} />

        <h3 className="trait-summary-header">Summary Profiles (Visualized)</h3>
        <div className="trait-visual-grid">
          <div className="trait-row">
            
            <div>
              <DISCCircularChart chartData={discChartData} />
              {/* <SpiderChart chartData={miChartData}  title="Multiple Intelligences Profile" /> */}
            </div>

            <div className="trait-col">
              <SpiderChart chartData={bigFiveChartData} title="BIG FIVE/ OCEAN PROFILE" />
            </div>

            <MIBarChart chartData={miChartData} title="MULTI INTELLIGENCES PROFILE" />
 
          </div>
          
        </div>
        
{/* ===================== ATTRIBUTES SECTION ===================== */}
<div className="w-full">

  {/* Main Heading */}
  <h3 className="text-lg font-bold mb-2">Attributes</h3>

  {/* -------- Abilities Section -------- */}
  <div className="w-full border-2 border-whitesmoke rounded-lg shadow-md py-3 p-5">
    <h4 className="text-lg text-center font-bold text-sky-700 mt-5">Abilities</h4>

    {/* ✅ no vertical gap between these */}
    <div className="flex flex-col gap-0 space-y-0">
      <WorkingWithNumbersScore questions={allQuestions} responses={userResponses} />
      <WorkingWithWordsScore questions={allQuestions} responses={userResponses} />
      <WorkingWithShapesScore questions={allQuestions} responses={userResponses} />
    </div>
  </div>

  {/* -------- Motivation & Interests Section -------- */}
  <div className="w-full border-2 border-whitesmoke rounded-lg shadow-md py-3 p-5 mt-5">
    <h4 className="text-lg text-center font-bold text-sky-700 mt-5">Motivation &amp; Interests</h4>

    {/* ✅ no vertical gap between these */}
    <div className="flex flex-col gap-0 space-y-0">
      <WorkingWithPeopleScore questions={allQuestions} responses={userResponses} />
      <WorkingWithDataScore questions={allQuestions} responses={userResponses} />
      <WorkingWithThingsScore questions={allQuestions} responses={userResponses} />
    </div>
  </div>

</div>
{/* ===================== END ATTRIBUTES SECTION ===================== */}


        <h3 className="detailed-skills-header">Detailed Skill Scores</h3>
        <CategorizedSkills categories={skillCategories} scores={skillScores}/>
      </div>

      {/* <button onClick={onRestart} className="restart-button"> Restart Assessment </button> */}
      <button onClick={downloadPDF} className="download-button">Download Report as PDF</button>
    </div>
  );
};

export default ResultsPage;