import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Binoculars, Search } from "lucide-react";

 type CompetitorAnalysisPropTypes = {
  heading: string;
  title: string;
  description: string;
};

export const COMPETITOR_ANALYSIS_CONST = {
  SUBTEXT: "Competitor Analysis"
}

export default function CompetitorAnalysis({
  heading,
}: CompetitorAnalysisPropTypes) {
  return (
    <section className="container">
      <SectionHeader
        subText={COMPETITOR_ANALYSIS_CONST.SUBTEXT}
        heading={heading}
        icon={
          <Binoculars size={16} className="text-grey_scale_700" strokeWidth={1.7} />
        }
      />
    </section>
  );
}
