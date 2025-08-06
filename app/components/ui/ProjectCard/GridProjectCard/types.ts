export type GridProjectCardPropTypes = {
  PROJECT: {
    THUMBNAIL1: {
      SRC: string;
      ALT: string;
    };
    THUMBNAIL2: {
      SRC: string;
      ALT: string;
    };
    IMAGE: {
      SRC: string;
      ALT: string;
    }
    CATEGORY: string[];
    TITLE: string;
    SUBTITLE: string;
    DISCIPLINE: string[];
    SLUG: string;
    TIMELINE: string;
    TOOLS: { name: string; src: string }[];
  };
};

export type ToolPropTypes = { name: string; src: string };
