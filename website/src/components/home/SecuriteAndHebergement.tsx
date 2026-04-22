"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import maroc from "@/public/home/maroc.svg";
import lock2 from "@/public/home/lock2.svg";
import lampp from "@/public/home/lampp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";

import { MotionLink } from "./Introduction";

const SecuriteAndHebergement = () => {
  const { t } = useTranslation();
  const tableData = [
    {
      domaine: t("security.table.rows.domain1"),
      engagement: t("security.table.rows.commitment1"),
      references: t("security.table.rows.references1"),
    },
    {
      domaine: t("security.table.rows.domain2"),
      engagement: t("security.table.rows.commitment2"),
      references: t("security.table.rows.references2"),
    },
    {
      domaine: t("security.table.rows.domain3"),
      engagement: t("security.table.rows.commitment3"),
      references: t("security.table.rows.references3"),
    },
    {
      domaine: t("security.table.rows.domain4"),
      engagement: t("security.table.rows.commitment4"),
      references: t("security.table.rows.references4"),
    },
    {
      domaine: t("security.table.rows.domain5"),
      engagement: t("security.table.rows.commitment5"),
      references: t("security.table.rows.references5"),
    },
    {
      domaine: t("security.table.rows.domain6"),
      engagement: t("security.table.rows.commitment6"),
      references: t("security.table.rows.references6"),
    },
  ];

  return (
    <section className="flex flex-col justify-center px-6">
      {/* Title */}
      <motion.header
        className="flex pb-16 pt-20 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="font-bold text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("security.title")}
        </motion.h1>
      </motion.header>

      <div className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.span
            className="text-light-tertiary font-bold pb-2 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("security.subtitle")}
          </motion.span>
          <motion.p
            className="text-light-onSurfaceVariant w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            dangerouslySetInnerHTML={{ __html: t("security.description")}}
          >
          </motion.p>
          
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-[259px] h-[269px]">
            <Image alt="maroc" src={maroc} />
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          >
            <Image
              alt="lock2"
              src={lock2}
              className="absolute top-20 right-6"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.span
        className="text-light-tertiary w-full font-bold pt-8 pb-3 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("security.compliance")}
      </motion.span>
      <div className="overflow-x-auto overflow-y-hidden">
        <motion.table
        className="w-full overflow-x-auto overflow-y-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <thead className="bg-light-secondaryContainer text-light-primary border border-light-outlineVariant">
            <tr>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium">
                {t("security.table.headers.domain")}
              </th>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium">
                {t("security.table.headers.commitment")}
              </th>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium">
                {t("security.table.headers.references")}
              </th>
            </tr>
          </thead>
          <tbody className="border border-light-outlineVariant p-2">
            {tableData.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <motion.td
                  className="text-title-medium text-light-tertiary font-medium border border-light-outlineVariant p-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {row.domaine}
                </motion.td>
                <motion.td
                  className="font-normal text-light-onSurfaceVariant border border-light-outlineVariant p-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {row.engagement}
                </motion.td>
                <motion.td
                  className="font-normal text-light-onSurfaceVariant border border-light-outlineVariant p-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {row.references}
                </motion.td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>

      </div>
        
      <div className="flex w-full my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("security.d2")}
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/compliance"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.sec")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/compliance#conformite"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.discover")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="text-center mt-8">
        {t("security.note")}
      </p>
    </section>
  );
};

export default SecuriteAndHebergement;
