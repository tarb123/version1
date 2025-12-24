"use client";
import React, { useMemo } from "react";
import type { QuestionData, Answer } from "../../QuestionBlock";

type WorkingWithShapesScoreProps = {
  questions: QuestionData[];
  responses: Record<string, string | number | undefined>;
};

const CORRECT_OPTION_KEY_BY_ID: Record<string, string> = {
  shape1: "C", // <-- change to correct optionKey
  shape2: "C", // <-- change to correct optionKey
  shape3: "C", // <-- change to correct optionKey
};

function getSelectedOptionKey(
  q: QuestionData,
  selectedValue: string | number | undefined
): string | undefined {
  if (selectedValue === undefined || selectedValue === null || !q.answers) {
    return undefined;
  }

  // If your backend still doesn't send ids, this covers both cases:
  const byId = q.answers.find((a: Answer) => a.id === selectedValue);
  if (byId?.optionKey) return byId.optionKey;

  const byOptionKey = q.answers.find(
    (a: Answer) => a.optionKey === selectedValue
  );
  if (byOptionKey?.optionKey) return byOptionKey.optionKey;

  const byText = q.answers.find((a: Answer) => a.text === selectedValue);
  return byText?.optionKey;
}

const WorkingWithShapesScore: React.FC<WorkingWithShapesScoreProps> = ({
  questions,
  responses,
}) => {
  const workingWithShapesQs = useMemo(() => {
    return questions.filter(
      (q: QuestionData) => q.primaryTrait === "Working with Shapes"
    );
  }, [questions]);

  const totalQuestions = workingWithShapesQs.length || 3; // your JSON has 3 shapes questions

  const { scaledScore } = useMemo(() => {
    let correct = 0;

    for (const q of workingWithShapesQs) {
      const selected = responses[q.id];
      if (selected === undefined || selected === null || selected === "") {
        continue;
      }

      const selectedKey = getSelectedOptionKey(q, selected);
      const correctKey = CORRECT_OPTION_KEY_BY_ID[q.id];

      if (selectedKey && correctKey && selectedKey === correctKey) {
        correct += 1;
      }
    }

    // ✅ scale correct/total into 1–10
    // 0/3 => 1, 3/3 => 10
    const ratio = totalQuestions > 0 ? correct / totalQuestions : 0;
    const scaled = Math.round(1 + ratio * 9);

    return {
      correctCount: correct,
      scaledScore: scaled,
    };
  }, [workingWithShapesQs, responses, totalQuestions]);

  // ✅ Align circle to segment centers
  const indicatorLeftPct = ((scaledScore - 0.5) / 10) * 100;

  return (
    <div className="w-full mx-auto max-w-2xl p-2 -mb-2">
      
      {/* Header */}
      <div className="flex items-start justify-between space-y-1">
        <h1 className="text-base text-sky-700">Working with Shapes</h1>
        {/*<p className="text-xs font-bold text-sky-700 mt-1">Correct: {correctCount}/{totalQuestions}</p> <p className="text-xs font-bold text-sky-700 mt-1">Ratio: {scaledScore}/10</p> */}

        <div className="flex flex-col items-end">
          <span className="text-xs text-black">Score (1–10)</span>
          <span className="text-2xl font-bold text-sky-700 leading-none">
            {scaledScore}
          </span>
        
        </div>
      </div>

      {/* Score Bar */}
      <div className="mt-2 relative">
        <span className="absolute left-0 top-1/4 -translate-y-1/2 text-[10px] text-gray-500">Low</span>
        <span className="absolute right-0 top-1/4 -translate-y-1/2 text-[10px] text-gray-500">High</span>

        {/* Circle ON bar */}
        <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-300"
          style={{ left: `${indicatorLeftPct}%`, transform: "translate(-50%, -50%)",}}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink text-white text-xs font-bold flex items-center justify-center shadow-md border-2 border-white">
            {scaledScore}
          </div>

        </div>

        {/* Segments */}
        <div className="flex items-center gap-1 px-6">
          {Array.from({ length: 10 }).map((_, i: number) => {
          const index = i + 1;
          const isFilled = index <= scaledScore;
          return (
          <div key={index}
          className={[ "h-3 flex-1 rounded-sm transition-all duration-300",
          isFilled ? "bg-gradient-to-r from-orange-400 to-pink" : "bg-slate-300",].join(" ")}
          aria-label={`score-segment-${index}`}/>
          );
          })}
        </div>

        {/* Scale numbers 1–10 */}
        <div className="flex items-center gap-1 mt-2 px-6">
          {Array.from({ length: 10 }).map((_, i: number) => {
            const index = i + 1;
            return (
            <div key={`scale-${index}`} className="flex-1 text-center text-[10px] text-gray-600">
              {index}
            </div>
            );
          })}
        </div>
        
      </div>
    </div>
);};
export default WorkingWithShapesScore;