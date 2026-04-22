"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import pcLogin from "@/public/home/pcLogin.png";
import { MotionLink } from "./Introduction";
import DpspCard from "../platformeCoponents/DpspCard";

const GrandComptes = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("bigAccounts.cards.card1.title"),
      description: t("bigAccounts.cards.card1.description"),
    },
    {
      title: t("bigAccounts.cards.card2.title"),
      description: t("bigAccounts.cards.card2.description"),
    },
    {
      title: t("bigAccounts.cards.card3.title"),
      description: t("bigAccounts.cards.card3.description"),
    },
    {
      title: t("bigAccounts.cards.card4.title"),
      description: t("bigAccounts.cards.card4.description"),
    },
    {
      title: t("bigAccounts.cards.card5.title"),
      description: t("bigAccounts.cards.card5.description"),
    },
  ];

  return (
    <section className="flex flex-col justify-center p-6 sm:p-0">
      {/* Title */}
      <motion.header
        className="flex pb-12 pt-16 justify-center items-center"
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
          {t("bigAccounts.title")}
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
            {t("bigAccounts.subtitle")}
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
              {t("bigAccounts.description")}
              <br />
              <br />
            </motion.span>
          </motion.span>
          <motion.span
            className="text-light-tertiary font-bold text-center pt-6 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("bigAccounts.subtitle2")}
          </motion.span>
        </div>
      </motion.div>

      {/* Testimonial Cards */}
      <motion.span
        className="text-light-secondary font-bold pt-6 px-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("bigAccounts.cardTitle")}
      </motion.span>
      <div className="flex flex-wrap justify-center gap-4 px-4 pt-4">
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
            <DpspCard title={card.title} description={card.description} />
          </div>
        ))}
      </div>
      <motion.span
        className="text-light-secondary font-bold pt-6 px-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("bigAccounts.field")}
      </motion.span>
      <div className="flex flex-col bg-light-surfaceContainerLowest justify-between md:flex-row m-4 p-6 gap-12 rounded-2xl">
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
            <span className="text-light-primary font-bold text-title-large">
              {t("bigAccounts.adopt")}
            </span>
            <p className="text-light-onSurfaceVariant pt-3">
              {t("bigAccounts.platform")}
            </p>

            {/* List items with left padding and inline display */}
            <ul className="pl-4 flex flex-col items-start mt-1 gap-2">
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.companies")}
              </li>
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.group")}
              </li>
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.services")}
              </li>
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.organisations")}
              </li>
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.establishement")}
              </li>
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.area")}
              </li>
              <li className="inline text-light-onSurfaceVariant ">
                • {t("bigAccounts.work")}
              </li>
            </ul>

            <p className="text-light-onSurfaceVariant pt-1">
              {t("bigAccounts.structure")}
            </p>
          </motion.div>
        </motion.span>

        <motion.div
          className="w-full flex lg:w-[328.69px] sm:justify-center lg:flex-shrink-0"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image src={pcLogin} alt="image téléphone" className="w-[300px]" />
        </motion.div>
      </div>
      <motion.span
        className="text-light-secondary font-bold px-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("bigAccounts.interactions")}
      </motion.span>
      <div className="flex bg-light-surfaceContainerLowest m-4 p-6 rounded-2xl">
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
            <span className="text-light-primary font-bold text-title-large">
              {t("bigAccounts.public")}
            </span>
            <p className="mt-3 text-light-onSurfaceVariant font-normal">
              {t("bigAccounts.p")}
            </p>
            <p className="mt-1 text-light-onSurfaceVariant font-normal">
              {t("bigAccounts.p2")}
            </p>
          </motion.div>
        </motion.span>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("bigAccounts.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("bigAccounts.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/contact"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("bigAccounts.link3")}
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
          {t("bigAccounts.d1")}
        </motion.span>
      </div>
    </section>
  );
};

export default GrandComptes;
