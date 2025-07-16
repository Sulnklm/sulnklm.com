import { withFrameShine } from "@/components/WithFrameShine";
import React from "react";

const ShinyButton = withFrameShine(
  ({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={className} {...props}>
      {children}
    </button>
  )
);

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
  return (
    <div className="flex space-x-3 py-2.5">
      {labels.map((label, idx) => {
        const isSelected = idx === selectedIndex;
        const baseClassName = `text-black dark:text-white font-[300] px-4 py-2.5 rounded-full transition-colors whitespace-nowrap font-Sans ${
          isSelected
          ? "text-orange-600 dark:text-orange-[#FD5D27] bg-orange-100/30 border !border-orange-300 dark:bg-grey_scale_900/50 font-[400]"
          : "text-black dark:text-white/50 hover:text-orange-500 dark:hover:text-orange-500 duration-300"
        
        }`;

        const content = (
          <span className="flex items-center">
          {icons && icons[idx] && <span className="inline-block mr-2">{icons[idx]}</span>}
          {label}
        </span>
        );

        return isSelected ? (
          <button
            key={label}
            onClick={() => onSelect(idx)}
            className={baseClassName}
          >
            {content}
          </button>
        ) : (
          <ShinyButton
            key={label}
            onClick={() => onSelect(idx)}
            className={baseClassName}
          >
            {content}
          </ShinyButton>
        );
      })}
    </div>
  );
};
