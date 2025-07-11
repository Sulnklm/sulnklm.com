"use client";
import React from "react";
import { IllustCardProps } from "./types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IllustCard: React.FC<IllustCardProps & { isFirst?: boolean }> = ({
  icon,
  alt = "",
  title,
  description,
  isFirst = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (isFirst && inView) {
      controls.start({
        y: 20,
        rotate:3,
        boxShadow: "0px 5px 8px rgba(0,0,0,0.15)",
        transition: { duration: 0.4, delay: 0.3 },
      });
    } else if (isFirst && !inView) {
      controls.start({
        y: 10,
        rotate:0,
        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
        transition: { duration: 0.4 },
      });
    }
  }, [controls, inView, isFirst]);

  return (
    <div>
    <motion.div
      ref={ref}
      animate={isFirst ? controls : undefined}
      className="flex items-center gap-4 rounded-2xl p-5 bg-white dark:bg-primary border"
      style={{
        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)", 
      }}
    >
      <img src={icon} alt={alt} className="w-12 h-12 object-contain flex-shrink-0" />
      <div>
        <p className="text-lg font-PerfectlyNineties">{title}</p>
        <h5 className="text-grey_scale_700 text-sm">{description}</h5>
      </div>
    </motion.div>
    </div>
  );
};

export default IllustCard;
