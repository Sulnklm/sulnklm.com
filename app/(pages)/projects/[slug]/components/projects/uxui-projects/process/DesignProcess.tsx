import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { PencilRuler } from "lucide-react";

type DesignProcessPropTypes = {
  heading: string;
  title: string;
  description: string;
};

export const DESIGN_PROCESS_CONST = {
  SUBTEXT: "Design Process",
};

export default function DesignProcess({ heading }: DesignProcessPropTypes) {
  return (
    <section className="container">
      <SectionHeader
        subText={DESIGN_PROCESS_CONST.SUBTEXT}
        heading={heading}
        icon={
          <PencilRuler
            size={16}
            className="text-grey_scale_700"
            strokeWidth={1.7}
          />
        }
      />
    </section>
  );
}
