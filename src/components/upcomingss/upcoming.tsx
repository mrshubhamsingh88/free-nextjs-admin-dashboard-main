"use client";
import { useState } from "react";
import Confetti from "react-confetti";

export default function SurpriseGift() {
  const [stage, setStage] = useState(0); // Stages: 0 = Initial, 1 = Shaking, 2 = Message, 3 = Gift Image
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // Custom modal popup state

  const startAnimation = () => {
    setShowPopup(false); // Close the popup
    setStage(1); // Start animation
    setShowConfetti(true);

    setTimeout(() => {
      setStage(2); // Show heartfelt message
      setShowHearts(true);
    }, 2000);

    setTimeout(() => {
      setStage(3); // Show final gift image
      setShowConfetti(false);
      setShowHearts(false);
    }, 7000);
  };

  return (
    <div className={`gift-container stage-${stage}`}>
      {/* Background Update */}
      <div
        className={`fixed inset-0 transition-all duration-700 ${stage > 0 ? "bg-gradient-to-r from-pink-500 to-red-500" : "bg-gray-200"
          }`}
      />

      {showConfetti && (
        <div className="relative w-full h-screen overflow-hidden">
          <Confetti numberOfPieces={250} gravity={0.3} />
        </div>
      )}

      {stage === 2 && (
        <div className="message fade-in heart-text text-white text-center p-4">
          <p className="text-3xl font-extrabold font-serif tracking-wide text-white">
            🎁 <span className="italic">This is your virtual gift!</span>
          </p>
          <br />
          <p className="text-2xl font-cursive text-white">
            ❤️ <span className="underline decoration-wavy">I wish I could give it to you in real life!</span> 💖
          </p>
          <br />
          <p className="text-3xl font-mono font-semibold animate-pulse text-white">
            🌟 <span className="uppercase">You are special & appreciated!</span> 🌟
          </p>
        </div>
      )}

      {/* Custom Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-xl">
            <p className="text-lg font-semibold">🎁 Do you want to see your surprise?</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={startAnimation}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Yes! 🎉
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                No 😞
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gift Icon */}
      {stage === 0 && (
        <div className="gift-icon pulse" onClick={() => setShowPopup(true)}>
          <img
            src="/images/logo/8b39138125fa54d443085a30d9ca7001.gif"
            alt="Closed Gift Box"
            className="gift-icon-animate shake"
          />
          <p className="click-text">Click to Open 🎁</p>
        </div>
      )}



      {/* Floating Hearts */}
      {/* {showHearts && (
        <div className="floating-hearts text-4xl animate-bounce">
          <span>❤️</span>
          <span>💖</span>
          <span>💝</span>
          <span>💗</span>
        </div>
      )} */}

      {/* Gift Image */}
      {stage === 3 && (
        <img
          src="/images/logo/2ebea115-ba72-4f69-90cb-a55dd4451265.jpg"
          alt="Virtual Gift"
          className="gift-image fade-in twinkle mx-auto w-64 h-64"
        />
      )}

      {/* Sad Emoji if user clicked 'No' */}
      {stage === 0 && !showPopup && (
        <div className="text-center text-xl text-gray-700 mt-6">
          😞 Oh no! Maybe next time.
        </div>
      )}
    </div>
  );
}
