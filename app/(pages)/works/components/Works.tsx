"use client";

import React from "react";
import { ListProjectCard } from "@/components/ProjectCard/ListProjectCard";
import { GridProjectCard } from "@/components/ProjectCard/GridProjectCard";
import { ViewTabs } from "@/components/ProjectsTabs/ViewTabs/ViewTabs";
import {
  Grid2X2Icon,
  ListIcon,
  PencilRuler,
  StarIcon,
  FileTextIcon,
  CodeIcon,
  GalleryVertical,
} from "lucide-react";
import { CategoriesTabs } from "@/components/ProjectsTabs/CategoriesTabs/CategoriesTabs";
import { SubTextBox } from "@/components/SubTextBox/SubTextBox";
import { InsetBlockInside } from "@/components/InsetBlockInside";
import { useWorks } from "./useWorks";
import { PROJECTS_CONST } from "../const";
import { FlipWords } from "@/components/FlipWords/FlipWords";

const CATEGORY_TABS = ["All", "Selected", "Case Study", "Development"];
const categoryKeys = ["all", "selected", "case-study", "development"];
const viewIcons = [<Grid2X2Icon key="grid" />, <ListIcon key="list" />];
const categoryIconMap: Record<string, React.ReactNode> = {
  all: <GalleryVertical size={16} />,
  selected: <StarIcon size={16} />,
  "case-study": <FileTextIcon size={16} />,
  development: <CodeIcon size={16} />,
};
const icons = categoryKeys.map((key) => categoryIconMap[key]);

const Works = () => {
  const {
    selectedCategoryIndex,
    setSelectedCategoryIndex,
    viewModeIndex,
    setViewModeIndex,
    viewMode,
    filteredProjects,
  } = useWorks(0); // initial category = all

  return (
    <div className="bg-white/50 dark:bg-primary py-[10vh] md:py-[15vh] relative z-50 border-b border-dashed">
      <div className="container mx-auto">
        <SubTextBox
          additionalClass="mx-auto md:mx-0"
          icon={
            <PencilRuler
              size={16}
              className="text-orange-400"
              strokeWidth={1.7}
            />
          }
        >
          {PROJECTS_CONST.PARAGRAPH}
        </SubTextBox>
        <h2 className="md:text-start text-grey_scale_900 pt-2 md:pt-0 mb-7 md:mb-6">
          <span className="font-PerfectlyNineties tracking-normal">
            <FlipWords words={["Works ✦"]} duration={2200} className="" />
          </span>
        </h2>
        <div className="flex items-center pt-5 sm:py-4 border-t border-dashed">
          <div className="w-full md:flex-1 flex justify-end md:justify-start pr-2">
            <CategoriesTabs
              labels={CATEGORY_TABS}
              icons={icons}
              selectedIndex={selectedCategoryIndex}
              onSelect={setSelectedCategoryIndex}
            />
          </div>
          <div className="hidden flex-1 md:flex justify-end">
            <ViewTabs
              icons={viewIcons}
              selectedIndex={viewModeIndex}
              onSelect={setViewModeIndex}
            />
          </div>
        </div>
        <InsetBlockInside>
          <section className="pt-5 sm:-mt-5">
            <div className="relative lg:gap-20">
              <div
                className={
                  viewMode === "grid"
                    ? "grid lg:grid-cols-2 gap-5 lg:gap-5 2xl:gap-8 place-items-center bg-customGray w-full"
                    : "relative flex flex-col gap-5 bg-customGray w-full"
                }
              >
                {filteredProjects.length === 0 ? (
                  <p className="text-center text-gray-500">
                    No projects found.
                  </p>
                ) : (
                  filteredProjects.map((project, index) =>
                    viewMode === "grid" ? (
                      <GridProjectCard key={project.SLUG} PROJECT={project} />
                    ) : (
                      <div key={project.SLUG}>
                        <ListProjectCard PROJECT={project} index={index} />
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </section>
        </InsetBlockInside>
      </div>
    </div>
  );
};

export default Works;
