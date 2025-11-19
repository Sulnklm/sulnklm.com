import React, { useCallback } from "react";
import { ToolImage } from "../../ToolImage";
import { ListProjectCardPropTypes } from "./types";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/animation/GlowingEffect/GlowingEffect";
import Link from "next/link";
import ProjectBadge from "../../ProjectBadge/ProjectBadge";

export const ListProjectCard = ({ PROJECT }: ListProjectCardPropTypes) => {
  const disciplineVariantMap: Record<
    string,
    "development" | "case-study" | "default"
  > = {
    "Web Development": "development",
    "Case Study": "case-study",
  };

  const isComingSoon = PROJECT.CATEGORY?.includes("coming soon");
  const isDisabled = isComingSoon;

  // Prevent navigation when disabled (coming soon)
  const blockInteractionIfDisabled = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      if (!isDisabled) return;
      e.preventDefault();
      e.stopPropagation();
    },
    [isDisabled],
  );

  // Block keyboard activation (Enter/Space) when disabled.
  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isDisabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [isDisabled],
  );

  return (
    <Link
      href={`/projects/${PROJECT.SLUG}`}
      aria-disabled={isDisabled}
      onClick={blockInteractionIfDisabled}
      onKeyDown={onKeyDownHandler}
      className={`block group relative rounded-[10px] ${
        isDisabled ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <div className="group hover:scale-[99%] duration-300 relative shadow-sm rounded-[20px] bg-grey_scale_50 dark:bg-black p-2 z-0 border">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          className="rounded-[inherit]"
        />

        <div className="grid md:flex justify-between items-center gap-5 lg:gap-10 p-1">
          <div className="flex-1 relative z-10 w-full md:max-w-[20rem] lg:max-w-[35rem] 2xl:max-w-[40rem] overflow-hidden">
            {isComingSoon && (
              <div className="pointer-events-none absolute top-5 inset-0 z-[80] flex items-center justify-center">
                <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md bg-black text-white text-sm px-3 py-1 shadow-lg">
                  Coming soon!
                </div>
              </div>
            )}

            <div className="flex w-full h-fit max-h-[17rem] lg:max-h-[20rem] bg-neutral-200/50 dark:bg-grey_scale_1000/30 group-hover:bg-neutral-200 dark:group-hover:bg-grey_scale_1000/50 duration-200 px-5 md:pt-5 xl:pt-8 lg:px-10 rounded-md">
              {/* Thumbnail #1 */}
              <div
                className={`relative rounded-2xl overflow-hidden -rotate-3 translate-x-1 translate-y-7 lg:translate-y-8 lg:group-hover:translate-y-6 group-hover:-rotate-6 duration-200 bg-white dark:bg-black p-0.5 shadow-2xl border
                  ${
                    PROJECT.THUMBNAIL2?.SRC
                      ? "flex-[3] max-w-[30rem] min-w-[12rem]"
                      : "flex-1 max-w-full"
                  }
                `}
              >
                <img
                  src={PROJECT.THUMBNAIL1.SRC}
                  alt={PROJECT.THUMBNAIL1.ALT}
                  className="w-full h-fit object-contain shadow-2xl rounded-xl"
                />
              </div>

              {/* Thumbnail #2 */}
              {PROJECT.THUMBNAIL2?.SRC && (
                <div className="flex-[1] relative overflow-hidden rounded-t-2xl sm:max-w-[8rem] md:max-w-[9rem] lg:max-w-[9.5rem] xl:max-w-[10rem] min-w-[5rem] rotate-6 -translate-x-1 translate-y-14 md:translate-y-10 lg:translate-y-16 lg:group-hover:translate-y-12 duration-200 bg-white dark:bg-black p-0.5 h-fit shadow-2xl border">
                  <img
                    src={PROJECT.THUMBNAIL2.SRC}
                    alt={PROJECT.THUMBNAIL2.ALT}
                    className="w-full h-full object-contain rounded-t-xl"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 텍스트/툴 영역 */}
          <div className="flex-1">
            <div className="w-full bg-grey_scale_50 dark:bg-black rounded-[45px] pr-10">
              <div className="relative z-10">
                <div className="space-y-2 pb-5">
                  <div className="flex gap-2 items-center">
                    <h4>{PROJECT.TITLE}</h4>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT.DISCIPLINE.map((discipline) => (
                        <ProjectBadge
                          key={discipline}
                          variant={
                            disciplineVariantMap[discipline] || "default"
                          }
                        >
                          {discipline}
                        </ProjectBadge>
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-grey_scale_900/80 dark:text-grey_scale_700 font-[350]">
                    {PROJECT.SUBTITLE}
                  </p>
                </div>

                <div>
                  <div className="border-t border-dashed dark:border-t-grey_scale_900 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap -space-x-2">
                        {PROJECT.TOOLS.map((tool) => (
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
            </div>
          </div>
        </div>

        {/* Arrow icon (비활성일 때 색만 살짝 죽임) */}
        <div className="group absolute right-0 bottom-0 p-1.5 dark:group-hover:bg-white/[8%] duration-300 m-3 rounded-xl">
          <ArrowRight
            className={`group-hover:rotate-0 -rotate-45 duration-300 ${
              isDisabled
                ? "text-grey_scale_500"
                : "text-grey_scale_800 dark:text-grey_scale_500"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};
