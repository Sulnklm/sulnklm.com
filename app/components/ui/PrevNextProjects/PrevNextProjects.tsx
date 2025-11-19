"use client";

import React from "react";
import { GridProjectCard } from "../ProjectCard/GridProjectCard";
import { ProjectType } from "@/(pages)/projects/types";
import OrangeTextBox from "../OrangeTextBox/OrangeTextBox";

type Props = {
  currentSlug: string;
  projects: ProjectType[];
  title?: string;
  className?: string;
};

export default function PrevNextProjects({
  currentSlug,
  projects,
  title = "View my other projects ✦",
  className = "",
}: Props) {
  if (!projects?.length) return null;

  const len = projects.length;
  const idx = Math.max(
    0,
    projects.findIndex((p) => p.SLUG === currentSlug)
  );

  const prev = projects[(idx - 1 + len) % len];
  const next = projects[(idx + 1) % len];

  return (
    <section className={`lg:container py-20 2xl:py-24 border-t border-dashed ${className}`}>
      <OrangeTextBox text="Explore More"></OrangeTextBox>
      <div className="pt-5 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
        <div aria-label="Previous project">
          <GridProjectCard PROJECT={prev as any} />
        </div>
        <div aria-label="Next project">
          <GridProjectCard PROJECT={next as any} />
        </div>
      </div>
    </section>
  );
}
