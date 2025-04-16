"use client"; // Ensure this is at the top

import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import { ThemeProvider } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Ensure correct import

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
          {children}

          {/* Animated Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden"
          >
            <div className="relative flex items-center justify-center z-1">
              <GridShape />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center max-w-xs"
              >
                {/* Animated Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Link href="/" className="block mb-4">
                    <Image
                      width={231}
                      height={48}
                      src="/images/logo/New-logo.svg" // Ensure correct path
                      alt="Logo"
                    />
                  </Link>
                </motion.div>

                {/* Animated Text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-center text-gray-400 dark:text-white/60"
                >
                  The Secret Code (Panda) of Super Admin 🐼🔐  
                  Ahh, like a keystore file that's encrypted 🔒, and the password 🔑 is known only by you! Once lost, it can't be regenerated ❌, and without it, you can't publish the app 📱🚫.
                </motion.p>

                {/* Animated Second Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <Image
                    width={231}
                    height={48}
                    src="/images/logo/t.svg" // Ensure correct path
                    alt="Logo"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated Theme Toggler */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 hidden sm:block"
          >
            <ThemeTogglerTwo />
          </motion.div>
        </div>
      </ThemeProvider>
    </div>
  );
}
