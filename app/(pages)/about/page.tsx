import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import About from "./components/About";
import { Ruler } from "@/components/ui/ruler/Ruler";

export default function AboutPage() {
  return (
    <div className="mt-[15vh] pb-10 px-0 relative md:border-x container mx-auto border-dashed md:max-w-[90vw] 2xl:max-w-[80vw]">
      <CornerBoxes height={600} />
      <Ruler height={800} left />
      <Ruler height={800} left={false} />
      <About />
    </div>
  );
}
