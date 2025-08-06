import React from "react";

interface SubTextBoxProps {
  icon?: React.ReactNode;
  children: React.ReactNode; 
  additionalClass?: string; 
}

export const SubTextBox: React.FC<SubTextBoxProps> = ({
  icon,
  children,
  additionalClass = "",
}) => {
  return (
    <div
      className={
        `flex gap-1.5 items-center border dark:!border-grey_scale_1000/70 rounded-lg shadow-sm bg-neutral-100 dark:bg-primary px-2 py-0.5 w-fit my-3 ${additionalClass}`
        
      }
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <h5 className="text-sm font-[350] tracking-wide">{children}</h5>
    </div>
  );
};
