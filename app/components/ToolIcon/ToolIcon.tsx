import React from "react";
import Image from "next/image";
    
type Props = {
    iconSrc: string;
    label: string;
  };
  
  export const ToolIcon = ({ iconSrc, label }: Props) => {
    return (
      <div className="flex items-center justify-items-center gap-2 text-grey_scale_500 text-base">
        <Image src={iconSrc} alt={label} width={23} height={23} />
        <span>{label}</span>
      </div>
    );
  };