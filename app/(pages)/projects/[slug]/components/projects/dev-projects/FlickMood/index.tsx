"use client";
import { PROJECTS_CONST } from "@/(pages)/projects/const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/projects/types";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import { FLICKMOOD_CONST, FLICKMOOD_FEATURES } from "./const";
import { Table2, LayoutDashboard, Database, Code, Code2 } from "lucide-react";
import { Reflection } from "@/(pages)/projects/[slug]/components/Reflection/Reflection";
import CodeSnippet from "../CodePreview/CodeSnippet";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import PrimarySection from "@/components/ui/Section/PrimarySection";
import PrevNextProjects from "@/components/ui/PrevNextProjects/PrevNextProjects";
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
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 space-y-10 lg:space-y-24 px-5">
        {/* Key Features */}
        <section className="container">
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

        {/* <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container">
          <Reflection title={FLICKMOOD_CONST.REFLECTION.TITLE} description={FLICKMOOD_CONST.REFLECTION.DESCRIPTION}/>
        </div> */}

        <section className="">
                  <div className="py-20 mx-auto overflow-hidden">
                    <PrimarySection
                      icon={
                        <Code2
                          size={16}
                          className="text-grey_scale_700"
                          strokeWidth={1.7}
                        />
                      }
                      title={FLICKMOOD_CONST.REFLECTION.TITLE}
                      subtitle={FLICKMOOD_CONST.REFLECTION.SUBTITLE}
                      description={FLICKMOOD_CONST.REFLECTION.DESCRIPTION}
                      visuals={FLICKMOOD_CONST.REFLECTION.visuals}
                    />
                  </div>
                </section>
                <PrevNextProjects
                  currentSlug={project.SLUG}
                  projects={PROJECTS_CONST.PROJECTS}
                />
      </div>
    </div>
  );
}
