"use client";

import React from "react";
import { motion } from "framer-motion";

import chat from "@/public/platforme/chat.svg";
import lock from "@/public/platforme/lock.svg";
import group from "@/public/platforme/group.svg";
import net from "@/public/platforme/net.svg";
import clock from "@/public/platforme/clock.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import DpspCard from "./DpspCard";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { MotionLink } from "../home/Introduction";

const Dpsp = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: chat,
      alt: "chat",
      title: t("dpsp.card1.title"),
      description: t("dpsp.card1.description"),
    },
    {
      icon: lock,
      alt: "lock",
      title: t("dpsp.card2.title"),
      description: t("dpsp.card2.description"),
    },
    {
      icon: group,
      alt: "group",
      title: t("dpsp.card3.title"),
      description: t("dpsp.card3.description"),
    },
    {
      icon: net,
      alt: "net",
      title: t("dpsp.card4.title"),
      description: t("dpsp.card4.description"),
    },
    {
      icon: clock,
      alt: "clock",
      title: t("dpsp.card5.title"),
      description: t("dpsp.card5.description"),
    },
  ];

  return (
    <section className="w-full max-w-screen-2xl p-6 mt-14">
      <header className="w-full  flex justify-center">
        <motion.h1
          className="font-bold pb-6 text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("dpsp.title")}
        </motion.h1>
      </header>
      <motion.span
        className="pt-4 flex justify-center mb-1 text-light-tertiary font-bold pb-2 mt-6 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("decouvrirPlatform.dpsp")}
      </motion.span>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: t("dpsp.description") }}
      ></motion.p>
      <motion.div
        className="pt-1 flex mb-2 justify-center text-light-tertiary font-bold pb-2 mt-6 text-title-large"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("decouvrirPlatform.file")}
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
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
      <p className="mt-4 px-2">{t("dpsp.p")}</p>
      <div className="flex w-full my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("dpsp.d1")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#patient"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("dpsp.link1")}
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
            {t("dpsp.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/compliance"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("dpsp.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Dpsp;
