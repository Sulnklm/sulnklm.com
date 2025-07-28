import Works from "./components/Works";
import { CornerBoxes } from "@/components/CornerBoxes/CornerBoxes";
import { Ruler } from "@/components/ruler/Ruler";

// Project page
export default function ProjectPage() {
  return (
    <div className="mt-[15vh] pb-10 px-0 relative md:border-x container mx-auto border-dashed md:max-w-[90vw] 2xl:max-w-[80vw]">
      <CornerBoxes height={600} />
      <Ruler height={800} left />
      <Ruler height={800} left={false} />
      <Works />
      </div>
  );
}
