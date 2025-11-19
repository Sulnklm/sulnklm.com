"use client";

import { motion } from "framer-motion";
import React from "react";

interface ActiveDotProps {
  size?: number; 
  color?: string;
  glowColor?: string;
  duration?: number;
  className?: string;
}

export const ActiveDot: React.FC<ActiveDotProps> = ({
  size = 10,
  color = "#FF6B00",
  glowColor = "rgba(255, 107, 0, 0.4)",
  duration = 1.5,
  className = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size * 3, height: size * 3 }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 2,
          height: size * 2,
          backgroundColor: glowColor,
        }}
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.6, 0.2, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "easeInOut",
        }}
      />

      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
