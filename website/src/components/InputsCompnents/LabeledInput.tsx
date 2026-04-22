"use client";

import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

interface LabeledInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "tel";
  isError?: boolean | string;
  isDisabled?: boolean;
  isPrice?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

const LabeledInput = forwardRef<HTMLInputElement, LabeledInputProps>(
  (
    {
      label = "",
      name,
      value,
      onChange,
      onKeyDown,
      type = "text",
      isError = false,
      isDisabled = false,
      isPrice,
      className = "",
      placeholder = "",
      autoComplete = "off",
    },
    ref
  ) => {
    const { t } = useTranslation();
    const { isRTL } = useDirection();

    // Generate unique ID for accessibility
    const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`flex flex-col relative ${className}`} dir={isRTL ? "rtl" : "ltr"}>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={isDisabled}
            placeholder={placeholder}
            autoComplete={autoComplete}
            dir={isRTL ? "rtl" : "ltr"}
            className={`bg-light-surfaceContainerHighest text-light-onSurface text-body-large h-[56px] px-4 rounded w-full transition-colors duration-200 focus:outline-none focus:border-primary peer appearance-none
              ${isRTL ? "text-right" : "text-left"} // Add text alignment
              ${isPrice ? (isRTL ? "pl-16 pr-4" : "pr-16 pl-4") : "px-4"}
              ${
                isDisabled
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "hover:border-gray-400"
              }
              ${isError ? "border-2 border-light-error" : "border-light-outline"}
            `}
          />

          {isPrice && (
            <span className={`absolute top-1/2 transform -translate-y-1/2 text-light-onSurfaceVariant pointer-events-none ${
              isRTL ? "left-3" : "right-3"
            }`}>
              {isPrice}
            </span>
          )}

          {label && (
            <label
              htmlFor={inputId}
              className={`absolute ${isRTL ? "right-4" : "left-4"} transition-all duration-200 transform pointer-events-none text-light-onSurfaceVariant ${
                value || placeholder
                  ? "text-xs -top-1 px-1 bg-light-surfaceContainerHighest z-10"
                  : "top-1/2 -translate-y-1/2 text-body-large"
              } peer-focus:text-xs peer-focus:-top-1 peer-focus:px-1 peer-focus:bg-light-surfaceContainerHighest peer-focus:z-10 ${
                isError ? "text-light-error" : ""
              } ${isDisabled ? "opacity-30" : ""}
              ${isRTL ? "text-right" : "text-left"}
              `}
            >
              {t(label)}
            </label>
          )}
        </div>

        {typeof isError === "string" && isError && (
          <p className={`text-light-error text-sm mt-1 ${isRTL ? "text-right" : "text-left"}`}>
            {isError}
          </p>
        )}
      </div>
    );
  }
);

LabeledInput.displayName = "LabeledInput";

export default LabeledInput;