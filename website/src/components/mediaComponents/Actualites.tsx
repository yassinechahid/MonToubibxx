"use client";

import React from "react";
import { motion } from "framer-motion";
import lamp from "@/public/home/lampp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import ecoute from "@/public/platforme/ecoute.svg";
import suivi from "@/public/platforme/suivi.svg";
import school from "@/public/platforme/school.svg";
import insertChart from "@/public/platforme/insertChart.svg";
import lamp2 from "@/public/home/lamp.svg";

import DpspCard from "../platformeCoponents/DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Actuality = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: ecoute,
      alt: "ecoute",
      title: t("medias.actuality.card1.title"),
      description: t("medias.actuality.card1.description"),
    },
    {
      icon: lamp2,
      alt: "lamp2",
      title: t("medias.actuality.card2.title"),
      description: t("medias.actuality.card2.description"),
    },
    {
      icon: insertChart,
      alt: "insertChart",
      title: t("medias.actuality.card3.title"),
      description: t("medias.actuality.card3.description"),
    },
    {
      icon: school,
      alt: "school",
      title: t("medias.actuality.card4.title"),
      description: t("medias.actuality.card4.description"),
    },
    {
      icon: suivi,
      alt: "suivi",
      title: t("medias.actuality.card5.title"),
      description: t("medias.actuality.card5.description"),
    },
  ];

  return (
    <section className="w-full max-w-screen-2xl p-6">
      <motion.span
        className="pt-4 sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("medias.actuality.title")}
      </motion.span>
      <motion.p
        className="pb-5 pt-3 sm:px-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("medias.actuality.description")}
      </motion.p>
      <motion.span
        className="pt-4 sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("medias.actuality.title2")}
      </motion.span>
      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap mt-4 justify-center gap-4">
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
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="suivi" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("medias.actuality.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("medias.actuality.link1")}
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
            {t("medias.actuality.link2")}
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
            {t("medias.actuality.link3")}
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
            {t("medias.actuality.link4")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 px-8 text-center">{t("medias.actuality.p")}</p>
      <p className="mt-1 mb-9 px-8 text-center">{t("medias.actuality.p2")}</p>
    </section>
  );
};

export default Actuality;
