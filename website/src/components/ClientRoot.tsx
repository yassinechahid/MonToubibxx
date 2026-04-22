"use client";

import React, { useEffect, useState, ReactNode } from "react";

import ClientLayout from "@/components/ClientLayout";
import i18n from "@/utils/i18n";

export default function ClientRoot({ children }: { children: ReactNode }) {
  const [, setLang] = useState("fr");
  const [, setDir] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const currentLang =
      i18n.language || localStorage.getItem("language") || "fr";
    const isRTL = currentLang === "ar";
    setLang(currentLang);
    setDir(isRTL ? "rtl" : "ltr");

    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <body className="font-roboto bg-light-background text-light-onBackground">
      <ClientLayout>{children}</ClientLayout>
    </body>
  );
}
