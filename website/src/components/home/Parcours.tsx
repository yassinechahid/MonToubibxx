"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const Parcour = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <div className="max-w-screen-2xl" dir={isRTL ? "rtl" : "ltr"}>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:p-3">
        <motion.div
          className="flex md:hidden flex-col px-6 pb-4 text-center justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("academy.p2")}
        </motion.div>

        {/* Step 1 */}
        <motion.div
          className="bg-light-surfaceContainerLowest min-h-[182px] shadow-md p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-light-primary flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">1</span>
          </div>
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("academy.1")}
          </motion.span>
        </motion.div>

        {/* Step 2 */}

        <motion.div
          className="hidden md:flex flex-col col-span-3 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="p-6 text-center">{t("academy.p2")}</p>
        </motion.div>

        <motion.div
          className="rounded-xl flex md:hidden mb-9 md:mb-0 flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Arrow 2 - RTL aware */}
          <div className="relative mt-9 md:mt-0 md:flex justify-center items-center text-center rotate-90">
            <div className="flex justify-center w-[70px] h-[2px] bg-light-primary relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                  isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
                }`}
              >
                &gt;
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}

        <motion.div
          className="bg-light-surfaceContainerLowest min-h-[182px] shadow-md p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-light-primary flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">5</span>
          </div>
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("academy.5")}
          </motion.span>
          <p className="text-center">{t("academy.desc5")}</p>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          className="rounded-xl mt-9 md:mt-0 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Arrow 2 - RTL aware */}
          <div className="relative md:flex justify-center items-center text-center rotate-90">
            <div className="flex justify-center w-[70px] h-[2px] bg-light-primary relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                  isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
                }`}
              >
                &gt;
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 5 */}
        <div className="hidden md:block h-20"></div>
        {/* Step 6 */}
        <div className="hidden md:block h-20"></div>
        {/* Step 7 */}
        <div className="hidden md:block h-20"></div>
        {/* Step 9 */}
        <motion.div
          className="p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative hidden md:flex justify-center items-center text-center rotate-90">
            <div className="flex justify-center w-16 md:w-16 h-[2px] bg-light-primary relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                  isRTL ? "rotate-180 right-14" : "right-1 -left-12"
                }`}
              >
                &lt;
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 10 */}
        <motion.div
          className="bg-light-surfaceContainerLowest min-h-[182px] shadow-md p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-light-primary flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">2</span>
          </div>
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("academy.2")}
          </motion.span>
          <p className="text-center">{t("academy.desc2")}</p>
        </motion.div>

        {/* Step 11 */}
        <motion.div
          className="rounded-xl flex my-9 md:my-0 md:hidden flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Arrow 2 - RTL aware */}
          <div className="relative md:flex justify-center items-center text-center rotate-90">
            <div className="flex justify-center w-[70px] h-[2px] bg-light-primary relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                  isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
                }`}
              >
                &gt;
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rounded-xl hidden md:flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-center w-full h-[2px] bg-light-primary relative">
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL
                  ? "rotate-180 md:rotate-0 md:left-1 md:-translate-x-1/2"
                  : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </motion.div>

        {/* Step 12 */}
        <motion.div
          className="bg-light-surfaceContainerLowest min-h-[182px] shadow-md p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-light-primary flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">3</span>
          </div>
          <motion.span
            className="text-light-primary text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("academy.3")}
          </motion.span>
          <p className="text-center">{t("academy.desc3")}</p>
        </motion.div>

        {/* Step 14 */}
        <motion.div
          className="rounded-xl mb-10 md:mb-0 flex md:hidden flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Arrow 2 - RTL aware */}
          <div className="relative mt-9 md:mt-0 md:flex justify-center items-center text-center rotate-90">
            <div className="flex justify-center w-[70px] h-[2px] bg-light-primary relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                  isRTL ? "right-0 rotate-180" : "right-1 translate-x-1/2"
                }`}
              >
                &gt;
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rounded-xl hidden md:flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-center w-full h-[2px] bg-light-primary relative">
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-light-primary ${
                isRTL
                  ? "rotate-180 md:rotate-0 md:left-1 md:-translate-x-1/2"
                  : "right-1 translate-x-1/2"
              }`}
            >
              &gt;
            </div>
          </div>
        </motion.div>

        {/* Step 15 */}
        <motion.div
          className="bg-light-surfaceContainerLowest min-h-[182px] shadow-md p-6 rounded-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-light-primary flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">4</span>
          </div>
          <motion.span
            className="text-light-primary text-center text-lg font-bold pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("academy.4")}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Parcour;
