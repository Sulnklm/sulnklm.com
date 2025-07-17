import { useState, useMemo } from "react";
import { PROJECTS_CONST } from "@/(pages)/works/const";

const categoryKeys = ["all", "selected", "case-study", "development"];

export function useWorks(initialCategoryIndex = 0) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(initialCategoryIndex);
  const [viewModeIndex, setViewModeIndex] = useState(0);

  const selectedCategory = categoryKeys[selectedCategoryIndex];
  const viewMode = viewModeIndex === 0 ? "grid" : "list";

  const filteredProjects = useMemo(
    () =>
      PROJECTS_CONST.PROJECTS.filter((project) =>
        project.CATEGORY?.includes(selectedCategory)
      ),
    [selectedCategory]
  );

  return {
    selectedCategoryIndex,
    setSelectedCategoryIndex,
    viewModeIndex,
    setViewModeIndex,
    selectedCategory,
    viewMode,
    filteredProjects,
  };
}
