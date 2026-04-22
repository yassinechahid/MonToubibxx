"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import Image from "next/image";
import { MotionLink } from "../home/Introduction";
import RoundedPie from "./RoundedPie";

const FirstComponent = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div className="w-full max-w-screen-2xl mt-1">
        <div className="mx-auto flex flex-col items-center gap-12 md:flex-row px-7">
          <div className="flex flex-col">
            <motion.span
              className="pt-4 pb-2 text-light-tertiary font-bold text-title-large"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("decouvrirPlatform.subtitle1")}
            </motion.span>
            <motion.p
              style={{ whiteSpace: "pre-line" }}
              className="text-light-onSurfaceVariant w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{
                __html: t("decouvrirPlatform.description1"),
              }}
            ></motion.p>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-12 md:flex-row px-7">
          <div className="flex flex-col">
            <motion.span
              className="pt-4 text-light-tertiary font-bold pb-2 mt-6 text-title-large"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("decouvrirPlatform.subtitle2")}
            </motion.span>
            <motion.p
              className="text-light-onSurfaceVarian"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{
                __html: t("decouvrirPlatform.description2"),
              }}
            ></motion.p>
          </div>
        </div>
        <div className="flex justify-center mt-5 p-6">
          <RoundedPie/>
        </div>
        <p className="text-light-onSurfaceVariant text-body-large mt-5 px-7">
          {t("decouvrirPlatform.p")}
        </p>
        <div className="flex w-full px-6 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
          id="dpsp"
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("decouvrirPlatform.note")}
          </motion.span>
        </div>
      </div>
        <div id="DPSP: Dossier" className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("decouvrirPlatform.link1")}
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
            {t("decouvrirPlatform.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      </div>
    </main>
  );
};

export default FirstComponent;
