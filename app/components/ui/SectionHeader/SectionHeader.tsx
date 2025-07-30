import React from "react";
import { SubTextBox } from "../SubTextBox/SubTextBox";

type SectionHeaderProps = {
  subText: string;
  heading: string;
  icon?: React.ReactNode;
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subText,
  heading,
  icon,
  className = "",
}) => (
  <section className={`flex flex-col items-center ${className}`}>
    <SubTextBox icon={icon} additionalClass="mx-auto">
      {subText}
    </SubTextBox>
    <h2 className="mb-10">{heading}</h2>
  </section>
);
