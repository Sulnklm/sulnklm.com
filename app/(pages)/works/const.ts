export const PROJECTS_CONST = {
  SUBTEXT: "From design to dev",
  HEADING1: "My ✦",
  WORKS_HEADING: "",
  PROJECTS: [
    {
      // Project 1
      SLUG: "pixeed",
      TITLE: "Pixeed",
      SHOW_SAFARI: true,
      SUBTITLE:
        "How should we close the feedback chaos for small client-based teams?",
      OVERVIEW:
        "Helping small teams manage feedback loops—clearly, visually, and collaboratively.",
      IMAGE: {
        SRC: "/images/projects/yumpick/thumbnail.png",
        ALT: "YumPick Hero Image",
      },
      TOOLS: [
        { name: "Photoshop", src: "/images/tools/photoshop.svg" },
        { name: "Illustrator", src: "/images/tools/illustrator.svg" },
        { name: "Figma", src: "/images/tools/figma.png" },
      ],
      DISCIPLINE: ["Case Study"],
      TIMELINE: "2 Weeks, July 2025",
      CATEGORY: ["all", "case-study", "selected"],
    },
    {
      // Project 2
      SLUG: "flickmood",
      SHOW_SAFARI: true,
      URL: "flickmood.sulnklm.com",
      VIDEO: "/video/projects/flickmood/flickmood.mp4",
      TITLE: "FlickMood",
      SUBTITLE: "Discover movies that match your mood",
      OVERVIEW:
        "A personal project combining web design and frontend development with TMDb API",
      IMAGE: {
        SRC: "/images/projects/flickmood/thumbnail.png",
        ALT: "FlickMood Hero Image",
      },
      TOOLS: [
        { name: "Figma", src: "/images/tools/figma.png" },
        { name: "Tailwind CSS", src: "/images/tools/tailwind.svg" },
        { name: "React", src: "/images/tools/react.svg" },

      ],
      DISCIPLINE: ["Web Development"],
      TIMELINE: "2 Weeks, December 2024",
      CATEGORY: ["all", "selected", "development"],
      PROJECT_TYPE: ["Frontend Development","Web Application", "API Integration","Web Design"],
      GITHUB_LINK: {
        LABEL: "GitHub",
        HREF: "https://github.com/Sulnklm/FlickMood",
      },
      LIVE_LINK: {
        LABEL: "View Live",
        HREF: "https://flickmood.sulnklm.com",
      },
    },

    {
      // Project 3
      SLUG: "yumpick",
      TITLE: "YumPick",
      SUBTITLE: "Can one app end all your dining app-hopping?",
      IMAGE: {
        SRC: "/images/projects/yumpick/thumbnail.png",
        ALT: "YumPick Hero Image",
      },
      OVERVIEW: "A personal project unifying dining pain points overlooked by multiple apps",
      TOOLS: [
        { name: "Photoshop", src: "/images/tools/photoshop.svg" },
        { name: "Illustrator", src: "/images/tools/illustrator.svg" },
        { name: "Figma", src: "/images/tools/figma.png" },
      ],
      DISCIPLINE: ["Case Study", "App Development"],
      TIMELINE: "4 Weeks, December 2024",
      CATEGORY: ["all", "case-study"],
      PROJECT_TYPE: ["User Research","UI Design", "Mobile Prototyping"],
      GITHUB_LINK: {
        LABEL: "GitHub",
        HREF: "https://github.com/Sulnklm/yumpick",
      },
      FIGMA_LINK: {
        LABEL: "View Prototype",
        HREF: "https://flickmood.sulnklm.com",
      },
    },
    {
      // Project 4
      SLUG: "wishbond",
      TITLE: "Wishbond",
      SUBTITLE: "Gift-Giving Made Easy: WishBond App UX/UI Case Study",
      IMAGE: {
        SRC: "/images/projects/wishbond/thumbnail.png",
        ALT: "Wishbond Hero Image",
      },
      TOOLS: [
        { name: "Photoshop", src: "/images/tools/photoshop.svg" },
        { name: "Illustrator", src: "/images/tools/illustrator.svg" },
        { name: "Figma", src: "/images/tools/figma.png" },
      ],
      DISCIPLINE: ["Case Study"],
      TIMELINE: "January 2025",
      CATEGORY: ["all", "case-study"],
    },
  ],
};
