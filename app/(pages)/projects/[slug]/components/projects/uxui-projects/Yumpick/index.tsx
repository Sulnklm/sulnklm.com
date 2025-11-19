"use client";
import { PROJECTS_CONST } from "@/(pages)/projects/const";
import { APP_DATA, USER_INTERVIEW_SURVEY, YUMPICK_PROJECT } from "./const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/projects/types";
import { Binoculars, PencilRuler, Search, Utensils } from "lucide-react";
import { AnimatedNotificationList } from "@/components/ui/Notification/Notification";
import { BarChart } from "@/components/ui/Chart/BarChart";
import PrimarySection from "@/components/ui/Section/PrimarySection";
import TextCard from "@/components/ui/TextCard/TextCard";
import PrevNextProjects from "@/components/ui/PrevNextProjects/PrevNextProjects";
import { CaseStudyIntro } from "@/components/ui/CaseStudyIntro/CaseStudyIntro";

export default function Yumpick() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "yumpick"
  );
  if (!project) return <div>Project not found.</div>;

  return (
    <div className="px-5">
      <Overview project={project} />
      <div className="relative mt-10 pt-10 lg:mt-16 lg:pt-16 2xl:container space-y-10 lg:space-y-16 2xl:space-y-20">
        <div className="space-y-14">
          <section>
            <div className="mx-auto overflow-hidden space-y-10">
              <CaseStudyIntro
                problem={YUMPICK_PROJECT.THE_PROBLEM.DESCRIPTION}
                mission={YUMPICK_PROJECT.THE_MISSION.DESCRIPTION}
                lightImage={{
                  src: YUMPICK_PROJECT.GRID_IMAGE.SRC,
                  alt: YUMPICK_PROJECT.GRID_IMAGE.ALT,
                }}
                darkImage={{
                  src: YUMPICK_PROJECT.GRID_IMAGE_DARK.SRC,
                  alt: YUMPICK_PROJECT.GRID_IMAGE_DARK.ALT,
                }}
              />
            </div>
          </section>

          {/* Survey */}
          <section className="space-y-10 pt-14">
            <PrimarySection
              icon={
                <Search
                  size={16}
                  className="text-grey_scale_700"
                  strokeWidth={1.7}
                />
              }
              title={YUMPICK_PROJECT.BACKGROUND.TITLE}
              subtitle={YUMPICK_PROJECT.BACKGROUND.HEADING}
              description={YUMPICK_PROJECT.BACKGROUND.DESCRIPTION}
            />

            <div className="lg:container grid lg:flex gap-6 w-full">
              <div className="flex items-center w-full bg-gray-200/40 dark:bg-white/10 rounded-2xl lg:pr-10 py-10">
                <BarChart
                  data={APP_DATA}
                  title={
                    YUMPICK_PROJECT.USER_RESEARCH.USER_SURVEY.SURVEY1_HEADING
                  }
                />
              </div>
              <div className="flex w-full bg-gray-200/40  dark:bg-white/10 rounded-2xl p-3 lg:p-10">
                <AnimatedNotificationList
                  notifications={USER_INTERVIEW_SURVEY}
                />
              </div>
            </div>
          </section>

          {/* Competitor Analysis */}
          <section className="space-y-10 pt-14">
            <PrimarySection
              icon={
                <Binoculars
                  size={16}
                  className="text-grey_scale_700"
                  strokeWidth={1.7}
                />
              }
              title={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.TITLE}
              subtitle={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.SUBTITLE}
              description={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION}
              description2={YUMPICK_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION2}
            />
            {/* TextCards */}
            <div className="mt-8 grid gap-3 md:gap-6 md:grid-cols-3 lg:container">
              {YUMPICK_PROJECT.COMPETITOR_ANALYSIS.GOALS.map((goal, i) => (
                <TextCard
                  key={i}
                  eyebrow={goal.EYEBROW}
                  body={goal.BODY}
                  align="left"
                  size="md"
                />
              ))}
            </div>
          </section>

          {/* design foundation */}
          <section className="space-y-10 pt-14">
            <PrimarySection
              icon={
                <PencilRuler
                  size={16}
                  className="text-grey_scale_700"
                  strokeWidth={1.7}
                />
              }
              title={YUMPICK_PROJECT.APPROACH.TITLE}
              subtitle={YUMPICK_PROJECT.APPROACH.SUBTITLE}
            />
            {/* TextCards */}
            <div className="lg:container">
              <TextCard
                eyebrow={YUMPICK_PROJECT.APPROACH.CARD.EYEBROW}
                header={YUMPICK_PROJECT.APPROACH.CARD.HEADER}
                // eyebrowColorClass="text-primary dark:text-white"
                body={YUMPICK_PROJECT.APPROACH.CARD.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: YUMPICK_PROJECT.APPROACH.CARD.IMG.SRC,
                  alt: YUMPICK_PROJECT.APPROACH.CARD.IMG.ALT,
                }}
                mediaPosition="bottom"
              />

              <div className="my-8 grid gap-3 md:gap-6 md:grid-cols-2">
                {YUMPICK_PROJECT.APPROACH.CARDS.map((goal, i) => (
                  <TextCard
                    key={i}
                    eyebrow={goal.EYEBROW}
                    header={goal.HEADER}
                    // eyebrowColorClass="text-primary dark:text-white"
                    body={goal.BODY}
                    showDot={false}
                    align="left"
                    size="md"
                    media={{
                      type: "image",
                      src: goal.IMG.SRC,
                      alt: goal.IMG.ALT,
                    }}
                    mediaPosition="bottom"
                  />
                ))}
              </div>

              <TextCard
                eyebrow={YUMPICK_PROJECT.APPROACH.CARD2.EYEBROW}
                header={YUMPICK_PROJECT.APPROACH.CARD2.HEADER}
                // eyebrowColorClass="text-primary dark:text-white"
                body={YUMPICK_PROJECT.APPROACH.CARD2.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: YUMPICK_PROJECT.APPROACH.CARD2.IMG.SRC,
                  alt: YUMPICK_PROJECT.APPROACH.CARD2.IMG.ALT,
                }}
                mediaPosition="bottom"
              />
            </div>
          </section>

          {/* solutions */}
          <section className="space-y-10 pt-14">
            <PrimarySection
              icon={
                <PencilRuler
                  size={16}
                  className="text-grey_scale_700"
                  strokeWidth={1.7}
                />
              }
              title={YUMPICK_PROJECT.SOLUTIONS.TITLE}
              subtitle={YUMPICK_PROJECT.SOLUTIONS.SUBTITLE}
              // visuals={YUMPICK_PROJECT.SOLUTIONS.visuals}
            />
            {/* TextCards */}
            <div className="lg:container">
              {/* Top card */}
              <TextCard
                eyebrow={YUMPICK_PROJECT.SOLUTIONS.CARD.EYEBROW}
                header={YUMPICK_PROJECT.SOLUTIONS.CARD.HEADER}
                body={YUMPICK_PROJECT.SOLUTIONS.CARD.BODY}
                showDot={false}
                mediaPosition={{ base: "bottom", xl: "right" }}
                media={[
                  {
                    type: "image",
                    src: YUMPICK_PROJECT.SOLUTIONS.CARD.IMAGE.src,
                    alt: YUMPICK_PROJECT.SOLUTIONS.CARD.IMAGE.alt,
                    objectFit: "cover",
                    height: { base: 400, md: 428, lg: 445 },
                    containerWidth: { base: 190, md: 200, lg: 210 },
                    borderRadius: "rounded-3xl",
                  },
                  {
                    type: "video",
                    src: YUMPICK_PROJECT.SOLUTIONS.CARD.VIDEO.src,
                    containerWidth: { base: 180, md: 200, lg: 210 },
                    borderRadius: "rounded-3xl",
                    controls: true,
                    muted: true,
                    autoPlay: true,
                    loop: true,
                  },
                ]}
              />
              <div className="my-8 2xl:my-10">
                <TextCard
                  eyebrow={YUMPICK_PROJECT.SOLUTIONS.CARD3.EYEBROW}
                  header={YUMPICK_PROJECT.SOLUTIONS.CARD3.HEADER}
                  body={YUMPICK_PROJECT.SOLUTIONS.CARD3.BODY}
                  showDot={false}
                  mediaPosition={{ base: "bottom", xl: "left" }}
                  media={[
                    {
                      type: "image",
                      src: YUMPICK_PROJECT.SOLUTIONS.CARD3.IMAGE.src,
                      alt: YUMPICK_PROJECT.SOLUTIONS.CARD3.IMAGE.alt,
                      objectFit: "cover",
                      height: { base: 400, md: 428, lg: 445 },
                      containerWidth: { base: 190, md: 200, lg: 210 },
                      borderRadius: "rounded-3xl",
                    },
                    {
                      type: "video",
                      src: YUMPICK_PROJECT.SOLUTIONS.CARD3.VIDEO.src,
                      containerWidth: { base: 180, md: 200, lg: 210 },
                      borderRadius: "rounded-3xl",
                      controls: true,
                      muted: true,
                      autoPlay: true,
                      loop: true,
                    },
                  ]}
                />
              </div>
              {/* feedback - dark */}
              <TextCard
                className="hidden dark:block"
                header={YUMPICK_PROJECT.SOLUTIONS.CARD2.HEADER}
                eyebrow={YUMPICK_PROJECT.SOLUTIONS.CARD2.EYEBROW}
                body={YUMPICK_PROJECT.SOLUTIONS.CARD2.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: YUMPICK_PROJECT.SOLUTIONS.CARD2.IMG.DARK_SRC,
                  alt: YUMPICK_PROJECT.SOLUTIONS.CARD2.IMG.ALT,
                  className: "object-contain lg:mr-5",
                  containerWidth: { base: 460, md: 480 },
                }}
                mediaPosition={{ base: "bottom", lg: "right" }}
              />

              {/* feedback - light */}
              <TextCard
                className="dark:hidden"
                header={YUMPICK_PROJECT.SOLUTIONS.CARD2.HEADER}
                eyebrow={YUMPICK_PROJECT.SOLUTIONS.CARD2.EYEBROW}
                body={YUMPICK_PROJECT.SOLUTIONS.CARD2.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: YUMPICK_PROJECT.SOLUTIONS.CARD2.IMG.SRC,
                  alt: YUMPICK_PROJECT.SOLUTIONS.CARD2.IMG.ALT,
                  containerWidth: { base: 460, md: 480 },

                  className: "object-contain lg:mr-5",
                }}
                mediaPosition={{ base: "bottom", lg: "right" }}
              />
            </div>
          </section>
        </div>
        <section className="">
          <div className="py-20 mx-auto overflow-hidden">
            <PrimarySection
              icon={
                <Utensils
                  size={16}
                  className="text-grey_scale_700"
                  strokeWidth={1.7}
                />
              }
              title={YUMPICK_PROJECT.REFLECTION.TITLE}
              subtitle={YUMPICK_PROJECT.REFLECTION.SUBTEXT}
              description={YUMPICK_PROJECT.REFLECTION.DESCRIPTION}
              description2={YUMPICK_PROJECT.REFLECTION.DESCRIPTION2}
              visuals={YUMPICK_PROJECT.REFLECTION.visuals}
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
