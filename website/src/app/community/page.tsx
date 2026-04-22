"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import Comunite from "@/components/comunitauteComponents/Communite";
import IntroComponent from "@/components/IntroComponent";

const CommunautePage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col bg-light-background justify-center md:items-center pb-12">
      <IntroComponent
        title={t("communaute.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl">
        <Comunite />de
      </div>
    </main>
  );
};

export default CommunautePage;
