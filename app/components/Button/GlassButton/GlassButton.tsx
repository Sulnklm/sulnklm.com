"use client";
import React from "react";
import styles from "./GlassButton.module.css";

interface GlassButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  icon?: React.ReactNode;           
  className?: string;              
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  onClick,
  label = "Generate",
  icon,
  className = "",
}) => (
  <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
    <div className={styles.buttonWrap}>
      <button className={styles.btn} onClick={onClick}>
        <p className={`font-[350] flex items-center gap-2 dark:text-white ${styles.btnText}`}>
          {label}
          {icon && <span>{icon}</span>}
          </p>
      </button>
      <div className={styles.buttonShadow} />
    </div>
    <svg className="absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dottedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.15)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dottedGrid)" />
    </svg>
  </div>
);

export default GlassButton;
