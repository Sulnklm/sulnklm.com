"use client";

import React from "react";
import { GridProjectCard } from "@/components/ui/ProjectCard/GridProjectCard";
import { SELECTED_PROJECTS_CONST } from "../const";
import { InsetBlock } from "@/components/ui/InsetBlock";
import PatternBackground from "@/components/ui/PatternBackground/PatternBackground";
import { ArchiveIcon, ChevronRight } from "lucide-react";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import { PROJECTS_CONST } from "@/(pages)/projects/const";
import { FlipWords } from "@/components/animation/FlipWords/FlipWords";
import { ListProjectCard } from "@/components/ui/ProjectCard/ListProjectCard";
import Link from "next/link";
import { Button } from "@/components/Button/Button";

const SelectedWorks = () => {
  const filteredProjects = PROJECTS_CONST.PROJECTS.filter((project) =>
    project.CATEGORY?.includes("selected")
  );

  return (
    <div className="overflow-hidden pt-10 lg:pt-5">
      {/* <InsetBlock> */}
      {/* <PatternBackground /> */}
      <section className="z-50 lg:px-10 overflow-hidden">
        <div className="relative lg:gap-20">
          <div className="flex flex-col mb-3">
            <div className="flex items-end justify-between px-5">
              <button className="lg:flex opacity-0 hidden">
                View all <ChevronRight></ChevronRight>
              </button>
              <div className="place-content-center">
                <SubTextBox
                  additionalClass="lg:mx-auto"
                  icon={
                    <ArchiveIcon
                      size={15}
                      className="text-grey_scale_700"
                      strokeWidth={1.5}
                    />
                  }
                >
                  {SELECTED_PROJECTS_CONST.PARAGRAPH}
                </SubTextBox>
                <h2 className="text-center">
                  &nbsp;
                  <FlipWords
                    words={["Key Projects ✦"]}
                    duration={2200}
                    className=""
                  />
                </h2>
              </div>
              {/* <Link className="flex items-center lg:items-end text-grey_scale_1000 dark:text-grey_scale_100 hover:scale-95 duration-300" href="/projects">
                View all <ChevronRight className="w-5 ml-2"></ChevronRight>{" "}
              </Link> */}

              <Button href="/projects">
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 duration-300">
                  <h5 className="z-10 font-[350]">{" View all"}</h5>
                  <ChevronRight className="opacity-70" size={16} />
                </div>
              </Button>
            </div>
          </div>

          <div className="mt-10 md:mt-16 grid lg:grid-cols-2 gap-5 lg:gap-8 place-items-center bg-customGray w-full px-5">
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
      {/* </InsetBlock> */}
    </div>
  );
};

export default SelectedWorks;
