"use client";
import { PROJECTS_CONST } from "../const";

import { GridProjectCard } from "@/components/ProjectCard/GridProjectCard";
import { WorksHero } from "./WorksHero";

export const Works = () => {
  return (
    <div className="relative z-10">
      <WorksHero />
      <div className="flex h-screen justify-center items-center gap-10">
      {PROJECTS_CONST.PROJECTS.map((PROJECT, index) => (
        <GridProjectCard key={index} PROJECT={PROJECT} />
      ))}
      </div>
    </div>
  );
};
