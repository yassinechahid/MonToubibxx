"use client";

import React from "react";

import EspacePatient from "@/components/espaceUtilisateur/EspacePatient";
import EspaceProfetionnel from "@/components/espaceUtilisateur/EspaceProfetionnel";
import EspaceUtilisateur from "@/components/espaceUtilisateur/EspaceUtilisateur";
import IntroComponent from "@/components/IntroComponent";
import { useTranslation } from "react-i18next";

const EspaceUtilisateurPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col  bg-light-background justify-center md:items-center pb-12">
      <IntroComponent
        title={t("espaceUtilisateur.introTitle")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl">
        <EspaceUtilisateur />
        <EspacePatient />
        <EspaceProfetionnel />
      </div>
    </main>
  );
};

export default EspaceUtilisateurPage;
