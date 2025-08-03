"use client";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/works/types";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import { FLICKMOOD_CONST, FLICKMOOD_FEATURES } from "./const";
import { Table2, LayoutDashboard, Database, Code } from "lucide-react";
import { Reflection } from "@/(pages)/works/[slug]/components/Reflection/Reflection";
import CodeSnippet from "../CodePreview/CodeSnippet";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
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
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container space-y-10 lg:space-y-24">
        {/* Key Features */}
        <section>
          <SectionHeader
            subText={FLICKMOOD_CONST.KEY_FEATURES.SUBTEXT}
            heading={FLICKMOOD_CONST.KEY_FEATURES.HEADING}
            icon={
              <Database
                size={16}
                className="text-grey_scale_700"
                strokeWidth={1.7}
              />
            }
          />
          <KeyFeatures features={FLICKMOOD_FEATURES} iconMap={iconMap} />
        </section>
        {/* Process */}
        <section className="container">
          <SectionHeader
            subText={FLICKMOOD_CONST.PROCESS.SUBTEXT}
            heading={FLICKMOOD_CONST.PROCESS.HEADING}
            icon={
              <Code
                size={16}
                className="text-grey_scale_700"
                strokeWidth={1.7}
              />
            }
          />
          <CodeSnippet />
        </section>

        <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container">
          <Reflection reflection={FLICKMOOD_CONST.REFLECTION} />
        </div>
      </div>
    </div>
  );
}
