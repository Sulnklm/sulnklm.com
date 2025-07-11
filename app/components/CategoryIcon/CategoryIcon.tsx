import React from "react";
import { CATEGORY_ICONS } from "./const";

type CategoryIconProps = {
  type: "uxui" | "frontend";
};

export const CategoryIcon = ({ type }: CategoryIconProps) => {
  const { iconSrc, label } = CATEGORY_ICONS[type];

  return (
    <div className="bg-gradient dark:bg-primary bg-grey_scale_200 w-fit p-1 rounded-[20px] shadow-lg border">
      <div className="bg-gradient dark:bg-primary border-dashed border-[1px] border-grey_scale_500 bg-white/80 py-2.5 px-3 rounded-2xl flex items-center gap-2">
      <img src={iconSrc} alt={label} className="w-7 h-7 -rotate-6 brightness-105 grayscale" />
      <h5 className="text-base font-Playfair">{label}</h5>
      </div>
    </div>
  );
};
