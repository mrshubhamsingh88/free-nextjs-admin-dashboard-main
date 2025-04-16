"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceAdventure: React.FC = () => {
    const [started, setStarted] = useState(false);
    const [phase, setPhase] = useState(0);
    const [stars, setStars] = useState<{ x: number; y: number; size: number; speed: number; opacity: number }[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Generate stars
    useEffect(() => {
        if (containerRef.current) {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const newStars = Array.from({ length: 200 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.7 + 0.3,
            }));

            setStars(newStars);
        }
    }, []);

    // Progress through the adventure phases
    useEffect(() => {
        if (started && phase < 5) {
            const timer = setTimeout(() => {
                setPhase(prev => prev + 1);
            }, phase === 0 ? 1000 : 4000);

            return () => clearTimeout(timer);
        }
    }, [started, phase]);

    // Start the adventure
    const startAdventure = () => {
        setStarted(true);
    };

    // Reset the adventure
    const resetAdventure = () => {
        setPhase(0);
        setStarted(false);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-screen h-screen overflow-hidden bg-black"
            style={{
                background: 'linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
            }}
        >
            {/* Stars */}
            {stars.map((star, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: star.size,
                        height: star.size,
                        x: star.x,
                        y: star.y,
                        opacity: star.opacity,
                    }}
                    animate={{
                        y: [star.y, star.y + 50],
                        opacity: [star.opacity, star.opacity * 0.5, star.opacity],
                    }}
                    transition={{
                        duration: 5 / star.speed,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Cosmic Dust Particles */}
            <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                        key={`dust-${index}`}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Welcome Screen */}
            {!started && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <motion.h1
                        className="text-6xl font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Hye ❣️ Princess 👑
                    </motion.h1>
                    <motion.p
                        className="text-xl text-blue-200 mb-12 max-w-md text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Ready for a surprise? ✨
                    </motion.p>
                    <motion.button
                        className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-full hover:bg-indigo-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                        onClick={startAdventure}
                    >
                        Yes Please! 🚀
                    </motion.button>
                </div>
            )}

            {/* Adventure Sequence */}
            <AnimatePresence>
                {started && (
                    <>
                        {/* Phase 0: Fade in */}
                        {phase === 0 && (
                            <motion.div
                                className="absolute inset-0 bg-black z-20"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 2 }}
                            />
                        )}

                        {/* Phase 1: Title Sequence */}
                        {phase === 1 && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.h1
                                    className="text-7xl font-bold text-white tracking-wider"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: [0.8, 1.2, 1],
                                        opacity: [0, 1, 1],
                                    }}
                                    exit={{ scale: 2, opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        times: [0, 0.7, 1]
                                    }}
                                >
                                    A new world awaits us...
                                </motion.h1>
                            </motion.div>
                        )}

                        {/* Phase 2: Flying Through Stars */}
                        {phase === 2 && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center perspective-1000 z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="w-full h-80 relative overflow-hidden"
                                    style={{ perspectiveOrigin: 'center' }}
                                >
                                    {Array.from({ length: 100 }).map((_, i) => (
                                        <motion.div
                                            key={`flystar-${i}`}
                                            className="absolute rounded-full bg-white"
                                            style={{
                                                width: Math.random() * 4 + 1,
                                                height: Math.random() * 4 + 1,
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                opacity: Math.random() * 0.8 + 0.2,
                                            }}
                                            animate={{
                                                z: [2000, -1000],
                                                scale: [0, 3],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: Math.random() * 2 + 3,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                ease: "linear",
                                                delay: Math.random() * 2,
                                            }}
                                        />
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-20 left-0 right-0 text-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <p className="text-white text-2xl italic">
                                        Our journey begins...
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Phase 3: Planet Discovery */}
                        {phase === 3 && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 relative"
                                    initial={{ scale: 0.1, x: '100vw' }}
                                    animate={{
                                        scale: 1,
                                        x: 0,
                                        boxShadow: [
                                            "0 0 0px rgba(59, 130, 246, 0.5)",
                                            "0 0 80px rgba(59, 130, 246, 0.5)",
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeOut"
                                    }}
                                >
                                    {/* Planet craters/details */}
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <motion.div
                                            key={`crater-${i}`}
                                            className="absolute rounded-full bg-blue-300 opacity-40"
                                            style={{
                                                width: Math.random() * 40 + 10,
                                                height: Math.random() * 40 + 10,
                                                left: `${Math.random() * 80 + 10}%`,
                                                top: `${Math.random() * 80 + 10}%`,
                                            }}
                                        />
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-32 left-0 right-0 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2, duration: 1 }}
                                >
                                    <p className="text-white text-2xl font-light">
                                        I am here to make you happy 🥰
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Phase 4: Spaceship */}
                        {phase === 4 && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="relative"
                                    initial={{ x: -500, y: 100, rotate: 25 }}
                                    animate={{ x: 500, y: -100, rotate: -15 }}
                                    transition={{ duration: 5, ease: "easeInOut" }}
                                >
                                    {/* Spacecraft body */}
                                    <motion.div className="w-48 h-16 bg-gray-300 rounded-lg relative transform -rotate-12">
                                        {/* Cockpit */}
                                        <div className="absolute w-16 h-8 rounded-full bg-blue-400 left-2 top-4"></div>

                                        {/* Wings */}
                                        <div className="absolute w-24 h-6 bg-red-500 -left-4 -top-6 transform -rotate-12"></div>
                                        <div className="absolute w-24 h-6 bg-red-500 -left-4 bottom-16 transform rotate-12"></div>

                                        {/* Engines with glow effect */}
                                        <motion.div
                                            className="absolute w-8 h-8 rounded-r-full bg-yellow-500 -right-4 top-4"
                                            animate={{
                                                boxShadow: [
                                                    "0 0 10px rgba(252, 211, 77, 0.7), 0 0 20px rgba(252, 211, 77, 0.4)",
                                                    "0 0 15px rgba(252, 211, 77, 0.9), 0 0 30px rgba(252, 211, 77, 0.5)",
                                                    "0 0 10px rgba(252, 211, 77, 0.7), 0 0 20px rgba(252, 211, 77, 0.4)",
                                                ]
                                            }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />

                                        {/* Engine trails */}
                                        <motion.div
                                            className="absolute -right-24 top-6 w-20 h-4 rounded-full"
                                            style={{
                                                background: "linear-gradient(90deg, rgba(252,211,77,0.8) 0%, rgba(252,211,77,0) 100%)"
                                            }}
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 0.5, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-32 left-0 right-0 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <p className="text-white text-2xl font-light">
                                        Our vessel journeys through the stars...
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Phase 5: Final Message */}
                        {phase === 5 && (
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <motion.h2
                                    className="text-5xl font-bold text-white mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    Your Adventure Awaits
                                </motion.h2>

                                <motion.p
                                    className="text-xl text-blue-200 mb-12 max-w-lg text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2, duration: 1 }}
                                >
                                    I am here to make you feel special ❤️
                                </motion.p>

                                <motion.button
                                    className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-full hover:bg-indigo-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={resetAdventure}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3, duration: 1 }}
                                >
                                    I'm waiting for you! 🌌
                                </motion.button>
                            </motion.div>
                        )}
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SpaceAdventure;