import { cn } from "@/lib/utils";
import React from "react";
 
export function DotBackground() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-background dark:bg-primary">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:32px_32px]",
          "[background-image:radial-gradient(#111111,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
     
    </div>
  );
}