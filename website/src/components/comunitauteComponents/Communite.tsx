"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import lamp from "@/public/home/lamp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import ecoute from "@/public/platforme/ecoute.svg";
import lock from "@/public/platforme/lock.svg";
import casedrug from "@/public/platforme/casedrug.svg";
import galery from "@/public/platforme/galery.svg";
import groups from "@/public/platforme/groups.svg";

import DpspCard from "../platformeCoponents/DpspCard";
import { MotionLink } from "../home/Introduction";

const Comunite = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: groups,
      alt: "groups",
      title: t("communaute.comunite.card1.title"),
      description: t("communaute.comunite.card1.description"),
    },
    {
      icon: ecoute,
      alt: "ecoute",
      title: t("communaute.comunite.card2.title"),
      description: t("communaute.comunite.card2.description"),
    },
    {
      icon: casedrug,
      alt: "casedrug",
      title: t("communaute.comunite.card3.title"),
      description: t("communaute.comunite.card3.description"),
    },
    {
      icon: galery,
      alt: "galery",
      title: t("communaute.comunite.card4.title"),
      description: t("communaute.comunite.card4.description"),
    },
    {
      icon: lock,
      alt: "lock",
      title: t("communaute.comunite.card5.title"),
      description: t("communaute.comunite.card5.description"),
    },
  ];
  const cards2 = [
    {
      title: t("communaute.comunite2.card1.title"),
      description: t("communaute.comunite2.card1.description"),
    },
    {
      title: t("communaute.comunite2.card2.title"),
      description: t("communaute.comunite2.card2.description"),
    },
    {
      title: t("communaute.comunite2.card3.title"),
      description: t("communaute.comunite2.card3.description"),
    },
    {
      title: t("communaute.comunite2.card4.title"),
      description: t("communaute.comunite2.card4.description"),
    },
    {
      title: t("communaute.comunite2.card5.title"),
      description: t("communaute.comunite2.card5.description"),
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
        {t("communaute.comunite.title")}
      </motion.span>
      <motion.p
        className="pb-5 pt-3 sm:px-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("communaute.comunite.description")}
      </motion.p>
      <motion.span
        className="pt-4 sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("communaute.comunite.title2")}
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
          <Image alt="lock" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("communaute.comunite.note")}
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
            {t("communaute.comunite.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/platform#mrss"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("communaute.comunite.link2")}
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
            {t("communaute.comunite.link3")}
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
            {t("communaute.comunite.link4")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 mb-9 px-8 text-center">{t("communaute.comunite.p")}</p>

      {/*############################  separtor ################################*/}

      <motion.span
        className="pt-4  sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("communaute.comunite2.title")}
      </motion.span>
      <motion.p
        className="pb-5 pt-3 sm:px-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("communaute.comunite2.description")}
      </motion.p>
      <motion.span
        className="pt-4 sm:px-2 pb-6 text-light-tertiary font-bold text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("communaute.comunite2.title2")}
      </motion.span>
      {/* ✅ FLEX layout with wrapping */}
      <div className="flex flex-wrap mt-4 justify-center gap-4">
        {cards2.map((card, index) => (
          <div
            key={index}
            className={`flex-grow sm:flex-grow-0 sm:w-[calc(33.333%-16px)] 
                  ${index >= cards.length - 2 ? "sm:w-[calc(50%-14px)]" : ""}`}
          >
            <DpspCard title={card.title} description={card.description} />
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
            {t("communaute.comunite2.note")}
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
            {t("communaute.comunite2.link1")}
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
            {t("communaute.comunite2.link2")}
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
            {t("communaute.comunite2.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 px-8 text-center">{t("communaute.comunite2.p")}</p>
    </section>
  );
};

export default Comunite;
