"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DpspCard from "./DpspCard";
import chat from "@/public/home/chat.svg";
import recorder from "@/public/platforme/recorder.svg";
import edit from "@/public/platforme/edit.svg";
import doc from "@/public/platforme/chat.svg";
import lock from "@/public/platforme/lock.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import Image from "next/image";
import { MotionLink } from "../home/Introduction";
const DemoAi = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: chat,
      alt: "filming",
      title: t("demo.card1.title"),
      description: t("demo.card1.description"),
    },
    {
      icon: recorder,
      alt: "recorder",
      title: t("demo.card2.title"),
      description: t("demo.card2.description"),
    },
    {
      icon: edit,
      alt: "edit",
      title: t("demo.card3.title"),
      description: t("demo.card3.description"),
    },
    {
      icon: doc,
      alt: "doc",
      title: t("demo.card4.title"),
      description: t("demo.card4.description"),
    },
    {
      icon: lock,
      alt: "lock",
      title: t("demo.card5.title"),
      description: t("demo.card5.description"),
    },
  ];
  return (
    <section className="flex flex-col justify-center px-4 py-6">
      {/* Title */}
      <motion.header
        className="flex pb-14 pt-10 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="font-bold text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("demo.title")}
        </motion.h1>
      </motion.header>

      <div className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row">
        <div className="flex flex-col">
          <motion.span
            className="text-light-tertiary font-bold pb-2 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("demo.subtitle")}{" "}
          </motion.span>
          <motion.p
            className="text-light-onSurfaceVariant w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t("demo.description")}
          </motion.p>
        </div>
      </div>

      <motion.span
        className="text-light-tertiary w-full font-bold pt-6 pb-3 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("demo.compliance")}
      </motion.span>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-grow sm:flex-grow-0 sm:w-[calc(33.333%-16px)] 
                        ${
                          index >= cards.length - 2
                            ? "sm:w-[calc(50%-14px)]"
                            : ""
                        }`}
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
      <p className="mt-4 px-8">{t("demo.p")}</p>
      <div className="flex w-full px-1 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("demo.d2")}
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
            {t("demo.link1")}
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
            {t("demo.link2")}
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
            {t("demo.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default DemoAi;
