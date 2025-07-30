import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToolImage } from "../../ToolImage";
import { ListProjectCardPropTypes } from "./types";
import { Button } from "../../button";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/GlowingEffect/GlowingEffect";
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

  return (
    <Link
      href={`/works/${PROJECT.SLUG}`}
      className="block group relative rounded-[10px] ..."
    >
      <div
        className="group hover:scale-[99%] duration-300 relative shadow-sm rounded-[20px] bg-grey_scale_50 dark:bg-black p-2 z-0 border"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          className="rounded-[inherit]"
        />
        <div className="grid lg:flex justify-between items-center gap-5 lg:gap-10 p-1">
          <div className="flex-1 z-10 lg:max-w-[30rem]">
            <img
              src={PROJECT.IMAGE.SRC}
              alt={PROJECT.IMAGE.ALT}
              className="object-cover bg-background dark:bg-grey_scale_900/20 duration-300 rounded-[10px] w-full h-auto"
            />
          </div>
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
                  <p
                    className="text-base text-grey_scale_900/80 dark:text-grey_scale_700 font-[350]"
                  >
                    {PROJECT.SUBTITLE}
                  </p>
                </div>

                <div className="">
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
      </div>
    </Link>
  );
};
