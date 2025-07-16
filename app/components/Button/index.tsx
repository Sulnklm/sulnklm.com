"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import GlassButton from "./GlassButton/GlassButton";
import { ShimmerButton } from "./ShimmerButton";
import PushButton from "./PushButton/PushButton";
import { ButtonPropTypes } from "./types";
import { useSound } from "../SoundContextType/SoundContextType";

export const Button: React.FC<ButtonPropTypes> = ({
  href,
  children,
  onClick,
  theme = "tertiary",
  icon,
  additionalClasses = "",
}) => {
  const { muted } = useSound();
  const { resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const playClickSound = () => {
    if (muted) return;
    if (typeof window !== "undefined") {
      const audio = new Audio("/audio/click.wav");
      audio.currentTime = 0;
      audio.volume = 0.4;
      audio.play();
    }
  };
  const currentTheme = resolvedTheme === "system" ? systemTheme : resolvedTheme;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    playClickSound();
    if (onClick) onClick();

    if (href) {
      if (href.startsWith("http")) {
        setTimeout(() => {
          window.open(href, "_blank", "noopener,noreferrer");
        }, 120);
      } else {
        e.preventDefault();
        setTimeout(() => {
          router.push(href);
        }, 120);
      }
    }
  };

  if (theme === "primary") {
    return (
      <ShimmerButton onClick={handleClick} className={additionalClasses}>
        {children}
        {icon && <span>{icon}</span>}
      </ShimmerButton>
    );
  }

  if (theme === "secondary") {
    return currentTheme === "dark" ? (
      <GlassButton
        onClick={handleClick}
        label={typeof children === "string" ? children : undefined}
        icon={icon}
      />
    ) : (
      <PushButton
        onClick={handleClick}
        theme="secondary"
        icon={icon}
        additionalClasses={additionalClasses}
      >
        {children}
      </PushButton>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${additionalClasses} group inline-flex items-center gap-2`}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button
      className={`${additionalClasses} group inline-flex items-center gap-1 hover:text-grey_scale_700 duration-300`}
      onClick={handleClick}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
