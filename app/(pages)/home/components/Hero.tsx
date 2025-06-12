"use client";
type Props = {};
import { HOME_HERO_CONST } from "../const";
import WavyText from "@/components/animation/WavyText";
import WavyImage from "@/components/animation/WavyImage";
import { GridBackground } from "@/components/GridBackground";
import { Button } from "@/components/Button";
import { EXTERNAL_LINKS } from "@/lib/const";
import { ArrowRight } from "lucide-react";
import { useVancouverTime } from "@/hooks/useVancouverTime";
import { ToolIcon } from "@/components/ToolIcon/ToolIcon";
import { TECH_STACK } from "@/lib/const";
import React from "react";
export default function Hero() {
  const time = useVancouverTime();

  return (
    <section className="relative h-screen bg-white dark:bg-primary">
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-5 h-full text-center -mt-10">
        <WavyImage
          src={HOME_HERO_CONST.HEADSHOT.SRC}
          alt={HOME_HERO_CONST.HEADSHOT.ALT}
          width={300}
          height={300}
          delay={1.4}
          className="relative object-cover w-40 h-40 hover:rotate-6 duration-300"
        />
        <div className="dark:hidden flex flex-col items-center">
          <div className="flex gap-5">
            <h1 className="text-gradient text-center">
              {HOME_HERO_CONST.TITLE.PART1}
            </h1>
            <WavyText
              text="creative"
              replay={true}
              className="text-gradient inline-block font-Schoolbell font-[400]"
            />
          </div>
          <h1 className="text-gradient text-center p-1">
            {HOME_HERO_CONST.TITLE.PART3}
          </h1>
        </div>

        <div className="hidden dark:flex flex-col items-center">
          <div className="flex gap-5">
            <h1 className="text-gradient-dark text-center">
              {HOME_HERO_CONST.TITLE.PART1}
            </h1>
            <WavyText
              text="creative"
              replay={true}
              className="text-gradient-dark inline-block font-Schoolbell font-[400]"
            />
          </div>
          <h1 className="text-gradient-dark text-center p-1">
            {HOME_HERO_CONST.TITLE.PART3}
          </h1>
        </div>
        <p className="text-grey_scale_700 dark:text-grey_scale_500 max-w-2xl">
          {HOME_HERO_CONST.DESCRIPTION.DESCRIPTION1} <br />
          {HOME_HERO_CONST.DESCRIPTION.DESCRIPTION2}
        </p>
        <div className="flex gap-4 mt-8">
          <Button href={EXTERNAL_LINKS.GITHUB.href} theme="primary">
            {EXTERNAL_LINKS.GITHUB.label}
          </Button>
          <Button
            href={EXTERNAL_LINKS.LINKEDIN.href}
            theme="secondary"
            icon={<ArrowRight size={16} />}
          >
            {EXTERNAL_LINKS.LINKEDIN.label}
          </Button>
        </div>
      </div>

      {Object.entries(TECH_STACK).map(([category, tools]) => (
        <div
          key={category}
          className="flex items-center justify-center gap-10 mt-5"
        >
          {tools.map((tool, i) => (
            <React.Fragment key={tool.label}>
              <ToolIcon iconSrc={tool.iconSrc} label={tool.label} />
              {category === "DESIGN" && i === tools.length - 1 && (
                <span className="text-grey_scale_500 text-base">+ More</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}
