// components/ui/HamburgerXIcon.tsx
"use client";
import { motion } from "framer-motion";

export function HamburgerXIcon({ isOpen, size = 28, color = "#222" }: { isOpen: boolean; size?: number; color?: string }) {
  return (
    <motion.svg
    width={size}
    height={size}
    viewBox="-3.2 -9 30 30"
    className="block"
    animate={isOpen ? "open" : "closed"}
    transition={{ type: "spring", stiffness: 400, damping: 32 }}
  >
      <motion.rect
        x="4"
        y="7"
        width="16"
        height="2"
        rx="1"
        fill={color}
        variants={{
          closed: { rotate: 0, y: -5 },
          open: { rotate: 45, y: 1 }
        }}
      />
      <motion.rect
        x="4"
        y="15"
        width="16"
        height="2"
        rx="1"
        fill={color}
        variants={{
          closed: { opacity: 1, y: -1 },
          open: { opacity: 0 }
        }}
      />
      <motion.rect
        x="4"
        y="11"
        width="16"
        height="2"
        rx="1"
        fill={color}
        variants={{
          closed: { rotate: 0, y: -3 },
          open: { rotate: -45, y: -3 }
        }}
      />
    </motion.svg>
  );
}
