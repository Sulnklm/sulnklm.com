import React from "react";

interface SubTextBoxProps {
  icon?: React.ReactNode;
  children: React.ReactNode; 
  additionalClassName?: string; 
}

export const SubTextBox: React.FC<SubTextBoxProps> = ({
  icon,
  children,
  additionalClassName = "",
}) => {
  return (
    <div
      className={
        "flex gap-1.5 items-center border rounded-full shadow-sm bg-neutral-100 dark:bg-primary px-2 py-0.5 w-fit my-3 mx-auto" +
        additionalClassName
      }
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <h5 className="text-sm md:text-base font-[300] tracking-wide">{children}</h5>
    </div>
  );
};
