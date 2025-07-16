import React, { useState } from "react";

interface ViewTabsProps {
  icons: React.ReactNode[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const TOOLTIP_TEXTS = ["Grid", "List",];

export const ViewTabs: React.FC<ViewTabsProps> = ({
  icons,
  selectedIndex,
  onSelect,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex space-x-2.5 rounded-2xl px-3 py-2.5 relative bg-background dark:bg-black/70 shadow-brBoth dark:shadow-brBothDark">
      {icons.map((icon, idx) => (
        <button
          key={idx}
          className={`relative rounded-xl ${
            idx === selectedIndex
              ? "bg-white dark:bg-grey_scale_900/50 text-primary dark:text-white p-2 drop-shadow-md"
              : "text-grey_scale_500 dark:text-grey_scale_800 hover:text-orange-500 duration-300 px-2"
          } transition-colors flex items-center justify-center`}
          onClick={() => onSelect(idx)}
          aria-label={`View mode ${idx + 1}`}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {icon}
          {/* tooltip */}
          {hoveredIndex === idx && (
            <div
              className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
              rounded-md bg-primary px-2 py-1 text-xs text-white
              pointer-events-none select-none z-50"
            >
              {TOOLTIP_TEXTS[idx]}
            </div>
          )}
        </button>
      ))}
    </div>
  );
};
