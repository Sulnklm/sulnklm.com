export interface ProjectImage {
    SRC: string;
    ALT: string;
  }
  
  export interface ProjectHero {
    TITLE: string;
    DISCIPLINE: string;
    DESCRIPTION: string;
    IMAGE: ProjectImage;
    LINK: string;
    GITHUB: string;
    TOOLS: string[];
  }
  
  export interface DevProjectData {
    [key: string]: {
      HERO: ProjectHero;
      OVERVIEW?: object[];
    };
  }

  
  