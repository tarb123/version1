"use client";

import React, { useMemo } from "react";
import type { QuestionData } from "../../QuestionBlock";

type WorkingWithThingsScoreProps = {
  questions: QuestionData[];
  responses: Record<string, string | number | undefined>;
};

const WorkingWithThingsScore: React.FC<WorkingWithThingsScoreProps> = ({
  questions,
  responses,
}) => {
  const thingsQs = useMemo(() => {
    return questions.filter(
      (q: QuestionData) =>
        q.primaryTrait === "Working with Things" && q.type === "likert"
    );
  }, [questions]);

  // const totalQuestions = thingsQs.length || 3;

  const { scaledScore } = useMemo(() => {
    let sum = 0;
    let count = 0;

    for (const q of thingsQs) {
      const v = responses[q.id];
      if (v === undefined || v === null || v === "") continue;

      const num = Number(v);
      if (!isNaN(num)) {
        sum += num;
        count += 1;
      }
    }

    const avg = count > 0 ? sum / count : 0;
    const ratio = avg > 0 ? (avg - 1) / 4 : 0;
    const scaled = Math.round(1 + ratio * 9);

    return { avgLikert: avg, scaledScore: scaled };
  }, [thingsQs, responses]);

  const indicatorLeftPct = ((scaledScore - 0.5) / 10) * 100;

  return (
    <div className="w-full max-w-2xl p-2 -mb-2">
      
      <div className="flex items-start justify-between">
        
        <h1 className="text-base text-sky-700">Working with Things</h1>
        {/* <p className="text-xs font-bold text-sky-700 mt-1">Avg Likert: {avgLikert ? avgLikert.toFixed(2) : "0.00"} / 5</p> <p className="text-xs font-bold text-sky-700 mt-1">Ratio: {scaledScore}/10</p> */}
        
        <div className="flex flex-col items-end">
          <span className="text-xs text-black">Score (1–10)</span>
          <span className="text-2xl font-bold text-sky-700 leading-none">{scaledScore}</span>
        </div>

      </div>

      <div className="mt-2 relative">
        <span className="absolute left-0 top-1/4 -translate-y-1/2 text-[10px] text-gray-500">Low</span>
        <span className="absolute right-0 top-1/4 -translate-y-1/2 text-[10px] text-gray-500">High</span>

        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-300"
          style={{
            left: `${indicatorLeftPct}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink text-white text-xs font-bold flex items-center justify-center shadow-md border-2 border-white">
            {scaledScore}
          </div>
        </div>

        <div className="flex items-center gap-1 px-6">
          {Array.from({ length: 10 }).map((_, i) => {
            const index = i + 1;
            const isFilled = index <= scaledScore;
            return (
<div
  key={index}
  className={[
    "h-3 flex-1 rounded-sm transition-all duration-300",
    isFilled ? "bg-gradient-to-r from-orange-400 to-pink" : "bg-slate-300",
  ].join(" ")}
  aria-label={`score-segment-${index}`}
/>
            );
          })}
        </div>

        <div className="flex items-center gap-1 mt-2 px-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`scale-${i + 1}`}
              className="flex-1 text-center text-[10px] text-gray-600"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingWithThingsScore;
