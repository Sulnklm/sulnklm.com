"use client";

import * as React from "react";
import { BentoCard, BentoGrid } from "../bento-grid";
import { SubTextBox } from "../SubTextBox/SubTextBox";

type HeaderProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  className?: string;
  titleSlot?: React.ReactNode;      // optional extra slot under the SubTextBox
};

type FeatureProp = {
  // Core BentoCard props (all optional; we’ll fill safe defaults)
  Icon?: React.ComponentType<any>;
  name?: string;
  description?: string;
  href?: string;
  cta?: string;
  className?: string;
  background?: React.ReactNode;

  // Anything else you want to pass through (future-proof)
  [key: string]: any;
};

type GridOptions = {
  gridCols?: string;         // e.g. "grid-cols-1 md:grid-cols-12"
  gridClassName?: string;    // extra classes for BentoGrid
  cardClassName?: string;    // default className applied to every BentoCard
};

export type BentoSectionProps = {
  header: HeaderProps;
  features: FeatureProp[];
  grid?: GridOptions;
  containerClassName?: string;   // wrapper <section> classes
  contentClassName?: string;     // inner container div classes
  showHeader?: boolean;          // allow hiding header
};

export function BentoSection({
  header,
  features,
  grid,
  containerClassName,
  contentClassName,
  showHeader = true,
}: BentoSectionProps) {
  const {
    gridCols = "grid-cols-1 md:grid-cols-12",
    gridClassName = "",
    cardClassName = "",
  } = grid ?? {};

  return (
    <section className={containerClassName}>
      <div className={`container mx-auto overflow-hidden ${contentClassName ?? ""}`}>
        {showHeader && (
          <header className={`space-y-4 ${header.className ?? ""}`}>
            <SubTextBox icon={header.icon}>{header.title}</SubTextBox>
            <div className="space-y-4">
              <h2 className="text-start max-w-xl">{header.subtitle}</h2>
              <p className="max-w-4xl text-grey_scale_900 leading-relaxed">
                {header.description}
              </p>
              {header.titleSlot}
            </div>
          </header>
        )}

        <BentoGrid className={`gap-4 ${gridCols} ${gridClassName}`}>
          {features.map((f, idx) => {
            const {
              Icon = () => <span className="sr-only">icon</span>,
              name = "",
              description = "",
              href = "#",
              cta = "",
              className = "",
              background = null,
              ...rest
            } = f;

            return (
              <BentoCard
                key={idx}
                Icon={Icon}
                name={name}
                description={description}
                href={href}
                cta={cta}
                background={background}
                className={`p-0 overflow-hidden ${cardClassName} ${className}`}
                {...rest}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
