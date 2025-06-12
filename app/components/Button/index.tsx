import React from "react";
import { ButtonPropTypes } from "./types";
import Link from "next/link";
type Props = {};

export const Button = ({
  href,
  children,
  onClick,
  additionalClasses,
  theme = "tertiary",
  icon,
}: ButtonPropTypes) => {
  const buttonStyles =
    theme === "primary"
      ? "text-white dark:text-primary bg-primary dark:bg-white hover:shadow-xl hover:scale-95 hover:border-white hover:border duration-300 font-Sans p-3 rounded-xl"
      : theme === "secondary"
      ? "text-primary border border-grey_scale_500/60 p-3 rounded-xl dark:text-white dark:bg-primary hover:shadow-md hover:scale-95 duration-300 dark:border-white/30 bg-white font-Sans"
      : theme === "tertiary"
      ? "hover:p-1.5 hover:bg-gray-100 duration-300 rounded-xl hover:dark:bg-primary"
      : "";

  return (
    <div>
      <Link href={href as string} className="group" onClick={onClick}>
        <span className={`${buttonStyles} inline-flex items-center gap-2`}>
          {children} {icon && <span className="bg-gray-200/50 dark:bg-grey_scale_900 rounded-full p-1 group-hover:-rotate-45 duration-300">{icon}</span>}
        </span>
      </Link>
    </div>
  );
};
