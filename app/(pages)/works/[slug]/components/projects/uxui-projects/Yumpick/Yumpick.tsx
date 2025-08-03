"use client";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import { YUMPICK_FEATURES, YUMPICK_PROJECT } from "./const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/works/types";
import { Reflection } from "../../../Reflection/Reflection";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { KeyFeatures } from "../../../overview/KeyFeatures/KeyFeatures";
import { Book, CalendarCheck, Layers, MapPinned, Star, Telescope, Utensils } from "lucide-react";

export default function Yumpick() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "yumpick"
  );
  if (!project) return <div>Project not found.</div>;
  const iconMap = {
    mapPin: MapPinned,
    telescope: Telescope,
    utensils: Utensils,
    calendarCheck: CalendarCheck
  };

  return (
    <div>
      <Overview project={project} />
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container space-y-10 lg:space-y-24">
        {/* Key Features */}
        <section>
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
        {/* Process */}
        <section className="container"></section>

        <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container">
          <Reflection reflection={YUMPICK_PROJECT.REFLECTION} />
        </div>
      </div>
    </div>
  );
}
