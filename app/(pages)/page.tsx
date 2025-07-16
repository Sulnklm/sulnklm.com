import Hero from "./home/components/Hero";
import Values from "./home/components/about/Values";
import Works from "./works/components/Works";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Works />
      <Values />
    </div>
  );
}
