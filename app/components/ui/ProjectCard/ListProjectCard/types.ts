export type ListProjectCardPropTypes = {
  PROJECT: {
    THUMBNAIL1: {
      SRC: string;
      ALT: string;
    };
    THUMBNAIL2: {
      SRC: string;
      ALT: string;
    };
    TITLE: string;
    SUBTITLE: string;
    DISCIPLINE: string[];
    SLUG: string;
    TIMELINE: string;
    TOOLS: { name: string; src: string }[];
  };
  index: number;
};
