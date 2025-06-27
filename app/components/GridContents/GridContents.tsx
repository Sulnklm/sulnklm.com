import React from "react";
import { DashedLine } from "./\bDashedLine";
const GridContents = () => {
    return (
      <div className="relative z-10 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 w-full h-full">
        <div className="flex items-center justify-center border-b border-grey_scale_500/30 dark:border-white/70 sm:border-b-0 sm:border-r sm:border-grey_scale_500/20 dark:sm:border-white/20">
          contents
        </div>
        <div className="flex items-center justify-center">contents</div>
        <div className="flex items-center justify-center border-t border-b border-grey_scale_500/20 sm:border-b-0 sm:border-r sm:border-grey_scale_500/20 dark:sm:border-white/20">
          contents
        </div>
        <div className="flex items-center justify-center border-grey_scale_500/20 sm:border-t sm:border-grey_scale_500/20 sm:border-b-0 dark:sm:border-white/20">
          contents
        </div>
  
        <DashedLine direction="horizontal" position="top" />
        <DashedLine direction="horizontal" position="bottom" />
        <DashedLine direction="vertical" position="left" />
        <DashedLine direction="vertical" position="right" />
      </div>
    );
  };
  
  export default GridContents;
  