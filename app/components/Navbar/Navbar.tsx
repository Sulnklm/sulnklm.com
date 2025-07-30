"use client";
import React, { useState } from "react";
import { NAVBAR_CONST } from "./const";
import { Button } from "../Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircleMore, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import { useSound } from "../ui/SoundContextType/SoundContextType";
import { HyperText } from "../animation/HyperText/HyperText";
import { ScrollProgress } from "../ui/ScrollProgress/ScrollProgress";
import { EXTERNAL_LINKS } from "@/lib/const";
import ProgressiveBlur from "@/components/ui/magicui/progressive-blur";
import { AnimatedShinyText } from "../ui/ShinyText/ShinyText";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../ui/NavbarMenu/NavbarMenu";
import { PROJECTS_CONST } from "@/(pages)/works/const";

const NavBar = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const { muted, setMuted } = useSound();
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] max-w-[750px] mx-auto">
      <ProgressiveBlur
        height="20%"
        position="top"
        className="z-[0] fixed left-0 right-0 bottom-0 pointer-events-none"
      />
      <nav className="relative container mx-auto flex justify-between items-center bg-white/90 backdrop-blur-lg dark:bg-black/80 m-5 p-2.5 z-10 mt-3 rounded-3xl border shadow-br dark:shadow-inner-customWhiteDark">
        <ul className="flex items-center gap-5 text-base z-10">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center hover:gap-2.5 duration-300 gap-1.5 pl-5 pr-5"
          >
            <p className="text-2xl group-hover:scale-95 duration-300 font-[500] font-PerfectlyNineties dark:text-background -translate-y-0.5">
              <AnimatedShinyText>
                Suin✦<span className="italic">k</span>{" "}
              </AnimatedShinyText>
            </p>
          </Link>

          <div
            onMouseEnter={() => setActive("Works")}
            onMouseLeave={() => setActive(null)}
            className="relative"
          >
            <MenuItem
              setActive={setActive}
              active={active}
              itemKey="Works"
              label={
                <Button
                  href="/works"
                  additionalClasses={
                    pathname === "/works"
                      ? "text-sm font-[500] text-grey_scale_900 dark:!text-background"
                      : "text-grey_scale_700 font-[400] dark:text-white/40 text-sm"
                  }
                >
                  <HyperText>Works</HyperText>
                </Button>
              }
            >
              <div className="grid gap-5 p-1">
                {PROJECTS_CONST.PROJECTS.filter((project) =>
                  project.CATEGORY?.includes("selected")
                ) 
                  .map((project) => (
                    <ProductItem
                      key={project.SLUG}
                      title={project.TITLE}
                      href={`/works/${project.SLUG}`}
                      src={project.IMAGE.SRC}
                      description={project.SUBTITLE}
                      disciplineArray={project.DISCIPLINE}
                    />
                  ))}
              </div>
            </MenuItem>
          </div>

          {NAVBAR_CONST.LINKS.slice(0, 2)
            .filter(({ LABEL }) => LABEL !== "Works")
            .map(({ HREF, LABEL }) => {
              const isCurrentPage = pathname === HREF;
              return (
                <li key={LABEL}>
                  <Button
                    href={HREF}
                    additionalClasses={
                      isCurrentPage
                        ? "text-sm font-[500] text-grey_scale_900 dark:!text-background"
                        : "text-grey_scale_700 dark:text-white/40 text-sm"
                    }
                  >
                    <HyperText>{LABEL}</HyperText>
                  </Button>
                </li>
              );
            })}
        </ul>
        <ul className="flex items-center gap-4 dark:text-white/80 text-base z-10">
          <li>
            <Button
              onClick={() => setMuted((m) => !m)}
              theme="tertiary"
              additionalClasses="p-2 rounded-full"
              icon={muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            >
              <span className="sr-only">{muted ? "Unmute" : "Mute"}</span>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              theme="tertiary"
              additionalClasses="p-2 rounded-full"
              icon={theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            >
              <span className="sr-only">{""}</span>
            </Button>
          </li>
          <li className="hidden sm:block">
            <Button
              href={EXTERNAL_LINKS.CONTACT.HREF}
              theme="primary"
              icon={<MessageCircleMore size={16} className="ml-2" />}
              additionalClasses="!py-2.5 !px-3.5 text-sm rounded-[11px] scale-[85%]"
            >
              {EXTERNAL_LINKS.CONTACT.LABEL}
            </Button>
          </li>
        </ul>
      </nav>
      <ScrollProgress />
    </header>
  );
};

export default NavBar;
