"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
import lampp from "@/public/home/lampp.svg";
import { MotionLink } from "../home/Introduction";

const SecuriteAndConformite = () => {
  const { t } = useTranslation();
  const tableData = [
    {
      domaine: t("securityAndConformite.table.rows.domain1"),
      engagement: t("securityAndConformite.table.rows.commitment1"),
      references: t("securityAndConformite.table.rows.references1"),
    },
    {
      domaine: t("securityAndConformite.table.rows.domain2"),
      engagement: t("securityAndConformite.table.rows.commitment2"),
      references: t("securityAndConformite.table.rows.references2"),
    },
    {
      domaine: t("securityAndConformite.table.rows.domain3"),
      engagement: t("securityAndConformite.table.rows.commitment3"),
      references: t("securityAndConformite.table.rows.references3"),
    },
    {
      domaine: t("securityAndConformite.table.rows.domain4"),
      engagement: t("securityAndConformite.table.rows.commitment4"),
      references: t("securityAndConformite.table.rows.references4"),
    },
    {
      domaine: t("securityAndConformite.table.rows.domain5"),
      engagement: t("securityAndConformite.table.rows.commitment5"),
      references: t("securityAndConformite.table.rows.references5"),
    },
    {
      domaine: t("securityAndConformite.table.rows.domain6"),
      engagement: t("securityAndConformite.table.rows.commitment6"),
      references: t("securityAndConformite.table.rows.references6"),
    },
  ];

  return (
    <section className="flex flex-col justify-center px-6">
      {/* Title */}
      <motion.header
        className="flex pb-12 pt-10 justify-center items-center"
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
          {t("securityAndConformite.title")}
        </motion.h1>
      </motion.header>

      <div className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row">
        <div className="flex flex-col">
          <motion.span
            className="text-light-tertiary font-bold pb-2 text-title-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("securityAndConformite.subtitle")}{" "}
          </motion.span>
          <motion.p
            className="text-light-onSurfaceVariant w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t("securityAndConformite.description")}
          </motion.p>
        </div>
      </div>

      <motion.span
        className="text-light-tertiary w-full font-bold pt-8 pb-3 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("securityAndConformite.compliance")}
      </motion.span>
      <div className="overflow-x-auto overflow-y-hidden w-full">
        <motion.table
          className="overflow-x-auto overflow-y-hidden table-fixed w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <thead className="bg-light-secondaryContainer text-light-primary border border-light-outlineVariant">
            <tr>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium text-left">
                {t("securityAndConformite.table.headers.domain")}
              </th>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium text-left">
                {t("securityAndConformite.table.headers.commitment")}
              </th>
              <th className="border border-light-outlineVariant p-2 text-title-medium font-medium text-left">
                {t("securityAndConformite.table.headers.references")}
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
                  className="text-title-medium text-light-tertiary font-medium border border-light-outlineVariant p-2 text-left align-top"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {row.domaine}
                </motion.td>
                <motion.td
                  className="font-normal text-light-onSurfaceVariant border border-light-outlineVariant p-2 text-left align-top"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  dangerouslySetInnerHTML={{ __html: row.engagement }}
                ></motion.td>
                <motion.td
                  className="font-normal text-light-onSurfaceVariant border border-light-outlineVariant p-2 text-left align-top"
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
            {t("securityAndConformite.d2")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("securityAndConformite.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("securityAndConformite.link2")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href=""
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("securityAndConformite.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-2 flex text-center px-8">
        {t("securityAndConformite.p")}
      </p>
    </section>
  );
};

export default SecuriteAndConformite;
