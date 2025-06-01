"use client";

import { motion, Variants } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface WavyImageProps extends ImageProps {
  delay?: number;
}

const WavyImage = ({ delay = 0, ...props }: WavyImageProps) => {
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
        duration: 1,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      <Image {...props} />
    </motion.div>
  );
};

export default WavyImage;
