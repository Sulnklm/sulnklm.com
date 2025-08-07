import Hero from "./home/components/Hero";
import Values from "./home/components/about/Values";
import Works from "./home/components/SelectedWorks";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import { Ruler } from "@/components/ui/ruler/Ruler";
import { getLastUpdatedDate } from "@/lib/github";

export default async function HomePage() {
  const lastUpdate = await getLastUpdatedDate();

  return (
    <div>
      <Hero lastUpdate={lastUpdate} />
      <div className="pb-10 px-0 relative md:border-x container mx-auto border-dashed md:max-w-[90vw] 2xl:max-w-[80vw]">
       <div className="hidden md:block">
        <CornerBoxes height={600} />
        <Ruler height={800} left />
        <Ruler height={800} left={false} />
        </div>
        <Works />
        <Values />
      </div>
    </div>
  );
}
