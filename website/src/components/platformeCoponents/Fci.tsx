"use client";

import React from "react";
import { motion } from "framer-motion";

import magic from "@/public/platforme/magic.svg";
import search from "@/public/platforme/search.svg";
import recorder from "@/public/platforme/recorder.svg";

import task from "@/public/platforme/task.svg";
import draw from "@/public/platforme/draw.svg";
import smart from "@/public/platforme/smart.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import DpspCard from "./DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Fci = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: magic,
      alt: "magic",
      title: t("fci.card1.title"),
      description: t("fci.card1.description"),
    },
    {
      icon: recorder,
      alt: "recorder",
      title: t("fci.card2.title"),
      description: t("fci.card2.description"),
    },
    {
      icon: smart,
      alt: "smart",
      title: t("fci.card3.title"),
      description: t("fci.card3.description"),
    },
    {
      icon: search,
      alt: "search",
      title: t("fci.card4.title"),
      description: t("fci.card4.description"),
    },
    {
      icon: draw,
      alt: "draw",
      title: t("fci.card5.title"),
      description: t("fci.card5.description"),
    },
    {
      icon: task,
      alt: "task",
      title: t("fci.card6.title"),
      description: t("fci.card6.description"),
    },
  ];

  return (
    <section className="w-full  max-w-screen-2xl px-4 py-6 mt-7">
      <header className="w-full flex justify-center">
        <motion.h1
          className="font-bold pb-16 text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("fci.title")}
        </motion.h1>
      </header>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("fci.title1")}
      </motion.div>
      <motion.p
        className="pb-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: t("fci.description") }}
      ></motion.p>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("fci.title2")}
      </motion.div>

      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-grow sm:flex-grow-0 sm:w-[calc(33.333%-16px)]"
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
      <p className="mt-4 px-2">{t("fci.p")}</p>
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("fci.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#Professionnels"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("fci.link1")}
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
            {t("fci.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="#signature"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("fci.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Fci;
