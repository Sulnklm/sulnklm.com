"use client";

import React from "react";
import { ListProjectCard } from "@/components/ProjectCard/ListProjectCard";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import { CategoryIcon } from "@/components/CategoryIcon/CategoryIcon";
import { Button } from "@/components/Button";

const SelectedWorks = () => {
  const project1 = PROJECTS_CONST.PROJECTS.find(
    (p) => p.SLUG.toLowerCase() === "flickmood"
  );
  const project2 = PROJECTS_CONST.PROJECTS.find(
    (p) => p.SLUG.toLowerCase() === "yumpick"
  );
  const project3 = PROJECTS_CONST.PROJECTS.find(
    (p) => p.SLUG.toLowerCase() === "wishbond"
  );

  // 하나라도 없으면 로딩 또는 에러 UI 처리
  if (!project1 || !project2 || !project3) {
    return <div>One or more projects not found.</div>;
  }

  return (
    <section className="relative container mx-auto py-10 z-50 mt-10">
      <div>
        <div className="flex justify-between items-center gap-5 mb-10">
          <div className="flex items-center gap-5"></div>
          <div className="border-t-1 border">{""}</div>
        </div>
        <div className="relative lg:flex lg:mt-20 gap-20">
          <div className="sticky top-24 lg:h-[55vh] lg:w-1/4 flex flex-col justify-start p-5">
            {/* <div>
              <CategoryIcon type="uxui" />
              <CategoryIcon type="frontend" />
            </div> */}
            <h2 className="text-gradient p-3 text-start">Selected Works</h2>
            <Button theme="primary">View more</Button>
          </div>
          <div className="relative grid gap-8 lg:gap-20 place-items-center bg-customGray w-full">
            <div className="sticky top-[15vh] z-0">
              <ListProjectCard PROJECT={project1} index={2} />
            </div>
            <div className="sticky top-[15vh] z-10">
              <ListProjectCard PROJECT={project2} index={1} />
            </div>
            <div className="sticky top-[15vh] z-20">
              <ListProjectCard PROJECT={project3} index={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
