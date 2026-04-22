"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import IntroComponent from "@/components/IntroComponent";
import SearchField from "@/components/SearchField";

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col bg-light-background items-center justify-center pb-12">
      <IntroComponent
        title={t("search.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />

      <div className="w-full md:w-auto px-6 pt-6 h-[calc(100vh-708px)]">
        <SearchField
          onSearch={(value) => console.log("Searching for:", value)}
          searchValue=""
        />
      </div>
    </main>
  );
};

export default SearchPage;
