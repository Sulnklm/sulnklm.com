export type GridProjectCardPropTypes = {
  PROJECT: {
    IMAGE: {
      SRC: string;
      ALT: string;
    };
    TITLE: string;
    DESCRIPTION: string;
    DISCIPLINE: string[];
    SLUG: string;
    TIMELINE: string;
    TOOLS: { name: string; src: string }[];
  };
};

export type ToolPropTypes = { name: string; src: string };
