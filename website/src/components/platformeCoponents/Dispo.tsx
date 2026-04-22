"use client";

import React from "react";
import { motion } from "framer-motion";

import light from "@/public/platforme/light.svg";
import filming from "@/public/platforme/filming.svg";
import sync from "@/public/platforme/sync.svg";
import money from "@/public/platforme/money.svg";
import clock from "@/public/platforme/clock2.svg";
import location from "@/public/platforme/location.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import DpspCard from "./DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Dispo = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: light,
      alt: "light",
      title: t("dispo.card1.title"),
      description: t("dispo.card1.description"),
    },
    {
      icon: money,
      alt: "money",
      title: t("dispo.card2.title"),
      description: t("dispo.card2.description"),
    },
    {
      icon: filming,
      alt: "filming",
      title: t("dispo.card3.title"),
      description: t("dispo.card3.description"),
    },
    {
      icon: sync,
      alt: "sync",
      title: t("dispo.card4.title"),
      description: t("dispo.card4.description"),
    },
    {
      icon: clock,
      alt: "clock",
      title: t("dispo.card5.title"),
      description: t("dispo.card5.description"),
    },
    {
      icon: location,
      alt: "location",
      title: t("dispo.card6.title"),
      description: t("dispo.card6.description"),
    },
  ];

  return (
    <section className="w-full  max-w-screen-2xl p-6 pt-14">
      <header className="w-full flex justify-center">
        <motion.h1
          className="font-bold pb-14 text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("dispo.title")}
        </motion.h1>
      </header>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("dispo.title1")}
      </motion.div>
      <motion.p
        className="pb-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: t("dispo.description") }}
      ></motion.p>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("dispo.title2")}
      </motion.div>

      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap justify-center gap-6">
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
      <p className="mt-4 px-2">{t("dispo.p")}</p>
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("dispo.note")}
          </motion.span>
        </div>
      </div>
      <div
        id="help-Ai"
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
            {t("dispo.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#patient"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("dispo.link2")}
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
          <span
            id="sante"
            className="text-label-large font-medium text-light-primary leading-relaxed"
          >
            {t("dispo.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Dispo;
