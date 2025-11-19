"use client";

"use client";

import { FlipWords } from "@/components/animation/FlipWords/FlipWords";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import { Users } from "lucide-react";
import RecommendationCard from "./RecommendationCard";
import { recommendations } from "./const";

const Recommendations = () => {
  return (
    <section className="z-50 lg:px-10 overflow-hidden mt-20 lg:mt-32 2xl:mt-36 lg:mb-5">
      <div className="place-content-center">
        <SubTextBox
          additionalClass="mx-auto"
          icon={
            <Users
              size={15}
              className="text-grey_scale_700"
              strokeWidth={1.5}
            />
          }
        >
          Kind words from collaborators
        </SubTextBox>
        <h2 className="text-center ">
          &nbsp;
          <FlipWords
            words={[" Testimonials ✦"]}
            duration={2200}
            className=""
          />
        </h2>
      </div>

      <section className="mt-12 px-5 lg:px-0">
        <div className="columns-1 lg:columns-2 gap-4">
          {recommendations.map((item) => (
            <div key={item.id} className="mb-4 break-inside-avoid">
              <RecommendationCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Recommendations;
