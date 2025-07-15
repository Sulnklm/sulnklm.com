"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";

export const InsetBlock = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div className="container mx-auto relative z-50 px-0 overflow-hidden my-5 lg:my-10">
      <div className="bg-opacity-15 bg-primary/1 rounded-[30px] border-dashed border-[1px] bg-white/40 dark:bg-primary/50 py-10 lg:py-20 px-5">
        {children}
      </div>
    </div>
  );
};
