// import type { ProjectFeature } from "../../../overview/KeyFeatures/types";

// export const PIXEED_FEATURES: ProjectFeature[] = [
//   {
//     icon: "video",
//     label: "Time-Stamped feedback",
//     description: "Break long feedback video into manageable, time-stamped segments.",
//     image: "/images/projects/pixeed/pixeed-video-first.jpg",
//   },
//   {
//     icon: "sparkles",
//     label: "AI Chaptering & Ticketing",
//     description: "Automatic video chapters for clients, instant ticket creation for teams.",
//     image: "/images/projects/pixeed/pixeed-ai.jpg",
//   },
//   {
//     icon: "copyMinus",
//     label: "Duplicate Report Prevention",
//     description: "Instantly detects and flags potential duplicate tickets.",
//     image: "/images/projects/pixeed/pixeed-duplicate.jpg",
//   },
//   {
//     icon: "workflow",
//     label: "Shared Context",
//     description: "Keep clients and teams aligned with the same updates and explanations.",
//     image: "/images/projects/pixeed/pixeed-shared-context.jpg",
//   },
// ];

// export const PIXEED_PROJECT = {
//   KEY_FEATURES: {
//     SUBTEXT: "Quick preview",
//     HEADING: "Key Features ✦",
//   },

//   BACKGROUND: {
//     HEADING: "Why This Project?",
//     TITLE: "From Messy Feedback to Clear Action",
//     DESCRIPTION:
//       "While working on SaaS and freelance projects, my team often struggled with scattered feedback and lengthy user testing videos. Instead of accepting that messiness as normal, I wanted to rethink the workflow not just as a designer, but as someone who values clarity, context, and collaboration. This project wasn’t about finding a perfect solution but about exploring a more thoughtful, transparent, and collaborative way of working.",
//     IMAGE: {
//       SRC: "/images/projects/pixeed/background.png",
//       ALT: "Pixeed image",
//     },
//   },
//   PROBLEM: {
//     SUBTEXT: "Problem",
//     HEADING: "Real-World Frustration",
//     TITLE: "Where things often get messy",
//     DESCRIPTION: {
//       1: "In small teams, client feedback often plays a key role in QA. But the way feedback comes in, whether through vague videos, scattered emails, or out-of-sync DMs, creates real friction.",
//       2: "🌀 Without context, feedback gets misunderstood or misprioritized.",
//       3: "🔁 Teams unknowingly revisit the same issue, unsure if it is new, resolved, or still in development.",
//       4: "💬 Designers and developers repeat the same explanations because past decisions were not visible.",
//       5: "The result? Duplicate tickets, wasted time, and broken focus for both the team and the client. This inefficiency did not come from laziness. It came from a lack of visibility. It does not just slow down the team, it breaks the loop.",
//     },
//     IMAGE: {
//       SRC: "/images/projects/pixeed/problem.jpg",
//       ALT: "Pixeed image",
//     },

//     IMAGE2: {
//       SRC: "/images/projects/pixeed/as-is-flow.jpg",
//       ALT: "Pixeed As-is-flow image",
//     },
//   },
//   COMPETITOR_ANALYSIS: {
//     HEADING: "Alternative Approaches to Client Feedback",
//     IMG1: {
//       SRC: "/images/projects/pixeed/pixeed-competitors.jpg",
//       ALT: "Competitor Analysis Image",
//     },
//     IMG2: {
//       SRC: "/images/projects/pixeed/pixeed-competitors-table.jpg",
//       ALT: "Competitor Analysis Image",
//     },
//     TITLE: "Video-first vs. Pin-on-page: What’s the Difference?",
//     DESCRIPTION:
//       "Tools like Marker.io and BugHerd focus on pin-on-page annotations. This is perfect for quick visual fixes, copy tweaks, or spotting small UI glitches. You click directly on the page, leave a note, and the team knows exactly where to look. This works well for simple, isolated changes.",
//     DESCRIPTION2:
//       "However, when a project involves complex user flows, multi-step processes, or interactions across multiple screens, single-point annotations fall short. In these cases, video feedback becomes a better solution, as it captures the entire journey in context and helps teams understand not just where an issue occurs, but how the user got there.",
//   },
//   DIFFERENTIATORS: {
//     SUBTEXT: "Key Opportunities",
//     HEADING: "How Can We Stand Out?",
//     1: {
//       TITLE: "Video-first feedback",
//       DESCRIPTION:
//         "Shows complete UX flows in one recording, covering both UI bugs and interaction issues, making it clear how problems occur.",
//     },
//     2: {
//       TITLE: "AI-Powered Chaptering & Ticketing",
//       DESCRIPTION:
//         "Splits long videos into timestamped issues and instantly turns them into ready-to-use tickets with full context.",
//     },
//     3: {
//       TITLE: "Duplicate Report Prevention",
//       DESCRIPTION: "Detects overlapping issues to avoid duplicate QA work.",
//     },
//     4: {
//       TITLE: "Shared Context",
//       DESCRIPTION:
//         "Connects feedback, tickets, and resolutions so the whole team stays aligned.",
//     },
//   },
//   DESIGN_PROCESS: {
//     HEADING: "Bringing Ideas to Life",
//     STEP1: {
//       TITLE: "Structuring the Experience",
//       DESCRIPTION:
//         "Before diving into the complete design phase, I focused on visualizing the product’s overall structure to ensure a clear foundation. I started by building the information architecture (IA), mapping both the team and client-side user flows to understand every interaction point. This was followed by wireframe sketches that laid out the core layouts and interactions, providing a blueprint for the detailed design work ahead.",
//       IA: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-ia.png",
//           ALT: "Information Architecture Image",
//         },
//       },
//       IA_DARK: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-ia-dark.png",
//           ALT: "Information Architecture Image",
//         },
//       },
//       USER_FLOW: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-user-flow.png",
//           ALT: "User Flow Image",
//         },
//       },
//       SKETCH: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-sketch.png",
//           ALT: "Sketch Image",
//         },
//       },
//     },
//     STEP2: {
//       TITLE: "Design System & Figma Setup",
//       DESCRIPTION:
//         "To ensure visual consistency, I developed a design system in Figma that defined typography, color palettes, and reusable UI components. This shared system enabled both the client and team to work within a unified, structured environment, reducing design debt and accelerating iteration. It also established a solid foundation for creating high-fidelity wireframes.",
//       DESIGN_SYSTEM: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-design-system.jpg",
//           ALT: "Design System Image",
//         },
//       },
//       DESIGN_SYSTEM_DARK: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-design-system-dark.jpg",
//           ALT: "Design System Image",
//         },
//       },
//     },
//     STEP3: {
//       TITLE: "High-Fidelity Wireframes and Interactive Prototypes",
//       DESCRIPTION:
//         "Building on the initial Information Architecture and sketches, I developed high-fidelity wireframes for both the team and client views, refining visual details and layout. Guided by the user flows, I then created interactive prototypes to simulate the full experience and test key interactions.",
//       WIREFRAMES: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-wireframes.jpg",
//           ALT: "Wireframes Image",
//         },
//       },
//       WIREFRAMES_DARK: {
//         IMG: {
//           SRC: "/images/projects/pixeed/pixeed-wireframes-dark.jpg",
//           ALT: "Wireframes Image",
//         },
//       },
//       PROTOTYPE: {
//         CLIENT: {
//           SUBTEXT: "Client View: Submitting New Feedback",
//           SRC: "/video/projects/pixeed/pixeed-client.mp4",
//           ALT: "Client Side Prototype",
//         },
//         TEAM: {
//           SUBTEXT: "Team View: Reviewing Feedback and Creating a Ticket",
//           SRC: "/video/projects/pixeed/pixeed-team.mp4",
//           ALT: "Team Side Prototype",
//         },
//       },
//     },
//   },
//   REFLECTION: {
//     TITLE: "Designing for the Unseen Frustrations",
//     DESCRIPTION:
//       "This project was a reminder that meaningful innovation doesn’t always come from solving grand, complex problems. Sometimes, it’s about addressing the everyday frictions everyone has grown used to tolerating. By stripping away unnecessary steps and rethinking how feedback is shared and acted on, I learned the value of designing for simplicity without sacrificing depth. The process reinforced that when you make the obvious easy, you free up time and energy for the truly challenging work. Moving forward, I’ll continue to seek opportunities to remove these hidden inefficiencies so teams can focus on creating, not troubleshooting.",
//   },
// };

import { VisualItem } from "@/components/ui/Section/PrimarySection";

export const PIXEED_PROJECT = {
  KEY_FEATURES: {
    SUBTEXT: "Quick preview",
    HEADING: "Key Features ✦",
  },
  BACKGROUND: {
    HEADING: "Discovering restaurants feels more fragmented than it should.",
    TITLE: "Identifying The Problem",
    DESCRIPTION:
      "Through surveys and interviews with 36 participants, I found that many users struggled with fragmented restaurant discovery experiences. They often switched between multiple apps to check reviews, menus, and availability — a process that felt time-consuming and repetitive.",
    IMG: {
      SRC: "/images/projects/pixeed/interview.webp",
      ALT: "Design Sketches Image",
    },
  },

  THE_PROBLEM: {
    TITLE: "The Problem",
    DESCRIPTION:
      "Diners often juggle multiple apps to find restaurants, check menus, and make reservations. This fragmented experience causes information overload and decision fatigue, making it harder to choose where to dine.",
  },
  THE_MISSION: {
    TITLE: "The Mission",
    DESCRIPTION:
      "To simplify how people discover, decide, and share dining experiences — all in one cohesive platform.",
  },
  GRID_IMAGE: {
    SRC: "/images/projects/pixeed/grid.webp",
    ALT: "Yumpick Background Grid Image",
  },
  GRID_IMAGE_DARK: {
    SRC: "/images/projects/yumpick/grid-dark.webp",
    ALT: "Yumpick Background Grid Image",
  },
  USER_RESEARCH: {
    HEADING: "How Users Discover",
    USER_SURVEY: {
      DESCRIPTION:
        "To ensure this project would truly meet the needs of its users, I wanted to go beyond just my own experience and understand how other people approach restaurant discovery. So, I first conducted a user survey & interview to gather general insights on which apps users primarily rely on for restaurant discovery and what factors they consider most important when choosing a restaurant. One key finding was that users strongly prefer platforms with social media–like features for exploring restaurants!",
      TITLE: "Visual-First Apps Lead the Pack in Restaurant Discovery",
      SURVEY1_HEADING:
        "How do you usually handle feedback videos?",
    },
  },
  COMPETITOR_ANALYSIS: {
    TITLE: "What’s Missing in Other Apps?",
    SUBTITLE: "No App Delivers Visuals and Details Simultaneously.",
    DESCRIPTION:
      "To identify where existing apps fell short, I analyzed Instagram, Google Maps, Yelp, and OpenTable by evaluating their social-media style browsing, detailed reviews, local recommendations, and location data. I discovered that no platform offers immersive visual discovery alongside comprehensive menu and reservation details at the same time.",
    DESCRIPTION2:
      "Based on these insights, I defined three key goals for the app.",
    GOALS: [
      {
        EYEBROW: "VISUAL DISCOVERY",
        BODY: "Enable users to explore restaurants through immersive, image-driven browsing that reflects real dining experiences.",
      },
      {
        EYEBROW: "DETAIL DEPTH",
        BODY: "Provide comprehensive restaurant profiles with menus, hours, reviews, and location data in one cohesive view.",
      },
      {
        EYEBROW: "USABILITY",
        BODY: "Design a user-friendly, intuitive interface that minimizes cognitive load and streamlines the decision-making process.",
      },
    ],
  },

  APPROACH: {
    TITLE: "Design Foundation",
    SUBTITLE:
      "Translating research insights into structured, actionable design decisions.",
    // DESCRIPTION:
    //   "To address the identified gaps, I mapped out how users interact, navigate, and experience the app before moving into visual design.",
    CARD: {
      EYEBROW: "INFORMATION ARCHITECTURE",
      BODY: "To establish a clear and scalable structure for the app, I designed an information architecture that defines how users navigate and interact across key sections such as Home, Browse, Map, and Reservations. This framework helped clarify feature hierarchy and user flow, ensuring a seamless experience across exploration, and decision-making.",
      IMG: {
        SRC: "/images/projects/yumpick/IA.webp",
        ALT: "Information Architecture Image",
      },
    },
    CARDS: [
      {
        EYEBROW: "USER JOURNEY MAP",
        BODY: "To translate research insights into a clear design direction, I created a user journey map that visualizes how users discover, decide, and share dining experiences. By mapping their goals, emotions, and pain points, I identified key friction areas and opportunities that shaped the app’s core flow and interaction design.",
        IMG: {
          SRC: "/images/projects/yumpick/journeymap.webp",
          ALT: "User Journey Map Image",
        },
      },
      {
        EYEBROW: "Early Design Exploration",
        BODY: "I started shaping early design concepts based on the insights from the user journey map and information architecture. Through low-fidelity sketches and wireframes, I explored how key features connect across screens, refined the navigation flow, and established a foundation for the high-fidelity design phase.",
        IMG: {
          SRC: "/images/projects/pixeed/interview.webp",
          ALT: "Design Sketches Image",
        },
      },
    ],
    CARD2: {
      EYEBROW: "DESIGN SYSTEM",
      BODY: "Before moving into high-fidelity design, I established a design system to ensure visual consistency, accessibility, and interaction coherence across the product. This system created a unified framework that strengthened usability and supported efficient iteration throughout the design process.",
      IMG: {
        SRC: "/images/projects/yumpick/design-system.webp",
        ALT: "Design System Image",
      },
    },
  },

  SOLUTIONS: {
    TITLE: "The Solutions",
    SUBTITLE:
      "Combining visual exploration, detailed information, and seamless usability in one platform.",
    DESCRIPTION:
      "Building on the established design system, I developed a vibrant and engaging visual style for the app. I focused on balancing aesthetics with usability, ensuring that the interface is not only visually appealing but also intuitive and easy to navigate. Key elements included a bright color palette, clear typography, and consistent iconography to enhance user experience.",

    CARD: {
      EYEBROW: "SOCIAL DISCOVERY FEED",
      HEADER:
        "Created the main flow and interfaces for users to visually browse, discover, and access restaurant information in one place.",
      BODY: "Discover restaurants through engaging food photos and videos. Save places that catch your attention or explore trending dishes nearby. Instantly access restaurant menus, reviews, and pricing details without leaving the feed, turning visual inspiration into confident dining choices.",
      VIDEO: {
        src: "/video/projects/yumpick/browse.mp4",
      },
      IMAGE: {
        src: "/images/projects/yumpick/home.webp",
        alt: "Homepage image",
      },
    },
    CARD3: {
      EYEBROW: "RESERVATION",
      HEADER:
        "Designed a connected reservation experience that bridges discovery and decision-making.",
      BODY: "Users can move effortlessly from exploring restaurants to securing a table within the same flow. By integrating exploration and booking, the experience feels continuous and intentional, turning casual discovery into confident dining plans.",
      VIDEO: {
        src: "/video/projects/yumpick/reservation.mp4",
      },
      IMAGE: {
        src: "/images/projects/yumpick/reservation.webp",
        alt: "Homepage image",
      },
    },
    CARD2: {
      EYEBROW: "INTEGRATING FEEDBACK",
      HEADER:
        "Enhancing user engagement and personalized discovery through a unified, visually-driven browsing experience.",
      BODY: "Through user testing and feedback, I refined the browsing flow to make restaurant exploration more seamless. I combined the “Following” and “Browse” sections into one integrated experience, allowing users to explore both personalized and general posts within a unified feed for smoother discovery and interaction.",
      IMG: {
        SRC: "/images/projects/yumpick/feedback.webp",
        DARK_SRC: "/images/projects/yumpick/feedback-dark.webp",
        ALT: "Design System Image",
      },
    },
  },
  REFLECTION: {
    TITLE: "Reflection",
    SUBTEXT: "Trying to solve it all only blurs what really matters.",
    DESCRIPTION:
      "In the research phase, I felt overwhelmed by the range of issues uncovered through surveys, interviews, and competitive analysis, so many that I wondered how to tackle them all in one app. To regain focus, I identified the highest-impact problems and set clear scope boundaries, tackling core features first. This iterative approach allowed me to refine Yumpick into a lean prototype that truly addresses user pain points. ",
    DESCRIPTION2:
      "Ultimately, I learned that defining a manageable scope and centering every decision on real user needs are essential to creating meaningful, user-focused solutions.",
    IMAGE: {
      SRC: "/images/projects/yumpick/mockup.webp",
      DARK_SRC: "/images/projects/yumpick/mockup-dark.webp",
      ALT: "Mockup Image",
    },
    visuals: [
      {
        type: "image",
        src: "/images/projects/yumpick/mockup2.webp",
        alt: "Challenges graphic 2",
        boxHeight: { base: 240, md: 400 },
        objectFit: "contain",
        scale: 3,
        translateY: "40%",
      },
    ] satisfies VisualItem[],
  },
};

export const USER_INTERVIEW_SURVEY = [
  {
    name: "PM, side project team",
    description:
      "While acting as a PM in my side project, it took me way too long to review long feedback videos and many of the comments were just duplicates of what we’d already discussed.",
    time: "15m ago",
    icon: "👩‍💻",
    color: "#F76239",
  },
];

export const APP_DATA = [
  { label: "Hard to find exact feedback moments later", value: 14 },
  { label: "Unsure if an issue was already fixed", value: 10 },
  { label: "Takes too long to watch entire videos", value: 5 },
  { label: "Hard to share context with teammates", value: 4 },

];
