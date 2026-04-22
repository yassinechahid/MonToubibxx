"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import chat from "@/public/home/chat.svg";
import stethoscope from "@/public/home/stethoscope.svg";
import chart from "@/public/home/chart.svg";
import lock from "@/public/home/lock.svg";
import explore from "@/public/home/explore.svg";
import pc from "@/public/home/pc.png";
import editDoc from "@/public/home/editDoc.svg";
import editSquare from "@/public/home/editSquare.svg";
import mic from "@/public/home/mic.svg";
import sync from "@/public/home/sync.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";

import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "./Introduction";
import Link from "next/link";

export default function Platform() {
  const { t } = useTranslation();
  const cards = [
    {
      icon: chat,
      alt: "chat",
      title: t("platform.cards.dialogue.title"),
      description: t("platform.cards.dialogue.description"),
    },
    {
      icon: stethoscope,
      alt: "stethoscope",
      title: t("platform.cards.consultation.title"),
      description: t("platform.cards.consultation.description"),
    },
    {
      icon: chart,
      alt: "chart",
      title: t("platform.cards.history.title"),
      description: t("platform.cards.history.description"),
    },
    {
      icon: explore,
      alt: "explore",
      title: t("platform.cards.orientation.title"),
      description: t("platform.cards.orientation.description"),
    },
  ];
  const cards2 = [
    {
      icon: editDoc,
      alt: "editDoc",
      title: t("platform.cards2.dialogue.title"),
      description: t("platform.cards2.dialogue.description"),
    },
    {
      icon: editSquare,
      alt: "editSquare",
      title: t("platform.cards2.consultation.title"),
      description: t("platform.cards2.consultation.description"),
    },
    {
      icon: mic,
      alt: "mic",
      title: t("platform.cards2.history.title"),
      description: t("platform.cards2.history.description"),
    },
    {
      icon: sync,
      alt: "sync",
      title: t("platform.cards2.orientation.title"),
      description: t("platform.cards2.orientation.description"),
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center">
      {/* Title */}
      <motion.header
        className="flex pb-14 pt-12 justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold text-display-small text-light-primary text-center">
          {t("platform.title")}
        </h1>
      </motion.header>

      <div className="flex flex-col justify-between items-center gap-12 md:flex-row px-7 w-full">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-light-tertiary font-bold text-title-large">
              {t("platform.subtitle")}
            </span>
            <p className="text-light-onSurfaceVariant pt-3">
              {t("platform.description")}
            </p>

            {/* Use div instead of span for list items */}
            <div className="flex items-start mt-2 ml-3">
              <span className="text-light-primary mt-1 mr-2 flex-shrink-0">
                •
              </span>
              <p className="text-light-onSurfaceVariant">
                <span className="text-light-primary text-body-large font-normal">
                  {t("platform.health")}
                </span>
                {t("platform.text")}
              </p>
            </div>

            <div className="flex items-start mt-3 ml-3">
              <span className="text-light-primary mt-1 mr-2 flex-shrink-0">
                •
              </span>
              <p className="text-light-onSurfaceVariant">
                <span className="text-light-primary text-body-large font-normal">
                  {t("platform.health2")}
                </span>
                {t("platform.text2")}</p>
            </div>

            <p className="text-light-onSurfaceVariant pt-3">
             {t("platform.text3")}
            </p>
          </motion.div>
        </motion.span>

        <motion.div
          className="w-full flex justify-end max-w-xs sm:max-w-sm lg:w-[328.69px] lg:flex-shrink-0"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src={pc}
            alt="image téléphone"
            className="w-full"
            sizes="(max-width: 1024px) 100vw, 328.69px"
          />
        </motion.div>
      </div>
      <span className="text-light-tertiary font-bold text-title-large w-full px-8">
        {t("platform.functionnality1")}
      </span>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-6 mt-4 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {cards.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </motion.div>
      <span className="text-light-tertiary font-bold text-title-large w-full px-8 mt-8">
        {t("platform.functionnality2")}
      </span>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-6 mt-4 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {cards2.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </motion.div>

      <motion.div
        className="w-full px-6 mt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lock} />
          <p className="text-body-large text-light-onSecondaryContainer">
            {t("platform.securityNote")}
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-5 md:justify-between px-8 w-full mt-7">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/platform#sante"
          className="flex flex-row gap-3 items-center pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("platform.try")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/mt-academy#demo"
          className="flex flex-row gap-3 items-center pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("platform.see")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("platform.discover")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
}
