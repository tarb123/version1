"use client";
import React from "react";
import SpiderChart from "./SpiderChart";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Brain, MessageCircle, ShieldCheck, Users, Trophy, BookOpen, UserCheck, Download,} from "lucide-react";
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
  // if (camelCaseName === "HonestyHumility") return "Honesty-Humility";
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
  if (!matches || matches.length === 0) return <p>Career match data not available.</p>;

  const topMatches = matches.slice(0, 5);
  const calculateMatchBarWidth = (score: number) => Math.max(0, Math.min(100, score));

  return (
    <div>
      <h3>Career Match Profile</h3>

      {/* ✅ adds vertical spacing between each career row */}
      <ol className="space-y-0">
        {topMatches.map((match, index) => (
          <li key={match.name} className="space-y-2">
            {/* ✅ keep your same design, just improve line spacing */}
            <div className="text-sm leading-snug">
              <span>{index + 1}. </span>
              <span className="break-words text-sm font-san serif">{match.name} </span>
              {/* <span className = "font-semibold" style={{ color: "green" }}> {Math.round(match.score)}%</span> */}
            </div>

            {/* ✅ IMPORTANT: adds gap between title line and the bar */}
            <div
              className="score-bar-container mt-2 "
              title={`Match Score: ${Math.round(match.score)}%`}
            >
              <div
                className="score-bar"
                style={{ width: `${calculateMatchBarWidth(match.score)}%` }}
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

 
interface CategorizedSkillsProps {
  categories: Record<string, string[]>;
  scores: Record<string, number | null | undefined>;
}

// Make icons slightly smaller so everything feels compact
const iconMap: Record<string, React.ReactNode> = {
  AnalyticalProblemSolving: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
      <Brain className="w-4 h-4 text-blue-600" />
    </div>
  ),
  CommunicationInfluence: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
      <MessageCircle className="w-4 h-4 text-green-600" />
    </div>
  ),
  EthicalProfessional: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
      <ShieldCheck className="w-4 h-4 text-yellow-600" />
    </div>
  ),
  InterpersonalTeam: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purpleShades-100">
      <Users className="w-4 h-4 text-purpleShades-600" />
    </div>
  ),
  LeadershipInitiative: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100">
      <Trophy className="w-4 h-4 text-orange-600" />
    </div>
  ),
  LearningDevelopment: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pinkShades-100">
      <BookOpen className="w-4 h-4 text-pink" />
    </div>
  ),
  SelfManagement: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100">
      <UserCheck className="w-4 h-4 text-teal-600" />
    </div>
  ),
};

const CategorizedSkills = ({ categories, scores }: CategorizedSkillsProps) => {
  if (!categories || !scores) return null;

  const categoryOrder = [
    "CommunicationInfluence",
    "AnalyticalProblemSolving",
    "SelfManagement",
    "InterpersonalTeam",
    "LeadershipInitiative",
    "LearningDevelopment",
    "EthicalProfessional",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-2">
      {/* ✅ Row-wise on all screens */}
      <div className="flex flex-col gap-2">
        {categoryOrder.map((categoryKey) => {
          const skillKeys = categories[categoryKey];
          const relevantSkills =
            skillKeys?.filter((key) => scores[key] !== undefined) || [];

          if (relevantSkills.length === 0) return null;

          const total = relevantSkills.reduce(
            (sum, key) => sum + (scores[key] || 0),
            0
          );
          const mean = total / relevantSkills.length;
          const meanFormatted = mean.toFixed(2);

          return (
            <div
              key={categoryKey}
              className="w-full flex items-center  gap-6"
            >
              {/* Left: icon + label */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="shrink-0">{iconMap[categoryKey]}</div>

                <span className="text-sm truncate">
                  {formatName(categoryKey)}
                </span>
              </div>

              {/* Right: score */}
              <span className="font-semibold font-sans serif text-sm">
                {meanFormatted}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};


interface ResultsPageProps {
  skillScores: Record<string, number>;
  traitScores: Record<string, number>;
  skillCategories: Record<string, string[]>;
  careerMatches: Match[];
  onRestart: () => void;
  candidateName: string; // 👈 added
  candidateEmail: string; // 👈 added
  allQuestions: QuestionData[];
  userResponses: Record<string, string | number | undefined>;}

const ResultsPage: React.FC<ResultsPageProps> = ({
  skillScores,
  traitScores,
  skillCategories,
  careerMatches, 
  candidateName,
  candidateEmail,
  allQuestions,
  userResponses,
}) => {    
  const [isExporting, setIsExporting] = React.useState(false);

const downloadPDF = async () => {
  const container = document.getElementById("results-container") as HTMLElement | null;
  if (!container) return;
  setIsExporting(true);


  // ✅ same PDF on mobile + laptop
  const EXPORT_WIDTH = 900; // key: smaller than 1200 so charts become readable on A4
  const SCALE = 3;          // crisp rendering

  const page1 = container.querySelector('[data-pdf-page="1"]') as HTMLElement | null;
  const page2 = container.querySelector('[data-pdf-page="2"]') as HTMLElement | null;
  if (!page1 || !page2) return;

  // --- helpers ---
  const waitTwoFrames = () =>
    new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

const safeFontsReady = async () => {
  // document.fonts may be undefined in some environments
  await document.fonts?.ready;
};


  const captureElement = async (el: HTMLElement) => {
    return await html2canvas(el, {
      scale: SCALE,
      useCORS: true,
      backgroundColor: "#ffffff",
      width: EXPORT_WIDTH,
      windowWidth: EXPORT_WIDTH,
      scrollX: 0,
      scrollY: 0,
    });
  };

  const addCanvasToPdf = (pdf: jsPDF, canvas: HTMLCanvasElement, addNewPage: boolean) => {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const marginX = 12;
    const marginTop = 16;

    const usableWidth = pageWidth - marginX * 2;
    const usableHeight = pageHeight - marginTop * 2;

    const pxPerMm = canvas.width / usableWidth;
    const pageHeightPx = Math.floor(usableHeight * pxPerMm);

    let renderedHeight = 0;
    let first = true;

    while (renderedHeight < canvas.height) {
      const sliceHeight = Math.min(pageHeightPx, canvas.height - renderedHeight);

      const sliceCanvas = document.createElement("canvas");
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = sliceHeight;

      const ctx = sliceCanvas.getContext("2d");
      if (!ctx) break;

      ctx.drawImage(
        canvas,
        0,
        renderedHeight,
        canvas.width,
        sliceHeight,
        0,
        0,
        canvas.width,
        sliceHeight
      );

      const imgData = sliceCanvas.toDataURL("image/png", 1.0);
      const sliceHeightMm = sliceHeight / pxPerMm;

      if (!first || addNewPage) pdf.addPage();
      pdf.addImage(imgData, "PNG", marginX, marginTop, usableWidth, sliceHeightMm);

      first = false;
      addNewPage = false;
      renderedHeight += sliceHeight;
    }
  };

  // --- save inline styles to restore ---
  const prev = {
    width: container.style.width,
    maxWidth: container.style.maxWidth,
    position: container.style.position,
    left: container.style.left,
    top: container.style.top,
    background: container.style.background,
  };

  const chartsRow = container.querySelector('[data-pdf="charts"]') as HTMLElement | null;
  const miBlock = container.querySelector('[data-pdf-block="mi"]') as HTMLElement | null;

  const prevCharts = chartsRow
    ? {
        display: chartsRow.style.display,
        gridTemplateColumns: (chartsRow.style).gridTemplateColumns,
        columnGap: (chartsRow.style).columnGap,
        rowGap: (chartsRow.style).rowGap,
        alignItems: (chartsRow.style).alignItems,
        justifyItems: (chartsRow.style).justifyItems,
      }
    : null;

  const prevMi = miBlock
    ? {
        gridColumn: (miBlock.style).gridColumn,
        width: miBlock.style.width,
        maxWidth: miBlock.style.maxWidth,
        margin: miBlock.style.margin,
      }
    : null;

  try {
    await safeFontsReady();

    // ✅ move offscreen so user doesn't see changes
    container.style.position = "fixed";
    container.style.left = "-10000px";
    container.style.top = "0";
    container.style.background = "#ffffff";

    // ✅ fixed export width
    container.style.width = `${EXPORT_WIDTH}px`;
    container.style.maxWidth = `${EXPORT_WIDTH}px`;

    // ✅ PDF chart layout:
    // row 1: DISC + Spider
    // row 2: MI (full width)
    if (chartsRow) {
      chartsRow.style.display = "grid";
      (chartsRow.style).gridTemplateColumns = "1fr 1fr";
      (chartsRow.style).columnGap = "16px";
      (chartsRow.style).rowGap = "14px";
      (chartsRow.style).alignItems = "start";
      (chartsRow.style).justifyItems = "center";
    }

    if (miBlock) {
      (miBlock.style).gridColumn = "1 / -1";
      miBlock.style.width = "100%";
      miBlock.style.maxWidth = `${EXPORT_WIDTH}px`;
      miBlock.style.margin = "0 auto";
    }

    // ✅ force Chart.js to resize cleanly
    window.dispatchEvent(new Event("resize"));
    await waitTwoFrames();
    await new Promise((r) => setTimeout(r, 250));

    // ✅ capture each page separately (prevents “cut in the middle”)
    const canvas1 = await captureElement(page1);
    const canvas2 = await captureElement(page2);

    const pdf = new jsPDF("p", "mm", "a4");
    addCanvasToPdf(pdf, canvas1, false);
    addCanvasToPdf(pdf, canvas2, true);

    pdf.save("CIR.pdf");
  } finally {
    // ✅ restore everything
    container.style.width = prev.width;
    container.style.maxWidth = prev.maxWidth;
    container.style.position = prev.position;
    container.style.left = prev.left;
    container.style.top = prev.top;
    container.style.background = prev.background;

    if (chartsRow && prevCharts) {
      chartsRow.style.display = prevCharts.display;
      (chartsRow.style).gridTemplateColumns = prevCharts.gridTemplateColumns;
      (chartsRow.style).columnGap = prevCharts.columnGap;
      (chartsRow.style).rowGap = prevCharts.rowGap;
      (chartsRow.style).alignItems = prevCharts.alignItems;
      (chartsRow.style).justifyItems = prevCharts.justifyItems;
    }

    if (miBlock && prevMi) {
      (miBlock.style).gridColumn = prevMi.gridColumn;
      miBlock.style.width = prevMi.width;
      miBlock.style.maxWidth = prevMi.maxWidth;
      miBlock.style.margin = prevMi.margin;
    }

    window.dispatchEvent(new Event("resize"));
  }
};

  if (!skillScores || !traitScores || !skillCategories || !careerMatches) {
    return (
      <p>Loading results or encountering data issue...</p>
    );
  }

  const bigFiveLabels = ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Stability"];
  const bigFiveData = bigFiveLabels.map((label) => traitScores[label] ?? 0);
  const bigFiveChartData = { labels: bigFiveLabels, data: bigFiveData };

  const miLabels = ["Linguistic", "LogicalMathematical", "Spatial", "BodilyKinesthetic", "Musical", "Interpersonal", "Intrapersonal", "Naturalist",];
  const miData = miLabels.map((label) => traitScores[label.replace("-", "")] ?? 0);
  const miChartData = { labels: miLabels, data: miData };

  const discLabels = ["Dominance", "Influence", "Steadiness", "Compliance"];
  const discData = discLabels.map((label) => traitScores[label] ?? 0);
  const discChartData = { labels: discLabels, data: discData };

  return (
<div>
{/* Download button (outside capture so it won’t appear in PDF) */}
<div className="mt-7 mb-4 flex justify-center sm:justify-start">
  <div className="sm:sticky sm:top-6 sm:z-50">
    <div className="group relative inline-block px-8 py-2">
      <button
        type="button"
        onClick={downloadPDF}
        disabled={isExporting}
        className="
          relative inline-flex items-center justify-center gap-2
          rounded-2xl px-4 py-2 text-sm font-semibold
          text-indigo-600
          bg-gradient-to-b from-indigo-500/20 via-violet-500/20 to-pink-500/20
          border-0 outline-none ring-0
          shadow-[0_8px_30px_rgba(2,6,23,0.08)]
          backdrop-blur-md
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(2,6,23,0.14)]
          active:translate-y-0
          disabled:cursor-not-allowed disabled:opacity-60
          focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60
        "
      >
        {/* soft glow on hover */}
        <span
          className="
            pointer-events-none absolute inset-0 rounded-2xl
            bg-gradient from-indigo-500/20 via-violet-500/20 to-pink-500/20
            opacity-0 blur-md transition-opacity duration-300
            group-hover:opacity-100
          "
          aria-hidden="true"
        />

        <Download className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

        {/* ✅ Always visible text */}
        <span className="relative whitespace-nowrap">
          {isExporting ? "Generating PDF..." : "Download CIR"}
        </span>
      </button>

      {/* Tooltip / popup text (desktop only) */}
      <div
        className="
          pointer-events-none absolute left-1/2 -translate-x-1/2
          top-full mt-2 w-max max-w-[260px]
          opacity-0 translate-y-1 scale-[0.98]
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
          hidden sm:block
        "
      >
        <div
          className="
            relative rounded-xl border border-slate-200/70
            bg-white/90 backdrop-blur-md 
            px-3 py-2 text-xs font-medium text-slate-700
            shadow-lg
          "
        >
          Download your CIR report as a PDF
          <span
            className="
              absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rotate-45
              bg-white/90 border-l border-t border-slate-200/70
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div id="results-container" className="w-full overflow-x-hidden px-3 sm:px-0">
  {/* PDF PAGE 1 */}
  <div data-pdf-page="1">
    <h1 className="text-2xl">
      Candidate Identification Report <span style={{ color: "Red" }}>CIR</span>
    </h1>

    {candidateName && (
      <h1 className="text-lg">
        Candidate Name: <span className="font-semibold">{candidateName}</span>
      </h1>
    )}

    {candidateEmail && <h1 className="font-semibold text-lg">Email: {candidateEmail}</h1>}

    <CareerMatchProfile matches={careerMatches} />

            <div data-pdf-block="mi">
          <MIBarChart chartData={miChartData} title="MULTI INTELLIGENCES PROFILE" />
        </div>

    <h3 className="trait-summary-header">Summary Profiles (Visualized)</h3>
    <div className="trait-visual-grid">
      
      <div className="trait-row flex flex-col lg:flex-row lg:items-start" data-pdf="charts">
        
        <div data-pdf-block="disc" className="flex justify-center">
          <DISCCircularChart chartData={discChartData} />
        </div>

        <div className="trait-col" data-pdf-block="spider">
          <SpiderChart chartData={bigFiveChartData} title="BIG FIVE/ OCEAN PROFILE" />
        </div>

        {/* <div data-pdf-block="mi">
          <MIBarChart chartData={miChartData} title="MULTI INTELLIGENCES PROFILE" />
        </div> */}

      </div>

    </div>
  </div>

  {/* PDF PAGE 2 */}
  <div data-pdf-page="2">
    <div className="w-full mt-0 sm:-mt-10" data-pdf="attributes">
      <h3 className="text-lg font-bold ">Attributes</h3>

      <h4 className="text-lg text-center font-bold text-sky-700 mt-3">Abilities</h4>
      <WorkingWithNumbersScore questions={allQuestions} responses={userResponses} />
      <WorkingWithWordsScore questions={allQuestions} responses={userResponses} />
      <WorkingWithShapesScore questions={allQuestions} responses={userResponses} />

      <h4 className="text-lg text-center font-bold text-sky-700 mt-3">
        Motivation &amp; Interests
      </h4>
      <WorkingWithPeopleScore questions={allQuestions} responses={userResponses} />
      <WorkingWithDataScore questions={allQuestions} responses={userResponses} />
      <WorkingWithThingsScore questions={allQuestions} responses={userResponses} />
    </div>

    <h3>Detailed Skill Scores</h3>
    <CategorizedSkills categories={skillCategories} scores={skillScores} />
  </div>
</div>          
</div>
  );
};
export default ResultsPage;