"use client";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import { YUMPICK_FEATURES, YUMPICK_PROJECT } from "./const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/works/types";
import { Reflection } from "../../../Reflection/Reflection";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import {
  Book,
  CalendarCheck,
  Layers,
  Lightbulb,
  ListChecks,
  MapPinned,
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

  const userInterview = [
    {
      name: "Beli user",
      description:
        "Beli almost has a social media aspect to their app, which makes finding restaurants much more enjoyable.",
      time: "10m ago",
      icon: "👱🏻‍♂️",
      color: "#F76239",
    },
    {
      name: "Yelp user",
      description:
        "I use Yelp because I like to see what people eat and what they have through pictures",
      time: "5m ago",
      icon: "👩🏽‍🦱",
      color: "#F76239",
    },
    {
      name: "Instagram user",
      description: "Instagram is good to find out hot places",
      time: "15m ago",
      icon: "👩🏻",
      color: "#F76239",
    },
  ];

  const competitorAnalysis = [
    {
      name: "OpenTable user",
      description:
        "Their homepage lists 80 restaurants across eight categories and it feels endless. I get overwhelmed scrolling through all the options, and it’s frustrating trying to pinpoint the right place.",
      time: "5m ago",
      icon: "🧔🏽‍♂️",
      color: "#F76239",
    },
    {
      name: "Instagram user",
      description:
        "It’s great to discover trendy restaurants through high-quality photos and videos, but in the end, I have to use other apps to find the detailed information.",
      time: "15m ago",
      icon: "🧑🏻‍🦱",
      color: "#F76239",
    },
    {
      name: "Google Maps user",
      description:
        "I use it all the time, but I don’t think of it as a place for menus. It’s often hard to find accurate prices or allergy info, and since the menus rely on user-uploaded photos, they can be outdated or misleading.",
      time: "10m ago",
      icon: "👱🏻‍♀️",
      color: "#F76239",
    },
  ];

  const appData = [
    { label: "Instagram", value: 14 },
    { label: "Google Maps", value: 10 },
    { label: "OpenTable", value: 5 },
    { label: "Yelp", value: 4 },
    { label: "Beli", value: 1 },
    { label: "TikTok", value: 1 },
    { label: "Other", value: 1 },
  ];

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

          <div className="hidden lg:block mr-8 min-w-[180px]">
            <TableOfContents
              sections={[
                { id: "quick-preview", label: "Quick Preview" },
                { id: "background", label: "Background" },
                { id: "user-research", label: "User Research" },
                { id: "competitor-analysis", label: "Competitor Analysis" },
                { id: "defining", label: "Defining" },
                { id: "reflection", label: "Reflection" },
              ]}
            />
          </div>
          <div className="lg:border-l border-dashed space-y-20">
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
              <div className="container">
                <InsetBlockInside>
                  <div className="py-10">
                    <BarChart
                      data={appData}
                      title={
                        YUMPICK_PROJECT.USER_RESEARCH.USER_SURVEY
                          .SURVEY1_HEADING
                      }
                    />
                    <div className="border-t mt-14 pb-14 border-dashed"></div>
                    <AnimatedNotificationList notifications={userInterview} />
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
              <div className="container">
                <InsetBlockInside>
                  <div className="pb-10">
                    <img
                      src={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.IMG.SRC}
                      alt={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.IMG.ALT}
                    />
                    <div className="border-t mt-3 pb-14 border-dashed"></div>
                    <AnimatedNotificationList
                      notifications={competitorAnalysis}
                    />
                  </div>
                </InsetBlockInside>
                <VerticalConnector />
                <ProjectDescriptionCard
                  icon={<UtensilsCrossed />}
                  title={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.TITLE}
                  description={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION}
                />
              </div>
            </section>

            <section id="defining">
              <Defining
                heading={YUMPICK_PROJECT.DEFINING.HEADING}
                title={YUMPICK_PROJECT.BACKGROUND.TITLE}
                description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
              />
              <div className="container">
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
              </div>
            </section>

            <section
              id="reflection"
              className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container"
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
