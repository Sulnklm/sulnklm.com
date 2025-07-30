"use client";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/magicui/grid-pattern";
import { DashedLine } from "../GridContents/\bDashedLine";
interface GridPatternDashedProps {
  children: React.ReactNode;
}

export function GridPatternDashed({ children }: GridPatternDashedProps) {
  return (
    <div className="relative size-full h-fit items-center justify-center my-5 bg-white/30 dark:bg-primary p-20">
      <DashedLine direction="horizontal" position="top" />
      <DashedLine direction="horizontal" position="bottom" />
      <DashedLine direction="vertical" position="left" />
      <DashedLine direction="vertical" position="right" />
      <GridPattern
        width={55}
        height={55}
        x={-1}
        y={-10}
        strokeDasharray={"4 2"}
        className={cn(
          "dark:opacity-70 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      {children}
    </div>
  );
}
