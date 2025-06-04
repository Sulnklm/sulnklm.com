import { Hero, Projects, Profile } from "./components";

const Home = (): JSX.Element => {
    return (
      <main className="">
        <Hero />
        <Profile />
        <Projects />
      </main>
    );
  };
  
export default Home;
  