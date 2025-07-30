"use client";
import React from "react";
import { useClickSound } from "@/hooks/useClickSound";
import { Cpu, PenTool, LayoutList, Filter as FilterIcon } from "lucide-react";
import { ShinyTabs } from "@/components/ui/ShinyTabs/ShinyTabs";

interface CategoriesTabsProps {
  labels: string[];
  icons?: React.ReactNode[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const CategoriesTabs: React.FC<CategoriesTabsProps> = ({
  labels,
  icons,
  selectedIndex,
  onSelect,
}) => {

  const handleChange = (index: number) => {
    onSelect(index);
  };

  return (
    <ShinyTabs
      tabs={labels.map((label, i) => ({
        label,
        icon: icons?.[i] ?? <FilterIcon />,
      }))}
      activeIndex={selectedIndex}
      onChange={handleChange}
    />
  );
};
