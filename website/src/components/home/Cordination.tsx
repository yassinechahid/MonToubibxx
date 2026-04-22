"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import persone1 from "@/public/home/persone1.svg";
import persone2 from "@/public/home/persone2.svg";
import persone3 from "@/public/home/persone3.svg";
import persone4 from "@/public/home/persone4.svg";
import lampp from "@/public/home/lampp.svg";
import bigpc from "@/public/home/hh.png";

import { useTranslation } from "react-i18next";
import { MotionLink } from "./Introduction";
import Spider from "../platformeCoponents/Spider";

const Cordination = () => {
  const { t} = useTranslation();

  const cards = [
    {
      icon: persone1,
      alt: "persone1",
      title: t("cordination.cards.doctors.title"),
      description: t("cordination.cards.doctors.description"),
    },
    {
      icon: persone2,
      alt: "persone2",
      title: t("cordination.cards.patients.title"),
      description: t("cordination.cards.patients.description"),
    },
    {
      icon: persone3,
      alt: "persone3",
      title: t("cordination.cards.labs.title"),
      description: t("cordination.cards.labs.description"),
    },
    {
      icon: persone4,
      alt: "persone4",
      title: t("cordination.cards.institutions.title"),
      description: t("cordination.cards.institutions.description"),
    },
  ];

  return (
    <section className="flex flex-col">
      {/* Title */}
      <motion.header
        className="flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <header className="flex pb-12 pt-16 justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="font-bold text-display-small text-light-primary text-center">
              {t("cordination.title")}
            </h1>
          </motion.span>
        </header>
        <div className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row px-6">
          <motion.span
            className="font-roboto font-bold text-title-large text-light-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          ></motion.span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex flex-col">
              <motion.span
                className="text-light-tertiary font-bold text-center pb-2 text-title-large"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("cordination.subtitle")}
              </motion.span>
              <motion.span
                className="text-light-onSurfaceVariant text-center w-full "
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                dangerouslySetInnerHTML={{
                  __html: t("cordination.description"),
                }}
              ></motion.span>
            </div>
          </motion.span>
        </div>
      </motion.header>

      <section className="relative w-full flex justify-center py-6 px-6 md:px-8">
        <div className="w-full">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-[4fr_auto_4fr] grid-rows-3 place-items-center gap-x-10 gap-y-6 md:gap-y-0">
            {/* Top Left */}
            <Spider
              icon={cards[0].icon}
              centered
              title={cards[0].title}
              description={cards[0].description}
            />

            {/* Top Right Placeholder */}
            <div className="hidden md:block" />

            {/* Top Right */}
            <Spider
              icon={cards[1].icon}
              centered
              title={cards[1].title}
              description={cards[1].description}
            />

            {/* Center Placeholder */}
            <div className="hidden md:block" />

            {/* Center */}
            <div className="relative z-20 hidden md:flex">
              <Image
                src={bigpc}
                alt="Center"
                className="w-[100px] sm:w-[180px] md:w-[280px] h-[241px]"
              />
            </div>

            {/* Bottom Left Placeholder */}
            <div className="hidden md:block" />

            {/* Bottom Left */}
            <Spider
              icon={cards[2].icon}
              centered
              title={cards[2].title}
              description={cards[2].description}
            />
            <div className="hidden md:block" />
            {/* Bottom Right */}
            <Spider
              icon={cards[3].icon}
              centered
              title={cards[3].title}
              description={cards[3].description}
            />
          </div>

          {/* CONNECTOR LINES */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:flex"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 49 L 25 49 L 25 25"
              fill="none"
              stroke="#0F766E"
              strokeWidth="0.15"
            />
            <path
              d="M 50 49 L 75 49 L 75 25"
              fill="none"
              stroke="#0F766E"
              strokeWidth="0.15"
            />
            <path
              d="M 50 51 L 25 51 L 25 75"
              fill="none"
              stroke="#0F766E"
              strokeWidth="0.15"
            />
            <path
              d="M 50 51 L 75 51 L 75 75"
              fill="none"
              stroke="#0F766E"
              strokeWidth="0.15"
            />
          </svg>
        </div>
      </section>

      <div className="flex w-full px-6 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("cordination.securityNote")}
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-5 md:justify-between px-8 w-full mt-7">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/platform#dpsp"
          className="flex flex-row gap-3 items-center"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.dpspLink")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="#eco"
          className="flex flex-row gap-3 items-center"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.ecoLink")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>

      <div id="eco" className="flex w-full px-6 my-5 justify-center items-center">
        <motion.span
          className="text-body-large text-light-onSecondaryContainer text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("cordination.description2")}
        </motion.span>
      </div>
    </section>
  );
};

export default Cordination;
