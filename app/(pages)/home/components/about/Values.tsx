import IllustCard from "@/components/ui/IllustCard/IllustCard";
import React from "react";
import { VALUES, VALUE_INTRO } from "./const";
import { InsetBlock } from "@/components/ui/InsetBlock";
import { Button } from "@/components/Button/Button";
import { INTRO_CONST } from "../../const";
import { ArrowRight } from "lucide-react";
import OrangeTextBox from "@/components/ui/OrangeTextBox/OrangeTextBox";

const Values = () => {
  return (
    <div className="overflow-hidden">
    <InsetBlock>
      <OrangeTextBox text="About Me" />
      <div className="max-w-[68rem] mx-auto mb-6 md:mb-10">
        <h2 className="text-start lg:text-center mb-3">{VALUE_INTRO.heading}</h2>
      </div>
      <div className="max-w-[60rem] mx-auto">
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
              additionalClasses="w-full mt-5 justify-self-center md:justify-self-end px-5"
            >
              {INTRO_CONST.BUTTON.TEXT}
            </Button>
      </div>
    </InsetBlock>
    </div>
  );
};

export default Values;
