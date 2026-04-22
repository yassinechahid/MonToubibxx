import React from "react";
import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/public/assets/pictures/logoWhite.svg";
import facebook from "@/public/assets/pictures/facebook.svg";
import youtube from "@/public/assets/pictures/youtube.svg";
import linkedIn from "@/public/assets/pictures/linkedIn.svg";
import mail from "@/public/assets/pictures/mail.svg";
import tel from "@/public/assets/pictures/tel.svg";
import instagram from "@/public/assets/pictures/instagram.svg";
import maroc from "@/public/home/maroc2.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const sitemapLinks = [
    { name: t("footer.sitemap.home"), href: "/" },
    {
      name: t("footer.sitemap.discoverPlatform"),
      href: "/platform",
    },
    { name: t("footer.sitemap.userSpace"), href: "/user-area" },
    { name: t("footer.sitemap.mtAcademy"), href: "/mt-academy" },
    { name: t("footer.sitemap.community"), href: "/community" },
    { name: t("footer.sitemap.media"), href: "/media" },
    { name: t("footer.sitemap.contact"), href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: linkedIn,
      alt: "lien vers LinkedIn ",
      href: "https://linkedin.com/company/montoubib",
    },
    {
      icon: facebook,
      alt: "lien vers facebook",
      href: "https://facebook.com/montoubib",
    },
    {
      icon: youtube,
      alt: "lien vers youtube",
      href: "https://youtube.com/montoubib",
    },
    {
      icon: instagram,
      alt: "lien vers instagram",
      href: "https://instagram.com/montoubib",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-primary p-6">
      <div className="flex flex-col md:flex-row justify-center">
        {/* Left Section - Brand */}
        <div className="flex flex-col md:pl-6 md:pr-6 lg:pl-14 text-body-small gap-2 w-full lg:max-w-[450px]">
          <Image
            className="lg:self-start"
            src={logoWhite}
            alt={t("footer.logoAlt")}
          />
          <p className="text-light-secondaryContainer text-body-small">
            {t("footer.brandDescription")}
          </p>
          <span className="text-light-onPrimary text-body-small">
            {t("footer.legalDescription")}
          </span>
        </div>

        {/* Right Section - Links */}
        <div className="w-full flex flex-col justify-evenly items-center mt-5 lg:gap-12 bg-light-primary">
          <div className="w-full flex flex-row s:flex-row gap-3 lg:gap-11 justify-evenly lg:px-14">
            <div>
              {/* navigation */}
              <div className="flex flex-col gap-4 justify-center sm:items-start">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.sitemap.title")}
                </span>
                <ul className="flex flex-col gap-3 sm:items-start">
                  {sitemapLinks.map((link) => (
                    <li
                      key={link.name}
                      className="text-body-medium text-light-onPrimary font-roboto font-normal"
                    >
                      <Link
                        href={link.href}
                        className="hover:text-light-primaryContainer transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* docs */}
              <div className="flex flex-col gap-2 mt-5 lg:hidden">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.docs")}
                </span>
                <a
                  href="/terms"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.dd")}
                </a>
                <a
                  href="/privacy"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.privacy")}
                </a>
                <a
                  href="/cookies"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.cookies")}
                </a>
                <a
                  href="/legal"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.legal2")}
                </a>
                <a
                  href="/compliance"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.docs2")}
                </a>
              </div>
              <div className="flex md:hidden flex-col gap-4 pt-4 sm:items-start">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.social.title")}
                </span>
                <div className="flex gap-4 items-center">
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
              </div>
            </div>

            <div className="flex flex-col">
              {/* docs */}
              <div className="hidden lg:flex flex-col gap-2">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.docs")}
                </span>
                <a
                  href="/terms"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.dd")}
                </a>
                <a
                  href="/privacy"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.privacy")}
                </a>
                <a
                  href="/cookies"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.cookies")}
                </a>
                <a
                  href="/legal"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.legal2")}
                </a>
                <a
                  href="/compliance"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.docs2")}
                </a>
              </div>

              {/* assistance */}
              <div className="hidden lg:flex flex-col gap-2 mt-5">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.assistance")}
                </span>
                <a
                  href="/help"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.faq")}
                </a>
                <a
                  href="/glossary"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.glossary")}
                </a>
                <a
                  href="/features"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.functionnality")}
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col gap-4 sm:items-start">
              <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                {t("footer.contact.title")}
              </span>
              <div className="flex gap-2 ">
                <Image src={mail} alt="icone mail" />
                <Link
                  href="mailto:info@montoubib.com"
                  className="text-label-large font-roboto font-normal text-light-onPrimary hover:text-light-primaryContainer transition-colors"
                >
                  info@montoubib.com <br /> {t("footer.direct")}
                </Link>
              </div>
              <div className="flex gap-2">
                <Image src={mail} alt="icone mail" />
                <Link
                  href="mailto:info@montoubib.com"
                  className="text-label-large font-roboto font-normal text-light-onPrimary hover:text-light-primaryContainer transition-colors"
                >
                  Support@montoubib.com <br /> {t("footer.support")}
                </Link>
              </div>
              <div className="flex gap-2 ">
                <Image src={tel} alt="icone telephone" />
                <Link
                  href="tel:+212654987412"
                  className="text-body-medium font-roboto font-normal text-light-onPrimary hover:text-light-primaryContainer transition-colors"
                >
                  +212 654 987 412
                </Link>
              </div>
              <div className="md:flex flex-col gap-4 pt-2 sm:items-start hidden">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.social.title")}
                </span>
                <div className="flex gap-4 items-center">
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
              </div>
              {/* assistance */}
              <div className="flex flex-col gap-2 mt-4 lg:mt-[100px] lg:hidden">
                <span className="text-title-medium text-light-primaryContainer font-roboto font-medium">
                  {t("footer.assistance")}
                </span>
                <a
                  href="/help"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.faq")}
                </a>
                <a
                  href="/glossary"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.glossary")}
                </a>
                <a
                  href="/features"
                  className="text-light-onPrimary text-body-medium font-normal hover:text-light-primaryContainer transition-colors"
                >
                  {t("footer.functionnality")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-8 pt-6">
        <div className="text-light-onPrimary text-center lg:text-left text-body-medium">
          <p className="text-center md:text-center lg:text-left">
            {" "}
            &copy;{t("footer.copyright", { year: currentYear })}
          </p>
          <p>{t("footer.p")}</p>
        </div>
        <div className="flex gap-1">
          <Image alt="maroc" src={maroc} />
          <p className="text-light-onPrimary text-body-small font-normal pr-5">
            {t("footer.madeIn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
