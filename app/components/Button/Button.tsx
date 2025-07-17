"use client";
import React from "react";
import GlassButton from "./GlassButton/GlassButton";
import { ShimmerButton } from "./ShimmerButton/ShimmerButton";
import PushButton from "./PushButton/PushButton";
import { ButtonPropTypes } from "./types";
import { useButtonUtils } from "./useButtonUtils"; 

export const Button: React.FC<ButtonPropTypes> = ({
  href,
  children,
  onClick,
  theme = "tertiary",
  icon,
  additionalClasses = "",
}) => {
  const { muted, currentTheme, mounted, router } = useButtonUtils();

  const playClickSound = () => {
    if (muted) return;
    if (typeof window !== "undefined") {
      const audio = new Audio("/audio/click.wav");
      audio.currentTime = 0;
      audio.volume = 0.4;
      audio.play();
    }
  };

  // 클릭 이벤트
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
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

  if (!mounted) return null;

  // 프라이머리
  if (theme === "primary") {
    return (
      <ShimmerButton onClick={handleClick} className={additionalClasses}>
        {children}
        {icon && <span>{icon}</span>}
      </ShimmerButton>
    );
  }

  // 세컨더리
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

  // 링크 버튼
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

  // 일반 버튼
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
