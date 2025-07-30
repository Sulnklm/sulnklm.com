"use client";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/works/types";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import { FLICKMOOD_CONST, FLICKMOOD_FEATURES } from "./const";
import { Table2, LayoutDashboard, Database } from "lucide-react";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import { Reflection } from "@/(pages)/works/[slug]/components/Reflection/Reflection";
import CodePreview from "../CodePreview/CodePreview";
const iconMap = {
  table2: Table2,
  LayoutDashboard: LayoutDashboard,
};

export default function FlickMood() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "flickmood"
  );
  if (!project) return <div>Project not found.</div>;

  return (
    <div className="relative">
      <Overview project={project} />
      {/* Key Features */}
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container">
        <SubTextBox
          additionalClass="mx-auto"
          icon={
            <Database
              size={16}
              className="text-grey_scale_700"
              strokeWidth={1.7}
            />
          }
        >
          {FLICKMOOD_CONST.KEY_FEATURES_SUBTEXT}
        </SubTextBox>
        <h2 className="mb-14"> {FLICKMOOD_CONST.KEY_FEATURES_HEADING}</h2>
        <KeyFeatures features={FLICKMOOD_FEATURES} iconMap={iconMap} />
        <CodePreview />
        <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container">
          <Reflection reflection={FLICKMOOD_CONST.REFLECTION} />
        </div>
      </div>
    </div>
  );
}
