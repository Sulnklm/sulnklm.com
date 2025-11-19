"use client";

import React from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { ChevronsDown } from "lucide-react";
import clsx from "clsx";

type Props = {
  targetId?: string;
  className?: string;
  label?: string;
  size?: number;
  offsetPx?: number;
  startThreshold?: number;
  topThreshold?: number;
  stopShortPx?: number;
};

export default function FloatingScrollCue({
  targetId,
  className,
  label = "Scroll",
  size = 23,
  offsetPx = 10,
  startThreshold = 2,
  topThreshold = 10,
  stopShortPx = 140,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(true);
  const last = React.useRef(0);
  const locked = React.useRef(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const curr = y ?? 0;

    if (curr <= topThreshold) {
      if (!visible && !locked.current) {
        locked.current = true;
        setVisible(true);
        queueMicrotask(() => (locked.current = false));
      }
      last.current = curr;
      return;
    }

    const delta = Math.abs(curr - last.current);
    if (delta >= startThreshold && visible && !locked.current) {
      locked.current = true;
      setVisible(false);
      queueMicrotask(() => (locked.current = false));
    }

    last.current = curr;
  });

  const handleClick = () => {
    const extra = Math.max(0, stopShortPx);
    const baseOffset = Math.max(0, offsetPx) + extra;

    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const top = Math.max(0, targetTop - baseOffset);
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      const top = Math.max(
        0,
        window.scrollY + window.innerHeight - baseOffset
      );
      const maxTop =
        document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: Math.min(top, maxTop), behavior: "smooth" });
    }
  };

  const variants: Variants = {
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.22, ease: "easeOut" },
    },
    hide: {
      opacity: 0,
      y: 8,
      scale: 0.98,
      transition: { duration: 0.18, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence initial={true}>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll down"
          className={clsx(
            "group relative inline-flex select-none items-center justify-center rounded-full border border-white/30 bg-white/30 pl-3 pr-4 py-2 shadow-sm backdrop-blur-md",
            "dark:bg-black/60 dark:border-white/15 ",
            "transform-gpu will-change-auto",
            className
          )}
          style={{ willChange: "transform, opacity" }}
          variants={variants}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <motion.span
            aria-hidden="true"
            className="flex items-center gap-1.5"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -3, 0, 2, 0], scale: [1, 1.02, 1, 0.98, 1] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <ChevronsDown
              size={20}
              strokeWidth={1}
              className="transition group-hover:translate-y-0.5"
            />
            <span className="text-sm font-[350] opacity-80 tracking-wide">
              {label}
            </span>
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
