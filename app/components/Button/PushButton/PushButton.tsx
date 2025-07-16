import React from "react";
import styles from "./PushButton.module.css";
import GlassButton from "../GlassButton/GlassButton";

interface PushButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  theme?: "secondary" | "tertiary";
  icon?: React.ReactNode;
  additionalClasses?: string;
}

export const PushButton: React.FC<PushButtonProps> = ({
  onClick,
  children,
  theme = "tertiary",
  icon,
  additionalClasses = "",
}) => {
  if (theme === "secondary") {
    return (
      <button
        className={`${styles.pushButton} ${additionalClasses}`}
        onClick={onClick}
      >
        <div className={styles.outer}>
          <div className={styles.inner}>
            <p
              className={`${styles.label} font-[350] font-Sans dark:text-primary flex items-center gap-2`}
            >
              {children}
              {icon && <span>{icon}</span>}
            </p>
          </div>
        </div>
      </button>
    );
  }
  return <GlassButton onClick={onClick} label={typeof children === "string" ? children : undefined} />;
};

export default PushButton;
