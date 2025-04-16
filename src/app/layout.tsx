"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Detects route changes
import { Outfit } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, [pathname]); // Runs when the route changes

  return (
    <html lang="en">
      <body className={`${outfit.variable} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>
            {isLoading ? (
              <div
                className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-50"
                aria-live="polite"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-6xl"
                >
                  🐼❤️
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {children}
              </motion.div>
            )}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
