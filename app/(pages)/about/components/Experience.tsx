import React from "react";
import { Timeline } from "@/components/Timeline/Timeline";
import { EXPERIENCE_CONST } from "../../home/const";
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
        <div className="p-5 shadow-brBoth dark:shadow-brBothDark bg-background dark:bg-black rounded-[30px]">
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
                className="h-auto max-w-[13rem] min-h-[3rem] w-full rounded-lg bg-background dark:bg-primary object-cover p-0.5 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
