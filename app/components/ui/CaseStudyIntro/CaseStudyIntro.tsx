"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { ActiveDot } from "@/components/ActiveDot/ActiveDot";

interface CaseStudyIntroProps {
  problem: React.ReactNode;
  mission: React.ReactNode;
  lightImage: { src: string; alt: string };
  darkImage: { src: string; alt: string };
  className?: string;
}

export const CaseStudyIntro: React.FC<CaseStudyIntroProps> = ({
  problem,
  mission,
  lightImage,
  darkImage,
  className,
}) => {
  return (
    <section className={clsx("space-y-16", className)}>
      <div className="grid lg:flex lg:container gap-10 lg:gap-16 xl:gap-20">
        <div>
          <div className="flex items-center gap-3">
            <ActiveDot />
            <h4 className="mb-3">The Problem</h4>
          </div>
          <p>{problem}</p>
        </div>

        <div>
          <h4 className="mb-3">The Mission</h4>
          <p>{mission}</p>
        </div>
      </div>

      <div className="lg:container">
        <Image
          src={darkImage.src}
          alt={darkImage.alt}
          width={1500}
          height={800}
          className="hidden dark:block rounded-xl mx-auto"
        />
        <Image
          src={lightImage.src}
          alt={lightImage.alt}
          width={1500}
          height={800}
          className="dark:hidden rounded-xl mx-auto"
        />
      </div>
    </section>
  );
};
