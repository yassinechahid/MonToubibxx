"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MotionLink } from "../home/Introduction";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";

const SignatureAndEbergement = () => {
  const { t } = useTranslation();
  const tableData = [
    {
      domaine: t("securityandebergement.table.rows.domain1"),
      reference: t("securityandebergement.table.rows.commitment1"),
    },
    {
      domaine: t("securityandebergement.table.rows.domain2"),
      reference: t("securityandebergement.table.rows.commitment2"),
    },
    {
      domaine: t("securityandebergement.table.rows.domain3"),
      reference: t("securityandebergement.table.rows.commitment3"),
    },
    {
      domaine: t("securityandebergement.table.rows.domain4"),
      reference: t("securityandebergement.table.rows.commitment4"),
    },
    {
      domaine: t("securityandebergement.table.rows.domain5"),
      reference: t("securityandebergement.table.rows.commitment5"),
    },
  ];

  return (
    <section className="flex flex-col justify-center px-6">
      {/* Title */}
      <motion.header
        className="flex pb-16 pt-4 justify-center items-center"
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
          {t("securityandebergement.title")}
        </motion.h1>
      </motion.header>

      <div className="mx-auto flex flex-col justify-around items-center gap-12">
        <div className="mx-auto flex flex-col justify-around gap-2">
          <motion.span
            className="text-light-tertiary font-bold pb-2 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("securityandebergement.subtitle")}{" "}
          </motion.span>
          <motion.p
            className="text-light-onSurfaceVariant w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t("securityandebergement.description")}
          </motion.p>
        </div>
      </div>

      <motion.span
        className="text-light-tertiary w-full font-bold pt-8 pb-3 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("securityandebergement.compliance")}
      </motion.span>
      <div className="overflow-x-auto overflow-y-hidden w-full">
        <motion.table
          className="overflow-x-auto w-full overflow-y-hidden table-fixed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <thead className="bg-light-secondaryContainer text-light-primary border border-light-outlineVariant">
            <tr>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium">
                {t("securityandebergement.table.headers.domain")}
              </th>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium">
                {t("securityandebergement.table.headers.commitment")}
              </th>
            </tr>
          </thead>
          <tbody className="border maw-w-[520px] border-light-outlineVariant p-2">
            {tableData.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <motion.td
                  className="text-title-medium text-light-tertiary font-medium border border-light-outlineVariant p-2 pl-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {row.domaine}
                </motion.td>
                <motion.td
                  className="font-normal text-light-onSurfaceVariant border border-light-outlineVariant p-2 pl-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {row.reference}
                </motion.td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
      <p className="mt-5">{t("securityandebergement.p")}</p>
      <div className="flex w-full my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("securityandebergement.d2")}
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 my-1">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("securityandebergement.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/compliance"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("securityandebergement.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/compliance"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("securityandebergement.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default SignatureAndEbergement;
