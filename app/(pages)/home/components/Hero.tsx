"use client";
type Props = {};
import { HOME_HERO_CONST } from "../const";
import WavyText from "@/components/animation/WavyText";
import WavyImage from "@/components/animation/WavyImage";
import { GridBackground } from "@/components/GridBackground";

export default function Hero() {
  return (
    <section className="relative h-screen bg-white dark:bg-primary">
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-center">
        <WavyImage
          src={HOME_HERO_CONST.HEADSHOT.SRC}
          alt={HOME_HERO_CONST.HEADSHOT.ALT}
          width={300}
          height={300}
          delay={0.8}
          className="relative object-cover w-44 h-44 mb-3"
        />

        <div className="flex gap-5">
          <h1 className="text-center">{HOME_HERO_CONST.TITLE.PART1}</h1>
          <WavyText
            text="creative"
            replay={true}
            className="inline-block font-Schoolbell font-[400]"
          />
        </div>
        <h1 className="text-center">{HOME_HERO_CONST.TITLE.PART3}</h1>
        <p className="text-grey_scale_700 dark:text-grey_scale_500 pt-7 max-w-2xl">
          {HOME_HERO_CONST.DESCRIPTION.DESCRIPTION1} <br />
          {HOME_HERO_CONST.DESCRIPTION.DESCRIPTION2}
        </p>
      </div>
    </section>
  );
}
