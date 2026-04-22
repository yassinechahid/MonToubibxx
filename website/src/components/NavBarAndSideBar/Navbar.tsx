"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import logo from "@/public/logos/mon_toubib_logo.svg";
import menuNormal from "@/public/assets/pictures/menuNormal.svg";
import searchIcon from "@/public/assets/pictures/search.svg";
// import message from "@/public/home/message.svg";

import LanguageMenu from "./LanguageMenu";
import { DrawerNav } from "./DrawerNav";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  const navLinks = [
    { title: t("drawerNav.home"), path: "/" },
    { title: t("drawerNav.discoverPlatform"), path: "/platform" },
    { title: t("drawerNav.userSpace"), path: "/user-area" },
    { title: t("drawerNav.mtAcademy"), path: "/mt-academy" },
    { title: t("drawerNav.community"), path: "/community" },
    { title: t("drawerNav.media"), path: "/media" },
    { title: t("drawerNav.contact"), path: "/contact" },
  ];

  return (
    <div className="flex fixed z-50 justify-between items-center h-24 w-full p-6 bg-light-background">
      {/* Homepage link */}
      <Link href="/" className="text-label-large font-roboto font-medium">
        <Image src={logo} alt={t("drawerNav.logoAlt")} />
      </Link>

      {/* Desktop navbar */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center justify-center">
          {navLinks.map((link) => (
            <Link
              className={`py-2 px-2.5 rounded-full text-label-large text-light-onSurface font-semibold transition-colors ${
                isActive(link.path)
                  ? "text-light-primary hover:text-light-primary"
                  : "text-light-onSurface hover:text-light-primary"
              }`}
              href={link.path}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu and language */}
      <div className="flex justify-center items-center gap:2 lg:gap-4">
        {/* Mobile menu button */}
        <div className="lg:hidden flex">
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-light-primaryContainer/40 rounded-md"
            aria-label={t("drawerNav.closeMenu")}
          >
            <Image
              src={menuNormal}
              alt={t("drawerNav.closeMenu")}
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Search Icon */}
        <button
          className="p-2 hover:bg-light-primaryContainer/40 rounded-md"
          onClick={() => router.push("/search")}
        >
          <Image
            src={searchIcon}
            alt={t("drawerNav.closeMenu")}
          />
        </button>
       {/* <button
          className="p-2 hover:bg-light-primaryContainer/40 rounded-md"
          onClick={() => router.push("/contact")}
        >
          <Image
            src={message}
            alt={t("drawerNav.closeMenu")}
          />
        </button> */}
        {/* Language menu */}
        <LanguageMenu changeLanguage={changeLanguage} />
      </div>

      {/* Drawer component */}
      <DrawerNav open={drawerOpen} closeDrawerAction={closeDrawer} />
    </div>
  );
};

export default Navbar;
