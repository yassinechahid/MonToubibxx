"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import backgoundUnderHeader from "@/public/backgoundUnderHeader.png";

interface IntroProps {
  title: string;
  backgroundImage?: StaticImageData | string;
  minHeight?: string;
  textColor?: string;
  textSize?: string;
  className?: string;
}

export default function IntroComponent({
  title,
  backgroundImage = backgoundUnderHeader,
  minHeight = "min-h-[204px]",
  textColor = "text-light-primary",
  textSize = "text-display-small",
  className = "",
}: IntroProps) {
  return (
    <section
      className={`w-full relative flex justify-center items-center text-center mt-20 ${minHeight} ${className}`}
    >
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0" />

      <div className="absolute inset-0 flex justify-center items-center pt-14">
        <motion.h1
          className={`font-bold ${textSize} ${textColor}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
