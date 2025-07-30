"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectBadge from "../ProjectBadge/ProjectBadge";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};
const disciplineVariantMap: Record<
  string,
  "development" | "case-study" | "default"
> = {
  "Web Development": "development",
  "Case Study": "case-study",
};

export const MenuItem = ({
  setActive,
  active,
  itemKey,
  label,
  children,
}: {
  setActive: (itemKey: string | null) => void;
  active: string | null;
  itemKey: string;
  label: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(itemKey)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.p transition={{ duration: 0.3 }} className="cursor-pointer">
        {label}
      </motion.p>
      <AnimatePresence>
        {active === itemKey && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
          >
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-8 z-50">
              <motion.div
                transition={{ duration: 0.22, ease: "easeOut" }}
                layoutId="active"
                className="bg-background backdrop-blur-3xl dark:bg-black rounded-3xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-2xl"
              >
                <motion.div layout className="w-max h-full p-1">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (itemKey: string | null) => void;
  children: ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white/90 backdrop-blur-lg dark:bg-black/80 shadow-input flex justify-center space-x-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  disciplineArray,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  disciplineArray?: string[];
}) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 hover:bg-neutral-200/50 hover:dark:bg-primary duration-300 p-2 rounded-2xl"
    >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md"
      />
            <div className="grid gap-2">

      <div className="flex flex-wrap gap-2 items-center">
        <h4 className="!tracking-wide">{title}</h4>
        {disciplineArray?.map((discipline) => (
          <ProjectBadge
            key={discipline}
            variant={disciplineVariantMap[discipline] || "default"}
          >
            {discipline}
          </ProjectBadge>
        ))}
      </div>
        <h5 className="text-sm max-w-[20rem]">{description}</h5>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
