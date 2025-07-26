import React from "react";
import clsx from "clsx"; // (or use your cn 함수)
import { MouseTagProps } from "./types";
import { TypingAnimation } from "components/magicui/typing-animation";

export const MouseTag: React.FC<MouseTagProps> = ({
  label = "",
  bgClass = "bg-orange-500",
  textClass = "!text-black !dark:text-black",
  arrowClass = "fill-orange-500",
  arrowPosition = "left",
  additionalClassName = "",
}) => {
  const Arrow = (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 18 18"
      fill="none"
      className={arrowClass}
      style={
        arrowPosition === "right"
          ? {
              marginLeft: "-16px",
              transform: "translateY(-25px) rotate(-2deg)",
            }
          : {
              marginRight: "-16px",
              transform: "translateY(-25px) rotate(-96deg)",
            }
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
    </svg>
  );

  return (
    <div
      className={clsx(
        "flex items-center gap-3 w-fit",
        arrowPosition === "right" && "flex-row-reverse",
        additionalClassName
      )}
    >
      {Arrow}
      <p
        className={clsx(
          "rounded-[8px] px-4 py-2 inline-block font-[350]",
          bgClass,
          textClass
        )}
      >
        <TypingAnimation>{label}</TypingAnimation>
      </p>
    </div>
  );
};
