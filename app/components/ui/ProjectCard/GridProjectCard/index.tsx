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
  const isComingSoon = PROJECT.CATEGORY?.includes("coming soon");

  return (
    <Link
      href={`/works/${PROJECT.SLUG}`}
      className={`block group relative rounded-[10px] w-full ${
        isComingSoon ? "pointer-events-none opacity-90 cursor-not-allowed" : ""
      }`}
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
        <div className="overflow-hidden relative flex w-full h-fit min-h-[25rem] sm:min-h-[30rem] md:min-h-[29rem] lg:min-h-[26rem] xl:min-h-[34rem] bg-neutral-200/50 dark:bg-grey_scale_1000/30 group-hover:bg-neutral-200 dark:group-hover:bg-grey_scale_1000/50 duration-200 px-5 md:pt-5 xl:pt-8 lg:px-10 rounded-md">
          <div
            className={`relative rounded-2xl overflow-hidden -rotate-3 translate-x-1 translate-y-7 lg:translate-y-5 lg:group-hover:translate-y-1 lg:group-hover:-rotate-6 duration-200 bg-white dark:bg-black p-0.5 shadow-2xl border
      ${
        PROJECT.THUMBNAIL2?.SRC ? "flex-[3] max-w-[30rem]" : "flex-1 max-w-full"
      }
      ${
        isComingSoon ? "lg:group-hover:translate-y-5 group-hover:-rotate-3" : ""
      }
    `}
          >
            <img
              src={PROJECT.THUMBNAIL1.SRC}
              alt={PROJECT.THUMBNAIL1.ALT}
              className={`w-full !h-auto object-contain shadow-2xl rounded-xl
        ${isComingSoon ? "opacity-15 grayscale blur-md" : ""}`}
            />
          </div>

          {PROJECT.THUMBNAIL2?.SRC && (
            <div
              className={`sm:flex-[1] max-w-[7rem] relative overflow-hidden rounded-t-2xl sm:max-w-[8rem] md:max-w-[9rem] lg:max-w-[9.5rem] xl:max-w-[10rem] min-w-[5rem] rotate-6 -translate-x-1 translate-y-14 md:translate-y-10 lg:translate-y-16 lg:group-hover:translate-y-12 duration-200 bg-white dark:bg-black p-0.5 h-fit shadow-2xl border
        ${
          isComingSoon
            ? "lg:group-hover:translate-y-16 group-hover:rotate-6"
            : ""
        }
      `}
            >
              <img
                src={PROJECT.THUMBNAIL2.SRC}
                alt={PROJECT.THUMBNAIL2.ALT}
                className={`w-full h-auto object-contain rounded-t-xl
          ${isComingSoon ? "opacity-15 grayscale blur-md" : ""}`}
              />
            </div>
          )}
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
                  <div
                    className={`flex flex-wrap -space-x-2  ${
                      isComingSoon ? "blur-sm grayscale" : ""
                    } `}
                  >
                    {PROJECT.TOOLS.map((tool) => (
                      <ToolImage
                        key={tool.name}
                        src={tool.src}
                        alt={tool.name}
                        size={28}
                      />
                    ))}
                  </div>

                  <div className="p-1.5 dark:group-hover:bg-white/[8%] duration-300 rounded-xl">
                    <ArrowRight className="text-grey_scale_800 group-hover:text-coral dark:group-hover:text-coral dark:text-grey_scale_500 group-hover:rotate-0 -rotate-45 duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
