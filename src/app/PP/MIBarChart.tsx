'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface MIBarChartProps {
  chartData: {
    labels: string[];
    data: number[];
  };
  title: string;
}

const BAR_COLORS = ["#16a34a","#a5b4fc", "#64748b", "#808080", "#fda4af", "#FEBE10", "#60a5fa", "#CA8A04"];

const MIBarChart: React.FC<MIBarChartProps> = ({ chartData, title }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: title,
        data: chartData.data,
        backgroundColor: BAR_COLORS.slice(0, chartData.data.length),
        borderColor: BAR_COLORS.slice(0, chartData.data.length),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    devicePixelRatio: 2,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    // <div className="w-full h-84 -mt-5 -py-1 px-6 flex flex-col justify-center">
    <div className="w-full h-84 mt-20 mb-12 -py-1 px-6 flex flex-col justify-center">
      <h1 className="text-center mb-7">{title}</h1>
      <Bar data={data} options={options} />
    </div>
  );};
export default MIBarChart;