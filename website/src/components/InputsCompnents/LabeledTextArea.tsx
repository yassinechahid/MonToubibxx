"use client";

import { LabeledInputProps } from "@/types/formData";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const LabeledTextArea: React.FC<LabeledInputProps> = ({
  label,
  name,
  value,
  isError,
  onChange,
  isDisabled = false,
  className = "",
}) => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <div className={`flex flex-col relative ${className}`}>
        <div
          className={`relative rounded-xl px-4 pt-5 pb-2 bg-transparent ${
            isDisabled ? "opacity-30" : ""
          } 
          ${isError ? "border-2 border-light-error" : "border-light-outline"}`}
          style={{ height: "200px" }}
        >
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            readOnly={isDisabled}
            dir={isRTL ? "rtl" : "ltr"}
            className={`peer bg-transparent w-full h-full resize-none text-light-onSurfaceVariant text-BodyLarge outline-none ${
              isRTL ? "text-right" : "text-left"
            } ${isDisabled ? "cursor-not-allowed" : ""}`}
          />
          <label
            htmlFor={name}
            className={`absolute ${isRTL ? "right-4" : "left-4"} top-0 bg-light-surfaceContainerHighest px-1 transform transition-all duration-200 ${
              value
                ? "-top-2.5 text-xs"
                : "top-4 text-BodyLarge peer-focus:-top-2 peer-focus:text-xs"
            }
            pointer-events-none text-light-onSurfaceVariant ${
              isDisabled ? "opacity-30" : ""
            } ${isRTL ? "text-right" : "text-left"}`}
          >
            {t(label)}
          </label>
        </div>
      </div>
      {typeof isError === "string" && isError && (
        <p className={`text-light-error text-sm mt-1 ${isRTL ? "text-right" : "text-left"}`}>
          {isError}
        </p>
      )}
    </div>
  );
};

export default LabeledTextArea;