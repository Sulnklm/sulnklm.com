"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { InsetBlock } from "../InsetBlock";
import OrangeTextBox from "../OrangeTextBox/OrangeTextBox";

interface TimelineEntry {
  description: string;
  position: string;
  time: string;
  company: string;
  content: React.ReactNode;
}
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative z-50 w-full md:px-10 container border rounded-[30px] border-dashed bg-white/30 dark:bg-primary py-10 lg:py-20"
      ref={containerRef}
    >
      <OrangeTextBox text="Experience" />
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-14 md:pt-16 lg:gap-20">
            <div className="space-x-7 z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-4 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="md:pl-10">
                <h5 className="hidden md:block mb-5 font-[400] opacity-80 border rounded-full w-fit px-3 py-2 bg-white dark:bg-primary">
                  {item.time}
                </h5>
                <div>
                  <h3 className="hidden md:block">{item.position}</h3>
                  <h5 className="hidden md:block font-[400] text-lg">
                    {item.company}
                  </h5>
                  <p className="hidden md:block mt-5 font-[400] text-grey_scale_800 dark:text-grey_scale_700">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-10 pr-4 md:pl-4 w-full">
              <div>
                <h5 className="md:hidden mb-5 font-[400] opacity-80 border rounded-full w-fit px-3 py-2 bg-white dark:bg-primary">
                  {item.time}
                </h5>
                <div>
                  <h3 className="md:hidden">{item.position}</h3>
                  <h5 className="md:hidden font-[400] text-lg">
                    {item.company}
                  </h5>
                  <h5 className="md:hidden mb-6 mt-3 font-[400] text-grey_scale_800 dark:text-grey_scale_700">
                    {item.description}
                  </h5>
                </div>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-orange-300 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
