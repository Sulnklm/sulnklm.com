"use client";
import React, { useState } from "react";
import { Cpu, PenTool, LayoutList } from "lucide-react";
import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { SkillText } from "./SkillText";
import { ShinyTabs } from "@/components/ui/ShinyTabs/ShinyTabs";

interface SkillsTabsProps {
  techTools: string[];
  designTools: string[];
  designSkills: string[];
}

export const SkillsTabs: React.FC<SkillsTabsProps> = ({
  techTools,
  designTools,
  designSkills,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = [
    { label: "Tech Stack", icon: <Cpu size={18} /> },
    { label: "Design Tool", icon: <LayoutList size={18} /> },
    { label: "Design Expertise", icon: <PenTool size={18} /> },
  ];

  const contentMap = [techTools, designTools, designSkills];

  return (
    <div className="w-full max-w-[70rem] mx-auto h-fit">
      <ShinyTabs
        activeIndex={activeIndex}
        tabs={tabs}
        onChange={setActiveIndex}
      />
      <div className="mt-5 relative">
        <InsetBlockInside>
          <div className="flex flex-wrap gap-3">
            {contentMap[activeIndex].map((item, idx) => (
              <SkillText key={idx}>{item}</SkillText>
            ))}
          </div>
        </InsetBlockInside>
      </div>
    </div>
  );
};
