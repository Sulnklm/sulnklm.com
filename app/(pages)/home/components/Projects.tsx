import React from "react";
import GridContents from "@/components/GridContents/GridContents";

const Projects = (): JSX.Element => {
  return (
    <section className="mx-auto container p-8 mt-40">
      <div>
      <h2 className="mb-10 text-center">Selected Works</h2>

      <div className="relative mx-auto w-full max-w-4xl aspect-square">
        <GridContents />
      </div>
      </div>
    </section>
  );
};

export default Projects;
