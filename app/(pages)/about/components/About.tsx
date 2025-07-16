import Experience from "./Experience";
import Hero from "./Hero";

export const About = () => {
  return (
    <div className="relative z-10 h-screen place-content-center"> 
      <Hero />
      <Experience />
    </div>
  );
};
