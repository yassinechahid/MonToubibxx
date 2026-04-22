"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import dr from "@/public/academy/dr.svg";
import group from "@/public/academy/group.svg";
import ecoute from "@/public/academy/ecoute.svg";
import valid from "@/public/academy/valid.svg";
import { useTranslation } from "react-i18next";

const MonToubibParcour = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center px-4 md:px-8 max-w-screen-2xl mx-auto">
        {/* Left side - Image */}

        <motion.div
          className="rounded-2xl flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={dr}
              alt={t("mtAcademy.monToubibParcour.imageAlt")}
              className="w-full max-w-screen-2xl shadow-xl rounded-3xl"
              priority
            />
          </motion.span>
        </motion.div>

        {/* Right side - Content */}
        <div className="flex flex-col gap-4 h-full justify-center">
          <div className="flex flex-col gap-3">
            <motion.span
              className="text-headline-medium font-bold text-light-primary "
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("mtAcademy.title")}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("mtAcademy.monToubibParcour.subtitle")}
            </motion.span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-light-secondaryContainer shadow-lg h-[192px] p-6 rounded-2xl gap-4 flex flex-col items-center justify-center text-center transition-shadow duration-300">
              <Image
                alt={t("mtAcademy.monToubibParcour.feature2.alt")}
                src={group}
              />
              <motion.span
                className="text-light-primary font-normal"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("mtAcademy.monToubibParcour.feature1.title")}
              </motion.span>
            </div>

            <div className="bg-light-secondaryContainer shadow-lg h-[192px] p-6 rounded-2xl gap-4 flex flex-col items-center justify-center text-center transition-shadow duration-300">
              <Image alt="Ecoute" src={ecoute} />
              <motion.span
                className="text-light-primary font-normal"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("mtAcademy.monToubibParcour.feature2.title")}
              </motion.span>
            </div>

            <div className="bg-light-secondaryContainer shadow-lg h-[192px] p-6 rounded-2xl gap-4 flex flex-col items-center justify-center text-center transition-shadow duration-300">
              <Image
                alt={t("mtAcademy.monToubibParcour.feature3.alt")}
                src={valid}
              />
              <motion.span
                className="text-light-primary font-normal"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("mtAcademy.monToubibParcour.feature3.title")}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonToubibParcour;
