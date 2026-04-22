"use client";
import React from "react";

import IntroComponent from "@/components/IntroComponent";
import EtapesDeFormation from "@/components/mtAcademy/EtapesDeFormation";
import MonToubibParcour from "@/components/mtAcademy/MonToubibParcour";
import { useTranslation } from "react-i18next";
import VideoGrid from "@/components/mtAcademy/VideoGrid";

const MtAcademyPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col bg-light-background items-center justify-center pb-12">
      <IntroComponent
        title={t("mtAcademy.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <MonToubibParcour />
      <EtapesDeFormation />
      <VideoGrid/>
    </main>
  );
};

export default MtAcademyPage;
