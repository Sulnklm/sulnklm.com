import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToolImage } from "../../ToolImage";
import { GridProjectCardPropTypes, ToolPropTypes } from "./types";
import { Button } from "../../magicui/button";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/animation/GlowingEffect/GlowingEffect";
import Link from "next/link";
import ProjectBadge from "../../ProjectBadge/ProjectBadge";
export const GridProjectCard = ({ PROJECT }: GridProjectCardPropTypes) => {
  const disciplineVariantMap: Record<
    string,
    "development" | "case-study" | "default"
  > = {
    "Web Development": "development",
    "Case Study": "case-study",
  };

  return (
    <Link
      href={`/works/${PROJECT.SLUG}`}
      className="block group relative rounded-[10px]"
    >
      <div className="group relative rounded-[10px] overflow-hidden border dark:border-grey_scale_1000 bg-grey_scale_50 dark:bg-black w-full min-w-[20rem] p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          className="rounded-[inherit]"
        />
        <div className="flex w-full h-fit sm:min-h-[30rem] min-h-[24rem] bg-neutral-200/50 dark:bg-grey_scale_1000/30 hover:bg-neutral-200 duration-200 px-5 pt-3 lg:pt-10 lg:px-10 rounded-md">
          <div className="flex-1 relative rounded-2xl overflow-hidden -rotate-3 max-w-[30rem] min-w-[12rem] translate-y-7 lg:translate-y-5 lg:group-hover:translate-y-1 group-hover:-rotate-6 duration-200 bg-white dark:bg-black p-0.5 shadow-2xl border">
            <img
              src={PROJECT.THUMBNAIL1.SRC}
              alt={PROJECT.THUMBNAIL1.ALT}
              className="w-full h-fit object-contain shadow-2xl rounded-xl"
            />
          </div>
          <div className="flex-1 relative overflow-hidden rounded-t-2xl max-w-[10rem] min-w-[5rem] rotate-6 translate-y-10 lg:translate-y-16 lg:group-hover:translate-y-12 duration-200 bg-white dark:bg-black p-0.5 h-fit shadow-2xl border">
            <img
              src={PROJECT.THUMBNAIL2.SRC}
              alt={PROJECT.THUMBNAIL2.ALT}
              className="w-full h-full object-contain rounded-t-xl" 
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 bg-grey_scale_50 dark:bg-black w-full pt-10">
          <div className="relative z-10 -translate-y-7">
            <div className="p-5 space-y-2">
              <div className="flex gap-2 items-center">
                <h4>{PROJECT.TITLE}</h4>
                <div className="flex flex-wrap gap-2">
                  {PROJECT.DISCIPLINE.map((discipline) => (
                    <ProjectBadge
                      key={discipline}
                      variant={disciplineVariantMap[discipline] || "default"}
                    >
                      {discipline}
                    </ProjectBadge>
                  ))}
                </div>
              </div>
              <p className="text-base font-[350] text-grey_scale_900/80 dark:text-grey_scale_700">
                {PROJECT.SUBTITLE}
              </p>
            </div>
            <div className="px-5">
              <div className="border-t border-dashed dark:border-t-grey_scale_900 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap -space-x-2">
                    {PROJECT.TOOLS.map((tool: ToolPropTypes) => (
                      <ToolImage
                        key={tool.name}
                        src={tool.src}
                        alt={tool.name}
                        size={28}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Link>
  );
};
