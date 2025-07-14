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
    <div className="flex space-x-3 py-2.5 w-full">
      {labels.map((label, idx) => {
        const isSelected = idx === selectedIndex;
        const baseClassName = `text-black dark:text-white font-[300] px-5 py-1.5 rounded-full transition-colors whitespace-nowrap font-Sans ${
          isSelected
            ? "text-black border-b dark:bg-white/10 border border-dashed font-[400]"
            : "text-white/50 hover:text-orange-500 duration-300"
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
