import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Binoculars, User } from "lucide-react";

 type DefiningPropTypes = {
  heading: string;
  title: string;
  description: string;
};

export const DEFINING = {
  SUBTEXT: "Defining"
}

export default function Defining({
  heading,
}: DefiningPropTypes) {
  return (
    <section className="container">
      <SectionHeader
        subText={DEFINING.SUBTEXT}
        heading={heading}
        icon={
          <User size={16} className="text-grey_scale_700" strokeWidth={1.7} />
        }
      />
    </section>
  );
}
