"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import lamp from "@/public/home/lamp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import phone from "@/public/home/phone.svg";
import monitor from "@/public/home/monitor.svg";
import googlePlay from "@/public/home/googlePlay.svg";
import appStore from "@/public/home/appStore.svg";
import access from "@/public/home/access.svg";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";

const EspaceUtilisateur = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center">
      {/* Description */}
      <motion.div
        className="mx-auto flex flex-col justify-around items-center md:flex-row mt-5 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col">
            <motion.span
              className="text-light-tertiary font-bold pb-2 text-title-large"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("espaceUtilisateur.mainTitle")}
            </motion.span>

            <motion.span
              className="text-light-onSurfaceVariant"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{
                __html: t("espaceUtilisateur.description"),
              }}
            ></motion.span>
          </div>
        </motion.span>
      </motion.div>
      {/* Cards Section */}

      <motion.span
        className="text-light-tertiary font-bold text-center pb-4 px-6 pt-10 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("espaceUtilisateur.accessTitle")}
      </motion.span>
      <motion.div
        className="flex-row md:flex w-full gap-6 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Patient Card */}
        <div className="bg-light-surfaceContainerLowest p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center w-full flex-1 min-w-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image alt="phone" src={phone} />
          </motion.div>
          <motion.h1
            className="text-light-primary text-lg font-bold pt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {t("espaceUtilisateur.patientCard.title")}
          </motion.h1>

          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 * 0.1, duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            ></motion.span>
            <motion.span
              className="text-light-onSurfaceVariant font-normal pt-3 pl-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("espaceUtilisateur.patientCard.description")}
            </motion.span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Image
              alt="googlePlay"
              src={googlePlay}
              className="cursor-pointer"
            />
            <Image alt="appStore" src={appStore} className="cursor-pointer" />
          </motion.div>
        </div>

        {/* Professional Card */}
        <div className="bg-light-surfaceContainerLowest p-6 mt-5 md:mt-0 shadow-xl rounded-2xl flex flex-col justify-center w-full items-center flex-1 min-w-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image alt="monitor" src={monitor} />
          </motion.div>
          <motion.h1
            className="text-light-primary text-lg font-bold pt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {t("espaceUtilisateur.professionalCard.title")}
          </motion.h1>
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 * 0.1, duration: 0.5 }}
          >
            <motion.p
              className="text-light-onSurfaceVariant text-center font-normal pt-3 pl-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("espaceUtilisateur.professionalCard.description")}
            </motion.p>
          </motion.div>

          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Image alt="access" src={access} className="cursor-pointer" />
          </motion.div>
        </div>
      </motion.div>

      <div className="flex w-full px-6 my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("espaceUtilisateur.note")}
          </motion.span>
        </div>
      </div>
      <div
        id="patient"
        className="flex justify-center w-full sm:justify-between flex-col sm:flex-row items-center gap-4 px-7 my-3"
      >
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#patient"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("espaceUtilisateur.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#Professionnels"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("espaceUtilisateur.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/platform#dpsp"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("espaceUtilisateur.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 px-8">{t("espaceUtilisateur.p")}</p>
    </section>
  );
};

export default EspaceUtilisateur;
