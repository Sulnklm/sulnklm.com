import type { ExperienceItem } from "../home/types";

export const ABOUT_CONST = {
  HERO: {
    BACKGROUND: {
      SRC: "/images/about/hero/grassland.jpg",
      ALT: "Grassland Image",
    },
    IMAGE1: {
      SRC: "/images/about/hero/about1.jpg",
      ALT: "Image of Suin 1",
    },
    IMAGE2: {
        SRC: "/images/about/hero/about2.jpg",
        ALT: "Image of Suin 2",
      },
      IMAGE3: {
        SRC: "/images/about/hero/about3.jpg",
        ALT: "Image of Suin 3",
      },
    HEADING1: "Hi again!",
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
  