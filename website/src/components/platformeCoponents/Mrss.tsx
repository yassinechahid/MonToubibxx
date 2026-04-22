"use client";

import React from "react";
import { motion } from "framer-motion";

import ecoute from "@/public/platforme/ecoute.svg";
import groups from "@/public/platforme/groups.svg";
import manLight from "@/public/platforme/manVerifier.svg";
import galery from "@/public/platforme/galery.svg";
import brain from "@/public/platforme/brain.svg";
import filming from "@/public/platforme/filming.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import DpspCard from "./DpspCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import Image from "next/image";

const Mrss = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: groups,
      alt: "groups",
      title: t("mrss.card1.title"),
      description: t("mrss.card1.description"),
    },
    {
      icon: galery,
      alt: "galery",
      title: t("mrss.card2.title"),
      description: t("mrss.card2.description"),
    },
    {
      icon: brain,
      alt: "brain",
      title: t("mrss.card3.title"),
      description: t("mrss.card3.description"),
    },
    {
      icon: manLight,
      alt: "casedrug",
      title: t("mrss.card4.title"),
      description: t("mrss.card4.description"),
    },
  ];
  const cards2 = [
    {
      icon: ecoute,
      alt: "ecoute",
      title: t("mrss.cards2.card1.title"),
      description: t("mrss.cards2.card1.description"),
    },
    {
      icon: galery,
      alt: "galery",
      title: t("mrss.cards2.card2.title"),
      description: t("mrss.cards2.card2.description"),
    },
    {
      icon: filming,
      alt: "filming",
      title: t("mrss.cards2.card3.title"),
      description: t("mrss.cards2.card3.description"),
    },
    {
      icon: manLight,
      alt: "manLight",
      title: t("mrss.cards2.card4.title"),
      description: t("mrss.cards2.card4.description"),
    },
  ];

  return (
    <section className="w-full max-w-screen-2xl p-6 pt-10">
      <header className="w-full flex justify-center">
        <motion.h1
          className="font-bold pb-14 text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("mrss.title")}
        </motion.h1>
      </header>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mrss.title1")}
      </motion.div>
      <motion.p
        className="pb-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: t("mrss.description") }}
      ></motion.p>
      <motion.div
        className="flex mb-2 justify-center text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mrss.title2")}
      </motion.div>
      <motion.div
        className="flex mb-2 text-light-secondary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mrss.title3")}
      </motion.div>
      <p className="mt-4 px-2 mb-3">{t("mrss.p1")}</p>

      {/* ✅ FLEX layout with wrapping */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="grid">
            <DpspCard
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 px-2">{t("mrss.p2")}</p>
      <motion.div
        className="flex mt-6 text-light-secondary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mrss.title4")}
      </motion.div>
      <p className="mt-3 mb-4 px-2">{t("mrss.p3")}</p>

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
        {cards2.map((card, index) => (
          <div key={index} className="grid">
            <DpspCard
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 px-2">{t("mrss.p4")}</p>
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mrss.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("mrss.link1")}
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
            {t("mrss.link2")}
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
            {t("mrss.link3")}
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
            {t("mrss.link4")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Mrss;
