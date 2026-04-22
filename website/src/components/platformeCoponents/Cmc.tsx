"use client";

import React from "react";
import { motion } from "framer-motion";

import filming from "@/public/platforme/filming.svg";
import heart from "@/public/platforme/heart.svg";
import folder from "@/public/platforme/folder.svg";
import ai from "@/public/platforme/ai.svg";
import lock from "@/public/platforme/lock.svg";
import apartement from "@/public/platforme/apartement.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import DpspCard from "./DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Cmc = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: filming,
      alt: "filming",
      title: t("cmc.card1.title"),
      description: t("cmc.card1.description"),
    },
    {
      icon: heart,
      alt: "heart",
      title: t("cmc.card2.title"),
      description: t("cmc.card2.description"),
    },
    {
      icon: folder,
      alt: "folder",
      title: t("cmc.card3.title"),
      description: t("cmc.card3.description"),
    },
    {
      icon: ai,
      alt: "ai",
      title: t("cmc.card4.title"),
      description: t("cmc.card4.description"),
    },
    {
      icon: lock,
      alt: "lock",
      title: t("cmc.card5.title"),
      description: t("cmc.card5.description"),
    },
    {
      icon: apartement,
      alt: "apartement",
      title: t("cmc.card6.title"),
      description: t("cmc.card6.description"),
    },
  ];

  return (
    <section className="w-full  max-w-screen-2xl pb-12 pt-6">
      <header className="w-full flex justify-center">
        <motion.h1
          className="p-6 font-bold pb-14 text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("cmc.title")}
        </motion.h1>
      </header>
      <motion.div
        className="flex mb-2 text-center px-6 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("cmc.title1")}
      </motion.div>
      <motion.p
        className="pb-5 px-6 mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: t("cmc.description") }}
      ></motion.p>
      <motion.div
        className="flex mb-2 pl-6 md:pl-0 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("cmc.title2")}
      </motion.div>

      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap justify-center px-6 gap-4">
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
      <p className="mt-4 px-8">{t("cmc.p")}</p>
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 mx-8 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("cmc.note")}
          </motion.span>
        </div>
      </div>
      <div
        id="signature"
        className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-7 my-3"
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
            {t("cmc.link1")}
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
            {t("cmc.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/community"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("cmc.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Cmc;
