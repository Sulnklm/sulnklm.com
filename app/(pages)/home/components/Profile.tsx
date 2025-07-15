import React from "react";
import { DotBackground } from "@/components/DotBackground";
import Values from "@/(pages)/home/components/about/values/Intro";
// import { Safari } from "@/components/SafariMode/SafariMode";
type Props = {};

const Profile = (props: Props): JSX.Element => {
  return (
    <section className="z-10 h-screen place-content-center">
      <Values />
    </section>
  );
};

export default Profile;
