"use client";

import { Button } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";

import { GoButtonProps } from "@/types/children";

const GoPopupsButton: React.FC<GoButtonProps> = ({
  title,
  onClick,
  isSaving = false,
  disabled,
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <Button
      onClick={onClick}
      variant="text"
      disabled={isSaving || disabled}
      className={`normal-case cursor-pointer flex justify-center font-roboto items-center !text-label-large rounded-full bg-light-primary font-medium text-light-onPrimary hover:bg-gray-300 ${
        isSaving ? "bg-opacity-35" : ""
      }${className}`}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      {t(title)}
    </Button>
  );
};

export default GoPopupsButton;
