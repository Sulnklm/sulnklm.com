"use client";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import type { ProjectType } from "@/(pages)/works/types";
import Overview from "../../../overview/Overview";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { PIXEED_FEATURES, PIXEED_PROJECT } from "./const";
import {
  CopyMinus,
  Drum,
  Frown,
  PenLine,
  Pointer,
  RefreshCw,
  RouteOff,
  RulerDimensionLine,
  Sparkles,
  Star,
  Video,
  Workflow,
} from "lucide-react";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import TableOfContents from "@/components/ui/TableOfContents/TableOfContents";
import Background from "../process/Background";
import Problem from "../process/Problem";
import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { IconCard } from "@/components/ui/IconCard/IconCard";
import CompetitorAnalysis from "../process/CompetitorAnalysis";
import { ProjectDescriptionCard } from "@/components/ui/ProjectDescriptionCard/ProjectDescriptionCard";
import { VerticalConnector } from "@/components/ui/VerticalConnector/VerticalConnector";
import DesignProcess from "../process/DesignProcess";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import { Reflection } from "../../../Reflection/Reflection";

export default function Pixeed() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "pixeed"
  );
  if (!project) return <div>Project not found.</div>;
  const iconMap = {
    video: Video,
    sparkles: Sparkles,
    copyMinus: CopyMinus,
    workflow: Workflow,
  };
  return (
    <div>
      <Overview project={project} />
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container space-y-10 lg:space-y-16 2xl:space-y-24">
        <section id="quick-preview">
          <SectionHeader
            subText={PIXEED_PROJECT.KEY_FEATURES.SUBTEXT}
            heading={PIXEED_PROJECT.KEY_FEATURES.HEADING}
            icon={
              <Star
                size={16}
                className="text-grey_scale_700"
                strokeWidth={1.7}
              />
            }
          />
          <KeyFeatures features={PIXEED_FEATURES} iconMap={iconMap} />
        </section>

        <div className="relative flex border-y py-10 lg:py-20">
          <CornerBoxes overrideBottom={{ 1: "bottom-0", 3: "bottom-0" }} />
          <div className="hidden lg:block mr-8 min-w-[195px]">
            <TableOfContents
              sections={[
                { id: "quick-preview", label: "Quick Preview" },
                { id: "background", label: "Background" },
                { id: "challenges", label: "Challenges" },
                {
                  id: "competitor-analysis",
                  label: "Competitor Analysis",
                },
                { id: "design-process", label: "Design Process" },
                { id: "prototype", label: "Prototype" },
                { id: "reflection", label: "Reflection" },
              ]}
            />
          </div>
          <div className="relative lg:border-l border-dashed space-y-20 container">
            <div className="hidden lg:block absolute top-0 -left-[5px] w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />
            <div className="hidden lg:block absolute bottom-0 -left-[5px] w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />
            <section id="background">
              <Background
                heading={PIXEED_PROJECT.BACKGROUND.HEADING}
                title={PIXEED_PROJECT.BACKGROUND.TITLE}
                description={PIXEED_PROJECT.BACKGROUND.DESCRIPTION}
              />
              <img
                src={PIXEED_PROJECT.BACKGROUND.IMAGE.SRC}
                alt={PIXEED_PROJECT.BACKGROUND.IMAGE.ALT}
                className="mx-auto my-10 w-full h-auto"
              />
            </section>

            <section id="challenges">
              <SectionHeader
                subText={PIXEED_PROJECT.PROBLEM.SUBTEXT}
                heading={PIXEED_PROJECT.PROBLEM.HEADING}
                icon={
                  <Frown
                    size={16}
                    className="text-grey_scale_700"
                    strokeWidth={1.7}
                  />
                }
              />
              <InsetBlockInside>
                <div className="grid gap-3.5">
                  <IconCard>
                    <RouteOff />
                  </IconCard>
                  <h4>{PIXEED_PROJECT.PROBLEM.TITLE}</h4>
                  <p>{PIXEED_PROJECT.PROBLEM.DESCRIPTION[1]}</p>
                  <div className="gap-2 grid my-3">
                    <p className="font-PerfectlyNineties tracking-wide">
                      {PIXEED_PROJECT.PROBLEM.DESCRIPTION[2]}
                    </p>
                    <p className="font-PerfectlyNineties tracking-wide">
                      {PIXEED_PROJECT.PROBLEM.DESCRIPTION[3]}
                    </p>
                    <p className="font-PerfectlyNineties tracking-wide">
                      {PIXEED_PROJECT.PROBLEM.DESCRIPTION[4]}
                    </p>
                  </div>
                  <p>{PIXEED_PROJECT.PROBLEM.DESCRIPTION[5]}</p>
                </div>
              </InsetBlockInside>
              <img
                src={PIXEED_PROJECT.PROBLEM.IMAGE.SRC}
                alt={PIXEED_PROJECT.PROBLEM.IMAGE.ALT}
                className="mx-auto my-10 w-full h-auto rounded-3xl"
              />

              <img
                src={PIXEED_PROJECT.PROBLEM.IMAGE2.SRC}
                alt={PIXEED_PROJECT.PROBLEM.IMAGE2.ALT}
                className="mx-auto my-10 w-full h-auto rounded-3xl"
              />
            </section>

            <section id="competitor-analysis">
              <CompetitorAnalysis
                heading={PIXEED_PROJECT.COMPETITOR_ANALYSIS.HEADING}
                title={PIXEED_PROJECT.BACKGROUND.TITLE}
                description={PIXEED_PROJECT.BACKGROUND.DESCRIPTION}
              />
              <ProjectDescriptionCard
                icon={<Video />}
                title={PIXEED_PROJECT.COMPETITOR_ANALYSIS.TITLE}
                description={PIXEED_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION}
                description2={PIXEED_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION2}
                image={{
                  src: PIXEED_PROJECT.COMPETITOR_ANALYSIS.IMG1.SRC,
                  alt: PIXEED_PROJECT.COMPETITOR_ANALYSIS.IMG1.ALT,
                }}
              />
              <VerticalConnector />

              <img
                src={PIXEED_PROJECT.COMPETITOR_ANALYSIS.IMG2.SRC}
                alt={PIXEED_PROJECT.COMPETITOR_ANALYSIS.IMG2.ALT}
                className="mx-auto mb-10 w-full h-auto dark:invert"
              />
            </section>

            <section id="opportunity">
              <SectionHeader
                subText={PIXEED_PROJECT.DIFFERENTIATORS.SUBTEXT}
                heading={PIXEED_PROJECT.DIFFERENTIATORS.HEADING}
                icon={
                  <Drum
                    size={16}
                    className="text-grey_scale_700"
                    strokeWidth={1.7}
                  />
                }
              />
              <div className="grid md:grid-cols-2 gap-3">
                <ProjectDescriptionCard
                  icon={<Video />}
                  title={PIXEED_PROJECT.DIFFERENTIATORS[1].TITLE}
                  description={PIXEED_PROJECT.DIFFERENTIATORS[1].DESCRIPTION}
                />
                <ProjectDescriptionCard
                  icon={<Sparkles />}
                  title={PIXEED_PROJECT.DIFFERENTIATORS[2].TITLE}
                  description={PIXEED_PROJECT.DIFFERENTIATORS[2].DESCRIPTION}
                />
                <ProjectDescriptionCard
                  icon={<CopyMinus />}
                  title={PIXEED_PROJECT.DIFFERENTIATORS[3].TITLE}
                  description={PIXEED_PROJECT.DIFFERENTIATORS[3].DESCRIPTION}
                />
                <ProjectDescriptionCard
                  icon={<Workflow />}
                  title={PIXEED_PROJECT.DIFFERENTIATORS[4].TITLE}
                  description={PIXEED_PROJECT.DIFFERENTIATORS[4].DESCRIPTION}
                />
              </div>
            </section>

            <section id="design-process">
              <DesignProcess
                heading={PIXEED_PROJECT.DESIGN_PROCESS.HEADING}
                title={PIXEED_PROJECT.BACKGROUND.TITLE}
                description={PIXEED_PROJECT.BACKGROUND.DESCRIPTION}
              />
              {/* Step 1 */}
              <ProjectDescriptionCard
                icon={<PenLine />}
                title={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.TITLE}
                description={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.DESCRIPTION}
              />
              <VerticalConnector />
              <InsetBlockInside>
                <img
                  className="dark:hidden mt-5 mb-10"
                  src={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.IA.IMG.SRC}
                  alt={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.IA.IMG.ALT}
                />
                <img
                  className="hidden dark:block mt-5 mb-10"
                  src={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.IA_DARK.IMG.SRC}
                  alt={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.IA_DARK.IMG.ALT}
                />
                <div className="border-t mt-5 pb-5 border-dashed"></div>
                <div className="grid grid-cols-3 gap-10">
                  <img
                    className="col-span-1 mt-10 dark:invert w-full h-auto mx-auto"
                    src={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.USER_FLOW.IMG.SRC}
                    alt={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.USER_FLOW.IMG.ALT}
                  />
                  <img
                    className="col-span-2 mt-10 dark:invert w-full h-auto mx-auto rounded-xl"
                    src={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.SKETCH.IMG.SRC}
                    alt={PIXEED_PROJECT.DESIGN_PROCESS.STEP1.SKETCH.IMG.ALT}
                  />
                </div>
              </InsetBlockInside>
            </section>
            <div className="border-t border-dashed"></div>
            {/* Step 2 */}
            <section>
              <ProjectDescriptionCard
                icon={<RulerDimensionLine />}
                title={PIXEED_PROJECT.DESIGN_PROCESS.STEP2.TITLE}
                description={PIXEED_PROJECT.DESIGN_PROCESS.STEP2.DESCRIPTION}
              />
              <VerticalConnector />
              <InsetBlockInside>
                <img
                  className="dark:hidden w-full h-auto mx-auto rounded-xl"
                  src={
                    PIXEED_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM.IMG.SRC
                  }
                  alt={
                    PIXEED_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM.IMG.ALT
                  }
                />
                <img
                  className="hidden dark:block w-full h-auto mx-auto rounded-xl"
                  src={
                    PIXEED_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM_DARK.IMG
                      .SRC
                  }
                  alt={
                    PIXEED_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM_DARK.IMG
                      .ALT
                  }
                />
              </InsetBlockInside>
            </section>
            <div className="border-t border-dashed"></div>
            {/* Step 3 */}
            <section>
              <ProjectDescriptionCard
                icon={<Pointer />}
                title={PIXEED_PROJECT.DESIGN_PROCESS.STEP3.TITLE}
                description={PIXEED_PROJECT.DESIGN_PROCESS.STEP3.DESCRIPTION}
              />
              <VerticalConnector />
              <InsetBlockInside>
                <img
                  className="dark:hidden w-full h-auto mx-auto rounded-xl"
                  src={PIXEED_PROJECT.DESIGN_PROCESS.STEP3.WIREFRAMES.IMG.SRC}
                  alt={PIXEED_PROJECT.DESIGN_PROCESS.STEP3.WIREFRAMES.IMG.ALT}
                />
                <img
                  className="hidden dark:block w-full h-auto mx-auto rounded-xl"
                  src={
                    PIXEED_PROJECT.DESIGN_PROCESS.STEP3.WIREFRAMES_DARK.IMG.SRC
                  }
                  alt={
                    PIXEED_PROJECT.DESIGN_PROCESS.STEP3.WIREFRAMES_DARK.IMG.ALT
                  }
                />
                <section id="prototype">
                  <div className="border-t mt-10 pb-10 border-dashed"></div>
                  <SubTextBox>
                    {
                      PIXEED_PROJECT.DESIGN_PROCESS.STEP3.PROTOTYPE.CLIENT
                        .SUBTEXT
                    }
                  </SubTextBox>
                  <video
                    src={
                      PIXEED_PROJECT.DESIGN_PROCESS.STEP3.PROTOTYPE.CLIENT.SRC
                    }
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto mx-auto border"
                  />
                  <div className="border-t mt-10 pb-10 border-dashed"></div>

                  <SubTextBox>
                    {PIXEED_PROJECT.DESIGN_PROCESS.STEP3.PROTOTYPE.TEAM.SUBTEXT}
                  </SubTextBox>
                  <video
                    src={PIXEED_PROJECT.DESIGN_PROCESS.STEP3.PROTOTYPE.TEAM.SRC}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto mx-auto border"
                  />
                </section>
              </InsetBlockInside>
            </section>
            <section
              id="reflection"
              className="relative mt-10 pt-10 lg:mt-16 lg:pt-16"
            >
              <Reflection
                title={PIXEED_PROJECT.REFLECTION.TITLE}
                description={PIXEED_PROJECT.REFLECTION.DESCRIPTION}
              />
            </section>
          </div>
        </div>
        {/* <KeyFeatures features={PIXEED_FEATURES} iconMap={iconMap} /> */}
      </div>
    </div>
  );
}
