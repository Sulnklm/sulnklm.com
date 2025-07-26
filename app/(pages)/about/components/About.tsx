import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { FunFacts } from "../components/FunFacts";

export default function About() {
  return (
    <div>
      <Hero />
      <Skills />
      {/* <FunFacts /> */}
      <Experience />
    </div>
  );
}
