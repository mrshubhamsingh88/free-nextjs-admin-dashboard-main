"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Permission() {
    const [showConfetti, setShowConfetti] = useState(false);
    const audioRef = useRef(null);

    const healingModes = [
        { 
            mode: "💬 Deep Conversation", 
            description: "Deep conversation is the best way to remove all problems and feel lighter.", 
            benefits: "🧘‍♂️ Reduces stress & anxiety 🤝 Strengthens bonds" 
        },
        { 
            mode: "🤗 Virtual Hug", 
            description: "A virtual hug feels like unsaid words—full of warmth, comfort, and love.", 
            benefits: "❤️ Reduces stress & anxiety 🧘‍♀️ Calms the nervous system 🤝 Strengthens closeness" 
        },
        { 
            mode: "🤝 Handshake", 
            description: "A handshake is a daily healing ritual that kickstarts the day with energy.", 
            benefits: "⚡ Gives a positive charge for the day" 
        },
        { 
            mode: "🌊 Deep Place", 
            description: "Healing through soothing emotions that come straight from the heart.", 
            benefits: "🧘‍♂️ Calms the nervous system 🤍 Builds deep connections" 
        },
        { 
            mode: "📞 Talking on the Call", 
            description: "Every call is a special moment—happiness in listening to each word.", 
            benefits: "😌 Improves sleep and mood 🥰 Strengthens emotional connection" 
        },
        { 
            mode: "😭 Crying", 
            description: "Ahh... when we don't talk, my eyes hold back a storm of tears. And when we start, they fall like rain.", 
            benefits: "😌 Relieves stress & tension ❤️ Brings hearts closer" 
        }
    ];

    const floatingEmojis = ["🦋", "✨", "🌸", "🍃", "☁️", "🎵", "💖", "🌞", "🌊", "🌙", "🔮"];
    const particles = ["🌟", "🌙", "⭐", "✨", "💫"];

    return (
        <div className="relative p-6 overflow-hidden min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-pink-200 via-purple-300 to-pink-100">

            {/* Animated Background */}
            {/* <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-300 opacity-30"
                animate={{ backgroundPosition: ["-200% 0%", "200% 0%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            /> */}

            {/* Healing Modes Table */}
            <motion.div 
                className="w-full max-w-4xl mt-4 bg-white shadow-lg rounded-xl p-6 border-2 border-pink-400 hover:shadow-2xl transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-pink-700 mb-4 text-center animate__animated animate__fadeIn">
                    💆‍♀️ Healing Modes
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-pink-500 rounded-xl">
                        <thead>
                            <tr className="bg-pink-300 text-white">
                                <th className="border border-pink-500 p-3">Mode Name</th>
                                <th className="border border-pink-500 p-3 w-1/2">Description</th>
                                <th className="border border-pink-500 p-3 w-1/3">Benefits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {healingModes.map((mode, index) => (
                                <motion.tr 
                                    key={index} 
                                    className="bg-white hover:bg-pink-100 transition-all text-center"
                                    whileHover={{ scale: 1.05, backgroundColor: "#fbb6ce" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <td className="border p-3">{mode.mode}</td>
                                    <td className="border p-3">{mode.description}</td>
                                    <td className="border p-3">{mode.benefits}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Floating Emojis */}
            <div className="floating-icons absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                        }}
                        animate={{
                            y: [0, -30, 30, 0],
                            x: [0, -20, 20, 0],
                            opacity: [0.8, 1, 0.8],
                            rotate: [0, 45, -45, 0],
                            scale: [1, 1.2, 1],
                        }}
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

            {/* Confetti */}
            {showConfetti && <Confetti />}

            {/* Particle Effects */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                    }}
                    animate={{
                        y: [0, -10, 10, 0],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: Math.random() * 3 + 1.5,
                        ease: "easeInOut",
                    }}
                >
                    {particles[i % particles.length]}
                </motion.div>
            ))}

            {/* Trigger Confetti on Button Click */}
            <motion.button
                className="absolute bottom-10 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition-all"
                onClick={() => setShowConfetti(!showConfetti)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                🎉 Celebrate!
            </motion.button>
        </div>
    );
}
