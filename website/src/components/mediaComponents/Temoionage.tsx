"use client";

import React from "react";
import { motion } from "framer-motion";
import lamp from "@/public/home/lampp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import manLight from "@/public/platforme/manLight.svg";
import filming from "@/public/platforme/filming.svg";
import chat from "@/public/platforme/chat.svg";
import earth from "@/public/platforme/earth.svg";
import ecoute from "@/public/platforme/ecoute.svg";

import DpspCard from "../platformeCoponents/DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Testimony = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: ecoute,
      alt: "ecoute",
      title: t("medias.testimony.card1.title"),
      description: t("medias.testimony.card1.description"),
    },
    {
      icon: manLight,
      alt: "manLight",
      title: t("medias.testimony.card2.title"),
      description: t("medias.testimony.card2.description"),
    },
    {
      icon: chat,
      alt: "chat",
      title: t("medias.testimony.card3.title"),
      description: t("medias.testimony.card3.description"),
    },
    {
      icon: earth,
      alt: "earth",
      title: t("medias.testimony.card4.title"),
      description: t("medias.testimony.card4.description"),
    },
    {
      icon: filming,
      alt: "filming",
      title: t("medias.testimony.card5.title"),
      description: t("medias.testimony.card5.description"),
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
        {t("medias.testimony.title")}
      </motion.span>
      <motion.p
        className="pb-5 pt-3 sm:px-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("medias.testimony.description")}
      </motion.p>
      <motion.span
        className="pt-4 sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("medias.testimony.title2")}
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
          <Image alt="filming" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("medias.testimony.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/community"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("medias.testimony.link1")}
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
            {t("medias.testimony.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/mt-academy#tutoriel"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("medias.testimony.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 px-8 text-center">{t("medias.testimony.p")}</p>
      <p className="mt-1 mb-9 px-8 text-center">{t("medias.testimony.p2")}</p>
    </section>
  );
};

export default Testimony;
