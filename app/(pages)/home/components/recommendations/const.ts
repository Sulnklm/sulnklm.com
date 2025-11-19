// const.ts
export type Recommendation = {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatarSrc: string;
  avatarAlt?: string;
  quote?: string;
  imageClassName?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const recommendations: Recommendation[] = [
  {
    id: "joey-chan",
    name: "Joey Chan",
    role: "Creative Director",
    company: "DeepIDV",
    avatarSrc: "/images/home/joey.webp",
    avatarAlt: "Portrait of Joey Chan",
    quote:
      "I have had the absolute privilege of working alongside Suin on a variety of frontend and UI/UX projects at DeepIDV. From the day she joined us she proved to have extensive knowledge on UI/UX principles and her commitment to writing clean, scalable code. Her design skills are extremely versatile and go beyond user interface design. She has completely elevated our online presence, such cases include designing our email templates, refining presentations, and editing some of our product demo videos. Suin is a dedicated, proactive problem-solver and such a pleasure to work with. She has my highest recommendation!",
  },
  {
    id: "sharleen-yan",
    name: "Sharleen Yan",
    role: "Head of Product Design",
    company: "SimuHealth & Convergence",
    avatarSrc: "/images/home/sharleen.webp",
    avatarAlt: "Portrait of Sharleen Yan",
    quote:
      "Suin consistently shares thoughtful ideas and has a solid eye for clean, well-structured design. She’s also dependable on the development side, contributing to both front-end tasks and QA fixes with care. She’s reliable, steady, and has grown well across both design and development.",
  },

  {
    id: "danny-lai",
    name: "Danny Lai",
    role: "UX/UI Engineer",
    company: "DeepIDV",
    avatarSrc: "/images/home/danny.jpeg",
    avatarAlt: "Portrait of Danny Lai",
    quote:
      "I had the pleasure of working with Suin, and I can confidently say she is one of the most talented UI/UX designers and front-end developers I’ve met. What truly sets Suin apart is her initiative in turning complex ideas into clean, intuitive interfaces. She regularly went above and beyond by proposing improvements, refining user flows, and elevating the overall product experience. Her development work reflects the same quality: clean, scalable, and easy to maintain. She’s hardworking, creative, and elevates every project she touches. Collaborating with her was effortless, and I highly recommend Suin as any team would be lucky to have her.",
  },
  {
    id: "kritika-bhunwal",
    name: "Kritika Bhunwal",
    role: "Creative Designer",
    avatarSrc: "/images/home/kritika.webp",
    avatarAlt: "Portrait of Kritika Bhunwal",
    quote:
      "Suin has been a pivotal part of my design journey. She taught me how to overcome creative blocks and start again with the same motivation and energy. She’s a quick learner, an inspiring teammate, and a great mentor.",
  },

  {
    id: "empty",
    name: "Want to collaborate?",
    role: "Let's connect and chat!",
    avatarSrc: "/images/home/smile.svg",
    avatarAlt: "Smile Face",
    imageClassName: "opacity-90 dark:invert",
    quote: "",
    cta: {
      label: "Get in touch",
      href: "mailto:hello@sulnklm.com",
    },
  },
];
