import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToolImage } from "../../ToolImage";
import { ListProjectCardPropTypes } from "./types";
import { Button } from "../../Button/Button";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/GlowingEffect/GlowingEffect";
import Link from "next/link";

export const ListProjectCard = ({ PROJECT }: ListProjectCardPropTypes) => {
  const [isHovered, setIsHovered] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [descHeight, setDescHeight] = useState(0);

  useEffect(() => {
    if (descriptionRef.current) {
      setDescHeight(descriptionRef.current.scrollHeight);
    }
  }, [isHovered, PROJECT.DESCRIPTION]);

  return (
    <Link href={`/works/${PROJECT.SLUG}`} className="block group relative rounded-[10px] ...">

    <div
      className="group hover:scale-[99%] duration-300 relative shadow-sm rounded-[20px] bg-grey_scale_50 dark:bg-primary p-2 z-0 border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        className="rounded-[inherit]"
      />
      {/* <div className="absolute dark:hidden -top-9 z-10 right-0 left-0">
        <svg
          viewBox="0 0 940 226.5"
          xmlns="http://www.w3.org/2000/svg"
          className="folder-shape"
        >
          <path
            fill="white"
            d="M1.3042e-06 20C1.37396e-06 8.95431 8.95431 0 20 0H303.176C314.41 0 325.419 3.15428 334.949 9.10375L388.306 42.4135C396.248 47.3714 405.422 50 414.784 50H768.23H920C931.046 50 940 58.9543 940 70V206.5C940 217.546 931.046 226.5 920 226.5H20C8.9543 226.5 5.65529e-08 217.546 1.26314e-07 206.5L1.3042e-06 20Z"
          ></path>
        </svg>
      </div> */}

      {/* <div className="absolute -top-9 right-0 left-0">
        <svg
          viewBox="0 0 940 226.5"
          xmlns="http://www.w3.org/2000/svg"
          className="folder-shape"
        >
          <path
            fill="#252525"
            d="M1.3042e-06 20C1.37396e-06 8.95431 8.95431 0 20 0H303.176C314.41 0 325.419 3.15428 334.949 9.10375L388.306 42.4135C396.248 47.3714 405.422 50 414.784 50H768.23H920C931.046 50 940 58.9543 940 70V206.5C940 217.546 931.046 226.5 920 226.5H20C8.9543 226.5 5.65529e-08 217.546 1.26314e-07 206.5L1.3042e-06 20Z"
          ></path>
        </svg>
      </div> */}
      <div className="grid lg:flex justify-between items-center gap-5 lg:gap-10 p-1">
        <div className="flex-1 z-10 lg:max-w-[30rem]">
          <img
            src={PROJECT.IMAGE.SRC}
            alt={PROJECT.IMAGE.ALT}
            className="object-cover bg-background dark:bg-grey_scale_900/20 duration-300 rounded-[10px] w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <div className="w-full bg-grey_scale_50 dark:bg-primary rounded-[45px] pr-10">
            <div className="relative z-10">
              <div className="space-y-2 pb-5">
                
                <h4>{PROJECT.TITLE}</h4>
                <p
                ref={descriptionRef}
                className="text-sm text-grey_scale_900/80 dark:text-grey_scale_700 font-[400]"
              >
                {PROJECT.DESCRIPTION}
              </p>
              </div>
             
              <div className="">
                <div className="border-t border-dashed dark:border-t-grey_scale_900 pt-4">
                  {/* <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{
                      maxHeight: isHovered ? descHeight : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  > */}
                  <div></div>

                  {/* </motion.div> */}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap -space-x-2">
                      {PROJECT.TOOLS.map((tool) => (
                        <ToolImage
                          key={tool.name}
                          src={tool.src}
                          alt={tool.name}
                          size={28}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-grey_scale_900/80 dark:text-grey_scale_700 font-[400]">
                      {PROJECT.DISCIPLINE}
                    </p>
                    {/* <AnimatePresence mode="wait">
                      {!isHovered ? (
                        <motion.p
                          key="timeline"
                          className="text-sm text-grey_scale_900/80 dark:text-grey_scale_700 font-[400]"
                          initial={{ opacity: 0.5, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.1 }}
                        >
                          {PROJECT.TIMELINE}
                        </motion.p>
                      ) : (
                        <motion.div
                          key="button"
                          initial={{ opacity: 0.5, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.1 }}
                        >
                          <Button
                            href={"act.href"}
                            theme={"primary"}
                            additionalClasses="px-4 py-2 text-sm"
                            icon={<ArrowRight className="w-4 h-4 ml-1" />}
                          >
                            Read me
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
