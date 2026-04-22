"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
export const MotionLink = motion(Link);
import introductionImage from "@/public/introductionImage.png";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import smartToy from "@/public/home/smartToy.svg";
import handShake from "@/public/home/handShake.svg";
import bgIntro from "@/public/home/bgIntro.png";
import lockBig from "@/public/home/lockBig.svg";

import { successAlert } from "@/utils/alert";
import { useRouter } from "next/navigation";

export default function Introduction() {
  const router = useRouter();
  const { t } = useTranslation();
  const handleSuccess = () => successAlert(t("home.notAvailable"));
  const handleSuccess2 = () => {

    setTimeout(() => {
      router.push("/contact");
    }); 
  };
  return (
    <section className="w-full relative flex pt-40 justify-center pb-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={bgIntro}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Content */}
      <div className="relative w-full max-w-screen-2xl px-6 flex flex-col items-center">
        {/* Top Row - Left and Right Sides */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 min-h-[400px] bg-light-surfaceContainerLow/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-display-small font-bold text-light-primary leading-tight mb-2"
            >
              Mon Toubib
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-display-small font-bold text-light-primary leading-tight mb-6"
            >
              {t("home.subtitle")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-body-large font-robot text-light-onSurfaceVariant mb-8 leading-relaxed"
            >
              {t("home.description1")}{" "}
              <span className="text-title-medium font-medium text-light-primary">
                {t("home.description2")}
              </span>{" "}
              {t("home.description3")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-2 leading-relaxed"
            >
              <button
                onClick={handleSuccess}
                className="w-full sm:w-auto text-white bg-light-primary px-6 py-3 rounded-xl font-medium hover:bg-light-primary/90 transition-all duration-200 shadow-md"
              >
                {t("home.patientButton")}
              </button>
              <button
                onClick={handleSuccess2}
                className="w-full sm:w-auto text-light-primary border border-light-outline px-6 py-3 rounded-xl font-medium hover:bg-light-primary/10 transition-all duration-200"
              >
                {t("home.professionalButton")}
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-6 leading-relaxed"
            >
              <button
                onClick={handleSuccess2}
                className="w-full sm:w-auto bg-light-secondaryContainer text-light-onSecondaryContainer px-6 py-3 rounded-xl font-medium hover:bg-light-primary/20 transition-all duration-200"
              >
                {t("home.entreprise")}
              </button>
            </motion.div>

            <MotionLink
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              href="/platform"
              className="flex flex-row gap-3 items-center px-3"
            >
              <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />

              <span className="text-label-large font-medium text-light-primary leading-relaxed">
                {t("home.platformLink")}
              </span>
            </MotionLink>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6 pt-6"
            >
              {[
                {
                  icon: smartToy,
                  alt: "smartToy",
                  text: t("espacePatient.card3.title"),
                },
                {
                  icon: handShake,
                  alt: "handshake",
                  text: t("cordination.title"),
                },
                {
                  icon: lockBig,
                  alt: "lock",
                  text: t("home.card"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.1,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center justify-center h-full min-h-[150px] bg-light-secondaryContainer rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-1 flex items-center justify-center flex-col gap-2">
                    <Image src={item.icon} alt={item.alt} />
                    <h2 className="text-center font-semibold text-light-onSurface px-1 leading-tight flex items-center justify-center">
                      {item.text}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-[500px] sm:max-w-[500px] lg:max-w-[600px] drop-shadow-2xl"
          >
            <Image
              src={introductionImage}
              alt="Illustration téléphone"
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="w-full flex flex-col gap-2 text-center text-body-large font-bold text-light-primary mt-12 mb-4"
        >
          <span>{t("home.d5")}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="w-full flex flex-col gap-1 text-center text-body-large font-bold text-light-primary mb-12"
        >
          <span>{t("home.d6")}</span>
          <span>{t("home.d7")}</span>
        </motion.div>
      </div>
    </section>
  );
}
