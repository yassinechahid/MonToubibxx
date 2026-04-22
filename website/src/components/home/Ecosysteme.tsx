"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";

import EcosystemseSlider from "../Slider";
import { useTranslation } from "react-i18next";
import { MotionLink } from "./Introduction";

const Ecosysteme = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col">
      {/* Title */}
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <motion.header
          className="font-bold flex pb-16 pt-14 justify-center text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("ecosysteme.title")}
        </motion.header>

        <motion.span
          className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row px-6"
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
              {t("ecosysteme.subtitle")}
            </motion.span>
            <motion.span
              className="text-light-onSurfaceVariant text-center w-full "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t("ecosysteme.description") }}
            ></motion.span>
          </div>
        </motion.span>
      </motion.div>
      <motion.span
        className="text-light-tertiary font-bold text-center pb-2 text-title-large mt-7"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("ecosysteme.subtitle2")}
      </motion.span>
      <EcosystemseSlider />

      <div className="flex w-full px-6 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("ecosysteme.d2")}
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center sm:justify-start items-center px-5">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/"
          className="flex flex-row gap-3 items-center pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.exploreLink")}
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
          {t("ecosysteme.d3")}
        </motion.span>
      </div>
    </section>
  );
};

export default Ecosysteme;
