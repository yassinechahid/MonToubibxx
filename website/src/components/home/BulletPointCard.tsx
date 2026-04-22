"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
interface BulletPointCardProps {
  title: string;
  bulletPoints: string[];
  blackPoints?: string;
}

export default function BulletPointCard({
  title,
  bulletPoints = [],
  blackPoints = "/user-area",
}: BulletPointCardProps) {
  const pathname = usePathname();
  const shouldShowRedBullets = blackPoints && pathname === blackPoints;
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
      className="flex flex-col bg-light-surfaceContainerLowest rounded-2xl p-6 gap-3 w-full h-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)] cursor-pointer"
    >
      <div className="flex flex-col gap-2 flex-1">
        <motion.span
          className="font-roboto font-bold text-title-large text-light-primary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.span>

        {/* Bullet points list */}
        {bulletPoints.length > 0 && (
          <ul className="space-y-2 mt-2 ml-2">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="text-body-medium text-light-onSurfaceVariant flex items-start"
              >
                <span
                  className={`mr-2 ${
                    shouldShowRedBullets
                      ? "text-light-onSurfaceVariant"
                      : "text-light-primary"
                  }`}
                >
                  •
                </span>
                <span>{point.replace("• ", "")}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
