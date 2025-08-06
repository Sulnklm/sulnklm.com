"use client";
import React, { useState } from "react";
import { withFrameShine } from "@/components/ui/WithFrameShine";
import { useClickSound } from "@/hooks/useClickSound";

const ShinyButton = withFrameShine(
  ({
    className,
    children,
    onClick,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button className={className} {...props} onClick={onClick}>
        {children}
      </button>
    );
  }
);

interface ShinyTabsProps {
  tabs: { label: string; icon: React.ReactNode }[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export const ShinyTabs: React.FC<ShinyTabsProps> = ({
  tabs,
  activeIndex,
  onChange,
}) => {
  const playClickSound = useClickSound();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* desktop */}
      <div className="hidden lg:flex gap-5">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;
          const baseClass = `flex items-center py-2 px-5 rounded-full font-semibold transition-colors duration-300 select-none ${
            isActive
              ? "bg-neutral-200/50 dark:bg-neutral-200/5 dark:text-white cursor-default border border-[0.5px]"
              : "text-gray-600 dark:text-gray-400"
          }`;

          if (isActive) {
            return (
              <button key={tab.label} className={baseClass} disabled>
                {tab.icon}
                <p className="ml-2 font-[400] text-grey_scale_1000 dark:!text-white text-base text-nowrap">
                  {tab.label}
                </p>
              </button>
            );
          }
          return (
            <ShinyButton
              key={tab.label}
              className={baseClass}
              onClick={() => {
                playClickSound();
                onChange(idx);
              }}
            >
              {tab.icon}
              <p
                className="ml-2 font-[400] text-base"
                style={{ whiteSpace: "nowrap" }}
              >
                {tab.label}
              </p>
            </ShinyButton>
          );
        })}
      </div>

      {/* mobile */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className="w-full flex items-center !min-w-[45vw] justify-between px-4 py-2.5 rounded-2xl border bg-white dark:bg-primary font-[450] text-base text-gray-900 dark:text-white"
        >
          <span className="flex items-center gap-2">
            {tabs[activeIndex].icon}
            {tabs[activeIndex].label}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute z-20 mt-2 w-full rounded-2xl bg-white dark:bg-primary shadow-xl border py-2">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`w-full text-left px-4 py-4 rounded-xl flex items-center gap-2 transition text-grey_scale_700 dark:text-white/30 ${
                  idx === activeIndex
                    ? "font-[400] !text-black dark:!text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => {
                  playClickSound();
                  onChange(idx);
                  setDropdownOpen(false);
                }}
              >
                <span
                  className={
                    idx === activeIndex
                      ? "dark:text-white"
                      : "text-grey_scale_700 dark:text-white/30"
                  }
                >
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
