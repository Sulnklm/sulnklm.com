import React from "react";

interface OrangeTextBoxProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const OrangeTextBox: React.FC<OrangeTextBoxProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        mb-10
        mx-auto
        block
        relative z-50
        w-fit
        rounded-full
        border-[0.1px]
        dark:!border-orange-500
        !border-orange-700
        bg-orange-gradient
        dark:bg-white
        px-6
        py-2
        text-orange-600
        font-semibold
        shadow-[0_0_15px_2px_rgba(255,176,124,1),0_0_30px_2px_rgba(255,209,166,0.2)]
        dark:shadow-[0_0_15px_2px_rgba(255,165,82,0.3),0_0_30px_2px_rgba(255,176,117,0.2)]
        before:absolute
        before:left-[-12px]
        before:top-1/2
        before:-translate-y-1/2
        before:-translate-x-full
        before:w-7
        before:h-[1.5px]
        before:bg-gradient-to-r
        before:from-transparent
        before:via-orange-300
        before:to-transparent
        before:content-['']
        after:absolute
        after:right-[-12px]
        after:top-1/2
        after:-translate-y-1/2
        after:translate-x-full
        after:w-7 
        after:h-[1.5px]
        after:bg-gradient-to-l
        after:from-transparent
        after:via-orange-300
        after:to-transparent
        after:content-['']
        hover:text-orange-700
        hover:border-orange-600
        transition
        duration-300
        ${className ?? ""}
      `}
    >
      <p className="font-Sans text-white dark:text-white font-[400]">{text}</p>
    </button>
  );
};

export default OrangeTextBox;
