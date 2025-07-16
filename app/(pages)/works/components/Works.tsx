"use client";

import React, { useState } from "react";
import { ListProjectCard } from "@/components/ProjectCard/ListProjectCard";
import { GridProjectCard } from "@/components/ProjectCard/GridProjectCard";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import { ViewTabs } from "@/components/ProjectsTabs/ViewTabs/ViewTabs";
import {
  Grid2X2Icon,
  ListIcon,
  ArchiveIcon,
  StarIcon,
  FileTextIcon,
  CodeIcon,
} from "lucide-react";
import { CategoriesTabs } from "@/components/ProjectsTabs/CategoriesTabs/CategoriesTabs";
import { InsetBlock } from "@/components/InsetBlock";
import PatternBackground from "@/components/PatternBackground/PatternBackground";
import OrangeTextBox from "@/components/OrangeTextBox/OrangeTextBox";
const CATEGORY_TABS = ["All", "Selected", "Case Study", "Development"];
const categoryKeys = ["all", "selected", "case-study", "development"];
const viewIcons = [<Grid2X2Icon key="grid" />, <ListIcon key="list" />];

const categoryIconMap: Record<string, React.ReactNode> = {
  all: <ArchiveIcon size={16} />,
  selected: <StarIcon size={16} />,
  "case-study": <FileTextIcon size={16} />,
  development: <CodeIcon size={16} />,
};

const icons = categoryKeys.map((key) => categoryIconMap[key]);

const Works = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [viewModeIndex, setViewModeIndex] = useState(0);
  const categoryKeys = ["all", "selected", "case-study", "development"];
  const selectedCategory = categoryKeys[selectedCategoryIndex];
  const viewMode = viewModeIndex === 0 ? "grid" : "list";
  const filteredProjects = PROJECTS_CONST.PROJECTS.filter((project) =>
    project.CATEGORY?.includes(selectedCategory)
  );

  return (
    <div>
      {/* <OrangeTextBox text="My works" /> */}
      <InsetBlock>
        <PatternBackground />
        <section className="z-50 px-20">
          <div className="relative lg:gap-20">
            <div className="flex flex-col justify-center mb-3">
            <p className="text-center mx-auto mb-2 text-grey_scale_700 dark:text-grey_scale_700 border rounded-full w-fit px-3 py-2 bg-white dark:bg-primary">{PROJECTS_CONST.PARAGRAPH}</p>

              <div className="flex gap-2 items-center justify-center">
                <h2 className="text-center">{PROJECTS_CONST.HEADING1}</h2>
                <h2 className="text-center">
                  {PROJECTS_CONST.HEADING2}
                </h2>
                <h2 className="text-center font-PerfectlyNineties tracking-normal italic00">
                  {PROJECTS_CONST.HEADING3}
                </h2>
              </div>
              <div className="flex items-start mt-14">
                <div className="flex-1 flex justify-start">
                  <CategoriesTabs
                    labels={CATEGORY_TABS}
                    icons={icons}
                    selectedIndex={selectedCategoryIndex}
                    onSelect={setSelectedCategoryIndex}
                  />
                </div>
                <div className="flex-1 flex justify-end">
                  <ViewTabs
                    icons={viewIcons}
                    selectedIndex={viewModeIndex}
                    onSelect={setViewModeIndex}
                  />
                </div>
              </div>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? "grid lg:grid-cols-2 xl:grid-cols-3 gap-5 2xl:gap-10 place-items-center bg-customGray w-full"
                  : "relative flex flex-col gap-5 bg-customGray w-full"
              }
            >
              {filteredProjects.length === 0 ? (
                <p className="text-center text-gray-500">No projects found.</p>
              ) : (
                filteredProjects.map((project, index) =>
                  viewMode === "grid" ? (
                    <GridProjectCard key={project.SLUG} PROJECT={project} />
                  ) : (
                    <div key={project.SLUG} className={`sticky top-[15vh]`}>
                      <ListProjectCard PROJECT={project} index={index} />
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </section>
      </InsetBlock>
    </div>
  );
};

export default Works;
