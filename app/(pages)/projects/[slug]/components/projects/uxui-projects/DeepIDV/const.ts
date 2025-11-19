import { VisualItem } from "@/components/ui/Section/PrimarySection";

export const DEEPIDV_PROJECT = {
  HERO: {
    subtext: "My Experience at DeepIDV",
    title: "My Experience at DeepIDV",
    subtitle:
      "Designing for clarity, scalability, and trust across enterprise verification platforms",

    description: `At DeepIDV, I led the end-to-end UX design across multiple identity verification products — from the DeepCam kiosk used for on-site ID and face verification to enterprise platforms like DeepDoc, DeepSign, and DeepIDV.`,

    description2: `But the e-signature (DeepSign) project challenged me
to think beyond single-screen design and focus on the entire
ecosystem connecting two users: the admin who creates and
manages signatures, and the signer who completes the
verification and signing flow. I redesigned the entire journey
to make it clearer, faster, and more secure, aligning every
screen with the global design system and strengthening
collaboration across product teams.`,

    icon: "ShieldHalf",

    visuals: [
      {
        type: "lottie",
        src: "/video/projects/deepidv/deepidv-animation.json", // OK now
        boxHeight: { base: 240, md: 400, lg: 440 },
        scale: 2,
      },
      {
        type: "image",
        src: "/images/projects/deepidv/card.webp",
        alt: "Poster Image",
        boxHeight: { base: 240, md: 400, lg: 440 },
        objectFit: "contain",
        scale: 0.9,
      },
    ] satisfies VisualItem[],
    options: {
      bg: "bg-gray-100/30 dark:bg-white/5",
      rounded: "rounded-xl",
      padding: "p-10 md:p-12",
      align: "center",
      customGrid: "grid-cols-1 md:grid-cols-3",
    },
  },

  CHALLENGE: {
    subtext: "Challenge",
    heading: "What was not working?",
    lead: "Lack of clarity and flexibility in the signing experience",
    description: `The signing flow was not optimized for different user types and scenarios.
Creators struggled to manage multiple participants efficiently and had limited visibility into the signing order or document status.
For signers, the verification step felt long and unclear, making it difficult to understand progress and reducing confidence throughout the process.
`,
    description2: `These issues created friction on both sides, revealing potential usability gaps and highlighting the need for a more guided and consistent signing experience.`,
    visuals: [
      {
        type: "image",
        src: "/images/projects/deepidv/signers.svg",
        alt: "Challenges graphic 2",
        boxHeight: { base: 240, md: 300, lg: 340 },
        objectFit: "cover",
      },
      {
        type: "image",
        src: "/images/projects/deepidv/test.svg",
        alt: "Challenges graphic 2",
        boxHeight: { base: 240, md: 300, lg: 340 },
        objectFit: "contain",
        translateX: "-15%",
        translateY: "23%",
        scale: 1.5,
      },
      {
        type: "image",
        src: "/images/projects/deepidv/sign.webp",
        alt: "Challenges graphic 1",
        boxHeight: { base: 240, md: 300, lg: 340 },
        objectFit: "contain",
        scale: 0.9,
      },
    ] satisfies VisualItem[],
    options: {
      customGrid: " md:grid-cols-3",
    },
    icon: "Unplug",
  },

  IMPACT: {
    subtext: "Impact & Value Proposition",
    heading: "How did this project help the business and users?",
    bullets: [
      {
        title: "Streamlined complex signing workflows for creators",
        description:
          "Restructured the flow to guide creators in preparing, organizing, and sending documents more efficiently — reducing errors and saving setup time.",
        icon: "Check",
      },
      {
        title: "Introduced flexibility across multiple signing scenarios",
        description:
          "Designed a consistent and scalable flow that adapts to real-world signing cases, improving reliability and reducing confusion for all participants.",
        icon: "Check",
      },
      {
        title: "Enhanced clarity and confidence for signers",
        description:
          "Simplified the verification process into more guided steps, helping users understand where they are in the process and complete signing with confidence.",
        icon: "Check",
      },
    ],
    image: {
      src: "/images/projects/deepidv/poster.jpg",
      alt: "Poster Image",
    },
    icon: "Sparkle",
  },

  REFLECTION: {
    subtext: "Hear More About This Project! 🔒",
    title: "Reflection",
    description:
      "This experience taught me the importance of designing clarity and trust within complex systems while balancing business needs with user empathy in every decision.",
    description2:
      "Since this project is under a strict NDA, I can’t publicly share the full visuals and process here. However, I’d love to share more about the challenges, insights, and design decisions that shaped this work. Let’s connect and chat!",
    visuals: [
      {
        type: "image",
        src: "/images/projects/deepidv/complete.webp",
        alt: "Challenges graphic 2",
        boxHeight: { base: 340, md: 400, lg: 460 },
        objectFit: "contain",
        scale: 0.85,
      },
    ] satisfies VisualItem[],
  },
};
