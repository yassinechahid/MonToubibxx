"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import scope from "@/public/home/scope2.svg";
import apartement from "@/public/home/apartement2.svg";
import support from "@/public/home/support.svg";
import medecin from "@/public/home/medecin.svg";
import lampp from "@/public/home/lampp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";

import ServiceCard from "./ServiceCard";
import LabeledInput from "../InputsCompnents/LabeledInput";
import LabeledSelect from "../InputsCompnents/LabeledSelect";
import LabeledTextArea from "../InputsCompnents/LabeledTextArea";
import GoPopupsButton from "../InputsCompnents/GoPopupsButton";
import { successAlert } from "@/utils/alert";
import {
  emailPattern,
  phonePattern,
  useValidationMessages,
} from "@/utils/InputValidation";
import { MotionLink } from "./Introduction";

const Rejoiner = () => {
  const { t } = useTranslation();
  const { getPatternMessage, getRequiredMessageKey } = useValidationMessages();

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    Sujet: "",
    Fonction: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = getRequiredMessageKey("fullName");
    } else if (!(formData.fullName)) {
      newErrors.fullName = getPatternMessage("name");
    }

    if (!formData.Fonction) {
      newErrors.Fonction = getRequiredMessageKey("Fonction");
    }

    if (!formData.email?.trim()) {
      newErrors.email = getRequiredMessageKey("email");
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = getPatternMessage("email");
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = getRequiredMessageKey("phone");
    } else if (!phonePattern.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = getPatternMessage("phone");
    }

    if (!formData.Sujet?.trim()) {
      newErrors.Sujet = getRequiredMessageKey("Sujet");
    }

    if (!formData.message?.trim()) {
      newErrors.message = getRequiredMessageKey("message");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);
      successAlert(t("join.form.success"));

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        category: "",
        Sujet: "",
        Fonction: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleButtonClick = () => {
    if (validateForm()) {
      console.log("Button clicked with data:", formData);
      successAlert(t("join.form.success"));

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        category: "",
        Sujet: "",
        Fonction: "",
        message: "",
      });
      setErrors({});
    }
  };

  const cards = [
    {
      icon: scope,
      alt: "chat",
      title: t("join.cards.healthcare_professionals.title"),
      description: t("join.cards.healthcare_professionals.description"),
    },
    {
      icon: apartement,
      alt: "stethoscope",
      title: t("join.cards.institutions_companies.title"),
      description: t("join.cards.institutions_companies.description"),
    },
    {
      icon: support,
      alt: "chart",
      title: t("join.cards.support_assistance.title"),
      description: t("join.cards.support_assistance.description"),
    },
  ];

  const specialties = [
    t("contact.specialties.patient"),
    t("contact.specialties.professional"),
    t("contact.specialties.institution"),
  ];

  return (
    <section className="flex flex-col justify-center">
      {/* Title */}
      <header className="flex pb-14 pt-10 justify-center">
        <motion.h1
          className="font-bold text-display-small text-light-primary text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("join.title")}
        </motion.h1>
      </header>

      <div className="mx-auto flex flex-col justify-around items-center gap-12 md:flex-row px-6">
        <div className="flex flex-col">
          <span className="text-light-tertiary font-bold text-center pb-2 text-title-large">
          {t("join.title2")}
        </span>
          <motion.span
            className="text-light-onSurfaceVariant text-center w-full "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("join.description")}
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-light-tertiary font-bold text-center pt-8 text-title-large">
          {t("join.subtitle")}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 px-5 w-full">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        className=" w-full p-5 xl:p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-light-surfaceContainerLowest mt-4 p-6  rounded-2xl w-full shadow-lg">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start"
            dir="ltr"
          >
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information - 2 columns grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LabeledInput
                  label={t("join.form.full_name")}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  isError={errors.fullName}
                />
                {/* Specialty - Full width */}
                <LabeledSelect
                  label={t("join.form.function")}
                  name="Fonction"
                  value={formData.Fonction}
                  onChange={handleSelectChange}
                  options={[
                    ...specialties.map((spec) => ({
                      value: spec.toLowerCase(),
                      label: spec,
                    })),
                  ]}
                  isError={errors.Fonction}
                />
              </div>

              {/* Contact Information - 2 columns grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LabeledInput
                  label={t("join.form.email")}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isError={errors.email}
                />

                <LabeledInput
                  label={t("join.form.phone")}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  isError={errors.phone}
                />
              </div>

              {/* Professional Information - 2 columns grid */}
              <div className="grid gap-4">
                <LabeledInput
                  label={t("join.form.subject")}
                  name="Sujet"
                  value={formData.Sujet}
                  onChange={handleInputChange}
                  isError={errors.Sujet}
                />
              </div>

              {/* Message - Full width */}
              <LabeledTextArea
                label={t("join.form.message")}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-light-surfaceContainerHighest rounded-lg"
                isError={errors.message}
              />

              {/* Submit Button */}
              <GoPopupsButton
                title={t("join.form.send")}
                className="w-full"
                onClick={handleButtonClick}
              />
            </form>

            {/* Image Section */}
            <div className="hidden lg:block items-center justify-center h-full">
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Image
                  alt="Médecin utilisant la plateforme Mon Toubib"
                  src={medecin}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex w-full my-5 justify-center items-center px-4">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lampp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("join.d2")}
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 px-5 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/community"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.partner")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/user-area#Professionnels"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.access")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/privacy"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("home.consult")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Rejoiner;
