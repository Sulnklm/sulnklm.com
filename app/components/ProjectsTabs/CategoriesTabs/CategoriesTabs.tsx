import { withFrameShine } from "@/components/WithFrameShine";
import { useClickSound } from "@/hooks/useClickSound";
import React from "react";

const ShinyButton = withFrameShine(
  ({
    className,
    children,
    onClick,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
    };

    return (
      <button className={className} {...props} onClick={handleClick}>
        {children}
      </button>
    );
  }
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
  const playClickSound = useClickSound();

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-3 py-2.5">
      {labels.map((label, idx) => {
        const isSelected = idx === selectedIndex;
        const baseClassName = `text-black dark:text-white font-[300] px-4 py-2.5 rounded-full transition-colors whitespace-nowrap font-Sans ${
          isSelected
            ? "text-orange-600 dark:text-[#FD5D27] bg-orange-100/30 border !border-orange-300 dark:bg-grey_scale_900/50 font-[400]"
            : "text-black dark:text-white/50 hover:text-orange-500 dark:hover:text-orange-500 duration-300"
        }`;

        const content = (
          <span className="flex items-center">
            {icons && icons[idx] && (
              <span className="inline-block mr-2">{icons[idx]}</span>
            )}
            {label}
          </span>
        );

        if (isSelected) {
          return (
            <button
              key={label}
              onClick={() => {
                playClickSound();
                onSelect(idx);
              }}
              className={baseClassName}
            >
              {content}
            </button>
          );
        }

        return (
          <ShinyButton
            key={label}
            onClick={() => {
              playClickSound();
              onSelect(idx);
            }}
            className={baseClassName}
          >
            {content}
          </ShinyButton>
        );
      })}
    </div>
  );
};
