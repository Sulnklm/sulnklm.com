import React, { ReactNode } from "react";
import { DashedLine } from "./DashedLine";

interface GridContentsProps {
  children?: ReactNode[]; // 최대 4개까지 받을 수 있음
}

const GridContents = ({ children = [] }: GridContentsProps) => {
  // 항상 4개의 칸이 필요하니까, 없으면 빈 div로 채움
  const contentArr = [
    children[0] || null,
    children[1] || null,
    children[2] || null,
    children[3] || null,
  ];

  return (
    <div className="relative z-10 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 w-full h-full min-h-[10rem]">
      <div className="flex items-center justify-center border-b border-grey_scale_500/20 sm:border-b-0 sm:border-r sm:border-grey_scale_500/20 dark:sm:!border-white/20">
        {contentArr[0]}
      </div>
      <div className="flex items-center justify-center p-10">
        {contentArr[1]}
      </div>
      <div className="flex items-center justify-center border-t border-b border-grey_scale_500/20 sm:border-b-0 sm:border-r sm:border-grey_scale_500/20 dark:sm:!border-white/20 p-10">
        {contentArr[2]}
      </div>
      <div className="flex items-center justify-center border-grey_scale_500/20 sm:border-t sm:border-grey_scale_500/20 sm:border-b-0 dark:sm:!border-white/20">
        {contentArr[3]}
      </div>

      <DashedLine direction="horizontal" position="top" />
      <DashedLine direction="horizontal" position="bottom" />
      {/* <DashedLine direction="vertical" position="left" />
      <DashedLine direction="vertical" position="right" /> */}
    </div>
  );
};

export default GridContents;
