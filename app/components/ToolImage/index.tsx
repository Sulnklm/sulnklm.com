"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ToolImageProps = {
  src: string;
  alt: string;
  size?: number;
};

export const ToolImage = ({ src, alt, size = 24 }: ToolImageProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative bg-primary dark:bg-black border-white dark:border-primary border-2 rounded-[13px] w-10 h-auto place-items-center p-1.5 cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="inline-block w-full h-auto -translate-y-[0.7px]"
        loading="lazy"
      />
      {/* tooltip with animation */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-full mb-2 left-0 whitespace-nowrap rounded bg-primary text-white text-xs px-2 py-1 shadow-lg z-50"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.1 }}
          >
            {alt}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
