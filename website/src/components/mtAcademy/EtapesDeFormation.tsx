"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

import screenSkelete from "@/public/academy/screenSkelete.png";
import img0 from "@/public/academy/img0.png";
import light from "@/public/academy/light.svg";
import medal from "@/public/academy/medal.svg";
import reading from "@/public/academy/reading.svg";
import validPlein from "@/public/academy/validPlein.svg";

const EtapesDeFormation = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <div className="max-w-screen-2xl" dir={isRTL ? "rtl" : "ltr"}>
      <motion.span
        className="text-light-primary text-headline-medium flex justify-center items-center p-6 font-bold pt-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mtAcademy.etapesDeFormation.mainTitle")}
      </motion.span>
      <div className="flex-row md:flex gap-6 px-6 pt-7">
        {/* Patient Card */}
        <motion.div
          className="bg-light-surfaceContainerLowest p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center 2xl:min-w-[740px]"
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
            <div className="flex justify-center items-center">
              <Image
                alt="screenSkelete"
                src={screenSkelete}
                width={268}
                height={278}
              />
            </div>
            <div className="flex flex-col items-center">
              <motion.span
                className="text-light-primary text-lg font-bold pt-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("mtAcademy.etapesDeFormation.presentiel.title")}
              </motion.span>
              <motion.span
                className="text-light-onSurfaceVariant text-center font-normal pt-3 pl-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("mtAcademy.etapesDeFormation.presentiel.description")}
              </motion.span>
            </div>
          </motion.span>
        </motion.div>

        {/* Professional Card */}
        <motion.div
          className="bg-light-surfaceContainerLowest p-6 mt-5 md:mt-0 shadow-xl rounded-2xl flex flex-col justify-center items-center 2xl:min-w-[740px]"
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
            <Image
              alt={t("mtAcademy.etapesDeFormation.elearning.imageAlt")}
              src={img0}
              width={325}
              height={280}
            />
            <motion.span
              className="text-light-primary text-lg flex justify-center items-center font-bold pt-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {" "}
              {t("mtAcademy.etapesDeFormation.elearning.title")}
            </motion.span>
          </motion.span>
          <motion.span
            className="text-light-onSurfaceVariant text-center font-normal pt-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.elearning.description")}
          </motion.span>
        </motion.div>
      </div>

      <motion.span
        className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-6 pt-9 flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {" "}
        {t("mtAcademy.etapesDeFormation.hybridDescription")}
      </motion.span>

      <motion.span
        className="text-light-primary text-lg flex justify-center items-center font-bold pt-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mtAcademy.etapesDeFormation.stepsTitle")}
      </motion.span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 p-6">
        {/* Step 1 */}
        <motion.div
          className="bg-light-surfaceContainerLowest shadow-md p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {" "}
          <Image
            alt={t("mtAcademy.etapesDeFormation.step1.imageAlt")}
            src={light}
          />
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step1.title")}
          </motion.span>
          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-2 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step1.description")}
          </motion.span>
        </motion.div>

        {/* Arrow 1 - RTL aware */}
        <div className="hidden md:flex justify-center items-center text-center rotate-90 md:rotate-0 relative">
          <div className="flex justify-center w-20 md:w-full h-[2px] bg-light-primary relative">
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL
                  ? "rotate-180 md:rotate-0 right-0 md:left-1 md:-translate-x-1/2"
                  : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center items-center text-center relative">
          <div
            className={`flex justify-center w-20 md:w-full h-[2px] bg-light-primary relative ${
              isRTL ? "md:rotate-0 rotate-90" : "md:rotate-180 rotate-90"
            }`}
          >
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-light-surfaceContainerLowest shadow-md p-6 rounded-xl flex flex-col justify-center items-center">
          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              alt={t("mtAcademy.etapesDeFormation.step2.imageAlt")}
              src={validPlein}
            />
          </motion.span>

          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step2.title")}
          </motion.span>

          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-2 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {" "}
            {t("mtAcademy.etapesDeFormation.step2.description")}
          </motion.span>
        </div>

        {/* Spacers */}
        <div className="hidden md:block h-28"></div>
        <div className="hidden md:block h-28"></div>

        {/* Arrow 2 - RTL aware */}
        <div className="relative hidden md:flex justify-center items-center text-center rotate-90">
          <div className="flex justify-center w-20 md:w-32 h-[2px] bg-light-primary relative">
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center items-center text-center relative">
          <div
            className={`flex justify-center w-20 md:w-full h-[2px] bg-light-primary relative ${
              isRTL ? "md:rotate-0 rotate-90" : "md:rotate-180 rotate-90"
            }`}
          >
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </div>

        {/* Step 3 (Desktop) */}
        <motion.div
          id="demo"
          className="bg-light-surfaceContainerLowest shadow-md rounded-xl p-6 hidden md:flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {" "}
          <Image
            alt={t("mtAcademy.etapesDeFormation.step4.imageAlt")}
            src={medal}
          />
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step4.title")}
          </motion.span>
          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-2 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step4.description")}
          </motion.span>
        </motion.div>

        {/* Step 3 (Mobile) */}
        <motion.div
          className="bg-light-surfaceContainerLowest shadow-md flex rounded-xl p-6 md:hidden flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            alt={t("mtAcademy.etapesDeFormation.step3.imageAlt")}
            src={reading}
          />

          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {" "}
            {t("mtAcademy.etapesDeFormation.step3.title")}
          </motion.span>
          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-2 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step3.description")}
          </motion.span>
        </motion.div>

        {/* Arrow 3 - RTL aware */}
        <div className="flex justify-center items-center text-center relative">
          <div
            className={`flex justify-center w-20 md:w-full h-[2px] bg-light-primary relative ${
              isRTL ? "md:rotate-0 rotate-90" : "md:rotate-180 rotate-90"
            }`}
          >
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </div>

        {/* Step 4 (Desktop) */}
        <motion.div
          id="tutoriel"
          className="bg-light-surfaceContainerLowest shadow-md hidden rounded-xl p-6 md:flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            alt={t("mtAcademy.etapesDeFormation.step3.imageAlt")}
            src={reading}
          />

          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {" "}
            {t("mtAcademy.etapesDeFormation.step3.title")}
          </motion.span>
          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-2 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step3.description")}
          </motion.span>
        </motion.div>

        {/* Step 4 (Mobile) */}
        <motion.div
          className="bg-light-surfaceContainerLowest shadow-md rounded-xl p-6 flex md:hidden flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {" "}
          <Image
            alt={t("mtAcademy.etapesDeFormation.step4.imageAlt")}
            src={medal}
          />
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step4.title")}
          </motion.span>
          <motion.span
            className="text-body-large font-normal text-light-onSurfaceVariant items-center text-center p-2 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.etapesDeFormation.step4.description")}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default EtapesDeFormation;
