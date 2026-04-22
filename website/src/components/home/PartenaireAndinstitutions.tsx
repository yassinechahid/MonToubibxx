"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import lampp from "@/public/home/lampp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";

import { MotionLink } from "./Introduction";
import DpspCard from "../platformeCoponents/DpspCard";

const PartenaireAndinstitutions = () => {
  const { t } = useTranslation();
  const card2 = [
    {
      title: t("partners.card.card1.title"),
      description: t("partners.card.card1.description"),
    },
    {
      title: t("partners.card.card2.title"),
      description: t("partners.card.card2.description"),
    },
    {
      title: t("partners.card.card3.title"),
      description: t("partners.card.card3.description"),
    },
  ];
  return (
    <section className="flex flex-col justify-center p-6 sm:p-4">
      {/* Title */}
      <motion.header
        className="flex pb-16 pt-20 justify-center font-bold text-display-small text-light-primary text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("partners.title")}
      </motion.header>

      <div className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row px-6">
        <div className="flex flex-col">
          <p className="text-light-onSurfaceVariant text-center w-full ">
            {t("partners.description")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 ">
        <span className="text-light-tertiary font-bold text-center pt-8 text-title-large">
          {t("partners.subtitle2")}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {card2.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(33.333%-16px)] sm:flex-grow-0"
          >
            <DpspCard title={card.title} description={card.description} />
          </div>
        ))}
      </div>

      <div className="flex w-full my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("partners.d2")}
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/community"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.partner")}
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
            {t("home.chart")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>

      <div className="flex w-full px-6 my-5 justify-center items-center">
        <motion.span
          className="text-body-large text-light-onSecondaryContainer text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("partners.d3")}
        </motion.span>
      </div>
    </section>
  );
};

export default PartenaireAndinstitutions;
