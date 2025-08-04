import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Search } from "lucide-react";

 type UserResearchPropTypes = {
  heading: string;
  title: string;
  description: string;
};

export const USER_RESEARCH_CONST = {
  SUBTEXT: "User Research"
}

export default function UserResearch({
  heading,
}: UserResearchPropTypes) {
  return (
    <section className="container">
      <SectionHeader
        subText={USER_RESEARCH_CONST.SUBTEXT}
        heading={heading}
        icon={
          <Search size={16} className="text-grey_scale_700" strokeWidth={1.7} />
        }
      />
    </section>
  );
}
