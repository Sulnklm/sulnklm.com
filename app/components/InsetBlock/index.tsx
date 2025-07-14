"use client";
import { motion } from "framer-motion";
import { InsetBlockPropTypes } from "./types";

export const InsetBlock = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <>
      <div className="grid auto-rows-min grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        {children}
      </div>
    </>
  );
};
