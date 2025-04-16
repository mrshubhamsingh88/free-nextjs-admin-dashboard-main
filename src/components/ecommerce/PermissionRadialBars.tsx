"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import chart for Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PermissionProgressRadial() {
  const series = [90, 20, 0]; // Progress percentage for each permission

  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      height: 400,
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 15,
          size: "40%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#f0f0f0",
          strokeWidth: "90%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "16px",
            color: "#374151",
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "14px",
            color: "#1f2937",
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: "Emotional Progress",
            fontSize: "15px",
            formatter: () => `Growing Stronger 💖`,
          },
        },
      },
    },
    colors: ["#10b981", "#3b82f6", "#a855f7"], // Emotional green, blue, purple
    labels: ["Basic Permission 🌱", "Premium Permission ✨", "Super Premium 💎"],
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl h-[600px] shadow-2xl max-w-xl mx-auto border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        🌈 Permission Journey
      </h2>

      <ReactApexChart options={options} series={series} type="radialBar" height={400} />
      {/* You are on your path — */}
      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
        🌱 from **Basic** to **Super Premium**. Every step counts. 💫
      </div>
    </div>
  );
}
