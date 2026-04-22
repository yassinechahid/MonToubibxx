"use client";
import React from "react";
import IntroComponent from "@/components/IntroComponent";
import { useTranslation } from "react-i18next";
import Glossary from "@/components/footerComponents/Glossary";

const Features = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col  bg-light-background items-center justify-center pb-12">
      <IntroComponent
        title={t("glossary.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="max-w-screen-2xl">
        <Glossary />
      </div>
    </main>
  );
};

export default Features;
