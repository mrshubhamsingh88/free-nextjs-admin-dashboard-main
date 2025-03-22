"use client"; // Add this line to mark the component as a client component

import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React, { useEffect } from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
const metadata: Metadata = {
  title: "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description:
    "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function Ecommerce() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Check if the user is logged in
    console.log(localStorage.getItem("isLoggedIn"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // If not logged in, redirect to sign-in page
    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [router]); // Run this effect when the component mounts

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      {/* <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div> */}

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}