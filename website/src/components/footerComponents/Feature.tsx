"use client";

import React from "react";
import { motion } from "framer-motion";
import lamp from "@/public/home/lampp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lang from "@/public/platforme/lang.svg";
import devices from "@/public/platforme/devices.svg";
import apartement from "@/public/platforme/apartement.svg";
import dashb from "@/public/platforme/dashb.svg";
import search from "@/public/platforme/search.svg";

import verified from "@/public/platforme/verified.svg";
import params from "@/public/platforme/params.svg";
import syncLocally from "@/public/platforme/syncLocally.svg";
import insertChart from "@/public/platforme/insertChart.svg";

import DpspCard from "../platformeCoponents/DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Feature = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: search,
      alt: "search",
      title: t("features.card1.title"),
      description: t("features.card1.description"),
    },
    {
      icon: lang,
      alt: "lang",
      title: t("features.card2.title"),
      description: t("features.card2.description"),
    },
    {
      icon: devices,
      alt: "devices",
      title: t("features.card3.title"),
      description: t("features.card3.description"),
    },
    {
      icon: apartement,
      alt: "apartement",
      title: t("features.card4.title"),
      description: t("features.card4.description"),
    },
    {
      icon: dashb,
      alt: "dashb",
      title: t("features.card5.title"),
      description: t("features.card5.description"),
    },
    {
      icon: verified,
      alt: "verified",
      title: t("features.card6.title"),
      description: t("features.card6.description"),
    },
    {
      icon: params,
      alt: "params",
      title: t("features.card7.title"),
      description: t("features.card7.description"),
    },
    {
      icon: syncLocally,
      alt: "syncLocally",
      title: t("features.card8.title"),
      description: t("features.card8.description"),
    },
    {
      icon: insertChart,
      alt: "insertChart",
      title: t("features.card9.title"),
      description: t("features.card9.description"),
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
        {t("features.title3")}
      </motion.span>
      <motion.p
        className="pb-5 pt-3 sm:px-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("features.description")}
      </motion.p>
      <motion.span
        className="pt-4 sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("features.title2")}
      </motion.span>
      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap mt-4 justify-center gap-4">
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
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="filming" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("features.note")}
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
            {t("features.link1")}
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
            {t("features.link2")}
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
            {t("features.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 px-8 text-center">{t("features.p")}</p>
    </section>
  );
};

export default Feature;
