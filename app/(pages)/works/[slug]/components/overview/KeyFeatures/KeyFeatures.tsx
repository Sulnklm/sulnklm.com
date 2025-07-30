"use client";
import React from "react";
import { IconCard } from "@/components/ui/IconCard/IconCard";
import { ProjectFeature } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CornerBoxes } from "@/components/ui/CornerBoxes/CornerBoxes";
import { useKeyFeatures } from "./useKeyFeatures";

interface KeyFeaturesSectionProps {
  features: ProjectFeature[];
  iconMap: Record<string, React.ElementType>;
}

export function KeyFeatures({ features, iconMap }: KeyFeaturesSectionProps) {
  const { activeIdx, setActiveIdx, tabRefs, indicatorStyle, goPrev, goNext } =
    useKeyFeatures(features);

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* --- desktop --- */}
      <div className="hidden md:flex justify-items-center items-center mb-8 border-y py-5 relative">
        <CornerBoxes overrideBottom={{ 1: "bottom-0", 3: "bottom-0" }} />
        {/* indicator */}
        {features.map((feature, i) => {
          const IconComponent = iconMap[feature.icon];
          const isActive = activeIdx === i;
          return (
            <React.Fragment key={feature.label}>
              <button
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                className={`group flex flex-col items-center min-w-[160px] py-3 px-3 rounded-2xl transition-all relative bg-transparent w-[20vw]`}
                onClick={() => setActiveIdx(i)}
              >
                {isActive && (
                  <span
                    className="absolute left-1/2 -top-[21.5px] h-[1.5px] w-12 rounded-full bg-coral z-10"
                    style={{
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
                <IconCard active={isActive}>
                  {IconComponent ? <IconComponent size={18} /> : null}
                </IconCard>
                <p
                  className={`mt-3 font-[450] ${
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-grey_scale_800 dark:text-gray-200"
                  }`}
                >
                  {feature.label}
                </p>
                <h5 className="mt-1 text-sm">{feature.description}</h5>
              </button>
              {i < features.length - 1 && (
                <div className="w-px mx-7 bg-grey_scale_500/30 dark:bg-grey_scale_900 h-20 self-center" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* --- mobile --- */}
      <div className="md:hidden flex items-start w-full justify-between gap-10 mb-8 border-y py-5">
        <div className="flex gap-3 justify-between w-full max-w-[250px] relative pl-5">
          <motion.span
            className="absolute left-10 -translate-x-1/2 -top-[21px] w-12 h-[1.5px] rounded-full bg-coral"
            layoutId="mobile-indicator"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          <IconCard active>
            {iconMap[features[activeIdx].icon]
              ? React.createElement(iconMap[features[activeIdx].icon], {
                  size: 18,
                })
              : null}
          </IconCard>
          <div>
            <p className="font-[450] text-gray-900 dark:text-white">
              {features[activeIdx].label}
            </p>
            <h5 className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              {features[activeIdx].description}
            </h5>
          </div>
        </div>
        <div className="flex gap-7 pr-5">
          <button
            onClick={goPrev}
            className="p-1 rounded-full bg-white hover:bg-grey_scale_300 transition border shadow-br"
          >
            <ChevronLeft className="w-5 h-5 text-grey_scale_800" />
          </button>
          <button
            onClick={goNext}
            className="p-1 rounded-full bg-white hover:bg-grey_scale_300 transition border shadow-br"
          >
            <ChevronRight className="w-5 h-5 text-grey_scale_800" />
          </button>
        </div>
      </div>
      {/* --- feature image --- */}
      <div className="w-full flex justify-center px-5 md:px-0 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={features[activeIdx].image}
            src={features[activeIdx].image}
            alt={features[activeIdx].label}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.17, ease: "easeOut" }}
            className="max-h-[580px] rounded-2xl shadow-md transition-all duration-300"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
