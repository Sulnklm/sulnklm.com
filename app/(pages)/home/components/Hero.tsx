"use client";
import React from "react";
import { ArrowRight, CheckIcon, MapPin } from "lucide-react";
import WavyImage from "@/components/animation/WavyImage";
import { DotBackground } from "@/components/DotBackground";
import { Button } from "@/components/Button/Button";
import { ToolIcon } from "@/components/ToolIcon/ToolIcon";
import { useVancouverTime } from "@/hooks/useVancouverTime";
import { EXTERNAL_LINKS, TECH_STACK } from "@/lib/const";
import { HOME_HERO_CONST } from "../const";
import { InsetBlock } from "@/components/InsetBlock";
import { SubTextBox } from "@/components/SubTextBox/SubTextBox";
import { FlipWords } from "@/components/FlipWords/FlipWords";

export default function Hero() {
  const time = useVancouverTime();

  const actions = [
    {
      href: EXTERNAL_LINKS.GITHUB.href,
      theme: "primary" as const,
      label: EXTERNAL_LINKS.GITHUB.label,
      icon: null,
      extraClasses: "dark:px-8",
    },
    {
      href: EXTERNAL_LINKS.LINKEDIN.href,
      theme: "secondary" as const,
      label: EXTERNAL_LINKS.LINKEDIN.label,
      icon: <ArrowRight size={16} />,
      extraClasses: "",
    },
  ];

  const titleParts = [
    { text: HOME_HERO_CONST.TITLE.PART1 },
    { text: HOME_HERO_CONST.TITLE.PART2 },
    { text: HOME_HERO_CONST.TITLE.PART3, highlighted: true },
    { text: HOME_HERO_CONST.TITLE.PART4 },
    { text: HOME_HERO_CONST.TITLE.PART5, highlighted: true },
    { text: HOME_HERO_CONST.TITLE.PART6, highlighted: true },
    { text: HOME_HERO_CONST.TITLE.PART7, highlighted: true },
  ];

  return (
    <section className="md:mt-0 h-[60vh] md:h-screen bg-background dark:bg-primary px-5 border-b !border-b-grey_scale_500/40 dark:!border-b-grey_scale_900 border-dashed">
      <div className="absolute inset-0 z-0">
        <DotBackground />
      </div>

      <div className="relative z-[100] container mx-auto flex flex-col items-center justify-center gap-5 h-full text-center mt-5 md:-mt-10">
        {/* 3.1) TITLE */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 md:gap-4">
            {titleParts.slice(0, 3).map((p, i) => (
              <React.Fragment key={i}>
                <h1
                  className={`text-center font-[450] ${
                    p.highlighted
                      ? "text-grey_scale_900  dark:text-grey_scale_100 font-Playfair italic"
                      : "text-grey_scale_700 dark:text-grey_scale_800"
                  }`}
                >
                  {p.text}
                </h1>

                {/* headshot */}
                {i === 1 && (
                  <WavyImage
                    src={HOME_HERO_CONST.HEADSHOT.SRC}
                    alt={HOME_HERO_CONST.HEADSHOT.ALT}
                    width={300}
                    height={300}
                    delay={0.5}
                    className="relative object-cover min-w-[60px] max-w-16 md:max-w-20 lg:max-w-24 w-full h-auto hover:rotate-6 duration-300 shadow-brBothDark dark:border-grey_scale_900 dark:border p-0.5 rounded-3xl -translate-y-6 md:-translate-y-0 md:mx-3"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-2 md:gap-4 -mt-4 md:-mt-0 -mb-1 md:mb-0">
            {titleParts.slice(3).map((p, i) => (
              <h1
                key={i}
                className={`text-center font-[450] text-nowrap ${
                  p.highlighted
                    ? "text-grey_scale_900 dark:text-grey_scale_100"
                    : "text-grey_scale_700 dark:text-grey_scale_800"
                }`}
              >
                {p.text}
              </h1>
            ))}
          </div>
        </div>

        {/* 3.2) DESCRIPTION */}

        <SubTextBox
          icon={
            <CheckIcon size={18} className="text-orange-400" strokeWidth={2}/>
          }
        >
          {HOME_HERO_CONST.DESCRIPTION.DESCRIPTION1}
        </SubTextBox>
        

        {/* 3.3) ACTIONS */}
        <div className="scale-90 md:scale-100 flex gap-3.5 dark:gap-1 md:gap-4 md:dark:gap-2 -mt-3 md:mt-0">
          {actions.map((act, i) => (
            <Button
              key={i}
              href={act.href}
              theme={act.theme}
              icon={act.icon || undefined}
              additionalClasses={act.extraClasses}
            >
              {act.label}
            </Button>
          ))}
        </div>

        {/* 3.4) TECH STACK */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-grey_scale_500 dark:text-grey_scale_700">
          {Object.entries(TECH_STACK).map(([category, tools]) => (
            <div
              key={category}
              className="flex items-center justify-center gap-10 mt-3"
            >
              {tools.map((tool, idx) => (
                <React.Fragment key={tool.label}>
                  <ToolIcon iconSrc={tool.iconSrc} label={tool.label} />
                  {category === "DESIGN" && idx === tools.length - 1 && (
                    <Button href={EXTERNAL_LINKS.LINKEDIN.href}>
                      More
                      <span className="group-hover:translate-x-1 duration-300">
                        <ArrowRight size={17} />
                      </span>
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
