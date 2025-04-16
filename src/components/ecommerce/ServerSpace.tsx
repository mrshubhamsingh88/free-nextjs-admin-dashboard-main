"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ServerStatsChart() {
  const chartOptions: ApexOptions = {
    colors: ["#34D399", "#F472B6"], // green for active, pink for potential
    chart: { type: "bar", height: 500, stacked: true },
    plotOptions: { bar: { horizontal: true, barHeight: "40%" } },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        // Emotional Vibes
        "💖 Happiness",
        "⚡ Energy",
        "🧠 Focus",
        "💤 Restfulness",
        "🌈 Creativity",
        "💢 Stress",
        // Server Metrics
        "💾 Total Disk Space",
        "📂 Used Disk Space",
        "🧠 CPU Usage",
        "📈 Memory Usage",
        "🧊 Temp Storage",
        "🌐 Network Load",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { fontSize: "14px" },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
    legend: {
      position: "top",
      labels: {
        colors: "#6B7280",
      },
    },
  };

  const chartSeries = [
    {
      name: "Current Level",
      data: [
        // Vibes
        85, 60, 72, 50, 68, 35,
        // Server
        100, 68, 70, 64, 45, 80,
      ],
    },
    {
      name: "Remaining/Potential",
      data: [
        15, 40, 28, 50, 32, 65,
        0, 32, 30, 36, 55, 20,
      ],
    },
  ];

  return (
    <div className="p-5 bg-white rounded-2xl shadow-md border border-gray-200 dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        📊 Vibe & Server Energy Dashboard
      </h3>

      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={500}
      />
    </div>
  );
}
