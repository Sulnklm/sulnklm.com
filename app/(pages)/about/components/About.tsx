import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { MarqueeDemo } from "../components/FunFacts";

export default function About() {
  return (
    <div>
      <Hero />
      <Skills />
      <MarqueeDemo />
      <Experience />
    </div>
  );
}
