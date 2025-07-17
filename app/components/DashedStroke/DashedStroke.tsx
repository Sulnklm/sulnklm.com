
"use client";
import { cn } from "@/lib/utils";
import { GridPattern } from "components/magicui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="relative flex size-full h-[50vh] items-center justify-center overflow-hidden rounded-[30px] border bg-white/30 dark:bg-primary p-20">
      <GridPattern
        width={55}
        height={55}
        x={-1}
        y={-10}
        strokeDasharray={"4 2"}
        className={cn(
          "dark:opacity-70 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}