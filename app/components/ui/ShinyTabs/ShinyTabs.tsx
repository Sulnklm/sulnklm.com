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
          const baseClass = `flex items-center py-2 px-5 rounded-full border font-semibold transition-colors duration-300 select-none ${
            isActive
              ? "bg-[#F3F1EB] wh dark:bg-[#161514] !border-orange-400 text-orange-500 cursor-default"
              : "bg-[#F1F1EF] dark:bg-[#090909] !border-gray-400 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-orange-500 hover:text-orange-600"
          }`;

          if (isActive) {
            return (
              <button key={tab.label} className={baseClass} disabled>
                {tab.icon}
                <p className="ml-2 font-[400] text-primary dark:!text-white text-sm">{tab.label}</p>
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
              <p className="ml-2 font-[400] text-sm text-nowrap">{tab.label}</p>
            </ShinyButton>
          );
        })}
      </div>

      {/* mobile */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className="w-full flex items-center !min-w-[45vw] justify-between px-4 py-2.5 rounded-xl border bg-grey_scale_100 dark:bg-primary font-[400] text-base text-gray-900 dark:text-gray-300"
        >
          <span className="flex items-center gap-2">
            {tabs[activeIndex].icon}
            {tabs[activeIndex].label}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute z-20 mt-2 w-full rounded-xl bg-white dark:bg-primary shadow-xl border py-2">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-2 transition ${
                  idx === activeIndex ? "font-[450] text-orange-500" : "text-gray-700 dark:text-gray-300"
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
                      ? "text-orange-500"
                      : "text-gray-500 dark:text-gray-400"
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
