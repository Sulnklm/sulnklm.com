// components/Ruler.tsx
"use client";
import { useDarkMode } from "@/hooks/useDarkMode";
import React from "react";

interface RulerProps {
  height?: number;
  step?: number;
  start?: number;
  left?: boolean;
}

export function Ruler({
  height = 1000,
  step = 100,
  start = 0,
  left = true,
}: RulerProps) {
  const labels = [];
  for (let y = start; y < height; y += step) {
    const alpha = Math.max(0, 1 - (y / height) * 1.1);
    const isDark = useDarkMode();

    labels.push(
      <div
        key={y}
        className="absolute flex flex-col items-center"
        style={{
          top: y,
          [left ? "left" : "right"]: 0,
          width: "50px",
          pointerEvents: "none",
        }}
      >
        <span
          className="
    text-[10px] select-none font-[300]
    !text-grey_scale_500/80
    dark:!text-grey_scale_500/60"
          style={{
            opacity: alpha,
            display: "inline-block",
            transform: left
              ? "rotate(-90deg) translateY(-60px)"
              : "rotate(90deg) translateY(-60px)",
            letterSpacing: "1px",
          }}
        >
          {y}
        </span>
        <span
          className="block"
          style={{
            marginTop: left ? "-12px" : "-15px",
            height: "6px",
            width: "1.5px",
            background: `rgba(180,180,190,${alpha * 0.2})`,
            borderRadius: "1px",
            display: "inline-block",
            transform: left
              ? "rotate(90deg) translateY(40px)"
              : "rotate(90deg) translateY(-40px)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="absolute z-20"
      style={{
        top: 0,
        [left ? "left" : "right"]: 0,
        height: `${height}px`,
        width: "50px",
        pointerEvents: "none",
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>{labels}</div>
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
    </div>
  );
}
