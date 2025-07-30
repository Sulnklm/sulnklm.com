import React, { ReactNode, ReactElement } from "react";

interface IconCardProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  iconSize?: number; 
}

export function IconCard({
  children,
  className = "",
  active = false,
  iconSize = 18,
}: IconCardProps) {
  let styledChildren = children;

  if (React.isValidElement(children)) {
    styledChildren = React.cloneElement(children as ReactElement<any>, {
      className: `
        ${active ? "!text-white" : "text-gray-400 dark:text-gray-300 group-hover:text-coral duration-300"}
        ${children.props.className || ""}
      `,
      size: iconSize,
      stroke: "currentColor",
    });
  }

  return (
    <div
      className={`
        relative flex items-center justify-center shadow-white-inner-top
        w-fit px-3 lg:px-4 h-fit py-3 lg:py-2 rounded-[12px]
        border bg-grey_scale_200
        dark:bg-primary
        shadow-inner-customWhite dark:shadow-inner-customWhiteDark 
        ${active ? "!bg-coral shadow-none" : "group-hover:!bg-coral/10 group-hover:!border-coral/20 duration-300"}
        ${className}
      `}
    >
      {styledChildren}
    </div>
  );
}
