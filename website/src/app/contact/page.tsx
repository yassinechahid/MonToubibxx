"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { MdCall, MdMail, MdLanguage } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import facebook from "@/public/assets/pictures/facebook2.svg";
import youtube from "@/public/assets/pictures/youtube2.svg";
import linkedIn from "@/public/assets/pictures/linkedIn2.svg";
import instagram from "@/public/assets/pictures/instagram2.svg";

import Alert from "@/components/Alert";
import LabeledInput from "@/components/InputsCompnents/LabeledInput";
import LabeledSelect from "@/components/InputsCompnents/LabeledSelect";
import LabeledTextArea from "@/components/InputsCompnents/LabeledTextArea";
import { successAlert } from "@/utils/alert";
import { useValidationMessages } from "@/utils/InputValidation";
import IntroComponent from "@/components/IntroComponent";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

const Page: React.FC = () => {
  const { t } = useTranslation();
  const { getRequiredMessageKey } = useValidationMessages();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
    isVisible: boolean;
  }>({
    type: "success",
    message: "",
    isVisible: false,
  });

  const [formData, setFormData] = React.useState({
    fullName: "",
    fonction: "",
    email: "",
    phone: "",
    subject: "",
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
    }

    if (!formData.fonction) {
      newErrors.fonction = getRequiredMessageKey("fonction");
    }

    if (!formData.email?.trim()) {
      newErrors.email = getRequiredMessageKey("email");
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = getRequiredMessageKey("phone");
    }

    if (!formData.subject?.trim()) {
      newErrors.subject = getRequiredMessageKey("subject");
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
      setIsSubmitting(true);
      try {
        console.log("Form data:", formData);
        successAlert(t("contact.successMessage"));

        setFormData({
          fullName: "",
          fonction: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Contact creation error:", error);
        setAlert({
          type: "error",
          message:
            error instanceof Error ? error.message : t("contact.errorMessage"),
          isVisible: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, isVisible: false }));
  };

  const info = {
    phone: t("contact.phoneNumber"),
    email: t("contact.email"),
  };

  const socialLinks = [
    {
      icon: facebook,
      alt: t("contact.socialLinks.facebook.alt"),
      href: t("contact.socialLinks.facebook.href"),
    },
    {
      icon: instagram,
      alt: t("contact.socialLinks.instagram.alt"),
      href: t("contact.socialLinks.instagram.href"),
    },
    {
      icon: linkedIn,
      alt: t("contact.socialLinks.linkedin.alt"),
      href: t("contact.socialLinks.linkedin.href"),
    },
    {
      icon: youtube,
      alt: t("contact.socialLinks.youtube.alt"),
      href: t("contact.socialLinks.youtube.href"),
    },
  ];

  const specialties = [
    t("contact.specialties.patient"),
    t("contact.specialties.professional"),
    t("contact.specialties.institution"),
  ];

  const AnimatedCard = ({ children }: AnimatedCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={ref}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {children}
      </div>
    );
  };

  return (
    <main className="flex flex-col bg-light-background items-center justify-center ">
      <IntroComponent
        title={t("contact.title")}
        minHeight="min-h-[204px]"
        textColor="text-light-primary"
        textSize="text-display-small"
      />
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mb-12 w-full overflow-y-hidden px-[24px] pt-6 bg-light-background hideScrolling">
        {alert.isVisible && <Alert {...alert} onClose={hideAlert} />}
        <header className="w-full mb-4">
          <motion.h1
            className="font-bold pb-6 text-title-large text-light-tertiary"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("contact.desc")}
          </motion.h1>
          <motion.p
            className=""
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("contact.paragraph")}
          </motion.p>
        </header>
        <div className="flex flex-col-reverse md:flex-row-reverse w-full gap-[100px] mb-7">
          <form
            onSubmit={handleSubmit}
            className="order-1 md:order-1 w-full flex flex-col gap-4"
          >
            {/* Nom Complet */}
            <LabeledInput
              label={t("contact.formLabels.fullName")}
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              isError={errors.fullName}
            />

            {/* Fonction */}
            <LabeledSelect
              label={t("contact.formLabels.function")}
              name="fonction"
              value={formData.fonction}
              onChange={handleSelectChange}
              options={specialties.map((spec) => ({
                value: spec.toLowerCase(),
                label: spec,
              }))}
              isError={errors.fonction}
            />

            {/* Email */}
            <LabeledInput
              label={t("contact.formLabels.email")}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              isError={errors.email}
            />

            {/* Téléphone */}
            <LabeledInput
              label={t("contact.formLabels.phone")}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              isError={errors.phone}
            />

            {/* Sujet */}
            <LabeledInput
              label={t("contact.formLabels.subject")}
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              isError={errors.subject}
            />

            {/* Message */}
            <LabeledTextArea
              label={t("contact.formLabels.message")}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-light-surfaceContainerHighest rounded-lg"
              isError={errors.message}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-light-primary text-label-large text-light-onPrimary capitalize rounded-full w-full h-[40px]"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {isSubmitting ? t("contact.submitting") : t("contact.submit")}
            </Button>
          </form>

          {/* CONTACT INFO & MAP SECOND */}
          <div className="w-full gap-4 flex flex-col order-2">
            <CardInfo
              icon={<MdCall size={32} color="#00696C" />}
              title={t("contact.contactInfo.phone")}
            >
              <ContactLine text={info.phone} />
            </CardInfo>

            <CardInfo
              icon={<MdMail size={32} color="#00696C" />}
              title={t("contact.contactInfo.email")}
            >
              <p className="text-body-large font-normal font-roboto text-light-onSurfaceVariant">
                {info.email}
              </p>
            </CardInfo>

            <CardInfo
              icon={<MdLanguage size={32} color="#00696C" />}
              title={t("contact.contactInfo.followUs")}
            >
              <div className="flex gap-4 mt-1 items-center">
                {socialLinks.map((social) => (
                  <Link
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image src={social.icon} alt={social.alt} />
                  </Link>
                ))}
              </div>
            </CardInfo>

            {/* MAPS iframe */}
            <div className="w-full mt-6 md:mt-0">
              <AnimatedCard delay={0.4}>
                <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-[#D3E5F5] shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.351586901452!2d-6.92380082364821!3d33.90634967321215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70d498a198773%3A0x66b940f364d6bcb1!2sNEXT%20OCTET!5e0!3m2!1sen!2sma!4v1753102941678!5m2!1sen!2s"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("contact.mapTitle")}
                  />
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Reusable card for contact info
const CardInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex bg-light-secondaryContainer gap-[24px] p-[24px] rounded-[16px]">
    <div className="size-[64px] bg-light-surface rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col gap-[4px]">
      <h1 className="text-title-large text-light-on-surface font-bold">
        {title}
      </h1>
      {children}
    </div>
  </div>
);

// Line with flag and text
const ContactLine: React.FC<{ flag?: StaticImageData; text: string }> = ({
  flag,
  text,
}) => (
  <div className="flex justify-start gap-2">
    {flag && <Image src={flag} alt="" />}
    <p
      className="text-body-large font-normal font-roboto text-light-on-surface-variant"
      dir="ltr"
    >
      {text}
    </p>
  </div>
);

export default Page;
