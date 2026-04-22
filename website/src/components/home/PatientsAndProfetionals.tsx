"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DpspCard from "../platformeCoponents/DpspCard";
import smartToy from "@/public/platforme/ai.svg";
import filming from "@/public/platforme/filming.svg";
import folder from "@/public/platforme/folder.svg";
import sync from "@/public/platforme/sync.svg";
import heart from "@/public/platforme/heart.svg";
import chat from "@/public/home/chat.svg";
import monitor from "@/public/home/monitor.svg";
import chat2 from "@/public/platforme/chat.svg";
import money from "@/public/platforme/money.svg";
import man from "@/public/platforme/man.svg";
import eye from "@/public/platforme/eye.svg";
import health from "@/public/platforme/health.svg";
import plusfolder from "@/public/platforme/plusfolder.svg";
import devices from "@/public/platforme/devices.svg";
import dr from "@/public/home/dr.png";
import ring from "@/public/platforme/ring.svg";
import suivi from "@/public/platforme/suivi.svg";
import confirm from "@/public/platforme/confirm.svg";
import emergency from "@/public/platforme/emergency.svg";
import Image from "next/image";

// Define TypeScript interfaces
interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

type FilterType = "patient" | "medecin" | "professionnels";

interface FilterOption {
  id: FilterType;
  label: string;
}

const PatientsAndProfetionals = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterType>("patient");

  // Filter options
  const filters: FilterOption[] = [
    { id: "patient", label: t("patientsProfessionals.label1") },
    { id: "medecin", label: t("patientsProfessionals.label2") },
    { id: "professionnels", label: t("patientsProfessionals.label3") },
  ];

  // Get DPSP cards data for active filter
  const getCardsData = (): CardData[] => {
    const cardsData: Record<FilterType, CardData[]> = {
      patient: [
        {
          id: 1,
          title: t("patientsProfessionals.patientCards.p1.title"),
          description: t("patientsProfessionals.patientCards.p1.description"),
          icon: folder,
        },
        {
          id: 2,
          title: t("patientsProfessionals.patientCards.p2.title"),
          description: t("patientsProfessionals.patientCards.p2.description"),
          icon: heart,
        },
        {
          id: 3,
          title: t("patientsProfessionals.patientCards.p3.title"),
          description: t("patientsProfessionals.patientCards.p3.description"),
          icon: suivi,
        },
        {
          id: 4,
          title: t("patientsProfessionals.patientCards.p4.title"),
          description: t("patientsProfessionals.patientCards.p4.description"),
          icon: emergency,
        },
        {
          id: 5,
          title: t("patientsProfessionals.patientCards.p5.title"),
          description: t("patientsProfessionals.patientCards.p5.description"),
          icon: chat,
        },
        {
          id: 6,
          title: t("patientsProfessionals.patientCards.p6.title"),
          description: t("patientsProfessionals.patientCards.p6.description"),
          icon: filming,
        },
        {
          id: 7,
          title: t("patientsProfessionals.patientCards.p7.title"),
          description: t("patientsProfessionals.patientCards.p7.description"),
          icon: smartToy,
        },
        {
          id: 8,
          title: t("patientsProfessionals.patientCards.p8.title"),
          description: t("patientsProfessionals.patientCards.p8.description"),
          icon: money,
        },
        {
          id: 9,
          title: t("patientsProfessionals.patientCards.p9.title"),
          description: t("patientsProfessionals.patientCards.p9.description"),
          icon: confirm,
        },
        {
          id: 10,
          title: t("patientsProfessionals.patientCards.p10.title"),
          description: t("patientsProfessionals.patientCards.p10.description"),
          icon: ring,
        },
      ],
      medecin: [
        {
          id: 1,
          title: t("patientsProfessionals.medecin.card1.title"),
          description: t("patientsProfessionals.medecin.card1.description"),
          icon: folder,
        },
        {
          id: 2,
          title: t("patientsProfessionals.medecin.card2.title"),
          description: t("patientsProfessionals.medecin.card2.description"),
          icon: chat2,
        },
        {
          id: 3,
          title: t("patientsProfessionals.medecin.card3.title"),
          description: t("patientsProfessionals.medecin.card3.description"),
          icon: smartToy,
        },
        {
          id: 4,
          title: t("patientsProfessionals.medecin.card4.title"),
          description: t("patientsProfessionals.medecin.card4.description"),
          icon: chat,
        },
        {
          id: 5,
          title: t("patientsProfessionals.medecin.card5.title"),
          description: t("patientsProfessionals.medecin.card5.description"),
          icon: filming,
        },
      ],
      professionnels: [
        {
          id: 1,
          title: t("patientsProfessionals.professionnels.card1.title"),
          description: t(
            "patientsProfessionals.professionnels.card1.description"
          ),
          icon: folder,
        },
        {
          id: 2,
          title: t("patientsProfessionals.professionnels.card2.title"),
          description: t(
            "patientsProfessionals.professionnels.card2.description"
          ),
          icon: plusfolder,
        },
        {
          id: 3,
          title: t("patientsProfessionals.professionnels.card3.title"),
          description: t(
            "patientsProfessionals.professionnels.card3.description"
          ),
          icon: chat,
        },
        {
          id: 4,
          title: t("patientsProfessionals.professionnels.card4.title"),
          description: t(
            "patientsProfessionals.professionnels.card4.description"
          ),
          icon: filming,
        },
        {
          id: 5,
          title: t("patientsProfessionals.professionnels.card5.title"),
          description: t(
            "patientsProfessionals.professionnels.card5.description"
          ),
          icon: ring,
        },
        {
          id: 6,
          title: t("patientsProfessionals.professionnels.card6.title"),
          description: t(
            "patientsProfessionals.professionnels.card6.description"
          ),
          icon: sync,
        },
      ],
    };

    return cardsData[activeFilter] || cardsData.patient;
  };

  const card2 = [
    {
      icon: suivi,
      alt: "suivi",
      title: t("patientsProfessionals.outils.card1.title"),
      description: t("patientsProfessionals.outils.card1.description"),
    },
    {
      icon: emergency,
      alt: "emergency",
      title: t("patientsProfessionals.outils.card2.title"),
      description: t("patientsProfessionals.outils.card2.description"),
    },
    {
      icon: man,
      alt: "man",
      title: t("patientsProfessionals.outils.card3.title"),
      description: t("patientsProfessionals.outils.card3.description"),
    },
    {
      icon: eye,
      alt: "eye",
      title: t("patientsProfessionals.outils.card4.title"),
      description: t("patientsProfessionals.outils.card4.description"),
    },
    {
      icon: health,
      alt: "health",
      title: t("patientsProfessionals.outils.card5.title"),
      description: t("patientsProfessionals.outils.card5.description"),
    },
    {
      icon: money,
      alt: "money",
      title: t("patientsProfessionals.outils.card6.title"),
      description: t("patientsProfessionals.outils.card6.description"),
    },
    {
      icon: devices,
      alt: "devices",
      title: t("patientsProfessionals.outils.card7.title"),
      description: t("patientsProfessionals.outils.card7.description"),
    },
  ];

  const cards = getCardsData();

  return (
    <section className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
      {/* Title */}
      <motion.header
        className="flex pb-16 pt-20 justify-center font-bold text-display-small text-light-primary text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("patientsProfessionals.title")}
      </motion.header>

      {/* Description */}
      <motion.div
        className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col">
            <motion.span
              className="text-light-tertiary font-bold text-center pb-2 text-title-large"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("patientsProfessionals.subtitle")}
            </motion.span>

            <motion.span
              className="text-light-onSurfaceVariant text-center px-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{
                __html: t("patientsProfessionals.description"),
              }}
            ></motion.span>

            <motion.span
              className="text-light-tertiary font-bold text-center pt-6 text-title-large"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("patientsProfessionals.subtitle2")}
            </motion.span>
          </div>
        </motion.span>
      </motion.div>

      {/* Filter Tabs Section */}
      <motion.div
        className="w-full px-6 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-center w-full">
          {/* Filter Tabs */}
          <div
            className="flex flex-wrap justify-center mb-6 gap-0 w-full mx-auto"
            dir="ltr"
          >
            {filters.map((filter, index) => (
              <div
                key={filter.id}
                className="relative flex-1 min-w-0 max-w-[380px]"
              >
                <motion.button
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative md:px-6 md:py-4 font-medium border border-light-outline w-full h-full flex items-center justify-center text-center min-h-[56px] whitespace-normal overflow-hidden
                              ${index === 0 ? "rounded-l-2xl" : ""}
                              ${
                                index === filters.length - 1
                                  ? "rounded-r-2xl"
                                  : ""
                              }
                              ${index > 0 ? "-ml-[1px]" : ""}
                              ${
                                activeFilter === filter.id
                                  ? "bg-light-secondaryContainer text-light-onSecondaryContainer font-semibold"
                                  : "text-light-onSurface font-semibold z-10 hover:bg-light-secondaryContainer/40"
                              }`}
                >
                  <div className="w-full text-center break-words leading-snug px-1">
                    {filter.label}
                  </div>
                </motion.button>
              </div>
            ))}
          </div>

          {/* ======================================================================
          FILTER CONTENT SECTION - PATIENT
          ====================================================================== */}
          {activeFilter === "patient" && (
            <motion.div
              key="patient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <motion.span
                className="text-body-large text-light-secondary font-bold text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("patientsProfessionals.d4")}
              </motion.span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {cards.map((card: CardData, index: number) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <DpspCard
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      alt={`${activeFilter} feature ${index + 1}`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/*FILTER CONTENT SECTION - MEDECIN*/}
          {activeFilter === "medecin" && (
            <motion.div
              key="medecin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <motion.span
                className="text-body-large text-light-secondary ml-4 font-bold text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("patientsProfessionals.d5")}
              </motion.span>
              <div className="flex flex-wrap justify-center gap-4 mt-3 mb-5">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`flex-grow sm:flex-grow-0 sm:w-[calc(33.333%-16px)] 
                                ${
                                  index >= cards.length - 2
                                    ? "sm:w-[calc(50%-14px)]"
                                    : ""
                                }`}
                  >
                    <DpspCard
                      icon={card.icon}
                      alt={`${activeFilter} feature ${index + 1}`}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
              <motion.span
                className="text-body-large text-light-secondary ml-4 font-bold text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("patientsProfessionals.d6")}
              </motion.span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 mt-3">
                {card2.map((card, index) => (
                  <div
                    key={index}
                    className={`
                      ${
                        index < 3
                          ? "lg:w-[calc(33.333%-16px)]"
                          : "lg:w-[calc(25%-16px)]"
                      }
                      `}
                  >
                    <DpspCard
                      icon={card.icon}
                      alt={card.alt}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/*FILTER CONTENT SECTION - PROFESSIONNELS DE SANTÉ*/}
          {activeFilter === "professionnels" && (
            <motion.div
              key="professionnels"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row  mb-6 gap-12 items-center">
                <div className="flex flex-col gap-3">
                  <motion.span
                    className="text-body-large text-light-secondary ml-4 font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {t("patientsProfessionals.d7")}
                  </motion.span>
                  <motion.span
                    className="text-body-large text-light-onSurfaceVariant ml-4 font-normal"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {t("patientsProfessionals.paragraph")}
                  </motion.span>
                </div>
                <Image alt="dr" src={dr} className="w-[330px] h-[210px] " />
              </div>
              <div className="flex flex-col justify-between items-center gap-12 md:flex-row px-7 w-full mb-5">
                <motion.div
                  className="w-full flex justify-end max-w-xs sm:max-w-sm lg:w-[328.69px] lg:flex-shrink-0"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image
                    src={monitor}
                    alt="image téléphone"
                    className="w-full"
                    sizes="(max-width: 1024px) 100vw, 328.69px"
                  />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {" "}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <span className="text-light-secondary font-bold text-title-large">
                      {t("patientsProfessionals.subtitle3")}
                    </span>
                    <p className="text-light-onSurfaceVariant pt-3">
                      {t("patientsProfessionals.description1")}
                    </p>

                    {/* Use div instead of span for list items */}
                    <div className="flex items-start">
                      <span className="text-light-onSurfaceVariant ml-4 font-semibold mr-2 flex-shrink-0">
                        • {t("patientsProfessionals.text1")}
                      </span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-light-onSurfaceVariant ml-4 font-semibold mr-2 flex-shrink-0">
                        • {t("patientsProfessionals.text2")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-light-onSurfaceVariant ml-4 font-semibold mr-2 flex-shrink-0">
                        • {t("patientsProfessionals.text3")}
                      </span>
                    </div>

                    <p className="text-light-onSurfaceVariant pt-3">
                      {t("patientsProfessionals.text4")}
                    </p>
                  </motion.div>
                </motion.span>
              </div>

              {/* Add professionnels de santé specific content here */}
              <span className="text-light-secondary font-bold">
                {t("patientsProfessionals.subtitle4")}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                {cards.map((card: CardData, index: number) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <DpspCard
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      alt={`${activeFilter} feature ${index + 1}`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <div className="flex w-full px-6 justify-center items-center mt-8">
        <motion.span
          className="text-body-large text-light-onSecondaryContainer text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("patientsProfessionals.d3")}
        </motion.span>
      </div>
    </section>
  );
};

export default PatientsAndProfetionals;
