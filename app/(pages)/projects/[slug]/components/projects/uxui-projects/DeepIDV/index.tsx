"use client";

import React from "react";
import Overview from "../../../overview/Overview";
import { PROJECTS_CONST } from "@/(pages)/projects/const";
import { ProjectType } from "@/(pages)/projects/types";
import Image from "next/image";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import PrimarySection from "@/components/ui/Section/PrimarySection";
import { DEEPIDV_PROJECT } from "./const";
import deepidvAnimation from "../../../../../../../../public/video/projects/deepidv/deepidv-animation.json";
import { ShieldHalf, Unplug, Sparkle, Check } from "lucide-react";
import { Reflection } from "../../../Reflection/Reflection";
import PrevNextProjects from "@/components/ui/PrevNextProjects/PrevNextProjects";
import { ActiveDot } from "@/components/ActiveDot/ActiveDot";

export default function DeepSign() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "deepsign"
  );
  if (!project) return <div>Project not found.</div>;

  const hero = DEEPIDV_PROJECT.HERO;
  const challenge = DEEPIDV_PROJECT.CHALLENGE;
  const impact = DEEPIDV_PROJECT.IMPACT;
  const reflection = DEEPIDV_PROJECT.REFLECTION;

  const subtitleEl = (
    <>
      {hero.subtitle.split("enterprise verification")[0]}
      <span className="text-[#008BEF]">enterprise verification</span>
      {hero.subtitle.split("enterprise verification")[1] || ""}
    </>
  );

  return (
    <div className="px-5">
      <Overview project={project} />

      {/* HERO */}
      <section className="mt-14">
        <div className="2xl:container py-20 mx-auto overflow-hidden">
          <PrimarySection
            icon={
              <ShieldHalf
                size={16}
                className="text-grey_scale_700"
                strokeWidth={1.7}
              />
            }
            title={hero.title}
            subtitle={subtitleEl}
            description={hero.description}
            description2={hero.description2}
            visuals={hero.visuals}
          />
        </div>
      </section>

      {/* CHALLENGE */}
      <div className="2xl:container py-14 2xl:py-16 mx-auto overflow-hidden">
        <PrimarySection
          icon={
            <Unplug
              size={16}
              className="text-grey_scale_700"
              strokeWidth={1.7}
            />
          }
          title={challenge.subtext}
          subtitle={challenge.heading}
          description={challenge.description}
          description2={challenge.description2}
          visuals={challenge.visuals}
          options={challenge.options}
        />
      </div>

      {/* IMPACT */}
      <div className="container py-14 2xl:py-16 mx-auto">
        <div className="flex items-center gap-20 2xl:container">
          <div className="space-y-4 max-w-4xl">
            <SubTextBox
              icon={
                <Sparkle
                  size={17}
                  className="text-grey_scale_700"
                  strokeWidth={1.5}
                />
              }
            >
              {impact.subtext}
            </SubTextBox>

            <h2 className="text-start">{impact.heading}</h2>

            <div className="space-y-8 pt-5">
              {impact.bullets.map((b, idx) => (
                <div key={idx} className="flex">
                  <Check size={20} strokeWidth={3} className="text-blue mr-3" />
                  <div className="space-y-2">
                    <h4>{b.title}</h4>
                    <p className="lg:max-w-2xl">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {impact.image?.src ? (
            <Image
              src={impact.image.src}
              alt={impact.image.alt ?? "Graphic Image"}
              className="hidden md:block w-full h-auto max-w-[23rem] mx-auto rounded-2xl"
              width={400}
              height={400}
            />
          ) : null}
        </div>
      </div>
      <section className="">
        <div className="2xl:container py-20 mx-auto overflow-hidden">
          <PrimarySection
            icon={
              <ShieldHalf
                size={16}
                className="text-grey_scale_700"
                strokeWidth={1.7}
              />
            }
            title={reflection.title}
            subtitle={reflection.subtext}
            description={reflection.description}
            description2={reflection.description2}
            visuals={reflection.visuals}
          />
        </div>
      </section>

      <PrevNextProjects
        currentSlug={project.SLUG}
        projects={PROJECTS_CONST.PROJECTS}
      />
    </div>
  );
}
