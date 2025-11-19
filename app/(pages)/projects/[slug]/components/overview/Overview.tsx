"use client";
import { useState, useEffect } from "react";
import { Safari } from "@/components/ui/SafariMode/SafariMode";
import type { ProjectType } from "../../../types";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ExternalLink,
  Figma,
  GithubIcon,
  Link,
} from "lucide-react";
import { ToolImage } from "@/components/ui/ToolImage";
import { Ruler } from "@/components/ui/ruler/Ruler";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import { PROJECT_DETAILS_CONST } from "../const";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/Button/Button";
import { Arrow } from "@radix-ui/react-tooltip";

interface OverviewProps {
  project: ProjectType;
}

export default function Overview({ project }: OverviewProps) {
  const [isRotated, setIsRotated] = useState(false);

  const isSafariMode = project.SHOW_SAFARI === true;
  const height = 800;
  const appearUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.19, 1, 0.22, 1],
        delay: 0.08 * i,
      },
    }),
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 600;
      setIsRotated(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative lg:border-x mx-auto border-dashed md:max-w-[90vw] 2xl:max-w-[85vw] overflow-hidden sm:overflow-visible">
      <div className="hidden lg:block">
        <CornerBoxes overrideBottom={{ 1: "bottom-0", 3: "bottom-0" }} />
        <Ruler height={height} left />
        <Ruler height={height} left={false} />
      </div>
      <div className="relative mt-[14vh] !mx-auto place-items-center">
        <div className="ml-10 lg:ml-20 w-full">
          <Button href="/projects">
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 duration-300">
              <ChevronLeft className="opacity-70" size={16} />
              <h5 className="z-10 font-[350]">{"Projects"}</h5>
            </div>
          </Button>
        </div>
        <div className="pt-[5vh] max-w-[57rem] grid gap-5 justify-center items-center mx-auto">
          {/* 1. TOOLS */}
          {project.TOOLS && project.TOOLS.length > 0 && (
            <motion.div
              variants={appearUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex flex-wrap -space-x-2 mx-auto"
            >
              {project.TOOLS.map((tool) => (
                <ToolImage
                  key={tool.name}
                  src={tool.src}
                  alt={tool.name}
                  size={28}
                />
              ))}
            </motion.div>
          )}

          {/* 2. TITLE */}
          <motion.h1
            variants={appearUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-3xl md:text-4xl md:max-w-[70vw] lg:max-w-2xl lg:text-4xl text-grey_scale_1000 !leading-[1.4] font-[400] mb-2"
          >
            {project.SUBTITLE}
          </motion.h1>

          {/* 3. OVERVIEW */}
          {project.OVERVIEW && (
            <motion.h5
              variants={appearUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-center max-w-[45rem] mx-auto mt-1 !leading-[1.6] mb-5"
            >
              {project.OVERVIEW}
            </motion.h5>
          )}

          {/* 4. btn */}
          {(project.FIGMA_LINK || project.GITHUB_LINK || project.LIVE_LINK) && (
            <motion.div
              variants={appearUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex gap-3 mx-auto my-4"
            >
              {project.GITHUB_LINK && (
                <Button
                  href={project.GITHUB_LINK.HREF}
                  theme="tertiary"
                  icon={<GithubIcon size={16} className="ml-2" />}
                  additionalClasses="!py-2.5 !px-3.5 text-sm border rounded-full"
                >
                  {project.GITHUB_LINK.LABEL}
                </Button>
              )}
              {project.FIGMA_LINK && (
                <Button
                  href={project.FIGMA_LINK.HREF}
                  theme="primary"
                  icon={<Figma size={16} className="ml-2" />}
                  additionalClasses="!py-2.5 !px-3.5 text-sm"
                >
                  {project.FIGMA_LINK.LABEL}
                </Button>
              )}

              {project.LIVE_LINK && (
                <Button
                  href={project.LIVE_LINK.HREF}
                  theme="primary"
                  icon={<ExternalLink size={16} className="ml-2" />}
                  additionalClasses="!py-2.5 !px-3.5 text-sm"
                >
                  {project.LIVE_LINK.LABEL}
                </Button>
              )}
            </motion.div>
          )}
          <div className="flex flex-wrap gap-10 lg:gap-20 lg:justify-center border-t border-dashed pt-10">
            <div>
              <h4 className=""> {PROJECT_DETAILS_CONST.PROJECT_ROLE_HEADER}</h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {/* {project.PROJECT_TYPE?.map((type, index) => ( */}
                <p className="text-base text-grey_scale_800 px-1 rounded-md">
                  {project.ROLE}
                </p>
                {/* ))} */}
              </div>
            </div>
            <div className="">
              <h4 className="">{PROJECT_DETAILS_CONST.TIMELINE_HEADER}</h4>
              <h5 className="text-base text-grey_scale_800 mt-3">
                {project.TIMELINE}
              </h5>
            </div>
            <div className="">
              <h4 className="">{PROJECT_DETAILS_CONST.PLATFORM_HEADER}</h4>
              <h5 className="text-base text-grey_scale_800 mt-3">
                {project.PLATFORM}
              </h5>
            </div>
          </div>
        </div>

        {/* 5. video/image */}
        <motion.div
          variants={appearUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-10 lg:mt-20 w-full"
        >
          {isSafariMode ? (
            <>
              {/* mobile: just video */}
              <video
                src={project.VIDEO}
                className="w-full h-auto rounded-[25px] mx-auto block md:hidden"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* descktop: Safari */}
              <div className="hidden md:block">
                <Safari
                  url={project.URL}
                  videoSrc={project.VIDEO}
                  className="mx-auto drop-shadow-lg"
                />
              </div>
            </>
          ) : (
            <img
              src={project.IMAGE.SRC}
              alt={project.IMAGE.ALT}
              className="xl:max-w-7xl mx-auto h-auto w-full rounded-xl"
            />
          )}
        </motion.div>
      </div>

      {/* <div className="md:flex items-center container max-w-[80rem] mt-10 lg:mt-20 px-5">
        <div
          className={`flex gap-3 lg:w-1/3 bg-primary border-b lg:border-b-0 lg:border-r dark:!border-grey_scale_1000/50 border-dashed rounded-3xl p-5 transition-transform duration-300 ${
            isRotated
              ? "md:-rotate-[6deg] md:translate-y-4 md:-translate-x-[3px] duration-500"
              : "rotate-0"
          }`}
        >
          <div>
            <IconCard>
              <Clock className="text-grey_scale_900" />
            </IconCard>
          </div>
          <div>
            <h4 className="text-background">
              {PROJECT_DETAILS_CONST.TIMELINE_HEADER}
            </h4>
            <h5 className="text-sm text-grey_scale_500 mt-2">
              {project.TIMELINE}
            </h5>
          </div>
        </div>
        <div className="flex gap-3 lg:w-2/3 bg-primary rounded-3xl p-5">
          <div>
            <IconCard>
              <Tags className="text-grey_scale_900" />
            </IconCard>
          </div>
          <div>
            <h4 className="text-background">
              {PROJECT_DETAILS_CONST.PROJECT_TYPE_HEADER}
            </h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.PROJECT_TYPE?.map((type, index) => (
                <p
                  key={index}
                  className="text-sm text-grey_scale_500 bg-white/[7%] px-1 rounded-md"
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
