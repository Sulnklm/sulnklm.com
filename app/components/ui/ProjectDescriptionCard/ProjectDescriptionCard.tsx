// components/ReflectionCard.tsx
import React from "react";
import { InsetBlockInside } from "@/components/ui/InsetBlockInside";
import { IconCard } from "../IconCard/IconCard";

interface ReflectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProjectDescriptionCard({ icon, title, description }: ReflectionCardProps) {
  return (
    <InsetBlockInside>
      <div className="grid gap-3.5">
        <IconCard>
          {icon}
        </IconCard>
        <h4 >{title}</h4>
        <p>{description}</p>
      </div>
    </InsetBlockInside>
  );
}
