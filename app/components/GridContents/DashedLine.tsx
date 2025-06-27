import React from "react";

type LineProps = {
  direction: "horizontal" | "vertical";
  position: "top" | "bottom" | "left" | "right";
  lengthPercent?: number; 
};

export const DashedLine = ({
  direction,
  position,
  lengthPercent = 125,
}: LineProps) => {
  const commonStyles: React.CSSProperties = {
    position: "absolute",
    opacity: 0.3,
  };

  if (direction === "horizontal") {
    commonStyles.width = `${lengthPercent}%`;
    commonStyles.height = "1px";
    commonStyles.left = "50%";
    commonStyles.transform = "translateX(-50%)";

    if (position === "top") commonStyles.top = 0;
    else if (position === "bottom") commonStyles.bottom = 0;
  } else {
    // vertical
    commonStyles.height = `${lengthPercent}%`;
    commonStyles.width = "1px";
    commonStyles.top = "50%";
    commonStyles.transform = "translateY(-50%)";

    if (position === "left") commonStyles.left = 0;
    else if (position === "right") commonStyles.right = 0;
  }

  const className =
    direction === "horizontal"
      ? "dashed-horizontal-fade dark:dashed-horizontal-fade-white"
      : "dashed-vertical-fade dark:dashed-vertical-fade-white";

  return <div className={className} style={commonStyles} />;
};
