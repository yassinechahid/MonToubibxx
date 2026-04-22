"use client";

import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  ForwardedRef,
  forwardRef,
} from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useDirection } from "@/hooks/useDirection";

import selectDrop from "@/public/home/selectDrop.svg";
import { LabeledSelectProps, OptionType } from "@/types/formData";

const LabeledSelect = forwardRef<HTMLDivElement, LabeledSelectProps>(
  (
    {
      label = "",
      name,
      value,
      options = [],
      onChange,
      isError = false,
      bgColor = "",
      isDisabled = false,
      className = "",
      hasDropDown = false,
      dropDownOptions = [],
      onSelect,
      multiple = false,
      formatLabel = null,
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { t } = useTranslation();
    const { isRTL } = useDirection();
    const [show, setShow] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (typeof ref === "function") {
        ref(containerRef.current);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current =
          containerRef.current;
      }
    }, [ref]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setShow(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (!show && hasDropDown) setShow(true);
    };

    const handleInputFocus = () => {
      if (hasDropDown) {
        setShow(true);
      }
    };

    const handleOptionSelect = (option: OptionType) => {
      const syntheticEvent = {
        target: {
          name,
          value: option.value,
        },
      };
      if (onSelect) {
        onSelect(syntheticEvent);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange?.(syntheticEvent as any);
      }
      setShow(false);
    };

    const filteredOptions =
      hasDropDown && dropDownOptions.length > 0
        ? dropDownOptions.filter((option) =>
            option.label.toLowerCase().includes((value || "").toLowerCase())
          )
        : dropDownOptions;

    return (
      <div 
        className={`flex flex-col relative ${className}`} 
        ref={containerRef}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="relative">
          {hasDropDown ? (
            <input
              type="text"
              name={name}
              value={value || ""}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              disabled={isDisabled}
              dir={isRTL ? "rtl" : "ltr"}
              className={`bg-light-surfaceContainerHighest text-light-onSurfaceVariant focus:outline-0 text-body-large border-0 h-[56px] px-4 rounded w-full peer appearance-none
                ${isRTL ? "text-right" : "text-left"}
                ${isError ? "border-2 border-light-error" : ""}
                ${isDisabled ? "opacity-30 cursor-not-allowed" : ""}`}
              placeholder={t(label)}
              autoComplete="off"
            />
          ) : (
            <select
              name={name}
              value={value}
              onChange={onChange}
              multiple={multiple}
              disabled={isDisabled}
              dir={isRTL ? "rtl" : "ltr"}
              className={`bg-light-surfaceContainerHighest text-light-onSurfaceVariant focus:outline-0 border-0 text-body-large h-[56px] px-4 rounded w-full peer appearance-none
                ${isRTL ? "text-right" : "text-left"}
                ${isError ? "border-2 border-light-error" : ""}
                ${isDisabled ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <option
                key=""
                value=""
                disabled
                className="bg-light-surfaceContainer"
              ></option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={`bg-light-surfaceContainer ${isRTL ? "text-right" : "text-left"}`}
                >
                  {formatLabel ? formatLabel(t(option.label)) : t(option.label)}
                </option>
              ))}
            </select>
          )}

          <label
            htmlFor={name}
            className={`absolute ${isRTL ? "right-4" : "left-4"} transition-all duration-200 transform ${
              value
                ? "text-xs -top-2 px-1 bg-gradient-to-t from-light-surfaceContainerHighest to-light-background"
                : "top-[16px] text-body-large peer-focus:text-xs peer-focus:-top-2 peer-focus:px-1 peer-focus:bg-gradient-to-t peer-focus:from-light-surfaceContainerHighest peer-focus:to-light-background"
            } ${bgColor} pointer-events-none text-light-onSurfaceVariant ${
              isDisabled ? "opacity-30 " : ""
            } ${isRTL ? "text-right" : "text-left"}`}
          >
            {t(label)}
          </label>

          <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${
            isRTL ? "left-4" : "right-4"
          }`}>
            <Image
              src={selectDrop}
              alt="Select Drop Down"
              className="filter-white"
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* Dropdown menu positioning for RTL */}
        {hasDropDown && show && filteredOptions.length > 0 && (
          <ul className={`absolute z-50 top-14 w-full max-h-60 overflow-auto rounded bg-light-surface border-light-outline shadow-lg ${
            isRTL ? "text-right" : "text-left"
          }`}>
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={`px-4 py-2 cursor-pointer hover:bg-light-primaryContainer transition-colors ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {formatLabel ? formatLabel(t(option.label)) : t(option.label)}
              </li>
            ))}
          </ul>
        )}

        {hasDropDown && show && filteredOptions.length === 0 && value && (
          <div className={`absolute z-50 top-14 w-full rounded bg-light-surface border-light-outline shadow-lg ${
            isRTL ? "text-right" : "text-left"
          }`}>
            <div className="px-4 py-2 text-light-onSurface opacity-70">
              {t("No options found")}
            </div>
          </div>
        )}
        {typeof isError === "string" && isError && (
          <p className={`text-light-error text-sm mt-1 ${isRTL ? "text-right" : "text-left"}`}>
            {isError}
          </p>
        )}
      </div>
    );
  }
);

LabeledSelect.displayName = "LabeledSelect";

export default LabeledSelect;