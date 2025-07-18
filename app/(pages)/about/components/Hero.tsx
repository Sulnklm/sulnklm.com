import { InsetBlock } from "@/components/InsetBlock";
import { InsetBlockInside } from "@/components/InsetBlockInside";
import React from "react";
import { ABOUT_CONST, EXPERIENCE_CONST } from "../const";
import { SparklesText } from "@/components/SparklesText/SparklesText";
import { MouseTag } from "@/components/MouseTag/MouseTag";
import { GridPatternDashed } from "@/components/DashedStroke/DashedStroke";
import { SubTextBox } from "@/components/SubTextBox/SubTextBox";
import { MessageCircleHeart, ScrollText } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { EXTERNAL_LINKS } from "@/lib/const";

export default function Hero() {
  return (
    <div className="relative z-50 mt-20 bg-white/30 text-grey_scale_800 dark:bg-primary container mx-auto rounded-[30px] border border-dashed py-20 mb-5">
      <div className="relative">
        <div className="relative mb-10 z-10 grid xl:grid-cols-[auto,1fr] items-center gap-10 xl:gap-16 px-2 h-full">
          <div className="grid h-fit gap-12 justify-center">
            <div className="w-fit grid ">
              <div className="flex items-end pl-2">
                <img
                  src={ABOUT_CONST.HERO.IMAGE1.SRC}
                  alt={ABOUT_CONST.HERO.IMAGE1.ALT}
                  className="bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[40vw] sm:max-w-[13rem] h-auto rounded-xl object-cover p-1 -rotate-6 translate-x-5"
                />
                <img
                  src={ABOUT_CONST.HERO.IMAGE2.SRC}
                  alt={ABOUT_CONST.HERO.IMAGE2.ALT}
                  className="bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[40vw] sm:max-w-[14rem] h-auto rounded-xl object-cover p-1 rotate-3"
                />
              </div>
              <MouseTag
                label="Hey, it's me again! :)"
                bgClass="bg-indigo-500"
                arrowClass="fill-indigo-500"
                arrowPosition="left"
                additionalClassName="translate-x-[12rem] mt-5"
              />
            </div>
          </div>
          <div className="h-full flex flex-col">
            <div className="bg-white/30 dark:bg-primary pt-5 md:pt-8 px-7 md:px-10 pb-8 md:pb-10 rounded-xl border">
              <SubTextBox
                icon={
                  <MessageCircleHeart
                    size={17}
                    className="text-orange-400"
                    strokeWidth={1.5}
                  />
                }
              >
                {ABOUT_CONST.MY_STORY.SUBTEXT}
              </SubTextBox>
              <div className="border-b pb-5 border-dashed pt-1">
                <h3 className="mb-3 font-PerfectlyNineties tracking-normal">
                  {ABOUT_CONST.MY_STORY.TITLE1}
                </h3>
                <p className="">{ABOUT_CONST.MY_STORY.PARAGRAPH1}</p>
              </div>
              <div className="pt-5">
                <h3 className="mb-3 font-PerfectlyNineties tracking-normal">
                  {ABOUT_CONST.MY_STORY.TITLE2}
                </h3>
                <p className="">{ABOUT_CONST.MY_STORY.PARAGRAPH2}</p>
              </div>
            </div>
            <div className="sticky bottom-0">
              <Button
                href={EXTERNAL_LINKS.RESUME.href}
                theme="primary"
                icon={<ScrollText size={16} className="ml-2" />}
                additionalClasses="!py-2.5 !px-3.5 text-sm rounded-[11px] mt-5 w-fit"
              >
                {EXTERNAL_LINKS.RESUME.label}
              </Button>
            </div>
          </div>
        </div>
        <InsetBlockInside>
          <div className="-m-10 -mx-14"></div>
        </InsetBlockInside>
      </div>
    </div>
  );
}
