import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { NotebookPen, Rocket, Star } from "lucide-react";
import { ProjectDescriptionCard } from "@/components/ui/ProjectDescriptionCard/ProjectDescriptionCard";

type BackgroundPropTypes = {
  heading: string;
  title: string;
  description: string;
};

export const BACKGOUND_CONST = {
  SUBTEXT: "Background"
}

export default function Background({
  heading,
  title,
  description,
}: BackgroundPropTypes) {
  return (
    <section id="background" className="container">
      <SectionHeader
        subText={BACKGOUND_CONST.SUBTEXT}
        heading={heading}
        icon={
          <Rocket size={16} className="text-grey_scale_700" strokeWidth={1.7} />
        }
      />
      <ProjectDescriptionCard
        icon={<NotebookPen />}
        title={title}
        description={description}
      />
    </section>
  );
}
