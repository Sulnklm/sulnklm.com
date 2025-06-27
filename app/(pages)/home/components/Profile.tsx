import React from "react";
import { Safari } from "@/components/SafariMode/SafariMode";
type Props = {};

const Profile = (props: Props): JSX.Element => {
  return (
    <section>
      <div className="container mx-auto flex justify-center">
        <Safari
          url="sulnklm.com"
          mode="default"
          videoSrc="https://example.com/video.mp4"
        />
      </div>
    </section>
  );
};

export default Profile;
