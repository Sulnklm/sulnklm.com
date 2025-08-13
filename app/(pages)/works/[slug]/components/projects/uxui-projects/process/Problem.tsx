import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Frown, NotebookPen, Rocket, RouteOff, Star } from "lucide-react";
import { ProjectDescriptionCard } from "@/components/ui/ProjectDescriptionCard/ProjectDescriptionCard";

type ProblemPropTypes = {
  heading: string;
  title: string;
  description: string;
};

export const BACKGOUND_CONST = {
  SUBTEXT: "Problem"
}

export default function Problem({
  heading,
  title,
  description,
}: ProblemPropTypes) {
  return (
    <section id="background">
      <SectionHeader
        subText={BACKGOUND_CONST.SUBTEXT}
        heading={heading}
        icon={
          <Frown size={16} className="text-grey_scale_700" strokeWidth={1.7} />
        }
      />
      <ProjectDescriptionCard
        icon={<RouteOff />}
        title={title}
        description={description}
      />
    </section>
  );
}
