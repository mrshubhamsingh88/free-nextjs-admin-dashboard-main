"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function LoveQueryExecutor() {
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");
    const [specialLine, setSpecialLine] = useState("");
    const [error, setError] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [showHearts, setShowHearts] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState("");
    const [showQuiz, setShowQuiz] = useState(false);
    
    const floatingEmojis = ["💖", "✨", "💞", "🌸", "💌", "💫", "🥰", "🌟", "❤️‍🔥"];
    
    useEffect(() => {
        if (showConfetti || showHearts) {
            setTimeout(() => {
                setShowConfetti(false);
                setShowHearts(false);
            }, 3000);
        }
    }, [showConfetti, showHearts]);

    const specialMessages = {
        SELECT: "🔍 Seeking feelings in the database of Super admin🐼...",
        INSERT: "🐼 successfully inserted into your heart❤️",
        DELETE: "💔deleted? Sometimes, moving on is healing...",
        DROP: "😱Whoa! Are you sure you want to drop love?",
        LOVE: "💌 Love query executed! Let's spark some magic!",
        CHECK: "✨ Checking the vibes... Is it love at first query?",
        VALIDATE: "✅ Validating your heart... Love confirmed!",
        MATCH: "❤️ Perfect match found! We’re in sync!"
    };

    const handleExecute = () => {
        setMessage("");
        setError("");
        setSpecialLine("");
        setShowConfetti(false);
        setShowHearts(false);
        setShowQuiz(false); // Close quiz on query execution.

        if (!query.trim()) {
            setError("⚠️ Please enter a valid query.");
            return;
        }

        const match = query.trim().toUpperCase().match(/^(SELECT|INSERT|DELETE|DROP|LOVE|CHECK|VALIDATE|MATCH)/);
        if (!match) {
            setError("❌ Only SELECT, INSERT, DELETE, DROP, LOVE, CHECK, VALIDATE, and MATCH queries are allowed.");
            return;
        }

        const queryType = match[0];
        setMessage("🎉 Congratulations! Your query has been executed successfully.");
        setSpecialLine(specialMessages[queryType]);

        setShowConfetti(true);
        setShowHearts(true);

        if (queryType === "LOVE" || queryType === "MATCH") {
            setShowQuiz(true); // Show a fun quiz after executing love or match-related queries.
        }
    };

    const handleQuizAnswer = (answer) => {
        setQuizAnswer(answer);
        setTimeout(() => {
            setShowQuiz(false); // Hide quiz after answering.
            setMessage("🌟 Your answer was received! Love is truly in the air!");
        }, 2000);
    };

    return (
        <div className="relative p-6 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-300 to-pink-100 overflow-hidden">
            {/* Page Title with Animation */}
            <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-pink-800 mb-6 text-center drop-shadow-lg"
            >
                Execute Your Query 🐼❤️
            </motion.h2>

            {/* Query Execution Box */}
            <motion.div 
                className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border-2 border-pink-400 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <textarea
                    className="w-full h-24 p-3 border rounded-lg shadow-sm text-center text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Write your SQL query🐼 here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <motion.button
                    className="w-full mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 hover:scale-105 transition-all"
                    onClick={handleExecute}
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.9 }}
                >
                    🚀 Execute Query
                </motion.button>
                {error && <p className="mt-3 text-red-600 font-bold">{error}</p>}
                {message && (
                    <motion.p 
                        className="mt-3 text-green-600 font-bold sparkle-text text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {message}
                    </motion.p>
                )}
                {specialLine && (
                    <motion.p 
                        className="mt-3 text-pink-700 italic text-lg font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        {specialLine}
                    </motion.p>
                )}
            </motion.div>

            {/* Floating Hearts & Emojis */}
            {showHearts && (
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-4xl"
                            style={{
                                top: `${Math.random() * 100}vh`,
                                left: `${Math.random() * 100}vw`,
                            }}
                            animate={{ y: [0, -40, 40, 0], opacity: [0.8, 1, 0.8] }}
                            transition={{
                                repeat: Infinity,
                                duration: Math.random() * 3 + 2,
                                ease: "easeInOut",
                            }}
                        >
                            {floatingEmojis[i % floatingEmojis.length]}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Confetti Celebration */}
            {showConfetti && <Confetti />}

            {/* Fun Quiz */}
            {showQuiz && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        <h3 className="text-2xl font-bold mb-4">💖 Quiz Time! 💖</h3>
                        <p className="mb-4 text-lg">What is the secret to everlasting love?</p>
                        <motion.button
                            className="mb-2 bg-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600"
                            onClick={() => handleQuizAnswer("Trust")}
                        >
                            Trust
                        </motion.button>
                        <motion.button
                            className="mb-2 bg-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600"
                            onClick={() => handleQuizAnswer("Communication")}
                        >
                            Communication
                        </motion.button>
                        <motion.button
                            className="mb-2 bg-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600"
                            onClick={() => handleQuizAnswer("Understanding")}
                        >
                            Understanding
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
