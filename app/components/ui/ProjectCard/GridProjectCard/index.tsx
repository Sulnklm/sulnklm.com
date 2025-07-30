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
      className="block group relative rounded-[10px] ..."
    >
      <div className="group relative rounded-[10px] overflow-visible border dark:border-grey_scale_900 bg-grey_scale_50 dark:bg-black w-full min-w-[20rem] p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          className="rounded-[inherit]"
        />
        <img
          src={PROJECT.IMAGE.SRC}
          alt={PROJECT.IMAGE.ALT}
          className="bg-grey_scale_50 dark:bg-black group-hover:scale-[97%] duration-300 rounded-t-[10px] mb-36 w-full h-auto object-cover min-h-[20rem]"
        />

        <div className="absolute bottom-0 left-0 bg-grey_scale_50 dark:bg-black rounded-[45px] w-full">
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
