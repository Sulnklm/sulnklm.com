"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";

export const InsetBlockInside = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div className="container mx-auto lg:bg-background/50 lg:dark:bg-black/10 lg:shadow-brBoth lg:dark:!border-b lg:dark:!border-b-grey_scale_900/40 lg:dark:!border-t lg:dark:!border-t-black  lg:dark:shadow-brBothDark lg:rounded-[30px] lg:p-10 2xl:p-20">
        {children}
    </div>
  );
};