"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";

export const InsetBlockInside = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div
      className={`${additionalClasses} container mx-auto bg-background/50 dark:bg-primary shadow-brBoth dark:border dark:shadow-brBothDark rounded-3xl p-5 sm:p-10`}
    >
      {children}
    </div>
  );
};
