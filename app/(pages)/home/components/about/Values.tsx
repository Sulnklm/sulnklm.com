import IllustCard from "@/components/IllustCard/IllustCard";
import React from "react";
import { VALUES, VALUE_INTRO } from "./const";
import { InsetBlock } from "@/components/InsetBlock";
import { Button } from "@/components/Button";
import { INTRO_CONST } from "../../const";
import { ArrowRight } from "lucide-react";
import OrangeTextBox from "@/components/OrangeTextBox/OrangeTextBox";

const Values = () => {
  return (
    <InsetBlock>
      <OrangeTextBox text="About Me" />
      <div className="max-w-[68rem] mx-auto mb-10">
        <h2 className="text-start lg:text-center mb-3 text-5xl">{VALUE_INTRO.heading}</h2>
      </div>
      <div className="max-w-[60rem] mx-auto px-5">
        {VALUES.map(({ icon, alt, title, description }, index) => (
          <IllustCard
            key={index}
            icon={icon}
            alt={alt}
            title={title}
            description={description}
            isFirst={index === 0}
          />
        ))}
         <Button
              href={INTRO_CONST.BUTTON.HREF}
              theme="primary"
              icon={<ArrowRight size={16} className="ml-2" />}
              additionalClasses="mt-5 justify-self-center md:justify-self-end px-5"
            >
              {INTRO_CONST.BUTTON.TEXT}
            </Button>
      </div>
    </InsetBlock>
  );
};

export default Values;
