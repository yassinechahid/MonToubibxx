"use client";
import React from "react";
import IntroComponent from "@/components/IntroComponent";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DpspCard from "@/components/platformeCoponents/DpspCard";
import Image from "next/image";
import exclamation from "@/public/platforme/exclamation.svg";

interface TextSectionProps {
  titleKey: string;
  descriptionKey: string;
  translation: (key: string) => string;
  isHTML?: boolean;
}

const TextSection = ({
  titleKey,
  descriptionKey,
  translation,
  isHTML = false,
}: TextSectionProps) => {
  const content = translation(descriptionKey);

  if (isHTML) {
    return (
      <>
        <motion.div
          className="text-light-tertiary w-full font-bold text-title-large mt-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {translation(titleKey)}
        </motion.div>
        <motion.p
          className="text-light-onSurfaceVariant w-full font-normal text-body-large mt-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: content }}
        ></motion.p>
      </>
    );
  }

  return (
    <>
      <motion.div
        className="text-light-tertiary w-full font-bold text-title-large mt-7"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {translation(titleKey)}
      </motion.div>
      <motion.p
        className="text-light-onSurfaceVariant w-full font-normal text-body-large mt-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {content}
      </motion.p>
    </>
  );
};

const Compliance = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("compliance.cards1.title1"),
      description: t("compliance.cards1.description1"),
    },
    {
      title: t("compliance.cards1.title2"),
      description: t("compliance.cards1.description2"),
    },
  ];
  const cards2 = [
    {
      title: t("compliance.cards2.title1"),
      description: t("compliance.cards2.description1"),
    },
    {
      title: t("compliance.cards2.title2"),
      description: t("compliance.cards2.description2"),
    },
    {
      title: t("compliance.cards2.title3"),
      description: t("compliance.cards2.description3"),
    },
    {
      title: t("compliance.cards2.title4"),
      description: t("compliance.cards2.description4"),
    },
  ];
  const cards3 = [
    {
      title: t("compliance.cards3.title1"),
      description: t("compliance.cards3.description1"),
    },
    {
      title: t("compliance.cards3.title2"),
      description: t("compliance.cards3.description2"),
    },
    {
      title: t("compliance.cards3.title3"),
      description: t("compliance.cards3.description3"),
    },
    {
      title: t("compliance.cards3.title4"),
      description: t("compliance.cards3.description4"),
    },
  ];
  const cards4 = [
    {
      title: t("compliance.cards4.title1"),
      description: t("compliance.cards4.description1"),
    },
    {
      title: t("compliance.cards4.title2"),
      description: t("compliance.cards4.description2"),
    },
    {
      title: t("compliance.cards4.title3"),
      description: t("compliance.cards4.description3"),
    },
  ];
  const cards5 = [
    {
      title: t("compliance.cards5.title1"),
      description: t("compliance.cards5.description1"),
    },
    {
      title: t("compliance.cards5.title2"),
      description: t("compliance.cards5.description2"),
    },
  ];

  return (
    <main
      id="security"
      className="flex flex-col bg-light-background items-center justify-center pb-12"
    >
      <IntroComponent
        title={t("compliance.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl px-6">
        <motion.div
          className="pt-6 text-light-tertiary font-bold text-title-large"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title2")}
        </motion.div>
        <motion.p
          className="text-light-onSurfaceVarian pt-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          dangerouslySetInnerHTML={{
            __html: t("compliance.description1"),
          }}
        ></motion.p>
        <motion.div
          className="pt-6 text-light-tertiary font-bold text-title-large"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title3")}
        </motion.div>
        <motion.p
          className="text-light-onSurfaceVarian pt-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          dangerouslySetInnerHTML={{
            __html: t("compliance.description2"),
          }}
        ></motion.p>
        <header className="flex pb-16 pt-20 justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="font-bold text-display-small text-light-primary text-center">
              {t("compliance.title4")}
            </h1>
          </motion.span>
        </header>
        <motion.div
          className="text-light-tertiary font-bold text-title-large"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title1")}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {cards.map((card, index) => (
            <div key={index} className="grid">
              <DpspCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
        <motion.div
          className="text-light-tertiary font-bold text-title-large mt-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title5")}
        </motion.div>
        <div
          id="conformite"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        >
          {cards2.map((card, index) => (
            <div key={index} className="grid">
              <DpspCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
        <motion.div
          className="text-light-tertiary font-bold text-title-large mt-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title6")}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {cards3.map((card, index) => (
            <div key={index} className="grid">
              <DpspCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
        <motion.div
          className="text-light-tertiary font-bold text-title-large mt-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title7")}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {cards4.map((card, index) => (
            <div key={index} className="grid">
              <DpspCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
        <motion.div
          className="text-light-primary text-center font-bold text-headline-medium mt-16 mb-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title8")}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {cards5.map((card, index) => (
            <div key={index} className="grid">
              <DpspCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
        <motion.div
          className="bg-light-secondaryContainer mt-6 rounded-2xl p-5 flex gap-3 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mt-1">
            <Image alt="lock" src={exclamation} />
          </div>

          <div className="">
            <h1 className="flex gap-3 text-center text-light-primary text-title-medium font-semibold items-center">
              {t("compliance.noteTitle")}
            </h1>
            <p className="text-body-large text-light-onSecondaryContainer">
              {t("compliance.description")}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="text-light-primary text-center font-bold text-headline-medium mt-16 mb-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title9")}
        </motion.div>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <TextSection
            key={`sec1-${num}`}
            titleKey={`compliance.t${num}`}
            descriptionKey={`compliance.desc${num}`}
            translation={t}
          />
        ))}

        <motion.div
          className="text-light-primary text-center font-bold text-headline-medium mt-16 mb-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("compliance.title10")}
        </motion.div>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <TextSection
            key={`sec2-${num}`}
            titleKey={`compliance.tt${num}`}
            descriptionKey={`compliance.d${num}`}
            translation={t}
          />
        ))}
      </div>
    </main>
  );
};

export default Compliance;
