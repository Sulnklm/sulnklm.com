import type { ExperienceItem } from "../home/types";

export const ABOUT_CONST = {
  SUBTEXT: "A closer look at who I am",

  HERO: {
    BACKGROUND: {
      SRC: "/images/about/hero/grassland.jpg",
      ALT: "Grassland Image",
    },
    IMAGE1: {
      SRC: "/images/about/hero/about.webp",
      ALT: "Image of Suin 1",
    },
    IMAGE2: {
      SRC: "/images/about/hero/about4.jpg",
      ALT: "Image of Suin 2",
    },
    IMAGE3: {
      SRC: "/images/about/hero/about5.jpg",
      ALT: "Image of Suin 3",
    },
    TEST: {
      SRC: "/images/about/hero/test.png",
      ALT: "Image of Suin 3",
    },
    HEADING1: "Hi again!",
  },
  MY_STORY: {
    SUBTEXT: "My story",
    TITLE1: "Hi, I’m Suin — a strategic designer driven by curiosity.",
    PARAGRAPH1:
      "I first became interested in user experience after switching to a new banking app and realizing how much smoother and more intuitive it felt. It made me curious about what makes everyday interactions feel effortless, and why those small decisions matter so much. That moment is what sparked my interest in UX/UI design and shaped the way I think about building clear, intentional experiences.",
    TITLE2: "Where I stand today.",
    PARAGRAPH2:
      "Today, I work on simplifying complex verification flows and dashboard systems. I focus on understanding why a problem exists before deciding how to solve it, and I help my team make sense of messy systems by turning them into clearer, more sustainable structures and interactions. My front-end experience also helps bridge the gap between ideas and implementation, making sure the solutions we design are both realistic and consistent in practice.",
  },
};

export const SKILLS_CONST = {
  HEADING: "Key ✦ Skills",
  DEVELOPMENT_TOOLS: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "Express.js",
    "PHP",
    "WordPress",
    "Git",
    "GitHub",
    "Postman",
    "Framer Motion",
    "GSAP",
  ],
  DESIGN_TOOLS: [
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "After Effects",
    "Premiere Pro",
    "Dimension",
  ],
  DEVELOPMENT_SKILLS: [],
  DESIGN_SKILLS: [
    "UX Research",
    "Information Architecture",
    "Design System",
    "Wireframing",
    "Usability Testing",
    "Web Design",
    "Branding",
    "Marketing Graphics",
  ],
};

export const EXPERIENCE_CONST: ExperienceItem[] = [
  {
    time: "Sep 2025 - Present",
    position: "UX/UI Engineer",
    company: "@ DeepIDV",
    images: [
      {
        src: "/images/about/experience/deepidv.svg",
        alt: "DeepIDV logo",
      },
    ],
    description:
      "Led end-to-end UX/UI design for DeepIDV’s suite of enterprise identity verification products, including DeepDoc, DeepCam, and DeepSign. Focused on streamlining complex KYC and e-signing flows, improving clarity, and strengthening visual and structural consistency across the product ecosystem.",
  },
  {
    time: "May - July 2025",
    position: "Front-End Developer",
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
      "Worked on both design and development for SimuHealth, a SaaS healthcare training platform. Supported the redesign of the survey flow to improve clarity and completion rates, and assisted with QA testing and front-end fixes across the dashboard to enhance overall usability and consistency.",
  },
  {
    time: "May - July 2025",
    position: "Media Designer",
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
    description:
      "Created scroll-stopping branded graphics and motion content for Pixel Ramen’s social media channels, turning ideas into visuals that felt cohesive, playful, and true to the brand.",
  },
  {
    time: "Nov 2024 – Apr 2025",
    company: "Freelance",
    position: "UX/UI Designer & Front-End Developer",
    images: [
      {
        src: "/images/about/experience/freelance1.png",
        alt: "Graphic design image3",
      },
      { src: "/images/about/experience/freelance2.png", alt: "Graphic design image4" },
      { src: "/images/about/experience/freelance3.png", alt: "Graphic design image4" },

    ],
    description:
      "Led the redesign of client websites for customer-facing brands, restructuring complex layouts and crafting interfaces that better reflected each brand’s identity. Collaborated with back-end developers while handling front-end implementation to deliver cohesive, user-centered experiences from design to code.",
  },
];
