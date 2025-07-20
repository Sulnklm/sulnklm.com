// components/SkillText.tsx
import React from "react";

interface SkillTextProps {
  children: React.ReactNode;
}

export const SkillText: React.FC<SkillTextProps> = ({ children }) => {
  return (
    <p className="bg-white/60 shadow-sm dark:bg-grey_scale_900/20 py-1 px-3 rounded-lg w-fit text-grey_scale_900/80 dark:text-grey_scale_700">
      {children}
    </p>
  );
};
