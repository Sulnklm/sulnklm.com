// components/ui/ScrollOffScreenImage/ScrollOffScreen.tsx
"use client";
import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

type Side = "left" | "right";

export interface ScrollOffscreenProps {
  side: Side;
  /** viewport progress at which the item is fully gone (0~1) */
  disappearAt?: number;
  initialX?: number;
  initialY?: number;
  initialRotate?: number;
  scale?: number;
  /** absolute positioning only */
  positionClass?: string;
  /** visual styles that should move with the node (shadow, border, bg, radius…) */
  frameClass?: string;
  /** optional z-index shortcut */
  z?: number;
  /** children to animate */
  children: React.ReactNode;
}

export default function ScrollOffscreen({
  side,
  disappearAt = 1,
  initialX = 0,
  initialY = 0,
  initialRotate = 0,
  scale = 1,
  positionClass,
  frameClass,
  z,
  children,
}: ScrollOffscreenProps) {
  // viewport-based progress
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, disappearAt], [initialX, side === "left" ? -800 : 800]);
  const y = useTransform(scrollYProgress, [0, 1], [initialY, initialY - 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [initialRotate, side === "left" ? initialRotate - 8 : initialRotate + 8]);
  const opacity = useTransform(scrollYProgress, [0, disappearAt * 0.7, disappearAt], [1, 0.7, 0]);

  const pos = useMemo(
    () => clsx("absolute pointer-events-none", typeof z === "number" ? `z-[${z}]` : "z-[400]", positionClass),
    [positionClass, z]
  );

  return (
    <div className={pos}>
      <motion.div
        style={{ x, y, rotate, opacity, scale, willChange: "transform", transformOrigin: side === "left" ? "left center" : "right center" }}
        className={clsx("inline-block transform-gpu", frameClass)}
      >
        {children}
      </motion.div>
    </div>
  );
}
