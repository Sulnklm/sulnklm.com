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
  target,
}) => {
  const { currentTheme, mounted, router } = useButtonUtils();

  if (!mounted) return null;

  const isExternalLink = href ? href.startsWith("http") : false;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (onClick) onClick();

    if (href) {
      if (href.startsWith("http")) {
        // 🔹 primary 말고 나머지 테마에서 외부 링크 쓸 때만 사용됨
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

  // 🔹 PRIMARY: href 있으면 <a> + ShimmerButton 조합으로 처리
  if (theme === "primary") {
    // href가 있는 primary 버튼 (예: View Resume)
    if (href) {
      const finalTarget =
        target ?? (isExternalLink ? "_blank" : undefined);

      return (
        <a
          href={href}
          target={finalTarget}
          rel={
            finalTarget === "_blank" ? "noopener noreferrer" : undefined
          }
          className="inline-block" // 버튼 크기 깨지지 않게 래퍼만 최소 스타일
        >
          <ShimmerButton
            // a 태그가 네비게이션을 담당하니까 여기선 onClick만 전달
            onClick={onClick}
            className={additionalClasses}
            type="button"
          >
            {children}
            {icon && <span>{icon}</span>}
          </ShimmerButton>
        </a>
      );
    }

    // href 없는 primary 버튼 (단순 액션 버튼)
    return (
      <ShimmerButton
        onClick={onClick}
        className={additionalClasses}
        type="button"
      >
        {children}
        {icon && <span>{icon}</span>}
      </ShimmerButton>
    );
  }

  // 🔹 SECONDARY
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

  // 🔹 LINK BUTTON (href만 있고 theme은 tertiary 등일 때)
  if (href) {
    return (
      <a
        href={href}
        className={`${additionalClasses} !font-[450] group inline-flex items-center hover:scale-[97%] duration-300 `}
        onClick={handleClick}
        target={isExternalLink ? (target ?? "_blank") : target}
        rel={
          (isExternalLink && (target ?? "_blank") === "_blank")
            ? "noopener noreferrer"
            : undefined
        }
      >
        {children}
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  // 🔹 일반 버튼 (href 없음)
  return (
    <button
      className={`${additionalClasses} group inline-flex items-center gap-1 hover:text-grey_scale_700 duration-300`}
      onClick={handleClick}
      type="button"
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
