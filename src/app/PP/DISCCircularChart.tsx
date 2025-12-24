"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

interface DISCCircularProps {
  chartData: {
    labels: string[];
    data: number[]; // scores (0-5)
  };
}

const COLORS = [
  "#16a34a", // Dominance
  "#3b82f6", // Influence
  "#f97316", // Steadiness
  "#9333ea", // Compliance
];

const DISCCircularChart: React.FC<DISCCircularProps> = ({ chartData }) => {
  const ringThickness = 10;
  const ringGap = 4;
  const baseOuter = 85;

  const datasets = chartData.data.map((val, idx) => {
    const outer = baseOuter - idx * (ringThickness + ringGap);
    const inner = outer - ringThickness;
    const isZero = val === 0;

    return {
      label: chartData.labels[idx],
      data: [val, 5 - val],
      backgroundColor: isZero
        ? ["#e6e6e6", "#e6e6e6"]
        : [COLORS[idx], "#e6e6e6"],
      borderColor: "transparent",
      borderWidth: 2,

      hoverOffset: 0,
      hoverBorderWidth: 0,
      hoverBorderColor: "transparent",
      hoverBackgroundColor: isZero
        ? ["#e6e6e6", "#e6e6e6"]
        : [COLORS[idx], "#e6e6e6"],

      borderRadius: 999,
      radius: `${outer}%`,
      innerRadius: `${inner}%`,
    };
  });

  return (

    <div>
    <h1 className="mb-1">DISC PROFILE</h1>
<div className="flex flex-row sm:flex-row items-center justify-center px-1">

      {/* Chart */}
      <div className="relative w-60 h-60">
        <Doughnut
          data={{ datasets }}
          options={{
            devicePixelRatio: 2,
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction: {
              mode: "nearest",
              intersect: true,
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(255,255,255,0.95)",
                titleColor: "#000",
                bodyColor: "#000",
                borderColor: "#d1d5db",
                borderWidth: 1,
                displayColors: false,
                padding: 8,
                bodyFont: { size: 12, family: "sans-serif" },
                callbacks: {
                  title: () => "",
                  label: function (ctx) {
                    const dsIndex = ctx.datasetIndex ?? 0;
                    const val = chartData.data[dsIndex];
                    const label = chartData.labels[dsIndex] || `Value`;
                    return `${label}: ${Number(val).toFixed(1)}/5`; // 🔹 Round tooltip
                  },
                },
              },
            },
          }}
        />
      </div>

{/* Labels */}
<div className="text-xs mr-2">
  {chartData.labels.map((label, i) => (
    <div key={i} className="flex items-center gap-1 text-black">
      {/* Tiny small color box */}
      <span
        className="w-2 h-2 rounded-none"
        style={{ backgroundColor: COLORS[i] }}
      />
      {label}:
      <span className="ml-0">{chartData.data[i].toFixed(1)}/5</span>
    </div>
  ))}
</div>

    </div>
    </div>

  );
};

export default DISCCircularChart;
