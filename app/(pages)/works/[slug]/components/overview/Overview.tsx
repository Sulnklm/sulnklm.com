"use client";
import { useState, useEffect } from "react";
import { Safari } from "@/components/ui/SafariMode/SafariMode";
import type { ProjectType } from "../../../types";
import { Button } from "@/components/Button/Button";
import { Clock, ExternalLink, GithubIcon, Table2, Tags } from "lucide-react";
import { ToolImage } from "@/components/ui/ToolImage";
import { Ruler } from "@/components/ui/ruler/Ruler";
import { CornerBoxes } from "@/components/CornerBoxes/CornerBoxes";
import { PROJECT_DETAILS_CONST } from "../const";
import { IconCard } from "@/components/IconCard/IconCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
      setIsRotated(scrollY > triggerPoint);  // 스크롤이 위/아래로 움직일 때마다 상태 갱신!
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  return (
    <section className="relative md:border-x mx-auto border-dashed md:max-w-[90vw] 2xl:max-w-[80vw]">
      <CornerBoxes overrideBottom={{ 1: "bottom-0", 3: "bottom-0" }} />
      <Ruler height={height} left />
      <Ruler height={height} left={false} />
      <div className="relative mt-[15vh] mx-auto place-items-center px-5 ">
        <div className="pt-[7vh] max-w-[55rem] grid gap-5 justify-center items-center">
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
            className="text-5xl lg:text-7xl text-grey_scale_1000"
          >
            {project.SUBTITLE}
          </motion.h1>

          {/* 3. OVERVIEW */}
          <motion.h5
            variants={appearUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-center max-w-[45rem] mx-auto"
          >
            {project.OVERVIEW}
          </motion.h5>

          {/* 4. 버튼 */}
          {project.GITHUB_LINK && project.LIVE_LINK && (
            <motion.div
              variants={appearUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex gap-3 mx-auto"
            >
              <Button
                href={project.GITHUB_LINK.HREF}
                theme="primary"
                icon={<GithubIcon size={16} className="ml-2" />}
                additionalClasses="!py-2.5 !px-3.5 text-sm rounded-[11px]"
              >
                {project.GITHUB_LINK.LABEL}
              </Button>
              <Button
                href={project.LIVE_LINK.HREF}
                theme="tertiary"
                icon={<ExternalLink size={16} className="ml-2" />}
                additionalClasses="!py-2.5 !px-3.5 text-sm rounded-full border"
              >
                {project.LIVE_LINK.LABEL}
              </Button>
            </motion.div>
          )}
        </div>

        {/* 5. vidro/image */}
        <motion.div
          variants={appearUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-20 w-full"
        >
          {isSafariMode ? (
            <Safari
              url={project.URL}
              videoSrc={project.VIDEO}
              imageSrc={project.SAFARI_IMAGE?.SRC}
              className="mx-auto drop-shadow-lg"
            />
          ) : (
            <img
              src={project.IMAGE.SRC}
              alt={project.IMAGE.ALT}
              className="max-w-[70rem] mx-auto"
            />
          )}
        </motion.div>
      </div>

      <div className="md:flex items-center container mt-20">
        <div
          className={`flex gap-3 lg:w-1/3 bg-primary border-b lg:border-b-0 lg:border-r dark:!border-grey_scale_1000/50 border-dashed rounded-3xl p-5 transition-transform duration-300 ${
            isRotated ? "md:-rotate-[6deg] md:translate-y-4 md:-translate-x-[3px] duration-500" : "rotate-0"
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
                  className="text-sm text-grey_scale_500 bg-white/10 px-1 rounded-lg"
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
