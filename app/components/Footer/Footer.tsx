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

const Footer = () => {
  return (
    <footer className="relative z-[10000] mt-10 m-5 dark:m-0">
      <BackToTopButton />
      <div className="relative z-[10] w-full h-full sm:h-[85vh] md:h-[45vh] pt-16 lg:pt-24 bg-black overflow-hidden rounded-3xl">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <StarsBackground />
          <ShootingStars />
        </div>

        <div className="container mx-auto px-6 lg:px-10 h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="order-1 md:order-none grid justify-start gap-2 md:container">
            <h2 className="text-white/90 text-start md:text-3xl">
              {FOOTER_CONST.HEADING1}
            </h2>
            <PointerHighlight
              rectangleClassName="!border-white/60 bg-coral-700/5 dark:bg-coral/5"
              pointerClassName="text-coral"
            >
              <h2 className="text-white text-5xl md:text-6xl leading-[1.1]">
                {FOOTER_CONST.HEADING2}
              </h2>
            </PointerHighlight>

            <p className="hidden md:block text-sm pb-10 2xl:text-base text-center text-white/60 mt-10 text-nowrap">
              {FOOTER_CONST.COPYRIGHT1_DESKTOP}
            </p>
          </div>

          <ul className="order-2  md:container md:order-none h-full flex flex-col justify-center gap-4 md:gap-6 md:justify-start md:items-end">
            {SOCIALS.map((s) => (
              <li key={s.label} className="flex items-center md:justify-end ">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center gap-3 py-2 md:py-1 lg:py-0 text-white/70 hover:bg-grey_scale_1000 lg:rounded-lg lg:duration-100 lg:p-2 transition-colors"
                >
                  <span className="text-sm md:text-base">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="order-3 md:hidden mt-6">
            <p className="text-xs sm:text-sm text-center text-white/70 pb-5">
              {FOOTER_CONST.COPYRIGHT1_MOBILE}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
