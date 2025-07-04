"use client";
import { PROJECTS_CONST } from "../const";

import { ProjectCard } from "@/components/ProjectCard";
import { WorksHero } from "./WorksHero";

export const Works = () => {
  return (
    <>
      <WorksHero />
      {PROJECTS_CONST.PROJECTS.map((PROJECT, index) => (
        <ProjectCard key={index} PROJECT={PROJECT} />
      ))}
    </>
  );
};
