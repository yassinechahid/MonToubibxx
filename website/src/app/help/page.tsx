"use client";
import React from "react";
import IntroComponent from "@/components/IntroComponent";
import { useTranslation } from "react-i18next";
import HelpCentre from "@/components/footerComponents/Help";
import { motion } from "framer-motion";

const Help = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col bg-light-background items-center justify-center pb-12">
      <IntroComponent
        title={t("help.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl px-6">
        <motion.div
          className="pt-6 sm:px-2 text-light-tertiary font-bold text-title-large"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("help.objectives")}
        </motion.div>
        <motion.p
          className="pb-5 pt-3 sm:px-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("help.p")}
        </motion.p>
        <HelpCentre />
      </div>
    </main>
  );
};

export default Help;
