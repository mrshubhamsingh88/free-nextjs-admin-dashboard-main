"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DemographicCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/country/Rose-min.jpg",
    "/images/country/Dahlia-min.jpg",
    "/images/country/Orchid-min.jpg",
    "/images/country/Lily-min.jpg",
    "/images/country/Lotus-min.jpg",
    "/images/country/Carnation-min.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  function nextImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 h-[600px] sm:p-8 flex flex-col justify-start dark:border-gray-800 dark:bg-white/[0.03] shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        💖 Beautiful flowers for a beautiful 🐼
      </h2>

      <div className="relative w-full flex-grow">
        <div className="flex justify-center items-center relative h-full">
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 text-gray-700 bg-white/70 dark:bg-white/10 p-2 rounded-full hover:bg-white/90 transition"
          >
            &#10094;
          </button>

          <div className="w-full max-w-2xl h-[400px] relative overflow-hidden rounded-xl shadow-md">
            <Image
              src={images[currentImageIndex]}
              alt={`Flower Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 text-gray-700 bg-white/70 dark:bg-white/10 p-2 rounded-full hover:bg-white/90 transition"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
