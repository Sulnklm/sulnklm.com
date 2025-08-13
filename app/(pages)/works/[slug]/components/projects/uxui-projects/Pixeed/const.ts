
import type { ProjectFeature } from "../../../overview/KeyFeatures/types";

export const PIXEED_FEATURES: ProjectFeature[] = [
  {
    icon: "video",
    label: "Time-Stamped feedback",
    description: "Break long feedback video into manageable, time-stamped segments.",
    image: "/images/projects/pixeed/pixeed-video-first.jpg",
  },
  {
    icon: "sparkles",
    label: "AI Chaptering & Ticketing",
    description: "Automatic video chapters for clients, instant ticket creation for teams.",
    image: "/images/projects/pixeed/pixeed-ai.jpg",
  },
  {
    icon: "copyMinus",
    label: "Duplicate Report Prevention",
    description: "Instantly detects and flags potential duplicate tickets.",
    image: "/images/projects/pixeed/pixeed-duplicate.jpg",
  },
  {
    icon: "workflow",
    label: "Shared Context",
    description: "Keep clients and teams aligned with the same updates and explanations.",
    image: "/images/projects/pixeed/pixeed-shared-context.jpg",
  },
];

export const PIXEED_PROJECT = {
  KEY_FEATURES: {
    SUBTEXT: "Quick preview",
    HEADING: "Key Features ✦",
  },
  
  BACKGROUND: {
    HEADING: "Why This Project?",
    TITLE: "From Messy Feedback to Clear Action",
    DESCRIPTION:
      "While working on SaaS and freelance projects, my team often struggled with scattered feedback and lengthy user testing videos. Instead of accepting that messiness as normal, I wanted to rethink the workflow not just as a designer, but as someone who values clarity, context, and collaboration. This project wasn’t about finding a perfect solution but about exploring a more thoughtful, transparent, and collaborative way of working.",
    IMAGE: {
      SRC: "/images/projects/pixeed/background.png",
      ALT: "Pixeed image",
    },
  },
  PROBLEM: {
    SUBTEXT: "Problem",
    HEADING: "Real-World Frustration",
    TITLE: "Where things often get messy",
    DESCRIPTION: {
      1: "In small teams, client feedback often plays a key role in QA. But the way feedback comes in, whether through vague videos, scattered emails, or out-of-sync DMs, creates real friction.",
      2: "🌀 Without context, feedback gets misunderstood or misprioritized.",
      3: "🔁 Teams unknowingly revisit the same issue, unsure if it is new, resolved, or still in development.",
      4: "💬 Designers and developers repeat the same explanations because past decisions were not visible.",
      5: "The result? Duplicate tickets, wasted time, and broken focus for both the team and the client. This inefficiency did not come from laziness. It came from a lack of visibility. It does not just slow down the team, it breaks the loop.",
    },
    IMAGE: {
      SRC: "/images/projects/pixeed/problem.jpg",
      ALT: "Pixeed image",
    },

    IMAGE2: {
      SRC: "/images/projects/pixeed/as-is-flow.jpg",
      ALT: "Pixeed As-is-flow image",
    },
  },
  COMPETITOR_ANALYSIS: {
    HEADING: "Alternative Approaches to Client Feedback",
    IMG1: {
      SRC: "/images/projects/pixeed/pixeed-competitors.jpg",
      ALT: "Competitor Analysis Image",
    },
    IMG2: {
      SRC: "/images/projects/pixeed/pixeed-competitors-table.jpg",
      ALT: "Competitor Analysis Image",
    },
    TITLE: "Video-first vs. Pin-on-page: What’s the Difference?",
    DESCRIPTION:
      "Tools like Marker.io and BugHerd focus on pin-on-page annotations. This is perfect for quick visual fixes, copy tweaks, or spotting small UI glitches. You click directly on the page, leave a note, and the team knows exactly where to look. This works well for simple, isolated changes.",
    DESCRIPTION2:
      "However, when a project involves complex user flows, multi-step processes, or interactions across multiple screens, single-point annotations fall short. In these cases, video feedback becomes a better solution, as it captures the entire journey in context and helps teams understand not just where an issue occurs, but how the user got there.",
  },
  DIFFERENTIATORS: {
    SUBTEXT: "Key Opportunities",
    HEADING: "How Can We Stand Out?",
    1: {
      TITLE: "Video-first feedback",
      DESCRIPTION:
        "Shows complete UX flows in one recording, covering both UI bugs and interaction issues, making it clear how problems occur.",
    },
    2: {
      TITLE: "AI-Powered Chaptering & Ticketing",
      DESCRIPTION:
        "Splits long videos into timestamped issues and instantly turns them into ready-to-use tickets with full context.",
    },
    3: {
      TITLE: "Duplicate Report Prevention",
      DESCRIPTION: "Detects overlapping issues to avoid duplicate QA work.",
    },
    4: {
      TITLE: "Shared Context",
      DESCRIPTION:
        "Connects feedback, tickets, and resolutions so the whole team stays aligned.",
    },
  },
  DESIGN_PROCESS: {
    HEADING: "Bringing Ideas to Life",
    STEP1: {
      TITLE: "Step 1: Structuring the Experience",
      DESCRIPTION:
        "Before diving into the complete design phase, I focused on visualizing the product’s overall structure to ensure a clear foundation. I started by building the information architecture (IA), mapping both the team and client-side user flows to understand every interaction point. This was followed by wireframe sketches that laid out the core layouts and interactions, providing a blueprint for the detailed design work ahead.",
      IA: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-ia.png",
          ALT: "Information Architecture Image",
        },
      },
      IA_DARK: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-ia-dark.png",
          ALT: "Information Architecture Image",
        },
      },
      USER_FLOW: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-user-flow.png",
          ALT: "User Flow Image",
        },
      },
      SKETCH: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-sketch.png",
          ALT: "Sketch Image",
        },
      },
    },
    STEP2: {
      TITLE: "Step 2: Design System & Figma Setup",
      DESCRIPTION:
        "To ensure visual consistency, I developed a design system in Figma that defined typography, color palettes, and reusable UI components. This shared system enabled both the client and team to work within a unified, structured environment, reducing design debt and accelerating iteration. It also established a solid foundation for creating high-fidelity wireframes.",
      DESIGN_SYSTEM: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-design-system.jpg",
          ALT: "Design System Image",
        },
      },
      DESIGN_SYSTEM_DARK: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-design-system-dark.jpg",
          ALT: "Design System Image",
        },
      },
    },
    STEP3: {
      TITLE: "Step3: High-Fidelity Wireframes and Interactive Prototypes",
      DESCRIPTION:
        "Building on the initial Information Architecture and sketches, I developed high-fidelity wireframes for both the team and client views, refining visual details and layout. Guided by the user flows, I then created interactive prototypes to simulate the full experience and test key interactions.",
      WIREFRAMES: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-wireframes.jpg",
          ALT: "Wireframes Image",
        },
      },
      WIREFRAMES_DARK: {
        IMG: {
          SRC: "/images/projects/pixeed/pixeed-wireframes-dark.jpg",
          ALT: "Wireframes Image",
        },
      },
      PROTOTYPE: {
        CLIENT: {
          SUBTEXT: "Client View: Submitting New Feedback",
          SRC: "/video/projects/pixeed/pixeed-client.mp4",
          ALT: "Client Side Prototype",
        },
        TEAM: {
          SUBTEXT: "Team View: Reviewing Feedback and Creating a Ticket",
          SRC: "/video/projects/pixeed/pixeed-team.mp4",
          ALT: "Team Side Prototype",
        },
      },
    },
  },
  REFLECTION: {
    TITLE: "Designing for the Unseen Frustrations",
    DESCRIPTION:
      "This project was a reminder that meaningful innovation doesn’t always come from solving grand, complex problems. Sometimes, it’s about addressing the everyday frictions everyone has grown used to tolerating. By stripping away unnecessary steps and rethinking how feedback is shared and acted on, I learned the value of designing for simplicity without sacrificing depth. The process reinforced that when you make the obvious easy, you free up time and energy for the truly challenging work. Moving forward, I’ll continue to seek opportunities to remove these hidden inefficiencies so teams can focus on creating, not troubleshooting.",
  },
};
