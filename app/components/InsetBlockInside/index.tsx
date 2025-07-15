"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";

export const InsetBlockInside = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:bg-background lg:shadow-brBoth lg:rounded-[30px] lg:py-10 lg:2xl:py-20">
      <div className="bg-opacity-15 bg-primary/1 rounded-[30px] border-dashed border-[1px] bg-white/20 dark:bg-primary/50 py-10 lg:py-20">
        {children}
      </div>
    </div>
  );
};