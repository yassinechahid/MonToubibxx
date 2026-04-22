"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Drawer } from "@material-tailwind/react";

import menuClose from "@/public/assets/pictures/menuClose.svg";
import homeIcon from "@/public/assets/pictures/home.svg";
import onHomeIcon from "@/public/assets/pictures/onHome.svg";
import platformIcon from "@/public/assets/pictures/sideIcon.svg";
import onPlatformIcon from "@/public/assets/pictures/onSideIcon.svg";
import usersIcon from "@/public/assets/pictures/sideIcon2.svg";
import onUsersIcon from "@/public/assets/pictures/onSideIcon2.svg";
import communityIcon from "@/public/assets/pictures/sideIcon3.svg";
import onCommunityIcon from "@/public/assets/pictures/sideIcon3.svg";
import mediaIcon from "@/public/assets/pictures/sideIcon4.svg";
import onMediaIcon from "@/public/assets/pictures/onSideIcon4.svg";
import mt from "@/public/assets/pictures/sideIcon6.svg";
import onMt from "@/public/assets/pictures/onSideIcon6.svg";
import contactIcon from "@/public/assets/pictures/sideIcon5.svg";
import onContactIcon from "@/public/assets/pictures/sideIcon5.svg";
import logo from "@/public/logos/mon_toubib_logo.svg";
import { useTranslation } from "react-i18next";

interface DrawerNavProps {
  open: boolean;
  closeDrawerAction: () => void;
}

export const DrawerNav: React.FC<DrawerNavProps> = ({
  open,
  closeDrawerAction,
}) => {
  const pathname = usePathname();
  const { t, i18n  } = useTranslation();
  const isRTL = i18n.language === "ar";
  const NavLinks = [
    {
      title: t("drawerNav.home"),
      icon: <Image src={homeIcon} alt={t("drawerNav.home")} />,
      onIcon: <Image src={onHomeIcon} alt={t("drawerNav.home")} />,
      path: "/",
    },
    {
      title: t("drawerNav.discoverPlatform"),
      icon: <Image src={platformIcon} alt={t("drawerNav.discoverPlatform")} />,
      onIcon: (
        <Image src={onPlatformIcon} alt={t("drawerNav.discoverPlatform")} />
      ),
      path: "/platform",
    },
    {
      title: t("drawerNav.userSpace"),
      icon: <Image src={usersIcon} alt={t("drawerNav.userSpace")} />,
      onIcon: <Image src={onUsersIcon} alt={t("drawerNav.userSpace")} />,
      path: "/user-area",
    },
    {
      title: t("drawerNav.mtAcademy"),
      icon: <Image src={mt} alt={t("drawerNav.mtAcademy")} />,
      onIcon: <Image src={onMt} alt={t("drawerNav.mtAcademy")} />,
      path: "/mt-academy",
    },
    {
      title: t("drawerNav.community"),
      icon: <Image src={communityIcon} alt={t("drawerNav.community")} />,
      onIcon: <Image src={onCommunityIcon} alt={t("drawerNav.community")} />,
      path: "/community",
    },
    {
      title: t("drawerNav.media"),
      icon: <Image src={mediaIcon} alt={t("drawerNav.media")} />,
      onIcon: <Image src={onMediaIcon} alt={t("drawerNav.media")} />,
      path: "/media",
    },
    {
      title: t("drawerNav.contact"),
      icon: <Image src={contactIcon} alt={t("drawerNav.contact")} />,
      onIcon: <Image src={onContactIcon} alt={t("drawerNav.contact")} />,
      path: "/contact",
    },
  ];
  return (
    <Drawer
      open={open}
      onClose={closeDrawerAction}
      overlay
      placement="left"
      size={290}
      transition={{ type: "tween", duration: 0.3 }}
      className="p-4 bg-light-surfaceContainerLow z-50 rounded-r-[15px]"
      overlayProps={{
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
      }}
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="mb-2 h-[56px] py-[8px] flex items-center justify-between">
        <button
          onClick={closeDrawerAction}
          className="text-white flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-light-secondary-container transition duration-200"
        >
          <div className="hover:bg-light-primaryContainer/40 p-2 rounded-md">
            <Image src={menuClose} alt="menu close" className="w-7 h-7" />
          </div>

          <Link href="/" className="text-label-large font-roboto font-medium">
            <Image src={logo} alt="logo mon toubib"/>
          </Link>
        </button>
      </div>

      <ul className="mt-[22px]">
        {NavLinks.map((item, index) => (
          <li
            key={index}
            className={`h-[56px] w-full rounded-full flex items-center hover:bg-light-secondaryContainer ${
              pathname === item.path ? "bg-light-secondaryContainer" : ""
            }`}
          >
            <Link
              href={item.path}
              className={`w-full h-full flex items-center text-light-onSurface gap-3 text-label-large font-roboto font-medium ${
                isRTL ? "pr-[16px]" : "pl-[16px]"
              }`}
              onClick={closeDrawerAction}
            >
              {pathname === item.path ? item.onIcon : item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Copyright Section */}
      <div className="absolute bottom-6 left-0 w-full px-4 text-center text-body-medium text-light-on-surface-variant">
        <span className="mx-1">&copy;{new Date().getFullYear()}</span>
        <span className="mx-1">{t("drawerNav.copyright")}</span>
      </div>
    </Drawer>
  );
};
