"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ServiceCardProps } from "@/types/children";

interface DpspCardProps extends Omit<ServiceCardProps, "icon" | "alt"> {
  centered?: boolean;
  icon?: string;
  arrow?: string;
  link?: string;
  alt?: string;
}

export default function DpspCard({
  title,
  description,
  centered = false,
  icon,
  arrow,
  link,
  alt = "icon",
}: DpspCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      }}
      whileHover={{
        boxShadow:
          "0px 2px 6px 0px rgba(0,0,0,0.4), 0px 8px 12px 6px rgba(0,0,0,0.15)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className={`flex flex-col bg-light-surfaceContainerLowest min-h-40 element4 rounded-2xl p-6 gap-3 w-full h-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)] cursor-pointer
      `}
    >
      <div
        className={`flex flex-col gap-2 flex-1 ${
          centered ? "text-center items-center" : ""
        }`}
      >
        {icon && (
          <motion.div
            className="mb-2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image src={icon} alt={alt} />
          </motion.div>
        )}

        <motion.span
          className="font-roboto font-bold text-title-large text-light-primary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.span>

        <motion.span
          className="font-roboto font-normal min-h-[50px] text-body-large text-light-onSurfaceVariant leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></motion.span>
        {arrow && (
          <div className="flex gap-2 text-light-primary text-label-large font-medium">
            <h1>{link}</h1> <Image alt="arrow" src={arrow} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
