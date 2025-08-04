// VerticalConnector.tsx
"use client";
import React from "react";

export function VerticalConnector({
  left = true,
  right = true,
  className = "",
  height = 20,
  color = "bg-grey_scale_500/50 dark:bg-grey_scale_900",
}: {
  left?: boolean;
  right?: boolean;
  className?: string;
  height?: number | string;
  color?: string;
}) {
  return (
    <div className={`relative ${typeof height === "number" ? "" : height} ${className}`} style={typeof height === "number" ? { height } : {}}>
      {left && (
        <div
          className={`absolute top-0 left-16 w-[3px] ${color}`}
          style={{ height: typeof height === "number" ? `${height}px` : undefined }}
        />
      )}
      {right && (
        <div
          className={`absolute top-0 right-16 w-[3px] ${color}`}
          style={{ height: typeof height === "number" ? `${height}px` : undefined }}
        />
      )}
    </div>
  );
}
