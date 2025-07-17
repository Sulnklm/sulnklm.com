import React from "react";
import { Timeline } from "@/components/Timeline/Timeline";
import { EXPERIENCE_CONST } from "../const";
import { ExperienceItem } from "../../home/types";
import OrangeTextBox from "@/components/OrangeTextBox/OrangeTextBox";
import PatternBackground from "@/components/PatternBackground/PatternBackground";

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
          {/* <h4>{item.company}</h4>
          <h5 className="mb-8 mt-1 text-grey_scale_700 text-sm">
            {item.description}
          </h5> */}
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
      {/* <PatternBackground /> */}
        <Timeline data={timelineData} />
      </div>
  );
}
