"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";
import { DashedLine } from "../GridContents/\bDashedLine";

export const InsetBlock = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div className="mx-auto relative z-50 px-0 my-5 lg:my-10 backdrop-blur-2xl">
      <DashedLine direction="horizontal" position="top" />
      <DashedLine direction="horizontal" position="bottom" />
      {/* <DashedLine direction="vertical" position="left" />
      <DashedLine direction="vertical" position="right" /> */}
      <div className="bg-opacity-15 bg-primary/1 bg-white/40 dark:bg-primary/50 py-10 lg:py-20 px-5">
        {children}
      </div>
    </div>
  );
};
