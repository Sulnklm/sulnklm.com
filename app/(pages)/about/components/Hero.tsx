import { InsetBlock } from "@/components/InsetBlock";
import { InsetBlockInside } from "@/components/InsetBlockInside";
import React from "react";
import { ABOUT_CONST } from "../const";
import { SparklesText } from "@/components/SparklesText/SparklesText";
import { MouseTag } from "@/components/MouseTag/MouseTag";
import { GridPatternDashed } from "@/components/DashedStroke/DashedStroke";

export default function Hero() {
  return (
    <div className="relative z-50 mt-20 bg-white/30 text-grey_scale_800 dark:bg-primary container mx-auto rounded-[30px] border border-dashed py-20">
      {/* <InsetBlockInside>
        <div>
          <div className="flex gap-1">
            
            <img
              src={ABOUT_CONST.HERO.IMAGE2.SRC}
              alt={ABOUT_CONST.HERO.IMAGE2.ALT}
              className="w-full max-w-[15rem] h-auto rounded-[30px] object-cover"
            />
            <img
              src={ABOUT_CONST.HERO.IMAGE3.SRC}
              alt={ABOUT_CONST.HERO.IMAGE3.ALT}
              className="w-full max-w-[15rem] h-auto rounded-[30px] object-cover"
            />
          </div>
          
          <MouseTag
            label="UI/UX Designer"
            arrowPosition="left"
            bgClass="bg-grey_scale_900 dark:bg-grey_scale_800"
            arrowClass="fill-grey_scale_900 dark:fill-grey_scale_800"
          />
          <SparklesText>
            <h2 className="font-PerfectlyNineties">I'm Suin</h2>
          </SparklesText>
        </div>
      </InsetBlockInside> */}
      <div className="relative h-screen overflow-hidden">
        {/* <img
          src={ABOUT_CONST.HERO.BACKGROUND.SRC}
          alt={ABOUT_CONST.HERO.BACKGROUND.ALT}
          className="absolute right-0 left-0 w-full rounded-[30px] min-h-[50vh]"
        /> */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-5 md:gap-10 p-10 h-full">
          <div className="grid h-fit gap-12">
            <div className="-translate-x-5">
              <div className="flex items-end">
                <img
                  src={ABOUT_CONST.HERO.IMAGE1.SRC}
                  alt={ABOUT_CONST.HERO.IMAGE1.ALT}
                  className="bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[30vw] md:max-w-[14rem] h-fit rounded-xl object-cover p-1 -rotate-6 translate-x-5"
                />
                <img
                  src={ABOUT_CONST.HERO.IMAGE2.SRC}
                  alt={ABOUT_CONST.HERO.IMAGE2.ALT}
                  className="bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[30vw] md:max-w-[15rem] h-fit rounded-xl object-cover p-1 rotate-3"
                />
              </div>
              <MouseTag
                label="Peak into my life"
                bgClass="bg-blue-500"
                arrowClass="fill-blue-500"
                arrowPosition="left"
                additionalClassName="translate-x-[12rem] mt-5"
              />
            </div>
            <div className="">
              {/* <InsetBlockInside>
                <div><h2>hu</h2></div>
            </InsetBlockInside> */}
              <h3 className="mb-2 font-PerfectlyNineties tracking-normal">
                👋 Hey, it's me!
              </h3>
              <p>
                I thrive on stepping out of my comfort zone, embracing
                challenges as opportunities for growth. What motivates me most
                is collaborating with driven individuals and engaging in
                thoughtful conversations that push me to continuously improve.
              </p>
            </div>
          </div>
          <InsetBlockInside>
            <div className="-m-10 -mx-14">
              <div className="bg-white/50 backdrop-blur-lg rounded-xl p-5 shadow-md h-full"></div>
            </div>
          </InsetBlockInside>
        </div>
      </div>
    </div>
  );
}
