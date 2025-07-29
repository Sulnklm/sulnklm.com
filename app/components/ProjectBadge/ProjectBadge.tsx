
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "case-study" | "development"; 
}

const badgeColors: Record<string, string> = {
  default: "bg-gray-100 text-gray-700 border border-gray-300",
  "case-study": "bg-[#F4E1DD]/80 dark:bg-[#F4E1DD]/10 !text-coral border !border-[#F3D3CC] dark:!border-[#F3D3CC]/30",
  development: "bg-gray-100 dark:bg-gray-100/10 text-gray-600 dark:text-gray-300 border border-gray-300",
};

export default function ProjectBadge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={
        "px-2 py-[2px] rounded-lg text-xs font-[500] inline-block align-middle shadow-inner-customWhite dark:shadow-none " +
        (badgeColors[variant] || badgeColors.default)
      }
    >
      {children}
    </span>
  );
}
