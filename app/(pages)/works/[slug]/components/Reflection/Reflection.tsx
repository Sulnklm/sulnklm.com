import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import OrangeTextBox from "@/components/ui/OrangeTextBox/OrangeTextBox";
import { IconCard } from "@/components/ui/IconCard/IconCard";
import { Lightbulb } from "lucide-react";
import { PROJECTS_CONST } from "@/(pages)/works/const";
import { useParams } from "next/navigation";
import React from "react";
import { PreviousProjectButton } from "../NavButton/\bPreviousProjectButton";
import { NextProjectButton } from "../NavButton/NextProjectButton";
import { ProjectDescriptionCard } from "@/components/ui/ProjectDescriptionCard/ProjectDescriptionCard";

interface ReflectionTypes {
  title: string;
  description: string;
}

export function Reflection({ title, description }: ReflectionTypes) {
  const params = useParams();
  const currentSlug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug;

  const projects = PROJECTS_CONST.PROJECTS;
  const currentIndex = projects.findIndex(
    (proj) =>
      typeof proj.SLUG === "string" &&
      typeof currentSlug === "string" &&
      proj.SLUG.toLowerCase() === currentSlug.toLowerCase()
  );

  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="pb-10">
      <OrangeTextBox text="Reflection" />

      <ProjectDescriptionCard
        icon={<Lightbulb />}
        title={title}
        description={description}
      />

      {/* Previous/next btn */}
      <div className="flex justify-between mt-8 gap-4">
        <PreviousProjectButton
          href={prevProject ? `/works/${prevProject.SLUG}` : undefined}
          disabled={!prevProject}
        />
        <NextProjectButton
          href={nextProject ? `/works/${nextProject.SLUG}` : undefined}
          disabled={!nextProject}
        />
      </div>
    </div>
  );
}
