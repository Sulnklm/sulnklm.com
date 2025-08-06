"use client";

import React from "react";
import { GridProjectCard } from "@/components/ui/ProjectCard/GridProjectCard";
import { SELECTED_PROJECTS_CONST } from "../const";
import { InsetBlock } from "@/components/ui/InsetBlock";
import PatternBackground from "@/components/ui/PatternBackground/PatternBackground";
import { ArchiveIcon } from "lucide-react";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import { FlipWords } from "@/components/animation/FlipWords/FlipWords";
import { ListProjectCard } from "@/components/ui/ProjectCard/ListProjectCard";

const SelectedWorks = () => {
  const filteredProjects = PROJECTS_CONST.PROJECTS.filter((project) =>
    project.CATEGORY?.includes("selected")
  );

  return (
    <div className="overflow-hidden pt-5">
      <InsetBlock>
        <PatternBackground />
        <section className="z-50 lg:px-10 overflow-hidden">
          <div className="relative lg:gap-20">
            <div className="flex flex-col justify-center mb-3">
              <SubTextBox
                additionalClass="mx-auto"
                icon={
                  <ArchiveIcon
                    size={15}
                    className="text-orange-400"
                    strokeWidth={1.5}
                  />
                }
              >
                {SELECTED_PROJECTS_CONST.PARAGRAPH}
              </SubTextBox>
              <div className="flex items-center justify-center">
                <h2 className="text-center font-PerfectlyNineties tracking-normal">
                  {SELECTED_PROJECTS_CONST.SELECTED_HEADING1}
                </h2>
                <h2 className="text-center font-PerfectlyNineties tracking-normal">
                  <FlipWords words={["Works"]} duration={2200} className="" />
                </h2>
              </div>
            </div>

            <div className="mt-10 md:mt-16 grid lg:grid-cols-2 gap-5 md:gap-8 xl:gap-10 place-items-center bg-customGray w-full">
              {filteredProjects.length === 0 ? (
                <p className="text-center text-gray-500">
                  No selected projects found.
                </p>
              ) : (
                filteredProjects.map((project, i) => (
                  <GridProjectCard key={project.SLUG} PROJECT={project} />
                ))
              )}
            </div>
          </div>
        </section>
      </InsetBlock>
    </div>
  );
};

export default SelectedWorks;
