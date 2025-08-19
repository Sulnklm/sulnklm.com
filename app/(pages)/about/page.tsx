"use client";
import { useLoadingSpinner } from "@/components/ui/LoadingSpinner/useLoadingSpiiner";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import { Ruler } from "@/components/ui/ruler/Ruler";
import About from "./components/About";

export default function AboutPage() {
  const isLoading = useLoadingSpinner();

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <div className="mt-[15vh] pb-10 px-0 relative md:border-x container mx-auto border-dashed md:max-w-[90vw] 2xl:max-w-[80vw]">
        <div className="hidden md:block">
          <CornerBoxes height={600} />
          <Ruler height={800} left />
          <Ruler height={800} left={false} />
        </div>
        <About />
      </div>
    </div>
  );
}
