export const PROJECTS_CONST = {
  SUBTEXT: "From design to dev",
  HEADING1: "My ✦",
  WORKS_HEADING: "",
  PROJECTS: [
    {
      // Project 1
      SLUG: "pixeed",
      TITLE: "Pixeed",
      SUBTITLE:
        "How might we turn scattered client video feedback into a clear workflow?",
      OVERVIEW:
        "AI-powered tool that transforms scattered client video feedback into clear, actionable tickets for small teams.",
      IMAGE: {
        SRC: "/images/projects/pixeed/pixeed-thumbnail.jpg",
        ALT: "YumPick Hero Image",
      },
      THUMBNAIL1: {
        SRC: "/images/projects/pixeed/pixeed-thumbnail.jpg",
        ALT: "FlickMood Thumbnail Image",
      },
      TOOLS: [
        { name: "Photoshop", src: "/images/tools/photoshop.svg" },
        { name: "Illustrator", src: "/images/tools/illustrator.svg" },
        { name: "Figma", src: "/images/tools/figma.png" },
      ],
      PROJECT_TYPE: ["User Research", "Web UI Design", "Prototyping"],
      DISCIPLINE: ["Case Study"],
      TIMELINE: "2 Weeks, July 2025",
      CATEGORY: ["all", "case-study", "selected"],
      FIGMA_LINK: {
        LABEL: "Prototype",
        HREF: "https://www.figma.com/board/pe65zE0tDSEV0ajTwXpQU5/YUMPICK?node-id=0-1&t=6xnbUKNRrCFdnWul-1",
      },
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
      THUMBNAIL1: {
        SRC: "/images/projects/flickmood/thumbnail-web.jpg",
        ALT: "FlickMood Thumbnail Image",
      },
      THUMBNAIL2: {
        SRC: "/images/projects/flickmood/flickmood-thumbnail-mobile.jpg",
        ALT: "FlickMood Thumbnail Image",
      },
      DISCIPLINE: ["Web Development"],
      TIMELINE: "2 Weeks, December 2024",
      CATEGORY: ["all", "selected", "development"],
      PROJECT_TYPE: [
        "Frontend Development",
        "Web Application",
        "API Integration",
        "Web Design",
      ],
      GITHUB_LINK: {
        LABEL: "GitHub",
        HREF: "https://github.com/Sulnklm/FlickMood",
      },
      LIVE_LINK: {
        LABEL: "Live Website",
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
      OVERVIEW:
        "A personal project unifying dining pain points overlooked by multiple apps",
      TOOLS: [
        { name: "Photoshop", src: "/images/tools/photoshop.svg" },
        { name: "Illustrator", src: "/images/tools/illustrator.svg" },
        { name: "Figma", src: "/images/tools/figma.png" },
      ],
      THUMBNAIL1: {
        SRC: "/images/projects/yumpick/yumpick-thumbnail.jpg",
        ALT: "FlickMood Thumbnail Image",
      },
      THUMBNAIL2: {
        SRC: "/images/projects/yumpick/yumpick-thumbnail2.jpg",
        ALT: "FlickMood Thumbnail Image",
      },
      DISCIPLINE: ["Case Study"],
      TIMELINE: "4 Weeks, December 2024",
      CATEGORY: ["all", "case-study", "selected"],
      PROJECT_TYPE: ["User Research", "UI Design", "Mobile Prototyping"],
      GITHUB_LINK: {
        LABEL: "GitHub",
        HREF: "https://github.com/Sulnklm/yumpick",
      },
      FIGMA_LINK: {
        LABEL: "Design Process",
        HREF: "https://www.figma.com/board/pe65zE0tDSEV0ajTwXpQU5/YUMPICK?node-id=0-1&t=6xnbUKNRrCFdnWul-1",
      },
    },
    {
      // Project 4
      SLUG: "wishbond",
      TITLE: "Coming Soon...",
      SUBTITLE: "I’m actively working on this project! 🔨 👩🏻‍💻",
      IMAGE: {
        SRC: "/images/projects/wishbond/thumbnail.png",
        ALT: "Wishbond Hero Image",
      },
      THUMBNAIL1: {
        SRC: "/images/projects/yumpick/yumpick-thumbnail.jpg",
        ALT: "Thumbnail Image",
      },
      TOOLS: [
        { name: "Photoshop", src: "/images/tools/photoshop.svg" },
        { name: "Illustrator", src: "/images/tools/illustrator.svg" },
        { name: "Figma", src: "/images/tools/figma.png" },
      ],
      DISCIPLINE: [],
      TIMELINE: "January 2025",
      CATEGORY: ["all", "coming soon"],
    },
  ],
};
