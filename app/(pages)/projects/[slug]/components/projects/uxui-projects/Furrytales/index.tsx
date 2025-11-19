"use client";
import { PROJECTS_CONST } from "@/(pages)/projects/const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/projects/types";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import TableOfContents from "@/components/ui/TableOfContents/TableOfContents";
import { ProjectDescriptionCard } from "@/components/ui/ProjectDescriptionCard/ProjectDescriptionCard";
import { FURRYTALES_PROJECT } from "./const";
import {
  AlarmClock,
  Dog,
  Drum,
  ListCheck,
  Scroll,
  ScrollText,
  Trophy,
  User,
  Utensils,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { AnimatedNotificationList } from "@/components/ui/Notification/Notification";
import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { IconCard } from "@/components/ui/IconCard/IconCard";

export default function FurryTales() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "furrytales"
  );
  if (!project) return <div>Project not found.</div>;

  return (
    <div>
      <Overview project={project} />
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 container space-y-10 lg:space-y-16 2xl:space-y-24">
        <div className="relative flex border-y py-10 lg:py-20">
          {/* <CornerBoxes overrideBottom={{ 1: "bottom-0", 3: "bottom-0" }} /> */}

          {/* <div className="hidden lg:block mr-8 min-w-[195px]">
            <TableOfContents
              sections={[
                { id: "event-overview", label: "Overview" },
                { id: "client-brief", label: "Client Brief" },
                { id: "brainstorming", label: "#1 Brainstorming" },
                { id: "challenges", label: "#2 UX Challenges" },
                { id: "design-process", label: "Design Process" },
                { id: "reflection", label: "Reflection" },
              ]}
            />
          </div> */}

          <div className="relative grid gap-20 container">
            <div className="hidden lg:block absolute top-0 -left-[5px] w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />
            <div className="hidden lg:block absolute bottom-0 -left-[5px] w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />

            <section id="event-overview">
              <SectionHeader
                subText={FURRYTALES_PROJECT.OVERVIEW.SUBTEXT}
                heading={FURRYTALES_PROJECT.OVERVIEW.HEADING}
                icon={
                  <Drum
                    size={16}
                    className="text-grey_scale_700"
                    strokeWidth={1.7}
                  />
                }
              />
              <ProjectDescriptionCard
                icon={<AlarmClock />}
                title={FURRYTALES_PROJECT.OVERVIEW.CARDHEADING}
                description={FURRYTALES_PROJECT.OVERVIEW.DESCRIPTION}
              />

              <div className="grid grid-cols-3 gap-3 mt-3">
                <img
                  src={FURRYTALES_PROJECT.OVERVIEW.IMG1.SRC}
                  alt={FURRYTALES_PROJECT.OVERVIEW.IMG1.ALT}
                  className="rounded-2xl col-span-2 w-full h-full object-cover"
                />
                <img
                  src={FURRYTALES_PROJECT.OVERVIEW.IMG2.SRC}
                  alt={FURRYTALES_PROJECT.OVERVIEW.IMG2.ALT}
                  className="rounded-2xl col-span-1 w-full h-full object-cover"
                />
              </div>
            </section>

            <section id="client-brief">
              <SectionHeader
                subText={FURRYTALES_PROJECT.OUR_CLIENT.SUBTEXT}
                heading={FURRYTALES_PROJECT.OUR_CLIENT.HEADING}
                icon={
                  <User
                    size={16}
                    className="text-grey_scale_700"
                    strokeWidth={1.7}
                  />
                }
              />
              <ProjectDescriptionCard
                icon={<Dog />}
                title={FURRYTALES_PROJECT.OUR_CLIENT.CARDHEADING}
                description={FURRYTALES_PROJECT.OUR_CLIENT.DESCRIPTION}
              />

              <div className="grid grid-cols-2 gap-3 mt-3">
                <img
                  src={FURRYTALES_PROJECT.OUR_CLIENT.IMG2.SRC}
                  alt={FURRYTALES_PROJECT.OUR_CLIENT.IMG2.ALT}
                  className="rounded-2xl col-span-1 w-full h-full object-cover"
                />
                <img
                  src={FURRYTALES_PROJECT.OUR_CLIENT.IMG1.SRC}
                  alt={FURRYTALES_PROJECT.OUR_CLIENT.IMG1.ALT}
                  className="rounded-2xl col-span-1 w-full h-full object-cover"
                />
              </div>
            </section>

            <section id="brainstorming">
              <SectionHeader
                subText={FURRYTALES_PROJECT.BRAINSTORMING.SUBTEXT}
                heading={FURRYTALES_PROJECT.BRAINSTORMING.HEADING}
                icon={
                  <User
                    size={16}
                    className="text-grey_scale_700"
                    strokeWidth={1.7}
                  />
                }
              />

              <ProjectDescriptionCard
                icon={<ScrollText />}
                title={FURRYTALES_PROJECT.BRAINSTORMING.CARDHEADING}
                description={FURRYTALES_PROJECT.BRAINSTORMING.DESCRIPTION}
              />

              <div className="grid lg:grid-cols-2 gap-8 mt-10">
                <div className="col-span-1">
                  <AnimatedNotificationList
                    notifications={FURRYTALES_PROJECT.CLIENT_REQUESTS}
                  />
                </div>
                <img
                  src={FURRYTALES_PROJECT.BRAINSTORMING.IMG.SRC}
                  alt={FURRYTALES_PROJECT.BRAINSTORMING.IMG.ALT}
                  className="rounded-2xl col-span-1 h-auto w-full"
                />
              </div>
            </section>

            <section id="challenges">
              <SectionHeader
                subText={FURRYTALES_PROJECT.CHALLENGES.SUBTEXT}
                heading={FURRYTALES_PROJECT.CHALLENGES.HEADING}
                icon={
                  <User
                    size={16}
                    className="text-grey_scale_700"
                    strokeWidth={1.7}
                  />
                }
              />

              <InsetBlockInside>
                <p className="mb-6">
                  {FURRYTALES_PROJECT.CURRENT_CHALLENGES.DESCRIPTION}
                </p>
                <div className="grid grid-cols-3 gap-3 mt-3">
                <img
                  src={FURRYTALES_PROJECT.OUR_CLIENT.IMG2.SRC}
                  alt={FURRYTALES_PROJECT.OUR_CLIENT.IMG2.ALT}
                  className="rounded-2xl col-span-1 w-full h-full object-cover"
                />
                <img
                  src={FURRYTALES_PROJECT.OUR_CLIENT.IMG1.SRC}
                  alt={FURRYTALES_PROJECT.OUR_CLIENT.IMG1.ALT}
                  className="rounded-2xl col-span-1 w-full h-full object-cover"
                />
                <img
                  src={FURRYTALES_PROJECT.OUR_CLIENT.IMG2.SRC}
                  alt={FURRYTALES_PROJECT.OUR_CLIENT.IMG2.ALT}
                  className="rounded-2xl col-span-1 w-full h-full object-cover"
                />
              </div>
                <div className="grid gap-6">
                  <div>
                    <h4 className="mb-3.5">
                      {FURRYTALES_PROJECT.CURRENT_CHALLENGES[1].TITLE}
                    </h4>
                    <p>
                      {FURRYTALES_PROJECT.CURRENT_CHALLENGES[1].DESCRIPTION}
                    </p>
                  </div>
                  <div className="border-y border-dashed py-8">
                    <h4 className="mb-3.5">
                      {FURRYTALES_PROJECT.CURRENT_CHALLENGES[2].TITLE}
                    </h4>
                    <p>
                      {FURRYTALES_PROJECT.CURRENT_CHALLENGES[2].DESCRIPTION}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3.5">
                      {FURRYTALES_PROJECT.CURRENT_CHALLENGES[3].TITLE}
                    </h4>
                    <p>
                      {FURRYTALES_PROJECT.CURRENT_CHALLENGES[3].DESCRIPTION}
                    </p>
                  </div>
                </div>
              </InsetBlockInside>

              
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
