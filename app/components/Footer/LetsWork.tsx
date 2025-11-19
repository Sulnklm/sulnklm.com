"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ShootingStars } from "./ShootingStars/ShootingStars";
import { StarsBackground } from "./StarsBackground/StarsBackground";
import { FOOTER_CONST } from "./const";
import { PointerHighlight } from "../ui/PointerHighlight/PointerHighlight";
import { EXTERNAL_LINKS } from "@/lib/const";
import BackToTopButton from "../ui/BackToTopButton/BackToTopButton";
import { Button } from "../Button/Button";
import PatternBackground from "../ui/PatternBackground/PatternBackground";

const SOCIALS = [
  {
    url: EXTERNAL_LINKS.LINKEDIN.href,
    label: EXTERNAL_LINKS.LINKEDIN.label,
  },
  {
    url: EXTERNAL_LINKS.GITHUB.href,
    label: EXTERNAL_LINKS.GITHUB.label,
  },
  {
    url: EXTERNAL_LINKS.RESUME.href,
    label: EXTERNAL_LINKS.RESUME.label,
  },
  {
    url: `mailto:${EXTERNAL_LINKS.CONTACT.HREF}`,
    label: EXTERNAL_LINKS.CONTACT.LABEL,
  },
];

const LetsWork = () => {
  return (
    <div className="place-content-center relative h-[35vh] overflow-hidden">
      {/* <PatternBackground /> */}
      <div className="scale-[350%]  mx-auto place-content-center grid place-items-center">
        <Button
          href={EXTERNAL_LINKS.CONTACT.LABEL}
          theme="secondary"
          // icon={<ArrowRight size={16} className="ml-2 -rotate-45 " />}
          additionalClasses="text-base font-[450] rounded-[11px] !!hover:rotate-0"
        >
          ✦
        </Button>
      </div>
    </div>
  );
};

export default LetsWork;
