"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";

export const InsetBlockInside = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div
      className={`${additionalClasses} container mx-auto lg:bg-background/50 lg:dark:bg-primary lg:shadow-brBoth lg:dark:border lg:dark:shadow-brBothDark lg:rounded-[30px] lg:p-10`}
    >
      {children}
    </div>
  );
};
