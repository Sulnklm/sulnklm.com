import React from "react";
import { Timeline } from "@/components/ui/Timeline/Timeline";
import { ABOUT_CONST, EXPERIENCE_CONST } from "../const";
import { ExperienceItem } from "../../home/types";
import OrangeTextBox from "@/components/ui/OrangeTextBox/OrangeTextBox";
import PatternBackground from "@/components/ui/PatternBackground/PatternBackground";

interface TimelineEntry {
  description: string;
  position: string;
  company: string;
  time: string;
  content: React.ReactNode;
}

export default function Experience() {
  const timelineData: TimelineEntry[] = EXPERIENCE_CONST.map(
    (item: ExperienceItem) => ({
      position: item.position,
      time: item.time,
      company: item.company,
      description: item.description,
      content: (
        <div className="relative z-50 p-5 shadow-brBoth dark:shadow-brBothDark bg-background dark:bg-black rounded-[30px]">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {item.images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="h-auto max-w-[13rem] min-h-[2rem] w-full rounded-lg bg-background dark:bg-primary object-contain p-0.5 shadow-3dShadow"
              />
            ))}
          </div>
        </div>
      ),
    })
  );

  return (
      <div className="relative w-full overflow-clip">
        {/* <img alt={ABOUT_CONST.HERO.TEST.ALT} src={ABOUT_CONST.HERO.TEST.SRC} className="mx-auto dark:invert max-w-[65vw]"></img> */}
        <Timeline data={timelineData} />
      </div>
  );
}
