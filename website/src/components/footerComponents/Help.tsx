import React from "react";
import { useTranslation } from "react-i18next";
import FaqSection from "./FaqSection";

const HelpCentre = () => {
  const { t } = useTranslation();

  // Define multiple FAQ sections with different items
  const faqSections = [
    {
      title: t("help.faq.section1.title"),
      items: [
        {
          question: t("help.faq.section1.question1"),
          answer: t("help.faq.section1.answer")
        },
        {
          question: t("help.faq.section1.question2"),
          answer: t("help.faq.section1.answer2")
        }
      ]
    },
    {
      title: t("help.faq.section2.title"),
      items: [
         {
          question: t("help.faq.section2.question1"),
          answer: t("help.faq.section2.answer")
        },
        {
          question: t("help.faq.section2.question2"),
          answer: t("help.faq.section2.answer2")
        }
      ]
    },
    {
      title: t("help.faq.section3.title"),
      items: [
         {
          question: t("help.faq.section3.question1"),
          answer: t("help.faq.section3.answer")
        },
        {
          question: t("help.faq.section3.question2"),
          answer: t("help.faq.section3.answer2")
        }
      ]
    },
     {
      title: t("help.faq.section4.title"),
      items: [
         {
          question: t("help.faq.section4.question1"),
          answer: t("help.faq.section4.answer")
        },
        {
          question: t("help.faq.section4.question2"),
          answer: t("help.faq.section4.answer2")
        },
        {
          question: t("help.faq.section4.question3"),
          answer: t("help.faq.section4.answer3")
        }
      ]
    },
     {
      title: t("help.faq.section5.title"),
      items: [
         {
          question: t("help.faq.section5.question1"),
          answer: t("help.faq.section5.answer")
        },
        {
          question: t("help.faq.section5.question2"),
          answer: t("help.faq.section5.answer2")
        },
        {
          question: t("help.faq.section5.question3"),
          answer: t("help.faq.section5.answer3")
        }
      ]
    },
     {
      title: t("help.faq.section6.title"),
      items: [
        {
          question: t("help.faq.section6.question1"),
          answer: t("help.faq.section6.answer")
        },
        {
          question: t("help.faq.section6.question2"),
          answer: t("help.faq.section6.answer2")
        },
        {
          question: t("help.faq.section6.question3"),
          answer: t("help.faq.section6.answer3")
        }
      ]
    },
    // Add more sections as needed...
  ];

  return (
    <div className="w-full">
      <div className="space-y-8">
        {faqSections.map((section, index) => (
          <FaqSection
            key={index}
            title={section.title}
            faqItems={section.items}
            titleDelay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpCentre;