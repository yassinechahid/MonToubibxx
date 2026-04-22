"use client";
import React from "react";

import Actualites from "@/components/mediaComponents/Actualites";
import IntroComponent from "@/components/IntroComponent";
import Temoinage from "@/components/mediaComponents/Temoionage";
import { useTranslation } from "react-i18next";

const MediasPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col bg-light-background items-center justify-center pb-12">
      <IntroComponent
        title={t("medias.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl">
        <Temoinage />
        <Actualites />
      </div>
    </main>
  );
};

export default MediasPage;
