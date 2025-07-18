import React, { useState } from "react";
import { withFrameShine } from "@/components/WithFrameShine";
import { useClickSound } from "@/hooks/useClickSound";
import { Filter as FilterIcon, ChevronDown } from "lucide-react";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 모바일 버튼에 보여줄 현재 선택된 카테고리
  const currentLabel = labels[selectedIndex];
  const currentIcon = icons?.[selectedIndex];

  return (
    <div>
      {/* 데스크탑: 기존 탭 */}
      <div className="hidden md:flex flex-wrap md:flex-nowrap gap-4 md:space-x-3 py-2.5">
        {labels.map((label, idx) => {
          const isSelected = idx === selectedIndex;
          const baseClassName = `text-black dark:text-white font-[300] px-4 py-2.5 rounded-full transition-colors whitespace-nowrap font-Sans ${
            isSelected
              ? "text-orange-600 dark:text-[#FD5D27] bg-orange-100/30 border !border-orange-300 dark:bg-grey_scale_900/20 font-[400]"
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

      {/* 모바일: 드롭다운 버튼 */}
      <div className="md:hidden relative">
        <button
          onClick={() => {
            playClickSound();
            setDropdownOpen((v) => !v);
          }}
          className="w-full flex items-center text-grey_scale_900 dark:text-grey_scale_300 justify-between px-4 py-2.5 rounded-xl border bg-white dark:bg-primary font-[400] text-base"
        >
          <span className="flex items-center gap-2">
            {currentIcon && <span>{currentIcon}</span>}
            {currentLabel}
          </span>
          <span className="pl-2">
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 min-w-40 w-full z-20 rounded-xl bg-white dark:bg-primary shadow-xl border py-2">
            {labels.map((label, idx) => (
              <button
                key={label}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-2 transition ${
                  idx === selectedIndex ? "font-[500] text-orange-400" : "text-grey_scale_700"
                }`}
                onClick={() => {
                  playClickSound();
                  onSelect(idx);
                  setDropdownOpen(false);
                }}
              >
                {icons && icons[idx] && (
                  <span
                    className={
                      idx === selectedIndex
                        ? "text-orange-400" // 선택된 경우 오렌지색
                        : "text-grey_scale_600 dark:text-grey_scale_700" // 기본/비선택 색
                    }
                  >
                    {React.cloneElement(icons[idx] as React.ReactElement, {
                      // 혹시 아이콘이 lucide-react 등에서 온 컴포넌트라면,
                      // color나 className을 강제로 오버라이드할 수 있음
                      // ex: color: idx === selectedIndex ? "#FF6F2D" : "#888"
                    })}
                  </span>
                )}
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
