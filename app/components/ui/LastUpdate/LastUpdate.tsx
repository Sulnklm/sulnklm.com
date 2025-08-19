import { Hammer } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface LastUpdateProps {
  lastUpdate: Date | null;
}

export const LastUpdate: React.FC<LastUpdateProps> = ({ lastUpdate }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 35, 0, 35, 0, 0],
      y: [0, 10, 0, 10, 0, 0],
      transition: {
        duration: 1.4,
        times: [0, 0.15, 0.3, 0.45, 0.6, 1],
        repeat: Infinity,
        repeatDelay: 1.2,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <div className="absolute bottom-0 right-10 z-[100000] mt-4 flex items-center gap-1.5 !text-background bg-primary dark:bg-background py-2 px-4 rounded-xl">
      <motion.span
        animate={controls}
        style={{
          display: "inline-block",
          originX: 0.65,
          originY: 0.12,
        }}
      >
        <Hammer
          size={16}
          strokeWidth={1.9}
          className="text-white dark:text-grey_scale_1000 -translate-y-0.5"
        />
      </motion.span>
      <p className="!text-background dark:!text-grey_scale_1000 text-sm">
        Last updated:
      </p>
      <p className="!text-background dark:!text-grey_scale_1000 text-sm">
        {lastUpdate
          ? lastUpdate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "America/Vancouver",
            })
          : "Unknown"}
      </p>
    </div>
  );
};
