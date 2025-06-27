import React from "react";
import Image from "next/image";
    
type Props = {
    iconSrc: string;
    label: string;
  };
  
  export const ToolIcon = ({ iconSrc, label }: Props) => {
    return (
      <div className="flex items-center justify-items-center gap-2 text-grey_scale_500 dark:text-grey_scale_700 text-nowrap text-sm sm:text-base font-[350] font-Sans">
        <Image src={iconSrc} alt={label} width={20} height={20} />
        <span>{label}</span>
      </div>
    );
  };