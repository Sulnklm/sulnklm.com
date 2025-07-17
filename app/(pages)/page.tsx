import Hero from "./home/components/Hero";
import Values from "./home/components/about/Values";
import Works from "./home/components/SelectedWorks";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Works />
      <Values />
    </div>
  );
}
