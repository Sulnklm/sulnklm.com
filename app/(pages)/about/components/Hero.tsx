"use client";
import React from "react";
import { motion } from "framer-motion"; // 추가
import { ABOUT_CONST, SKILLS_CONST } from "../const";
import { MouseTag } from "@/components/MouseTag/MouseTag";
import { SubTextBox } from "@/components/SubTextBox/SubTextBox";
import { MessageCircleHeart, ScrollText } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { EXTERNAL_LINKS } from "@/lib/const";

export default function Hero() {
  const images = [
    {
      src: ABOUT_CONST.HERO.IMAGE1.SRC,
      alt: ABOUT_CONST.HERO.IMAGE1.ALT,
      className:
        "bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[40vw] sm:max-w-[13rem] h-auto rounded-xl object-cover p-1",
      style: {
        rotate: "-12deg",
        translateX: "1.25rem",
        translateY: "-0.75rem",
      },
    },
    {
      src: ABOUT_CONST.HERO.IMAGE3.SRC,
      alt: ABOUT_CONST.HERO.IMAGE3.ALT,
      className:
        "bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[40vw] sm:max-w-[12rem] h-auto rounded-xl object-cover p-1",
    },
    {
      src: ABOUT_CONST.HERO.IMAGE2.SRC,
      alt: ABOUT_CONST.HERO.IMAGE2.ALT,
      className:
        "bg-white/20 dark:bg-primary/50 backdrop-blur-lg border w-full max-w-[40vw] sm:max-w-[14rem] h-auto rounded-xl object-cover p-1 !rotate-6 -translate-y-1 brightness-125",
    },
  ];

  return (
    <div className="relative z-50 mt-20 bg-white/30 text-grey_scale_800 dark:bg-primary grid container mx-auto rounded-[30px] border border-dashed py-5 lg:py-14 mb-10">
      <div className="relative">
        <div className="relative mb-5 z-10 grid xl:grid-cols-[auto,1fr] items-center gap-10 xl:gap-16 px-2 h-full">
          <div className="grid h-fit gap-12 justify-center">
            <div className="w-fit grid pt-3 md:pt-0 md:-translate-y-5">
              <div className="flex items-end -translate-x-2.5">
                <div className="-rotate-12 translate-x-5 grid gap-2 -translate-y-3">
                  <motion.img
                    key={images[0].src}
                    src={images[0].src}
                    alt={images[0].alt}
                    className={images[0].className}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                  />
                </div>
                <div className="grid">
                  <motion.img
                    key={images[1].src}
                    src={images[1].src}
                    alt={images[1].alt}
                    className={images[1].className}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                  />
                  <motion.img
                    key={images[2].src}
                    src={images[2].src}
                    alt={images[2].alt}
                    className={images[2].className}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.2 }}
                  />
                </div>
              </div>
              <MouseTag
                label="Hey, it's me again! :)"
                bgClass="bg-coral"
                arrowClass="fill-coral"
                arrowPosition="left"
                additionalClassName="translate-x-[6rem] lg:translate-x-[12rem] mt-6"
              />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center">
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
                <p className="text-grey_scale_900/80">
                  {ABOUT_CONST.MY_STORY.PARAGRAPH1}
                </p>
              </div>
              <div className="pt-5">
                <h3 className="mb-3 font-PerfectlyNineties tracking-normal">
                  {ABOUT_CONST.MY_STORY.TITLE2}
                </h3>
                <p className="text-grey_scale_900/80">
                  {ABOUT_CONST.MY_STORY.PARAGRAPH2}
                </p>
              </div>
            </div>
            <div className="sticky bottom-0">
              <Button
                href={EXTERNAL_LINKS.RESUME.href}
                theme="primary"
                icon={<ScrollText size={16} className="ml-2" />}
                additionalClasses="!py-2.5 !px-3.5 text-sm rounded-[11px] mt-5 w-full md:!w-fit"
              >
                {EXTERNAL_LINKS.RESUME.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
