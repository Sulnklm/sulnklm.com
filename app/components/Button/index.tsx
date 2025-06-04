import React from "react";
import { ButtonPropTypes } from "./types";
import Link from "next/link";
type Props = {};

export const Button = ({
  href,
  children,
  onClick,
  additionalClasses,
  theme = "primary",
}: ButtonPropTypes) => {
    const buttonStyles =
    theme === "primary"
      ? "text-primary dark:text-white font-Sans"
      : theme === "secondary"
      ? "text-white dark:text-primary bg-primary dark:bg-white font-Sans p-3 rounded-xl"
      : "";

  return (
    <div>
        <Link href={href as string}>
        <span className={`${buttonStyles}`}>{children}</span>
        </Link>
    </div>
)

};

