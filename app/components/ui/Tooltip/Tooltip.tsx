"use client";
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TooltipProps = {
  children: ReactNode;
  message: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
};

export const Tooltip = ({
  children,
  message,
  position = "top",
  className = "",
}: TooltipProps) => {
  const [show, setShow] = useState(false);

  let positionClass = "";
  if (position === "top")
    positionClass =
      "bottom-full left-1/3 -translate-x-1/3 mb-3";
  else if (position === "bottom")
    positionClass =
      "top-full left-1/2 -translate-x-1/2 mt-2";
  else if (position === "left")
    positionClass =
      "right-full top-1/2 -translate-y-1/2 mr-2";
  else if (position === "right")
    positionClass =
      "left-full top-1/2 -translate-y-1/2 ml-2";

  return (
    <div
      className={"relative inline-block " + className}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            className={`absolute whitespace-nowrap rounded bg-primary text-white text-xs px-2 py-1 shadow-lg z-50 ${positionClass}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.12 }}
            style={{ left: '-5%', transform: 'translateX(-55%)' }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
