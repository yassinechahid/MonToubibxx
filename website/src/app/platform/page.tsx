"use client";
import React from "react";
import IntroComponent from "@/components/IntroComponent";
import Cmc from "@/components/platformeCoponents/Cmc";
import Csp from "@/components/platformeCoponents/Csp";
import Dispo from "@/components/platformeCoponents/Dispo";
import Dpsp from "@/components/platformeCoponents/Dpsp";
import Fci from "@/components/platformeCoponents/Fci";
import FirstComponent from "@/components/platformeCoponents/FirstComponent";
import IaSante from "@/components/platformeCoponents/IaSante";
import Mrss from "@/components/platformeCoponents/Mrss";
import { useTranslation } from "react-i18next";
import DemoAi from "@/components/platformeCoponents/DemoAi";
import SignatureAndEbergement from "@/components/platformeCoponents/SignatureAndEbergement";
import SecuriteAndConformite from "@/components/platformeCoponents/SecuriteAndConformite";

const PlatformPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col bg-light-background md:items-center justify-center pb-12">
      <IntroComponent
        title={t("decouvrirPlatform.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl ">
      <FirstComponent />
      <Dpsp />
      <Csp />
      <Fci />
      <Dispo />
      <IaSante />
      <Mrss />
      <Cmc />
      <SignatureAndEbergement/>
      <DemoAi/>
      <SecuriteAndConformite/>
      </div>

    </main>
  );
};

export default PlatformPage;
