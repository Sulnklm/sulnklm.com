import IllustCard from '@/components/IllustCard/IllustCard';
import React from 'react';
import { VALUES, VALUE_INTRO } from "./const";

const Values = () => {
  return (
    <div className='container mx-auto grid lg:grid-cols-2 gap-8'>
      <div className='max-w-[40rem]'>
        <h2 className='text-start mb-3'>
          {VALUE_INTRO.heading}
        </h2>
        <h5>{VALUE_INTRO.paragraph}</h5>
      </div>
    <div className=''>
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
    </div>
    </div>
  );
};

export default Values;