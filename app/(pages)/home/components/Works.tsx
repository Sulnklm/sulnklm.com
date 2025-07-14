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
import { WORKS_CONST } from "../const";

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
  // 카테고리 탭 상태
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  // 뷰 모드 탭 상태
  const [viewModeIndex, setViewModeIndex] = useState(0);

  const categoryKeys = ["all", "selected", "case-study", "development"];
  const selectedCategory = categoryKeys[selectedCategoryIndex];
  const viewMode = viewModeIndex === 0 ? "grid" : "list";

  // 카테고리별 필터링
  const filteredProjects = PROJECTS_CONST.PROJECTS.filter((project) =>
    project.CATEGORY?.includes(selectedCategory)
  );

  return (
    <section className="col-span-full relative container mx-auto z-50 bg-primary/1 rounded-[30px] border border-dashed shadow-sm bg-white/30 dark:bg-grey_scale_700/20">
      <div className="relative py-20 gap-20">
        <div className="flex flex-col justify-start mb-10">
          <h2 className="text-start">{WORKS_CONST.HEADING}</h2>
          <div className="flex items-center mt-5 border-b">
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
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 place-items-center bg-customGray w-full"
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
  );
};

export default Works;
