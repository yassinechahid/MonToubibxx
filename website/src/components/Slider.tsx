"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import leftArrow from "@/public/home/leftArrow.svg";
import rightArrow from "@/public/home/rightArrow.svg";

import { ecosystems } from "./home/Data";

export default function EcosystemseSlider() {
  const { t, i18n } = useTranslation();

  const ecosystemsData = ecosystems.map((eco) => ({
    src: eco.src,
    name: t(eco.nameKey),
    description: t(eco.descriptionKey),
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  
  // Determine if language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ecosystemsData.length - 1 : prevIndex - 1
    );
  }, [ecosystemsData.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ecosystemsData.length - 1 ? 0 : prevIndex + 1
    );
  }, [ecosystemsData.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality - 4 seconds
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [paused, goToNext]);

  const currentEco = ecosystemsData[currentIndex];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <button
        onClick={isRTL ? goToNext : goToPrevious}
        className="absolute left-6 top-1/2 p-3 rounded-full -translate-y-1/2 z-10 border border-light-outline text-white hover:bg-black/20"
      >
        <Image src={leftArrow} alt="Next" />
      </button>
      <button
        onClick={isRTL ? goToPrevious : goToNext}
        className="absolute right-6 top-1/2 p-3 -translate-y-1/2 z-10 rounded-full border border-light-outline text-white hover:bg-black/20"
      >
        <Image src={rightArrow} alt="Next" />
      </button>

      {/* Slider Content */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-8 md:px-20 p-6 mx-14">
          {/* Text container - order changes based on RTL */}
          <div className={`w-full md:w-1/2 shadow-md rounded-2xl p-4 sm:p-6 bg-light-surfaceContainerLowest flex flex-col justify-center ${
            isRTL ? 'order-1 text-right' : 'order-2 text-left'
          }`}>
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-title-medium font-bold text-light-primary mb-3">
                {currentEco.name}
              </h3>
              <div
                className="text-light-onSurfaceVariant text-body-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentEco.description }}
              />
            </motion.div>
          </div>

          {/* Image container - order changes based on RTL */}
          <div className={`w-full md:w-1/2 flex justify-center items-center ${
            isRTL ? 'order-2' : 'order-1'
          }`}>
            <motion.div
              key={`image-${currentIndex}`}
              className="relative w-full h-[300px] rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={currentEco.src}
                alt={currentEco.name}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Dots Navigation - Reversed for RTL */}
      <div className={`flex justify-center mt-4 gap-3`}>
        {ecosystemsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="flex items-center justify-center w-4 h-4"
            aria-label={isRTL ? `اذهب للشريحة ${index + 1}` : `Go to slide ${index + 1}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-light-primary scale-125"
                  : "bg-light-secondaryContainer hover:bg-light-primary/70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}