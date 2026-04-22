"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MotionLink } from "../home/Introduction";
import lamp from "@/public/home/lamp.svg";
import greenRightIcon from "@/public/assets/pictures/greenRightIcon.svg";
const VideoGrid = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const { t } = useTranslation();
  // Videos data defined inside the component
  const tutorialVideos = [
    {
      title: t("mtAcademy.t1"),
      src: "/tutorial/v1.mp4",
    },
    {
      title: t("mtAcademy.t2"),
      src: "/tutorial/v2.mp4",
    },
    {
      title: t("mtAcademy.t3"),
      src: "/tutorial/v3.mp4",
    },
    {
      title: t("mtAcademy.t4"),
      src: "/tutorial/4.mp4",
    },
    {
      title: t("mtAcademy.t5"),
      src: "/tutorial/v5.mp4",
    },
    {
      title: t("mtAcademy.t6"),
      src: "/tutorial/6.mp4",
    },
  ];

  const handleVideoClick = (src: string) => {
    if (playingVideo === src) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(src);
    }
  };

  return (
    <div className="p-4 mt-16 md:p-6 w-full max-w-screen-2xl">
      <motion.h1
        className="font-bold text-display-small mb-12 text-light-primary text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("mtAcademy.title2")}
      </motion.h1>
      <motion.span
        className="text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("mtAcademy.title3")}{" "}
      </motion.span>
      <motion.p
        className="text-light-onSurfaceVariant mt-3 mb-5 w-full"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {t("mtAcademy.description")}
      </motion.p>
      <motion.span
        className="text-light-tertiary font-bold pb-2 text-title-large"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("mtAcademy.title4")}{" "}
      </motion.span>

      {/* Video Grid */}
      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorialVideos.map(({ title, src }, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden">
            {/* Video Container - Fixed size */}
            <div
              className="relative w-full h-72 rounded-xl cursor-pointer overflow-hidden"
              onClick={() => handleVideoClick(src)}
            >
              {playingVideo === src ? (
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  onClick={(e) => e.stopPropagation()}
                  onError={() => {
                    console.error("Video failed to load:", src);
                    setPlayingVideo(null);
                  }}
                >
                  {t("academy.notSupporting")}
                </video>
              ) : (
                <Image
                  src="/tutorial/image.svg"
                  alt={title}
                  fill
                  className="object-cover rounded-xl"
                  priority={idx === 0}
                />
              )}
            </div>

            {/* Video Title */}
            <div className="pt-4">
              <h3 className="text-title-medium font-bold text-light-onSurface text-center line-clamp-2">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {tutorialVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
            <Image
              src="/tutorial/image.svg"
              alt="No videos"
              width={32}
              height={32}
              className="opacity-50"
            />
          </div>
          <h3 className="text-title-medium text-light-on-surface-variant mb-2">
            No videos available
          </h3>
          <p className="text-body-medium text-light-on-surface-variant">
            Check back later for new content
          </p>
        </div>
      )}
      <div className="flex w-full my-5 justify-center items-center">
        <div className="bg-light-secondaryContainer rounded-2xl p-5 flex gap-2 w-full">
          <Image alt="lock" src={lamp} />

          <motion.span
            className="text-body-large text-light-onSecondaryContainer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t("mtAcademy.note")}
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center gap-4 my-3">
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="#tutoriel"
          className="flex flex-row gap-3 items-center sm:pl-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("mtAcademy.link1")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>

        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/help"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("mtAcademy.link2")}
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
            {t("mtAcademy.link3")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="/help"
          className="flex flex-row gap-3 items-center sm:pr-5"
        >
          <span className="text-label-large font-medium text-light-primary leading-relaxed">
            {t("mtAcademy.link4")}
          </span>

          <Image src={greenRightIcon} alt="Plateforme Mon Toubib" />
        </MotionLink>
      </div>
      <p className="mt-4 px-8 text-center">{t("mtAcademy.p")}</p>
    </div>
  );
};

export default VideoGrid;
