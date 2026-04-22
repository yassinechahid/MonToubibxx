"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DpspCard from "../platformeCoponents/DpspCard";
import article from "@/public/home/article.svg";
import speacker from "@/public/home/speacker.svg";
import greenFolder from "@/public/home/greenFolder.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import Image from "next/image";
import { MotionLink } from "./Introduction";
import lampp from "@/public/home/lampp.svg";

const Media = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: article,
      title: t("media.cards.card1.title"),
      description: t("media.cards.card1.description"),
      link: t("media.cards.card1.link"),
      arrow: greenRightIcon,
    },
    {
      icon: speacker,
      title: t("media.cards.card2.title"),
      description: t("media.cards.card2.description"),
      link: t("media.cards.card2.link"),
      arrow: greenRightIcon,
    },
    {
      icon: greenFolder,
      title: t("media.cards.card3.title"),
      description: t("media.cards.card3.description"),
      link: t("media.cards.card3.link"),
      arrow: greenRightIcon,
    },
  ];

  return (
    <section className="flex flex-col justify-center p-6 sm:p-0">
      {/* Title */}
      <motion.header
        className="flex pb-12 pt-10 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="flex justify-center font-bold text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("media.title")}
        </motion.span>
      </motion.header>

      {/* Description */}
      <motion.div
        className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row px-2 md:px-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex flex-col text-center">
          <motion.span
            className="text-light-tertiary font-bold text-center pb-2 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("media.subtitle1")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className="text-light-onSurfaceVariant text-center w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("media.p")}
              <br />
              <br />
            </motion.span>
          </motion.span>
          <motion.span
            className="text-light-tertiary font-bold text-center pt-2 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("media.subtitle2")}
          </motion.span>
        </div>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4 lg:px-4 pt-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)]"
          >
            <DpspCard icon={card.icon} title={card.title} description={card.description} link={card.link} arrow={card.arrow}/>
          </div>
        ))}
      </div>
      <div className="flex w-full my-5 px-4 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <div className="mt-1 min-w-3">
            <Image alt="lock" src={lampp}/>
          </div>

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("media.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("media.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("media.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Media;
