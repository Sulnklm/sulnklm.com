export type ProjectType = {
    SLUG: string;
    TITLE: string;
    SUBTITLE?: string; 
    OVERVIEW?: string; 
    IMAGE: { SRC: string; ALT: string };
    TOOLS?: { name: string; src: string }[];   
    DISCIPLINE?: string[];               
    TIMELINE?: string;                   
    CATEGORY?: string[];       
    URL?: string;           
    SHOW_SAFARI?: boolean;  
    VIDEO?: string;
    SAFARI_IMAGE?: { SRC: string; ALT: string };
    GITHUB_LINK?: { LABEL: string; HREF: string };
    LIVE_LINK?: { LABEL: string; HREF: string };
    FIGMA_LINK?: { LABEL: string; HREF: string };
    PROJECT_TYPE?: string[];
};