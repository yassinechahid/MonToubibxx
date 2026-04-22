"use client";

import { motion } from "framer-motion";
import React from "react";

import recorder from "@/public/platforme/recorder.svg";
import magic from "@/public/platforme/magic.svg";
import chat from "@/public/platforme/chat.svg";
import chart from "@/public/platforme/chart.svg";
import lock from "@/public/platforme/lock.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import DpspCard from "./DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const IaSante = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: recorder,
      alt: "recorder",
      title: t("iaSante.card1.title"),
      description: t("iaSante.card1.description"),
    },
    {
      icon: magic,
      alt: "magic",
      title: t("iaSante.card2.title"),
      description: t("iaSante.card2.description"),
    },
    {
      icon: chat,
      alt: "chat",
      title: t("iaSante.card3.title"),
      description: t("iaSante.card3.description"),
    },
    {
      icon: chart,
      alt: "chart",
      title: t("iaSante.card4.title"),
      description: t("iaSante.card4.description"),
    },
    {
      icon: lock,
      alt: "lock",
      title: t("iaSante.card5.title"),
      description: t("iaSante.card5.description"),
    },
  ];

  return (
    <section className="w-full  max-w-screen-2xl p-6 pt-14">
      <header className="w-full flex justify-center">
        <motion.h1
          className="font-bold pb-14 text-center text-light-primary 
               text-headline-medium"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("iaSante.title")}
        </motion.h1>
      </header>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("iaSante.title1")}
      </motion.div>
      <motion.p
        className="pb-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: t("iaSante.description") }}
      ></motion.p>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("iaSante.title2")}
      </motion.div>

      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-grow sm:flex-grow-0 sm:w-[calc(33.333%-16px)] 
                  ${index >= cards.length - 2 ? "sm:w-[calc(50%-14px)]" : ""}`}
          >
            <DpspCard
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 px-2">{t("iaSante.p")}</p>
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("iaSante.note")}
          </motion.span>
        </div>
      </div>
      <div
        id="mrss"
        className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3"
      >
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("iaSante.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("iaSante.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("iaSante.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default IaSante;
