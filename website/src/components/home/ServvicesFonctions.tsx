"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import lampp from "@/public/home/lampp.svg";
import explore from "@/public/home/explore.svg";
import lamp from "@/public/home/lamp.svg";
import chat from "@/public/home/chat.svg";
import cloud from "@/public/home/cloud.svg";
import parametre from "@/public/home/parametre.svg";

import verifier from "@/public/home/verifier.svg";
import language from "@/public/home/language.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";

import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";
import { MotionLink } from "./Introduction";
import Link from "next/link";

export default function ServicesFonctions() {
  const { t } = useTranslation();
  const cards = [
    {
      icon: verifier,
      alt: "verifier",
      title: t("servicesFonctions.cards.security.title"),
      description: t("servicesFonctions.cards.security.description"),
    },
    {
      icon: lamp,
      alt: "lamp",
      title: t("servicesFonctions.cards.interoperability.title"),
      description: t("servicesFonctions.cards.interoperability.description"),
    },
    {
      icon: parametre,
      alt: "parametre",
      title: t("servicesFonctions.cards.parametre.title"),
      description: t("servicesFonctions.cards.parametre.description"),
    },
    {
      icon: chat,
      alt: "chat",
      title: t("servicesFonctions.cards.patientCentered.title"),
      description: t("servicesFonctions.cards.patientCentered.description"),
    },
    {
      icon: cloud,
      alt: "cloud",
      title: t("servicesFonctions.cards.Architecture.title"),
      description: t("servicesFonctions.cards.Architecture.description"),
    },
    {
      icon: language,
      alt: "language",
      title: t("servicesFonctions.cards.accessibility.title"),
      description: t("servicesFonctions.cards.accessibility.description"),
    },
    {
      icon: explore,
      alt: "explore",
      title: t("servicesFonctions.cards.sovereignty.title"),
      description: t("servicesFonctions.cards.sovereignty.description"),
    },
  ];

  return (
    <section className="w-full p-6">
      <header className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
        >
          <motion.div
            className="font-bold pb-12 text-display-small text-light-primary text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("servicesFonctions.title")}
            </motion.span>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        className="pt-4 flex flex-col pb-6 text-body-large text-light-onSurfaceVariant "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("servicesFonctions.subtitle")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("servicesFonctions.text3")}
        </motion.span>
      </motion.div>
      <motion.span
        className="text-light-tertiary  ml-1 font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("servicesFonctions.subtitle1")}
      </motion.span>
      {/* For LG screens (≥1024px): 4 cards then 3 cards */}
      <div className="hidden lg:block mt-4">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {cards.slice(0, 4).map((card, index) => (
            <div key={index}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cards.slice(4, 7).map((card, index) => (
            <div key={index + 4}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {cards.slice(3, 6).map((card, index) => (
            <div key={index + 3}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {cards.length >= 7 && (
            <div>
              <ServiceCard {...cards[6]} />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {cards.map((card, index) => (
          <div key={index}>
            <ServiceCard {...card} />
          </div>
        ))}
      </div>

      <div className="w-full my-5">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("home.d4")}
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-5 md:justify-between px-3 w-full mt-7">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.innovationLink")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/compliance#security"
          className="flex flex-row gap-3 items-center"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.securityLink")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
}
