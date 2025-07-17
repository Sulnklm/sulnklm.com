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
    <div className="bg-white/50 dark:bg-primary py-[20vh] -mb-20 relative z-50">
      <div className="container mx-auto">
        <SubTextBox
          additionalClassName="self-start"
          icon={
            <PencilRuler size={16} className="text-orange-400" strokeWidth={1.7} />
          }
        >
          {PROJECTS_CONST.PARAGRAPH}
        </SubTextBox>
        <h1 className="text-start lg:text-6xl text-grey_scale_900 mb-6">
          My Works
        </h1>
        <div className="hidden lg:flex items-center py-4 border-t border-dashed">
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
        <InsetBlockInside>
          <section className="sm:-m-5">
            <div className="relative lg:gap-20">
              <div
                className={
                  viewMode === "grid"
                    ? "grid lg:grid-cols-2 gap-5 lg:gap-5 2xl:gap-8 place-items-center bg-customGray w-full"
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
