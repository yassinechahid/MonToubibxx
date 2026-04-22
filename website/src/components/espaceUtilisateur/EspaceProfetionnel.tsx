"use client";

import React from "react";
import { motion } from "framer-motion";
import lamp from "@/public/home/lamp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import folder from "@/public/platforme/folder.svg";
import draw from "@/public/platforme/draw.svg";
import language from "@/public/platforme/language.svg";
import smart from "@/public/platforme/smart.svg";
import apartement from "@/public/platforme/apartement.svg";
import chat from "@/public/platforme/chat.svg";

import DpspCard from "../platformeCoponents/DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const EspaceProfetionnel = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: chat,
      alt: "chat",
      title: t("espaceProfessionnel.card1.title"),
      description: t("espaceProfessionnel.card1.description"),
    },
    {
      icon: folder,
      alt: "folder",
      title: t("espaceProfessionnel.card2.title"),
      description: t("espaceProfessionnel.card2.description"),
    },
    {
      icon: smart,
      alt: "smart",
      title: t("espaceProfessionnel.card3.title"),
      description: t("espaceProfessionnel.card3.description"),
    },
    {
      icon: apartement,
      alt: "apartement",
      title: t("espaceProfessionnel.card4.title"),
      description: t("espaceProfessionnel.card4.description"),
    },
    {
      icon: draw,
      alt: "draw",
      title: t("espaceProfessionnel.card5.title"),
      description: t("espaceProfessionnel.card5.description"),
    },
    {
      icon: language,
      alt: "language",
      title: t("espaceProfessionnel.card6.title"),
      description: t("espaceProfessionnel.card6.description"),
    },
  ];

  return (
    <section className="w-full max-w-screen-2xl p-6 pt-12">
      <header className="w-full  flex justify-center">
        <motion.h1
          className="font-bold pb-14 text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("espaceProfessionnel.title")}
        </motion.h1>
      </header>{" "}
      <motion.span
        className="pt-4 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("espaceProfessionnel.subtitle")}
      </motion.span>
      <motion.p
        className="pb-5 pt-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{
          __html: t("espaceProfessionnel.description"),
        }}
      ></motion.p>
      <motion.span
        className="pt-4 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("espaceProfessionnel.title2")}
      </motion.span>
      {/* ✅ FLEX layout with wrapping */}
      <div className="grid mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
        {cards.map((card, index) => (
          <div key={index}>
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
          <Image alt="lock" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("espaceProfessionnel.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center w-full sm:justify-between flex-col sm:flex-row items-center gap-4 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#Professionnels"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("espaceProfessionnel.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/platform#fci"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("espaceProfessionnel.link2")}
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
            {t("espaceProfessionnel.link3")}
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
            {t("espaceProfessionnel.link4")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-8 px-8 text-center">{t("espaceProfessionnel.p")}</p>
    </section>
  );
};

export default EspaceProfetionnel;
