import { InsetBlockInside } from "@/components/InsetBlockInside";
import OrangeTextBox from "@/components/OrangeTextBox/OrangeTextBox";
import PatternBackground from "@/components/PatternBackground/PatternBackground";
import { ReflectionTypes } from "./types";
import { IconCard } from "@/components/IconCard/IconCard";
import { Lightbulb } from "lucide-react";
interface ReflectionProps {
  reflection: ReflectionTypes;
}

export function Reflection({ reflection }: ReflectionProps) {
  return (
    <div>
      <OrangeTextBox text="Reflection" />
      <InsetBlockInside>
        <div className="grid gap-3">
        <IconCard>
          <Lightbulb />
        </IconCard>
        <h4>{reflection.title}</h4>
        <p>{reflection.description}</p></div>
      </InsetBlockInside>
    </div>
  );
}
