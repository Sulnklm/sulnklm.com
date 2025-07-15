import type { ExperienceItem } from "./types";

export const HOME_HERO_CONST = {
  HEADSHOT: {
    SRC: "/images/home/headshot.png",
    ALT: "Headshot of Suin",
  },

  SUNSHINE: {
    SRC: "/images/home/sunshine.svg",
    ALT: "Sunshine image",
  },

  STAMP: {
    SRC: "/images/home/stamp.png",
    ALT: "Stamp of Suin",
  },

  TITLE: {
    PART1: "Hello,",
    PART2: "I'm",
    PART3: "Suin.",

    PART4: "I",
    PART5: "design",
    PART6: "&",
    PART7: "code ✦",
  },

  DESCRIPTION: {
    DESCRIPTION1: "✓ Based in Vancouver, BC, Canada.",
    DESCRIPTION2: "✓ I focus on usability, clarity, and aesthetics.",
  },
};

export const WORKS_CONST = {
  HEADING1: "Key",
  HEADING2: "✦",
  HEADING3: "Projects",
};
export const INTRO_CONST = {
  HEADING1:
    "I create story-driven designs and enjoy the thoughtful process of coding that brings ideas to life.",
    HEADING2:
    "I create story-driven designs and enjoy the thoughtful process of coding that brings ideas to life.",
    BUTTON: {
    HREF: "/about",
    TEXT: "Learn more",
  },
};
export const EXPERIENCE_CONST: ExperienceItem[] = [
  {
    time: "May - July 2025",
    position: "Media designer",
    company: "Internship @ Pixel Ramen",
    images: [
      {
        src: "/images/about/experience/pixelramen1.png",
        alt: "Pixel Ramen Post Design Image 1",
      },
      {
        src: "/images/about/experience/pixelramen2.png",
        alt: "Pixel Ramen Post Design Image 2",
      },
      {
        src: "/images/about/experience/pixelramen3.png",
        alt: "Pixel Ramen Post Design Image 3",
      },
      {
        src: "/images/about/experience/pixelramen4.png",
        alt: "Pixel Ramen Post Design Image 4",
      },
    ],
    description: "Designed scroll-stopping visuals for social media",
  },
  {
    time: "May - July 2025",
    position: "Web developer",
    company: "Internship @ Convergence",
    images: [
      {
        src: "/images/about/experience/convergence.png",
        alt: "Convergence logo",
      },
      {
        src: "/images/about/experience/simuhealth.png",
        alt: "Simuhealth logo",
      },
    ],
    description:
      "Worked on several exciting projects integrating UI/UX and frontend",
  },
  {
    time: "May - July 2025",
    company: "Freelance",
    position: "Designer & Developer",
    images: [
      {
        src: "/images/about/experience/pixelramen3.png",
        alt: "Graphic design image3",
      },
      { src: "/images/home/experience4.png", alt: "Graphic design image4" },
    ],
    description:
      "Worked on several exciting projects integrating UI/UX and frontend",
  },
];
