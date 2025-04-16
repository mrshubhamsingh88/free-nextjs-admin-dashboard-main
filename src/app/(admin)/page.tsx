"use client"; // Add this line to mark the component as a client component

import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React, { useEffect, useState } from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import ServerSpace from "@/components/ecommerce/ServerSpace";
import PermissionRadialBars from "@/components/ecommerce/PermissionRadialBars";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import Image from "next/image"; // Import Image component for the panda image

const metadata: Metadata = {
  title: "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description:
    "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function Ecommerce() {
  const router = useRouter();
  const [showPanda, setShowPanda] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Check if the user is logged in
    console.log(localStorage.getItem("isLoggedIn"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // If not logged in, redirect to sign-in page
    if (!isLoggedIn) {
      router.push("/signin");
    }

    // Hide the panda after the animation completes
    const timer = setTimeout(() => setShowPanda(false), 5000); // 3s timeout for panda

    return () => clearTimeout(timer);
  }, [router]); // Run this effect when the component mounts

  return (
    <div className="relative">
      {/* Rain Effect */}
      {/* <div className="rain">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 1 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div> */}

      {/* Heart Rain Effect */}
      {/* <div className="heartRain">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="heart"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 3 + 3}s`, // Hearts fall at different speeds
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div> */}

      {/* Sparkle Effect */}
      {/* <div className="sparkle">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="sparkleDot"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div> */}

      {/* Panda Animation */}
      {showPanda && (
        <div className="panda bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <Image src="/images/logo/tiger.jpg" alt="Panda" width={100} height={100} className="mx-auto rounded-full" />
          <div className="pandaMessage text-lg font-semibold text-blue-800 mt-3">
            🚀 Welcome to Panda Server 🐼🔐
          </div>
        </div>
      )}
      {/* Sparkle Rain Effect with Pandas and Stars */}
      {/* <div className="sparkleRain">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="sparkleDot"
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              animationDuration: `${Math.random() * 6 + 5}s`, // Slow falling (5s to 11s)
              animationDelay: `${Math.random() * 4}s`, // Different delays
            }}
          >
            {index % 2 === 0 ? "🐼" : "💖"}
          </div>
        ))}
      </div> */}


      {/* Your other Ecommerce components */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <div className="col-span-12">
            <EcommerceMetrics />
          </div>

          <div className="col-span-12">
            <MonthlySalesChart />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12">
          <RecentOrders />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <ServerSpace />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <DemographicCard />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <PermissionRadialBars />
        </div>
      </div>
    </div>
  );
}
