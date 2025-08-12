// components/ReflectionCard.tsx
import React from "react";
import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { IconCard } from "../IconCard/IconCard";

interface ReflectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  description2?: string;
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
}

export function ProjectDescriptionCard({
  icon,
  title,
  description,
  description2,
  image,
}: ReflectionCardProps) {
  return (
    <InsetBlockInside>
      <div className="grid gap-3.5">
        <IconCard>{icon}</IconCard>
        <h4>{title}</h4>
        <p>{description}</p>
        {description2 && <p>{description2}</p>}
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-auto rounded-2xl mt-8 ${
              image.className ?? ""
            }`}
          />
        )}
      </div>
    </InsetBlockInside>
  );
}
