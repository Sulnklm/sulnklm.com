"use client";

import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { resolvedTheme, setTheme } = useTheme(); // <- use next-themes
  const isDark = resolvedTheme === "dark";
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    // keep view-transition ripple, but switch theme via next-themes
    await (document as any).startViewTransition?.(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark"); // <- no class toggling, no localStorage
      });
    })?.ready;

    // ripple animation
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, duration, setTheme]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "scale-90 md:scale-100 relative h-8 w-14 rounded-full transition-colors duration-300 border",
        "bg-zinc-200 dark:bg-zinc-800",
        "shadow-inner",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute top-[3px] left-1 h-6 w-6 rounded-full bg-white dark:bg-black z-[1000]",
          "shadow-md ring-1 ring-black/5",
          "transition-transform duration-300 will-change-transform transform-gpu",
          isDark ? "translate-x-6" : "translate-x-0",
          "inline-flex items-center justify-center"
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-gray-200" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </span>
    </button>
  );
};
