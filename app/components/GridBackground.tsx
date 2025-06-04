"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type GridBackgroundProps = {
  text?: string;
  height?: string; // optional height override
};

export function GridBackground({
//   text = "Backgrounds",
  height = "h-full",
}: GridBackgroundProps) {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className={cn(
      "relative flex w-full items-center justify-center bg-white dark:bg-black",
      height
    )}
  >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {text}
      </p> */}
    </motion.div>
  );
}
