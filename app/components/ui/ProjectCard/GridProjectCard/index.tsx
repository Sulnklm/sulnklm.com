import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToolImage } from "../../ToolImage";
import { GridProjectCardPropTypes } from "./types";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/animation/GlowingEffect/GlowingEffect";
import Link from "next/link";
import ProjectBadge from "../../ProjectBadge/ProjectBadge";
import { Tooltip } from "@/components/ui/Tooltip/Tooltip";

export const GridProjectCard = ({ PROJECT }: GridProjectCardPropTypes) => {
  const disciplineVariantMap: Record<
    string,
    "development" | "case-study" | "default"
  > = {
    "Web Development": "development",
    "Case Study": "case-study",
  };

  const isComingSoon = PROJECT.CATEGORY?.includes("coming soon");
  const isUnderNDA = PROJECT.CATEGORY?.includes("under NDA");

  // Prevent navigation when under NDA while still allowing hover states.
  const blockInteractionIfNDA = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      if (!isUnderNDA) return;
      e.preventDefault();
      e.stopPropagation();
    },
    [isUnderNDA]
  );

  // Also block keyboard activation (Enter/Space) for accessibility.
  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isUnderNDA) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [isUnderNDA]
  );

  return (
    <Link
      href={`/projects/${PROJECT.SLUG}`}
      aria-disabled={isUnderNDA || isComingSoon}
      onClick={blockInteractionIfNDA}
      onKeyDown={onKeyDownHandler}
      className={`block group h-full relative rounded-[10px] w-full outline-none focus-visible:ring-2 focus-visible:ring-coral/60
        ${isComingSoon || isUnderNDA ? "cursor-default" : "cursor-pointer"}`}
    >
       <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          className="rounded-[inherit]"
        />

      <div className="group relative rounded-[10px] overflow-hidden border dark:border-grey_scale_1000 bg-grey_scale_50 dark:bg-primary w-full min-w-[20rem] p-2">
       
        {/* Main visual area */}
        <div className="overflow-hidden justify-center relative flex w-full h-fit min-h-[18rem] sm-custom:min-h-[23rem] sm:min-h-[26rem] md:min-h-[29rem] lg:min-h-[26rem] xl:min-h-[29rem] 2xl:min-h-[31rem] 2xl:max-h-[31rem] bg-neutral-200/50 dark:bg-grey_scale_1000/10 group-hover:bg-neutral-200 dark:group-hover:bg-grey_scale_1000/40 duration-200 px-5 pt-0 lg:px-10 rounded-md">
          {/* "Coming soon" tape */}
          <div
            className={`${
              isComingSoon
                ? "absolute border !border-grey_scale_500/40 dark:!border-grey_scale_500/30 left-1/2 -translate-x-1/2 min-w-[50rem] top-[15vh] md:top-[16vh] xl:top-[20vh] w-[90%]"
                : "hidden"
            } bg-grey_scale_700/20 dark:bg-grey_scale_500/10 backdrop-blur-lg px-2 py-2 z-[100] rotate-6 rounded-xl`}
          >
            <p className="!text-black/30 dark:!text-background/20 font-PerfectlyNineties font-semibold text-center text-nowrap">
              NO ENTRY 🚧&nbsp;&nbsp;&nbsp;&nbsp;NO ENTRY 🚧
              &nbsp;&nbsp;&nbsp;&nbsp; NO ENTRY 🚧 &nbsp;&nbsp;&nbsp;&nbsp; NO
              ENTRY 🚧 &nbsp;&nbsp;&nbsp;&nbsp; NO ENTRY 🚧
              &nbsp;&nbsp;&nbsp;&nbsp; NO ENTRY 🚧
            </p>
          </div>

          {/* NDA hover-only tooltip */}
          <AnimatePresence>
            {isUnderNDA && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 4 }}
                // Hidden by default, shown on hover/focus within the card
                className="pointer-events-none absolute inset-x-5 top-4 lg:top-6 z-[90]"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="inline-flex max-w-full items-center gap-2 rounded-xl px-3 py-2 bg-black/80 shadow-xl backdrop-blur-sm ring-1 ring-white/10">
                    <p className="text-white/90 text-sm">
                      This project is under a strict NDA. <br /> I'd love to share my
                      learnings and experience from it in a personal
                      conversation! 
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thumbnail #1 */}
          <div
            className={`relative rounded-2xl overflow-hidden -rotate-3 translate-x-1 translate-y-8  lg:translate-y-8 xl:translate-y-10 2xl:translate-y-14 lg:group-hover:translate-y-8 lg:group-hover:-rotate-6 duration-200 shadow-2xl bg-white dark:bg-black p-0.5
            ${
              PROJECT.THUMBNAIL2?.SRC
                ? "flex-[3] min-w-[12rem] max-w-[30rem]"
                : "flex-1 max-w-full"
            }
            ${
              isComingSoon
                ? "lg:group-hover:translate-y-5 group-hover:-rotate-3"
                : ""
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

          {/* Thumbnail #2 */}
          {PROJECT.THUMBNAIL2?.SRC && (
            <div
              className={`sm:flex-[1] max-w-[5rem] relative overflow-hidden rounded-t-xl lg:rounded-t-2xl sm:max-w-[8rem] md:max-w-[9rem] lg:max-w-[9.5rem] xl:max-w-[10rem] min-w-[5rem] rotate-6 -translate-x-1 translate-y-14 md:translate-y-10 lg:translate-y-10 lg:group-hover:translate-y-5 duration-200 bg-white dark:bg-black p-0.5 h-fit shadow-2xl border
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
                className={`w-full h-auto object-contain rounded-t-sm lg:rounded-t-xl
                  ${isComingSoon ? "opacity-15 grayscale blur-md" : ""}`}
              />
            </div>
          )}
        </div>

        {/* Content area */}
        <div className="absolute bottom-0 left-0 bg-grey_scale_50 dark:bg-primary w-full pt-10">
          <div className="relative z-10 -translate-y-7">
            <div className="pb-0 lg:pb-5 p-5 space-y-2">
              <div className="flex gap-1 lg:gap-2 items-center">
                <h4>{PROJECT.TITLE}</h4>
                <div className="flex flex-wrap gap-2 scale-[85%] lg:scale-100">
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
              <p className="text-sm xl:text-base font-[350] text-grey_scale_900/80 dark:text-grey_scale_700 pt-3">
                {PROJECT.SUBTITLE}
              </p>
            </div>

            <div className="px-5 hidden lg:block">
              <div className="border-t border-dashed dark:border-t-grey_scale_900 pt-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex flex-wrap -space-x-2 ${
                      isComingSoon ? "blur-sm grayscale" : ""
                    }`}
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
                    <ArrowRight
                      className={`group-hover:rotate-0 -rotate-45 duration-300
                        ${
                          isComingSoon
                            ? "text-grey_scale_500"
                            : "text-grey_scale_800 dark:text-grey_scale_500"
                        }`}
                    />
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
