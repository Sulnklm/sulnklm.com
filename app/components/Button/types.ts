import { ReactNode } from "react";

export type ButtonPropTypes = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  additionalClasses?: string; 
  theme?: "primary" | "secondary" | "tertiary";
  icon?: ReactNode;
  muted?: boolean;
  target?: string;
  rel?: string;
};
