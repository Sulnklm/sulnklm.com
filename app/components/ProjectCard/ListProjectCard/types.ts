export type ListProjectCardPropTypes = {
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
  index: number;
};
