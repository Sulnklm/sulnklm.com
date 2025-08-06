import { GridPatternDashed } from "@/components/ui/DashedStroke/DashedStroke";
import React from "react";
import { SkillsTabs } from "./SkillsTabs/SkillsTabs";
import { SKILLS_CONST } from "../const";
import { InsetBlock } from "@/components/ui/InsetBlock";
import PatternBackground from "@/components/ui/PatternBackground/PatternBackground";

type Props = {};

export default function Skills() {
  return (
    <div className="mx-auto px-0 overflow-hidden mb-5">
      <InsetBlock>
        <PatternBackground />
        <h2 className="mb-10">{SKILLS_CONST.HEADING}</h2>
        <div className="relative">
        <SkillsTabs
          techTools={SKILLS_CONST.DEVELOPMENT_TOOLS}
          designTools={SKILLS_CONST.DESIGN_TOOLS}
          designSkills={SKILLS_CONST.DESIGN_SKILLS}
        />
        </div>
      </InsetBlock>
    </div>
  );
}
