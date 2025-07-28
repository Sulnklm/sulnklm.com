export type ProjectType = {
    SLUG: string;
    TITLE: string;
    DESCRIPTION: string;
    IMAGE: { SRC: string; ALT: string };
    TOOLS?: { name: string; src: string }[];   
    DISCIPLINE?: string[];               
    TIMELINE?: string;                   
    CATEGORY?: string[];                         
  };