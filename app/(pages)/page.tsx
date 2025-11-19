import Hero from "./home/components/Hero";
import Values from "./home/components/about/Values";
import Works from "./home/components/SelectedWorks";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import { Ruler } from "@/components/ui/ruler/Ruler";
import { getLastUpdatedDate } from "@/lib/github";
import Recommendations from "./home/components/recommendations/Recommendations";

export default async function HomePage() {
  const lastUpdate = await getLastUpdatedDate();

  return (
    <div>
      <Hero lastUpdate={lastUpdate} />
      <div className="lg:pb-10 px-0 relative lg:border-x mx-auto border-dashed lg:max-w-[90vw] 2xl:max-w-[85vw]">
       <div className="hidden lg:block">
        <CornerBoxes height={600} />
        <Ruler height={800} left />
        <Ruler height={800} left={false} />
        </div>
        <Works />
        <Recommendations />
        {/* <Values /> */}
      </div>
    </div>
  );
}
