import { Experience } from "./Experience";
import Values from "./values/Values";

export const About = () => {
  return (
    <div className="relative z-10 h-screen place-content-center"> 
      <Values />
      <Experience />
    </div>
  );
};
