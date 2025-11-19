"use client";
import React from "react";
import clsx from "clsx";

type Variant = "outline" | "filled";

interface OutlineTagProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  className?: string;
  radiusClass?: string;
  toneClass?: string;
  showCornerDots?: boolean;
  dotSizeEm?: number; // default 0.55
  ringWidthPx?: number; // visual ring width (only affects style), default 2
}

export default function OutlineTag({
  children,
  as: Tag = "span",
  variant = "outline",
  className,
  radiusClass = "rounded-lg",
  toneClass,
  showCornerDots = false,
  dotSizeEm = 0.55,
  ringWidthPx = 2,
}: OutlineTagProps) {
  const outlineTone = toneClass ?? "ring-coral";
  const filledTone = toneClass ?? "bg-primary/60 dark:text-white/80 dark:bg-coral/70 text-white";

  const dotSize = `${dotSizeEm}em`;

  return (
    <div className="relative inline-block">
      <Tag
        className={clsx(
          "block align-baseline leading-none tracking-normal",
          "px-[0.1em] py-[0.1em]",
          radiusClass,
          variant === "outline"
            ? clsx("bg-transparent", `ring-[${ringWidthPx}px]`, outlineTone)
            : clsx("shadow-sm", filledTone),
          className
        )}
      >
        {children}
      </Tag>

      {showCornerDots && variant === "outline" && (
        <>
          {/* TL */}
          <span
            className={clsx(
              "pointer-events-none absolute rounded-sm",
              "bg-white dark:bg-background",
              "ring-1 ring-coral",
              "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            )}
            style={{ width: dotSize, height: dotSize }}
          />
          {/* TR */}
          <span
            className={clsx(
              "pointer-events-none absolute rounded-sm",
              "bg-white dark:bg-background",
              "ring-1 ring-coral",
              "top-0 right-0 translate-x-1/2 -translate-y-1/2"
            )}
            style={{ width: dotSize, height: dotSize }}
          />
          {/* BL */}
          <span
            className={clsx(
              "pointer-events-none absolute rounded-sm",
              "bg-white dark:bg-background",
              "ring-1 ring-coral",
              "bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
            )}
            style={{ width: dotSize, height: dotSize }}
          />
          {/* BR */}
          <span
            className={clsx(
              "pointer-events-none absolute rounded-sm",
              "bg-white dark:bg-background",
              "ring-1 ring-coral",
              "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
            )}
            style={{ width: dotSize, height: dotSize }}
          />
        </>
      )}
    </div>
  );
}
