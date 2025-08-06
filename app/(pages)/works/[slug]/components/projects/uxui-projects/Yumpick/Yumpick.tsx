"use client";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import {
  APP_DATA,
  USER_INTERVIEW_PROBLEMS,
  USER_INTERVIEW_SURVEY,
  YUMPICK_FEATURES,
  YUMPICK_PROJECT,
} from "./const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/works/types";
import { Reflection } from "../../../Reflection/Reflection";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import {
  ArrowLeft,
  Book,
  CalendarCheck,
  Layers,
  Lightbulb,
  ListChecks,
  MapPinned,
  PenLine,
  Pointer,
  RulerDimensionLine,
  Star,
  Telescope,
  Utensils,
  UtensilsCrossed,
  X,
} from "lucide-react";
import TableOfContents from "@/components/ui/TableOfContents/TableOfContents";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import Background from "../process/Background";
import UserResearch from "../process/UserResearch";
import { AnimatedNotificationList } from "@/components/ui/Notification/Notification";
import { BarChart } from "@/components/ui/Chart/BarChart";
import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { InsetBlock } from "@/components/ui/InsetBlock";
import { ProjectDescriptionCard } from "@/components/ui/ProjectDescriptionCard/ProjectDescriptionCard";
import { VerticalConnector } from "@/components/ui/VerticalConnector/VerticalConnector";
import CompetitorAnalysis from "../process/CompetitorAnalysis";
import Defining from "../process/Defining";
import IdeasToAction from "../process/DesignProcess";
import DesignProcess from "../process/DesignProcess";
import { Button } from "@/components/Button/Button";

export default function Yumpick() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "yumpick"
  );
  if (!project) return <div>Project not found.</div>;
  const iconMap = {
    mapPin: MapPinned,
    telescope: Telescope,
    utensils: Utensils,
    calendarCheck: CalendarCheck,
  };

  return (
    <div>
      <Overview project={project} />
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container space-y-10 lg:space-y-16 2xl:space-y-24">
        {/* Key Features */}
        <section id="quick-preview">
          <SectionHeader
            subText={YUMPICK_PROJECT.KEY_FEATURES.SUBTEXT}
            heading={YUMPICK_PROJECT.KEY_FEATURES.HEADING}
            icon={
              <Star
                size={16}
                className="text-grey_scale_700"
                strokeWidth={1.7}
              />
            }
          />
          <KeyFeatures features={YUMPICK_FEATURES} iconMap={iconMap} />
        </section>
        {/* case study */}
        <div className="relative flex border-y py-10 lg:py-20">
          <CornerBoxes overrideBottom={{ 1: "bottom-0", 3: "bottom-0" }} />

          <div className="hidden lg:block mr-8 min-w-[190px]">
            <TableOfContents
              sections={[
                { id: "quick-preview", label: "👁️ Quick Preview" },
                { id: "background", label: "🏁 Background" },
                { id: "user-research", label: "👥 User Research" },
                { id: "competitor-analysis", label: "🔍 Competitor Analysis" },
                { id: "defining", label: "👩🏻‍🦱 Defining" },
                { id: "design-process", label: "🎨 Design Process" },
                { id: "reflection", label: "📝 Reflection" },
              ]}
            />
          </div>
          <div className="relative lg:border-l border-dashed space-y-20 container">
          <div className="hidden lg:block absolute top-0 -left-[5px] w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />
          <div className="hidden lg:block absolute bottom-0 -left-[5px] w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />

            <section id="background">
              <Background
                heading={YUMPICK_PROJECT.BACKGROUND.HEADING}
                title={YUMPICK_PROJECT.BACKGROUND.TITLE}
                description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
              />
            </section>
            <section id="user-research">
              <UserResearch
                heading={YUMPICK_PROJECT.USER_RESEARCH.HEADING}
                title={YUMPICK_PROJECT.BACKGROUND.TITLE}
                description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
              />
              <div className="">
                <InsetBlockInside>
                  <div className="pt-5 pb-1 lg:py-10">
                    <BarChart
                      data={APP_DATA}
                      title={
                        YUMPICK_PROJECT.USER_RESEARCH.USER_SURVEY
                          .SURVEY1_HEADING
                      }
                    />
                    <div className="border-t mt-10 lg:mt-14 pb-10 lg:pb-14 border-dashed"></div>
                    <AnimatedNotificationList
                      notifications={USER_INTERVIEW_SURVEY}
                    />
                  </div>
                </InsetBlockInside>
                <VerticalConnector />
                <ProjectDescriptionCard
                  icon={<Utensils />}
                  title={YUMPICK_PROJECT.USER_RESEARCH.USER_SURVEY.TITLE}
                  description={
                    YUMPICK_PROJECT.USER_RESEARCH.USER_SURVEY.DESCRIPTION
                  }
                />
              </div>
            </section>

            <section id="competitor-analysis">
              <CompetitorAnalysis
                heading={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.HEADING}
                title={YUMPICK_PROJECT.BACKGROUND.TITLE}
                description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
              />
              <InsetBlockInside>
                <div className="pb-1 lg:pb-10">
                  <img
                    src={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.IMG.SRC}
                    alt={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.IMG.ALT}
                  />
                  <div className="border-t mt-3 pb-8 lg:pb-14 border-dashed"></div>
                  <AnimatedNotificationList
                    notifications={USER_INTERVIEW_PROBLEMS}
                  />
                </div>
              </InsetBlockInside>
              <VerticalConnector />
              <ProjectDescriptionCard
                icon={<UtensilsCrossed />}
                title={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.TITLE}
                description={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION}
              />
            </section>

            <section id="defining">
              <Defining
                heading={YUMPICK_PROJECT.DEFINING.HEADING}
                title={YUMPICK_PROJECT.BACKGROUND.TITLE}
                description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
              />
              <InsetBlockInside>
                <div className="max-w-[40rem] mx-auto">
                  <img
                    className="dark:hidden"
                    src={YUMPICK_PROJECT.USER_NEEDS.IMG.SRC}
                    alt={YUMPICK_PROJECT.USER_NEEDS.IMG.ALT}
                  />
                  <img
                    className="hidden dark:block"
                    src={YUMPICK_PROJECT.USER_NEEDS.IMG_DARK.SRC}
                    alt={YUMPICK_PROJECT.USER_NEEDS.IMG_DARK.ALT}
                  />
                </div>
                <div className="border-t mt-5 pb-5 border-dashed"></div>
                <div>
                  <img
                    className="dark:hidden"
                    src={YUMPICK_PROJECT.DEFINING.IMG.SRC}
                    alt={YUMPICK_PROJECT.DEFINING.IMG.ALT}
                  />
                  <img
                    className="hidden dark:block p-5"
                    src={YUMPICK_PROJECT.DEFINING.IMG_DARK.SRC}
                    alt={YUMPICK_PROJECT.DEFINING.IMG_DARK.ALT}
                  />
                </div>
              </InsetBlockInside>
              <VerticalConnector />
              <ProjectDescriptionCard
                icon={<ListChecks />}
                title={YUMPICK_PROJECT.DEFINING.TITLE}
                description={YUMPICK_PROJECT.DEFINING.DESCRIPTION}
              />
            </section>

            <section id="design-process">
              <DesignProcess
                heading={YUMPICK_PROJECT.DESIGN_PROCESS.HEADING}
                title={YUMPICK_PROJECT.BACKGROUND.TITLE}
                description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
              />
              {/* Step 1 */}
              <InsetBlockInside>
                <img
                  className="pb-5"
                  src={YUMPICK_PROJECT.DESIGN_PROCESS.STEP1.IA.IMG.SRC}
                  alt={YUMPICK_PROJECT.DESIGN_PROCESS.STEP1.IA.IMG.ALT}
                />
                <div className="border-t mt-5 pb-5 border-dashed"></div>
                <img
                  className="py-5"
                  src={YUMPICK_PROJECT.DESIGN_PROCESS.STEP1.LOW_FI.IMG.SRC}
                  alt={YUMPICK_PROJECT.DESIGN_PROCESS.STEP1.LOW_FI.IMG.ALT}
                />
              </InsetBlockInside>
              <VerticalConnector />
              <ProjectDescriptionCard
                icon={<PenLine />}
                title={YUMPICK_PROJECT.DESIGN_PROCESS.STEP1.TITLE}
                description={YUMPICK_PROJECT.DESIGN_PROCESS.STEP1.DESCRIPTION}
              />
              <div className="border-t mt-10 pb-10 lg:mt-16 lg:pb-16 border-dashed"></div>
              {/* Step 2 */}
              <InsetBlockInside>
                <img
                  className="pb-5"
                  src={YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.MID_FI.IMG.SRC}
                  alt={YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.MID_FI.IMG.ALT}
                />
                <div className="border-t mt-5 pb-5 border-dashed"></div>
                <img
                  className="py-5 dark:hidden border-none"
                  src={
                    YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM.IMG.SRC
                  }
                  alt={
                    YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM.IMG.ALT
                  }
                />
                <img
                  className="py-5 hidden dark:block"
                  src={
                    YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM_DARK.IMG
                      .SRC
                  }
                  alt={
                    YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.DESIGN_SYSTEM_DARK.IMG
                      .ALT
                  }
                />
              </InsetBlockInside>
              <VerticalConnector />
              <ProjectDescriptionCard
                icon={<RulerDimensionLine />}
                title={YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.TITLE}
                description={YUMPICK_PROJECT.DESIGN_PROCESS.STEP2.DESCRIPTION}
              />
              <div className="border-t mt-10 pb-10 lg:mt-16 lg:pb-16 border-dashed"></div>

              {/* Step 3 */}
              <InsetBlockInside>
                <img
                  className="pb-5"
                  src={YUMPICK_PROJECT.DESIGN_PROCESS.STEP3.HI_FI.IMG.SRC}
                  alt={YUMPICK_PROJECT.DESIGN_PROCESS.STEP3.HI_FI.IMG.ALT}
                />
                <div className="border-t mt-10 pb-10 border-dashed"></div>
                <video
                  src={YUMPICK_PROJECT.DESIGN_PROCESS.STEP3.PROTOTYPE.VIDEO.SRC}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-[49px] max-w-[18rem] mx-auto"
                />
              </InsetBlockInside>
              <VerticalConnector />
              <ProjectDescriptionCard
                icon={<Pointer />}
                title={YUMPICK_PROJECT.DESIGN_PROCESS.STEP3.TITLE}
                description={YUMPICK_PROJECT.DESIGN_PROCESS.STEP3.DESCRIPTION}
              />
            </section>

            <section
              id="reflection"
              className="relative mt-10 pt-10 lg:mt-16 lg:pt-16"
            >
              <Reflection
                title={YUMPICK_PROJECT.REFLECTION.TITLE}
                description={YUMPICK_PROJECT.REFLECTION.DESCRIPTION}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
