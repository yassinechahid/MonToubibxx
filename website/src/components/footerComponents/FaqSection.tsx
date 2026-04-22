import React, { useState } from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqItems: FaqItem[];
  titleDelay?: number;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  faqItems,
  titleDelay = 0.2,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-full">
      <motion.div
        className="pt-4 sm:px-2 pb-6 text-center w-full text-light-primary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: titleDelay, duration: 0.5 }}
      >
        {title}
      </motion.div>

      <div className="w-full space-y-2">
        {faqItems.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="bg-light-surfaceContainerLowest shadow-md rounded-xl overflow-hidden w-full"
            >
              <div
                className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-light-surfaceContainerLow transition-colors duration-200 min-h-[72px]"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-light-tertiary text-lg font-bold pr-4 flex-grow">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 w-[14px] h-[14px] flex items-center justify-center">
                  <div className="relative w-4 h-4">
                    <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-light-onSurface transform -translate-y-1/2" />
                    <div
                      className="absolute left-1/2 top-0 w-[1.5px] h-full bg-light-onSurface transform -translate-x-1/2 transition-all duration-300 ease-out"
                      style={{
                        transform: `translateX(-50%) scaleY(${
                          isExpanded ? 0 : 1
                        })`,
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: isExpanded ? "1000px" : "0px",
                  opacity: isExpanded ? 1 : 0,
                  transitionProperty: "max-height, opacity",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <motion.p
                  className="text-light-onSurfaceVarian px-6 pb-4 pt-2"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  dangerouslySetInnerHTML={{
                    __html: item.answer,
                  }}
                ></motion.p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
