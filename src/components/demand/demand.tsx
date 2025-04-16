"use client";

import { useState, useEffect } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { motion } from "framer-motion";

export default function DemandOverview() {
    const [showQuestion, setShowQuestion] = useState(false);
    const [showSparkle, setShowSparkle] = useState(false);
    const [showGif, setShowGif] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowQuestion(true);
        }, 2000); // Show the question after 5 seconds

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);

    const handleAnswer = (answer) => {
        if (answer === "Yes") {
            // setShowSparkle(true);
            setShowGif("sparkle"); // Set the sparkle gif
            setTimeout(() => {
                setShowQuestion(false); // Hide the question after the gif
                setShowSparkle(false); // Hide sparkle after 2 seconds
            }, 2000); // Show the sparkle effect for 2 seconds
        } else {
            setShowGif("sad"); // Set the sad gif
            setTimeout(() => {
                setShowQuestion(false); // Hide the question after the gif
                setShowGif(null); // Hide sad gif after 2 seconds
            }, 2000); // Show the sad gif for 2 seconds
        }
    };

    return (
        <div className="p-6 min-h-screen flex flex-col items-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mt-4"
            >
                <p className="text-lg text-gray-600 italic">
                    "A sneak peek at what's hot and what's coming next! 🔥🚀"
                </p>
            </motion.div>
            {/* <PageBreadcrumb title="📊 Demand Overview" /> */}
            {/* Question after 5 seconds */}
            {showQuestion && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 p-6 bg-white rounded-2xl shadow-xl text-center"
                >
                    <p className="text-lg text-gray-700">
                        📅 In this week, my demand will come complete? ✅🤔
                    </p>

                    <div className="mt-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleAnswer("Yes")}
                            className="px-4 py-2 mr-4 bg-green-500 text-white rounded-lg"
                        >
                            Yes
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleAnswer("No")}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg"
                        >
                            No
                        </motion.button>
                    </div>
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-6xl">
                {/* Current Demand Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(255, 100, 100, 0.3)" }}
                    className="p-6 rounded-2xl shadow-xl border border-red-300 transition-all duration-300 bg-white"
                >
                    <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
                        🔥 Current Demand
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        "These items come from the heart! ❤️🏃💨 Please complete this demand.💨"
                    </p>
                    <motion.table
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full mt-4 border-collapse border border-gray-300 rounded-lg overflow-hidden"
                    >
                        <thead>
                            <tr className="bg-red-500 text-white">
                                <th className="border border-gray-300 p-3">📦 Demand</th>
                                <th className="border border-gray-300 p-3">⏳ ETA</th>
                                <th className="border border-gray-300 p-3">✅ Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <motion.tr
                                whileHover={{ scale: 1.02, backgroundColor: "#fee2e2" }}
                                className="transition-all duration-300"
                            >
                                <td className="border border-gray-300 p-3">🍭 Lollipop</td>
                                <td className="border border-gray-300 p-3">📅 Next Week</td>
                                <td className="border border-gray-300 p-3 text-green-500">🟢 Available</td>
                            </motion.tr>
                            <motion.tr
                                whileHover={{ scale: 1.02, backgroundColor: "#fee2e2" }}
                                className="transition-all duration-300"
                            >
                                <td className="border border-gray-300 p-3">☝️ Little Finger</td>
                                <td className="border border-gray-300 p-3">📅 Next Week</td>
                                <td className="border border-gray-300 p-3 text-yellow-500">🟡 Limited</td>
                            </motion.tr>
                        </tbody>
                    </motion.table>
                </motion.div>

                {/* Upcoming Demand Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(100, 100, 255, 0.3)" }}
                    className="p-6 rounded-2xl shadow-xl border border-blue-300 transition-all duration-300 bg-white"
                >
                    <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                        🚀 Upcoming Demand
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        "The future looks exciting! Here's what we're expecting soon! ⏳✨"
                    </p>
                    <motion.table
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full mt-4 border-collapse border border-gray-300 rounded-lg overflow-hidden"
                    >
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="border border-gray-300 p-3">📌 Demand</th>
                                <th className="border border-gray-300 p-3">🔢 Expected</th>
                                <th className="border border-gray-300 p-3">⏳ ETA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <motion.tr
                                whileHover={{ scale: 1.02, backgroundColor: "#e0e7ff" }}
                                className="transition-all duration-300"
                            >
                                <td className="border border-gray-300 p-3 text-center" colSpan="3">
                                    📦 After completing current demands
                                </td>
                            </motion.tr>
                        </tbody>
                    </motion.table>
                </motion.div>
            </div>
            {(showSparkle || showGif) && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-4 relative flex justify-center items-center">
                        <button
                            className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl"
                            onClick={() => { setShowSparkle(false); setShowGif(null); }} // Close modal
                        >
                            ✖
                        </button>

                        {showSparkle && (
                            <motion.img
                                src="/path-to-sparkle.gif"
                                alt="Sparkle Effect"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-40 h-40"
                            />
                        )}

                        {showGif === "sparkle" && (
                            <motion.img
                                src="/images/logo/9129658.jpg" // Replace with actual sparkle GIF
                                alt="Sparkle GIF"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-60 h-60"
                            />
                        )}

                        {showGif === "sad" && (
                            <motion.img
                                src="/images/logo/6000_9_08.jpg" // Replace with actual sad GIF
                                alt="Sad GIF"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-60 h-60"
                            />
                        )}
                    </div>
                </div>
            )}


        </div>
    );
}
