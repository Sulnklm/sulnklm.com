export type ButtonPropTypes = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  additionalClasses?: {
    container?: string;
    text?: string;
    icon?: string;
    hover?: string;
  };
  theme?: "primary" | "secondary" | "tertiary";
};
