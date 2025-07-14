import React from "react";

interface ViewTabsProps {
  icons: React.ReactNode[];         
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const ViewTabs: React.FC<ViewTabsProps> = ({
  icons,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div className="flex space-x-4">
      {icons.map((icon, idx) => (
        <button
          key={idx}
          className={`p-x rounded ${
            idx === selectedIndex
              ? "bg-white/10"
              : "text-grey_scale_500 hover:text-orange-500 duration-300"
          } transition-colors flex items-center justify-center`}
          onClick={() => onSelect(idx)}
          aria-label={`View mode ${idx + 1}`} // 접근성용
        >
          {icon}
        </button>
      ))}
    </div>
  );
};
