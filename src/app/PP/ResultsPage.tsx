"use client";
import React, { useState,useEffect } from 'react'; 
import SpiderChart from './SpiderChart';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const formatName = (camelCaseName:string) => { 
    if (!camelCaseName) return '';
    if (camelCaseName === 'BigFive') return 'Big Five';
    if (camelCaseName === 'HonestyHumility') return 'Honesty-Humility';
    if (camelCaseName === 'MultipleIntelligences') return 'Multiple Intelligences';
    if (camelCaseName === 'DISC') return 'DISC Styles';
    if (camelCaseName === 'CommunicationInfluence') return 'Communication & Influence Skills';
    if (camelCaseName === 'AnalyticalProblemSolving') return 'Analytical & Problem-Solving Skills';
    if (camelCaseName === 'SelfManagement') return 'Self-Management Skills';
    if (camelCaseName === 'InterpersonalTeam') return 'Interpersonal & Team Skills';
    if (camelCaseName === 'LeadershipInitiative') return 'Leadership & Initiative Skills';
    if (camelCaseName === 'LearningDevelopment') return 'Learning & Development Skills';
    if (camelCaseName === 'EthicalProfessional') return 'Ethical Professional Skills';
    if (camelCaseName === 'LogicalMathematical') return 'Logical-Mathematical';
    if (camelCaseName === 'BodilyKinesthetic') return 'Bodily-Kinesthetic';
    if (camelCaseName === 'Emotional Stability') return 'Emotional Stability';
    const result = camelCaseName.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};

interface Match { 
  score: number;
  name: string;
}

interface CareerMatchProfileProps { 
  matches: Match[];
}

//  Section 1 Career Match Profile
const CareerMatchProfile: React.FC<CareerMatchProfileProps> = ({ matches }) => {

    if (!matches || matches.length === 0) 
    { 
     return <p>Career match data not available.</p>;     
    }
    const topMatches = matches.slice(0, 3); 
    const calculateMatchBarWidth = (score: number) => { return Math.max(0, Math.min(100, score)); };
    return ( 
    <div className="career-match-profile">
       <h3>Career Match Profile</h3>
      
      <ol className="career-match-list"> 
      {topMatches.map((match, index) => (
        <li key={match.name}>
          
          <div className="career-match-item text-sm">
            <span className="career-rank">{index + 1}. </span>
            <span className="career-name">{match.name} </span>
            <span className="career-score" style={{ color: 'Green' }}>{match.score}%</span>
          </div>
        
          <div className="score-bar-container career-match-bar-container" title={`Match Score: ${match.score}%`}>
            <div className="score-bar career-match-bar" 
            style={{ width: `${calculateMatchBarWidth(match.score)}%`}}>
            </div>
          </div>

        </li> 
        ))} 
      </ol>
    </div> //career-match-profile
);};

// --- Sub-Components for Display ---
interface TraitGroupSectionWithBarProps {
    title: string;
    traitData: Record<string, number | null | undefined>;
  }
  
const TraitGroupSectionWithBar = ({ title, traitData }: TraitGroupSectionWithBarProps) => {
    if (!traitData || Object.keys(traitData).length === 0) return null;

    const calculateBarWidth = (score: number) => {
        const minScore = 1;
        const maxScore = 5;
        const percentage = ((score - minScore) / (maxScore - minScore)) * 100;
        return Math.max(0, Math.min(100, percentage));
    };

    return (
        <div className="trait-section trait-section-list">
            <h4>{title}</h4>
            {Object.entries(traitData).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
                .map(([traitKey, scoreValue]) => {
                    const score = Number(scoreValue);
                    const isValidScore = !isNaN(score);
                    return (
                        <li key={traitKey}>
                            <div className="trait-label-score">
                                <strong>{formatName(traitKey)}:</strong>
                                {isValidScore ? score : 'N/A'}
                            </div>

                            {isValidScore && (
                                <div className="score-bar-container" title={`Score: ${score} out of 5`}>
                                    <div style={{ width: `${calculateBarWidth(score)}%` }}></div>
                                </div>
                            )}
                        </li>
                    );
                })}
        </div>
    );
};

interface CategorizedSkillsProps {
  categories: 
  Record<string, string[]>;  
  scores: Record<string, number | null | undefined>;
}
 
 
// Displays granular skills grouped by category (remains the same)
const CategorizedSkills = ({ categories, scores }: CategorizedSkillsProps) => { 
    if (!categories || !scores) return null;
    const categoryOrder = [ 
    'CommunicationInfluence', 'AnalyticalProblemSolving', 'SelfManagement', 'InterpersonalTeam', 'LeadershipInitiative', 'LearningDevelopment', 'EthicalProfessional' 
    ];
    return ( 
    <div className="categorized-skills"> 
    {
    categoryOrder.map((categoryKey) => {
      const skillKeys = categories[categoryKey]; 
      const relevantSkills = skillKeys?.filter(skillKey => scores[skillKey] !== undefined) || [];
      
      if (relevantSkills.length === 0) 
        return null;
        
      const total = relevantSkills.reduce((sum, key) => sum + (scores[key] || 0), 0);
      const mean = total / relevantSkills.length;
      const meanFormatted = mean.toFixed(2);

      return ( 
      <div key={categoryKey} className="skill-category">
        <ul>
          <li>
            <h5 className="text-base">
            {formatName(categoryKey)}: <span style={{ color: '' }}>{meanFormatted}</span>
            </h5>
          </li>
        </ul>
  </div> 
  ); 
          })}
          </div> 
);};  

  interface ResultsPageProps {
    skillScores: Record<string, number>;
    traitScores: Record<string, number>;
    skillCategories: Record<string, string[]>;
    careerMatches: Match[];
    onRestart: () => void;
   }
  
   
// --- Main Results Page Component ---
const ResultsPage: React.FC<ResultsPageProps> = ({
  skillScores,
  traitScores,
  skillCategories,
  careerMatches,
  onRestart,
 }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

const downloadPDF = () => {
  const input = document.getElementById('results-container');
  if (!input) return;

  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    while (heightLeft > 0) {
      position -= pdf.internal.pageSize.getHeight();
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }

    pdf.save('Candidate_Report.pdf');
  });
};


    if (!skillScores || !traitScores || !skillCategories || !careerMatches) {
    console.error("ResultsPage rendering incomplete data:", { skillScores, traitScores, skillCategories, careerMatches });
    return <p>Loading results or encountering data issue...</p>;
    }
    const bigFiveLabels = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Emotional Stability'];
    const bigFiveData = bigFiveLabels.map(label => traitScores[label] ?? 0);
    const bigFiveChartData = { labels: bigFiveLabels, data: bigFiveData };
    const honestyHumilityListData = { 'Honesty-Humility': traitScores.HonestyHumility ?? 0 };
    
    const miLabels = ['Linguistic', 'LogicalMathematical', 'Spatial', 'BodilyKinesthetic', 'Musical', 'Interpersonal', 'Intrapersonal', 'Naturalist'];
    const miData = miLabels.map(label => traitScores[label.replace('-','')] ?? 0);
    const miChartData = { labels: miLabels, data: miData };

    const discLabels = ['Dominance', 'Influence', 'Steadiness', 'Compliance'];
    const discData = discLabels.map(label => traitScores[label] ?? 0);
    const discChartData = { labels: discLabels, data: discData };    
    // const [showBigFive, setShowBigFive] = useState(true); // const [showHonesty, setShowHonesty] = useState(true);

    
return (
  <div>
    <div id="results-container">
    
    <h1 className='text-lg'>Candidiate Identification Report <span style={{ color: 'Red' }}>CIR</span></h1>
{userName && (
    <h1 >
      Candidate Name: <span className="font-semibold">{userName}</span>
    </h1>
  )}        <CareerMatchProfile matches={careerMatches} />

    <h3 className="trait-summary-header">Summary Profiles (Visualized)</h3>
    <div className="trait-visual-grid">
  <div className="trait-row">
    <div className="trait-col">
      <SpiderChart chartData={miChartData} title="Multiple Intelligences Profile" />
    </div>
    <div className="trait-col">
      <SpiderChart chartData={discChartData} title="DISC Profile" />
    </div>
  </div>
  
  <div className="trait-row">
    <div className="trait-col">
      <SpiderChart chartData={bigFiveChartData} title="Big Five Profile" />
    </div>

    <div className="px-30">
      <TraitGroupSectionWithBar title="Honesty-Humility" traitData={honestyHumilityListData} />
    </div>
  </div>
</div>

 <h3 className="detailed-skills-header">Detailed Skill Scores</h3>
    <CategorizedSkills categories={skillCategories} scores={skillScores} />{/* Call uses skillCategories prop */}
    
</div>
  
  <button onClick={onRestart} className="restart-button">Restart Assessment</button>
  <button onClick={downloadPDF} className="download-button">
  Download Report as PDF
</button>
  </div>

  

);}
export default ResultsPage;