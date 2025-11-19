"use client";
import { PROJECTS_CONST } from "@/(pages)/projects/const";
import { APP_DATA, USER_INTERVIEW_SURVEY, PIXEED_PROJECT } from "./const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/projects/types";
import { Binoculars, PencilRuler, Search, Utensils } from "lucide-react";
import { AnimatedNotificationList } from "@/components/ui/Notification/Notification";
import { BarChart } from "@/components/ui/Chart/BarChart";
import PrimarySection from "@/components/ui/Section/PrimarySection";
import TextCard from "@/components/ui/TextCard/TextCard";
import PrevNextProjects from "@/components/ui/PrevNextProjects/PrevNextProjects";
import { CaseStudyIntro } from "@/components/ui/CaseStudyIntro/CaseStudyIntro";

export default function Pixeed() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "pixeed"
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
                problem={PIXEED_PROJECT.THE_PROBLEM.DESCRIPTION}
                mission={PIXEED_PROJECT.THE_MISSION.DESCRIPTION}
                lightImage={{
                  src: PIXEED_PROJECT.GRID_IMAGE.SRC,
                  alt: PIXEED_PROJECT.GRID_IMAGE.ALT,
                }}
                darkImage={{
                  src: PIXEED_PROJECT.GRID_IMAGE_DARK.SRC,
                  alt: PIXEED_PROJECT.GRID_IMAGE_DARK.ALT,
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
              title={PIXEED_PROJECT.BACKGROUND.TITLE}
              subtitle={PIXEED_PROJECT.BACKGROUND.HEADING}
              description={PIXEED_PROJECT.BACKGROUND.DESCRIPTION}
            />

            <div className="lg:container grid lg:flex gap-6 w-full">
              <div className="flex items-center w-full bg-gray-200/40 dark:bg-white/10 rounded-2xl lg:pr-10 py-10">
                <BarChart
                  data={APP_DATA}
                  title={
                    PIXEED_PROJECT.USER_RESEARCH.USER_SURVEY.SURVEY1_HEADING
                  }
                />
              </div>
              <div className="w-full bg-gray-200/40  dark:bg-white/10 rounded-2xl p-3 lg:p-10">
                <img
                  src={PIXEED_PROJECT.BACKGROUND.IMG.SRC}
                  alt=""
                  className="rounded-3xl shadow-2xl mb-8"
                />

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
              title={PIXEED_PROJECT.COMPETITOR_ANALYSIS.TITLE}
              subtitle={PIXEED_PROJECT.COMPETITOR_ANALYSIS.SUBTITLE}
              description={PIXEED_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION}
              description2={PIXEED_PROJECT.COMPETITOR_ANALYSIS.DESCRIPTION2}
            />
            {/* TextCards */}
            <div className="mt-8 grid gap-3 md:gap-6 md:grid-cols-3 lg:container">
              {PIXEED_PROJECT.COMPETITOR_ANALYSIS.GOALS.map((goal, i) => (
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
              title={PIXEED_PROJECT.APPROACH.TITLE}
              subtitle={PIXEED_PROJECT.APPROACH.SUBTITLE}
            />
            {/* TextCards */}
            <div className="lg:container">
              <TextCard
                eyebrow={PIXEED_PROJECT.APPROACH.CARD.EYEBROW}
                eyebrowColorClass="text-primary dark:text-white"
                body={PIXEED_PROJECT.APPROACH.CARD.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: PIXEED_PROJECT.APPROACH.CARD.IMG.SRC,
                  alt: PIXEED_PROJECT.APPROACH.CARD.IMG.ALT,
                }}
                mediaPosition="bottom"
              />

              <div className="my-8 grid gap-3 md:gap-6 md:grid-cols-2">
                {PIXEED_PROJECT.APPROACH.CARDS.map((goal, i) => (
                  <TextCard
                    key={i}
                    eyebrow={goal.EYEBROW}
                    eyebrowColorClass="text-primary dark:text-white"
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
                eyebrow={PIXEED_PROJECT.APPROACH.CARD2.EYEBROW}
                eyebrowColorClass="text-primary dark:text-white"
                body={PIXEED_PROJECT.APPROACH.CARD2.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: PIXEED_PROJECT.APPROACH.CARD2.IMG.SRC,
                  alt: PIXEED_PROJECT.APPROACH.CARD2.IMG.ALT,
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
              title={PIXEED_PROJECT.SOLUTIONS.TITLE}
              subtitle={PIXEED_PROJECT.SOLUTIONS.SUBTITLE}
              // visuals={PIXEED_PROJECT.SOLUTIONS.visuals}
            />
            {/* TextCards */}
            <div className="lg:container">
              {/* Top card */}
              <TextCard
                eyebrow={PIXEED_PROJECT.SOLUTIONS.CARD.EYEBROW}
                header={PIXEED_PROJECT.SOLUTIONS.CARD.HEADER}
                body={PIXEED_PROJECT.SOLUTIONS.CARD.BODY}
                showDot={false}
                mediaPosition={{ base: "bottom", xl: "right" }}
                media={[
                  {
                    type: "image",
                    src: PIXEED_PROJECT.SOLUTIONS.CARD.IMAGE.src,
                    alt: PIXEED_PROJECT.SOLUTIONS.CARD.IMAGE.alt,
                    objectFit: "cover",
                    height: { base: 400, md: 428, lg: 445 },
                    containerWidth: { base: 190, md: 200, lg: 210 },
                    borderRadius: "rounded-3xl",
                  },
                  {
                    type: "video",
                    src: PIXEED_PROJECT.SOLUTIONS.CARD.VIDEO.src,
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
                  eyebrow={PIXEED_PROJECT.SOLUTIONS.CARD3.EYEBROW}
                  header={PIXEED_PROJECT.SOLUTIONS.CARD3.HEADER}
                  body={PIXEED_PROJECT.SOLUTIONS.CARD3.BODY}
                  showDot={false}
                  mediaPosition={{ base: "bottom", xl: "left" }}
                  media={[
                    {
                      type: "image",
                      src: PIXEED_PROJECT.SOLUTIONS.CARD3.IMAGE.src,
                      alt: PIXEED_PROJECT.SOLUTIONS.CARD3.IMAGE.alt,
                      objectFit: "cover",
                      height: { base: 400, md: 428, lg: 445 },
                      containerWidth: { base: 190, md: 200, lg: 210 },
                      borderRadius: "rounded-3xl",
                    },
                    {
                      type: "video",
                      src: PIXEED_PROJECT.SOLUTIONS.CARD3.VIDEO.src,
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
                header={PIXEED_PROJECT.SOLUTIONS.CARD2.HEADER}
                eyebrow={PIXEED_PROJECT.SOLUTIONS.CARD2.EYEBROW}
                body={PIXEED_PROJECT.SOLUTIONS.CARD2.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: PIXEED_PROJECT.SOLUTIONS.CARD2.IMG.DARK_SRC,
                  alt: PIXEED_PROJECT.SOLUTIONS.CARD2.IMG.ALT,
                  className: "object-contain lg:mr-5",
                  containerWidth: { base: 460, md: 480 },
                }}
                mediaPosition={{ base: "bottom", lg: "right" }}
              />

              {/* feedback - light */}
              <TextCard
                className="dark:hidden"
                header={PIXEED_PROJECT.SOLUTIONS.CARD2.HEADER}
                eyebrow={PIXEED_PROJECT.SOLUTIONS.CARD2.EYEBROW}
                body={PIXEED_PROJECT.SOLUTIONS.CARD2.BODY}
                showDot={false}
                align="left"
                size="md"
                media={{
                  type: "image",
                  src: PIXEED_PROJECT.SOLUTIONS.CARD2.IMG.SRC,
                  alt: PIXEED_PROJECT.SOLUTIONS.CARD2.IMG.ALT,
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
              title={PIXEED_PROJECT.REFLECTION.TITLE}
              subtitle={PIXEED_PROJECT.REFLECTION.SUBTEXT}
              description={PIXEED_PROJECT.REFLECTION.DESCRIPTION}
              description2={PIXEED_PROJECT.REFLECTION.DESCRIPTION2}
              visuals={PIXEED_PROJECT.REFLECTION.visuals}
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
