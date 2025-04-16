"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/button/Button";
import { Stepper, Step } from "@/components/ui/stepper/stepper";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";

function PermissionPopup({ showPopup, setShowPopup }) {
    return (
        <AnimatePresence>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white p-6 rounded-2xl shadow-lg text-center w-96 border-4 border-pink-300"
                    >
                        <h2 className="text-lg font-bold text-pink-600">
                            Hey Beautiful Butterfly! 🦋💖
                        </h2>
                        <p className="text-gray-700 mt-2">
                            You’re a very important person! 🌟 This is the permission cycle designed by the <strong>Super Admin</strong>.
                            Right now, I have only <strong>Basic Permission</strong> 😢, but with your help, I can achieve <strong>all permissions</strong>!
                            Let’s become the <strong>cutest person</strong> together! 💖✨
                        </p>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1.05 }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="flex justify-center mt-4"
                        >
                            <Image
                                src="/images/logo/378b01ce424cf42baa1e37ef7f157e19.gif"
                                alt="Cute Butterfly"
                                width={100}
                                height={100}
                                className="mx-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-4"
                        >
                            <button
                                onClick={() => setShowPopup(false)}  // Button functionality to close the popup
                                className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 py-2 px-4 rounded-lg"
                            >
                                Let's See! 🚀
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

    );
}

export default function Permission() {
    const [activeStep, setActiveStep] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showPopup, setShowPopup] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [showStepper, setShowStepper] = useState(false);  // Added to control stepper display
    const audioRef = useRef(null);

    const steps = [
        "🔑 Basic Permission",
        "💎 Premium Permission",
        "👑 Super Premium Permission",
    ];

    // Function to move to the next step
    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
        if (activeStep === steps.length - 2) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 4000);
        }
    };

    // Function to go back to the previous step
    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    // Toggle music play and pause
    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Show greeting after 5 seconds and show stepper
    useEffect(() => {
        if (showPopup) {
            setTimeout(() => {
                setShowGreeting(true);
            }, 2000);  // Delay the greeting by 5 seconds
        }
    }, [showPopup]);

    useEffect(() => {
        if (showGreeting) {
            setTimeout(() => {
                setShowGreeting(false); // Hide greeting when stepper shows
                setShowStepper(true);  // Show stepper after greeting
            }, 5000);  // Delay showing the stepper after greeting by 2 seconds
        }
    }, [showGreeting]);

    return (
        <div className="relative p-6 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-pink-100 mb-10">
            {/* Floating Icons */}
            <div className="floating-icons">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                        }}
                        animate={{ y: [0, -20, 20, 0], opacity: [0.8, 1, 0.8] }}
                        transition={{
                            repeat: Infinity,
                            duration: Math.random() * 3 + 2,
                            ease: "easeInOut",
                        }}
                    >
                        {i % 2 === 0 ? "🦋" : "✨"}
                    </motion.div>
                ))}
            </div>

            {/* Music Control */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
                <button
                    className="bg-pink-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center"
                    onClick={toggleMusic}
                >
                    {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                </button>
                <span className="text-pink-600 font-semibold">Play</span>
            </div>

            {/* Background Music */}
            <audio ref={audioRef} loop>
                <source src="/images/logo/EnnaSona.mp3" type="audio/mpeg" />
            </audio>


            {/* Permission Popup */}
            <PermissionPopup showPopup={showPopup} setShowPopup={setShowPopup} />

            {/* Greeting */}
            {showGreeting && (
                <motion.div
                    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-pink-600 shadow-none text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi Beautiful! 💖
                    <br />
                    I can’t stop thinking about you. 🥰
                    <br />
                    You’re my sunshine on the cloudiest days ☀️☁️
                    <br />
                    You make my heart skip a beat 💓 and my world sparkle ✨
                    <br />
                    Every moment with you is magical 🦄💫
                    <br />
                    I’m so lucky to have you by my side 💕
                </motion.div>
            )}


            {/* Stepper */}
            {showStepper && (
                <>
                    {/* Panda Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-4"
                    >
                        <Image src="/images/logo/giphy.gif" alt="Cute Panda" width={150} height={150} />
                    </motion.div>

                    {/* Stepper */}
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={index} completed={index < activeStep}>
                                {label}
                            </Step>
                        ))}
                    </Stepper>

                    <div className="mt-6 text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-xl font-bold text-pink-600">{steps[activeStep]}</h2>
                                <p className="text-gray-600 mt-2">
                                    {activeStep === 0 && "🔑 Basic Access: Get started with essential features! 🚀"}
                                    {activeStep === 1 && "💎 Premium Access: Unlock extra permission & power-ups! 🔥"}
                                    {activeStep === 2 && "👑 Super Premium: Unlock everything! 🎉"}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-4 flex justify-center gap-4">
                            <Button onClick={handleBack} disabled={activeStep === 0}>
                                ⬅️ Back
                            </Button>
                            <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                                Next ➡️
                            </Button>
                        </div>

                        {activeStep === steps.length - 1 && (
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 text-green-600 text-xl font-bold"
                            >
                                🎉 Congratulations! Super admin You’ve unlocked all permissions! 👑✨
                            </motion.div>
                        )}
                    </div>
                </>
            )}


            {showConfetti && <Confetti />}
        </div>
    );
}
