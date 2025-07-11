import Hero from "./home/components/Hero";
import SelectedWorks from "./home/components/SelectedWorks";
import Profile from "./home/components/Profile";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Profile />
      <SelectedWorks />
    </div>
  );
}
