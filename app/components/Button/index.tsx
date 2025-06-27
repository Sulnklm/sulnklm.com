"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import GlassButton from "./GlassButton/GlassButton";
import { ShimmerButton } from "./ShimmerButton";
import PushButton from "./PushButton/PushButton";
import { ButtonPropTypes } from "./types";

export const Button: React.FC<ButtonPropTypes> = ({
  href, children, onClick, theme = "tertiary", icon, additionalClasses = ""
}) => {
  const { resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  const currentTheme = resolvedTheme === "system" ? systemTheme : resolvedTheme;

  if (theme === "primary") {
    return (
      <ShimmerButton onClick={onClick} className={additionalClasses}>
        {children}{icon && <span>{icon}</span>}
      </ShimmerButton>
    );
  }

  if (theme === "secondary") {
    return currentTheme === "dark"
      ? <GlassButton onClick={onClick} label={typeof children === "string" ? children : undefined} icon={icon} />
      : <PushButton onClick={onClick} theme="secondary" icon={icon} additionalClasses={additionalClasses}>
          {children}
        </PushButton>;
  }

  if (href) {
    return (
      <Link href={href}>
        <span className={`${additionalClasses} group inline-flex items-center gap-2`}>
          {children}{icon && <span>{icon}</span>}
        </span>
      </Link>
    );
  }

  return (
    <button
      className={`${additionalClasses} group inline-flex items-center gap-1 hover:text-grey_scale_700 duration-300`}
      onClick={onClick}
    >
      {children}{icon && <span>{icon}</span>}
    </button>
  );
};
