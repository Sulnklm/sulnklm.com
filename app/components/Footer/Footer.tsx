"use client";
import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MoonStar,
  Sunrise,
  Sun,
  Sunset,
  SunMoon,
} from "lucide-react";
import { ShootingStars } from "./ShootingStars/ShootingStars";
import { StarsBackground } from "./StarsBackground/StarsBackground";
import { FOOTER_CONST } from "./const";
import { PointerHighlight } from "../ui/PointerHighlight/PointerHighlight";
import { useVancouverTime } from "@/hooks/useVancouverTime";
import { EXTERNAL_LINKS } from "@/lib/const";
import BackToTopButton from "../ui/BackToTopButton/BackToTopButton";
const ORBIT_RADIUS = "35vw";

function getOrbitStyle(angleDeg: number, radius = ORBIT_RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    position: "absolute" as const,
    left: `calc(50% + ${radius} * ${Math.cos(rad).toFixed(3)})`,
    top: `calc(50% - ${radius} * ${Math.sin(rad).toFixed(3)})`,
    transform: "translate(-50%, -50%)",
    zIndex: 101,
  };
}
const SOCIALS = [
  {
    icon: (
      <Github
        className="-rotate-[30deg] w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
        strokeWidth={1.2}
      />
    ),
    url: EXTERNAL_LINKS.GITHUB.href,
    label: EXTERNAL_LINKS.GITHUB.label,
    angle: 120,
    className:
      "text-white/90 backdrop-blur-md rounded-full p-2 hover:text-orange-400 transition-all",
  },
  {
    icon: (
      <Mail className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.2} />
    ),
    url: `mailto:${EXTERNAL_LINKS.CONTACT.HREF}`,
    label: EXTERNAL_LINKS.CONTACT.LABEL,
    angle: 90,
    className:
      "text-white/90 backdrop-blur-md rounded-full p-2 hover:text-orange-400 transition-all",
  },
  {
    icon: (
      <Linkedin
        className="rotate-[30deg] w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
        strokeWidth={1.2}
      />
    ),
    url: EXTERNAL_LINKS.LINKEDIN.href,
    label: EXTERNAL_LINKS.LINKEDIN.label,
    angle: 60,
    className:
      "text-white/90 backdrop-blur-md rounded-full p-2 hover:text-orange-400 transition-all",
  },
];

const Footer = () => {
  const { str: timeStr, hour } = useVancouverTime();
  const hourNum = hour;
  let Icon = Sun;
  if (hourNum >= 0 && hourNum < 4) {
    Icon = MoonStar; // (00~03)
  } else if (hourNum >= 4 && hourNum < 7) {
    Icon = Sunrise; // (04~06)
  } else if (hourNum >= 7 && hourNum < 18) {
    Icon = Sun; //(07~10)
    // } else if (hourNum >= 11 && hourNum < 18) {
    //   Icon = SunMoon; // (11~17)
  } else if (hourNum >= 18 && hourNum < 20) {
    Icon = Sunset; // (18~19)
  } else if (hourNum >= 20 && hourNum < 24) {
    Icon = MoonStar; // (20~23)
  }

  return (
    <footer className="relative mt-10 m-5 dark:m-0">
      {/* <div className="hidden lg:flex gap-2 bg-white rounded-lg px-3 py-1 absolute bottom-5 left-5 dark:right-10 w-fit z-[1000] text-white dark:text-yellow-300">
        <Icon size={17} strokeWidth={1.9} className="text-grey_scale_1000" />
        <p className="!text-sm text-nowrap dark:text-grey_scale_1000">
          {FOOTER_CONST.TIME}{timeStr}
        </p>
      </div> */}
        <BackToTopButton />
      <div className="relative z-[600] w-full h-[60vh] sm:h-[85vh] lg:h-[90vh] pt-20 lg:pt-24 bg-primary dark:bg-black overflow-hidden rounded-3xl">
        <StarsBackground />
        <ShootingStars />
        <div className="grid justify-center -translate-x-2">
          <div className="grid justify-center items-sate gap-1">
            <h2 className="text-white/90 dark:text-white/90 md:text-4xl text-start font-PerfectlyNineties tracking-normal">
              {FOOTER_CONST.HEADING1}
            </h2>
            <PointerHighlight
              rectangleClassName="!border-orange-200 bg-orange-700/5 dark:bg-orange-700/5"
              pointerClassName="text-coral"
            >
              <h2 className="text-white text-6xl md:text-7xl">
                {FOOTER_CONST.HEADING2}
              </h2>
            </PointerHighlight>
          </div>
        </div>
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 lg:-translate-y-72">
          {/* orbit */}
          <div className="relative w-full h-[60vw] min-h-[500px] max-h-[800px] flex justify-center items-center scale-125 lg:scale-100">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full !border-grey_scale_900 dark:border-grey_scale_800 border border-dashed"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
            {SOCIALS.map((s, i) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={getOrbitStyle(s.angle)}
                className={s.className}
              >
                {s.icon}
              </a>
            ))}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full !border-grey_scale_900 dark:border-grey_scale_800 border border-dashed"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border !border-grey_scale_900 dark:border-grey_scale_800 border-dashed"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
          </div>
        </div>
        <div className="absolute right-0 left-0 bottom-0 bg-primary/5 backdrop-blur-3xl py-5 md:py-4">
          <p className="text-xs sm:text-sm text-center !text-grey_scale_800 hidden md:block">
            {FOOTER_CONST.COPYRIGHT1_DESKTOP}
          </p>
          <p className="text-xs sm:text-sm text-center !text-grey_scale_800 block md:hidden">
            {FOOTER_CONST.COPYRIGHT1_MOBILE}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
