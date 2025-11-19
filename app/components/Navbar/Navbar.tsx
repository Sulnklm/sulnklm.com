"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSound } from "../ui/SoundContextType/SoundContextType";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Menu,
  X,
  MessageCircleMore,
  ScrollText,
  ArrowBigLeft,
  ArrowRight,
} from "lucide-react";
import { NAVBAR_CONST } from "./const";
import { EXTERNAL_LINKS } from "@/lib/const";
import { AnimatedShinyText } from "../ui/ShinyText/ShinyText";
import { HyperText } from "../animation/HyperText/HyperText";
import ProgressiveBlur from "@/components/ui/magicui/progressive-blur";
import { ScrollProgress } from "../ui/ScrollProgress/ScrollProgress";
import { HamburgerXIcon } from "../ui/HamburgerXIcon/HamburgerXIcon";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import Image from "next/image";
import logo from "public//images/icons/icon.png";
import { Arrow } from "@radix-ui/react-tooltip";

// only for active-state detection
const normalizePath = (s: string) => {
  if (!s) return "/";
  const noHashQuery = s.split("#")[0].split("?")[0];
  const trimmed = noHashQuery.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};
const isActive = (pathname: string, href: string) => {
  const p = normalizePath(pathname);
  const h = normalizePath(href);
  if (h === "/") return p === "/";
  return p === h || p.startsWith(h + "/");
};

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) return null;
  const { muted, setMuted } = useSound();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] max-w-[750px] mx-4 md:mx-auto px-1.5 mt-2">
      <ProgressiveBlur
        height="20%"
        position="top"
        className="z-[0] fixed left-0 right-0 bottom-0 pointer-events-none"
      />
      <nav className="relative border py-1.5 bg-[#F0F0F2] dark:bg-[#0E0E0E] backdrop-blur-xl container mx-auto flex justify-between items-center m-5 px-1 z-10 mt-3 rounded-3xl ">
        <div className="flex gap-3">
          {/* logo */}
          <Link
            href="/"
            className="group flex items-center duration-300 gap-1.5 pl-5 pr-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex items-center justify-center gap-2 hover:rotate-90 duration-500">
              <Image src={logo} alt="Logo" className="max-w-[2rem]" />
              {/* <p className="text-grey_scale_1000 dark:text-white/80 font-mono font-[400]">
                suink
              </p> */}
            </div>
          </Link>
          <ul className="hidden sm:flex items-center gap-5 text-base z-10">
            {NAVBAR_CONST.LINKS.slice(1, 3).map(({ HREF, LABEL }) => {
              const active = isActive(pathname, HREF);
              return (
                <li key={LABEL}>
                  <Button
                    href={HREF}
                    additionalClasses={
                      active
                        ? "text-base font-[400] text-grey_scale_900 dark:!text-background"
                        : "text-grey_scale_700 dark:text-white/40 text-base"
                    }
                  >
                    {/* <HyperText></HyperText> */}
                    {LABEL}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="hidden sm:flex items-center gap-3 text-base z-10">
          <li className="flex gap-1 items-center">
            {/* <Button
              onClick={() => setMuted((m) => !m)}
              theme="tertiary"
              additionalClasses="p-2 rounded-full"
              icon={muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            >
              {""}
            </Button> */}
            {/* <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              theme="tertiary"
              additionalClasses="p-2 rounded-full"
              icon={theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            >
              {""}
            </Button> */}
            <AnimatedThemeToggler />

            <div className="scale-[85%]">
              <Button
                href={EXTERNAL_LINKS.RESUME.href}
                theme="primary"
                icon={<ArrowRight size={16} className="ml-2 -rotate-45 " />}
                additionalClasses="!py-2 !px-3.5 text-base font-[450] rounded-[11px] !!hover:rotate-0"
              >
                {EXTERNAL_LINKS.RESUME.label}
              </Button>
            </div>
          </li>
        </ul>

        {/* mobile */}
        <div className="flex items-center sm:hidden">
          {/* <Button
            onClick={() => setMuted((m) => !m)}
            theme="tertiary"
            additionalClasses="p-2 rounded-full"
            icon={muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          >
            {""}
          </Button> */}
          {/* <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            theme="tertiary"
            additionalClasses="p-2 rounded-full"
            icon={theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          >
            {""}
          </Button> */}
          <AnimatedThemeToggler />

          <div className="relative rounded-xl mx-1">
            <Button
              onClick={() => setMobileOpen((v) => !v)}
              theme="tertiary"
              additionalClasses="!overflow-visible px-1"
              icon={
                <HamburgerXIcon
                  isOpen={mobileOpen}
                  size={30}
                  color={theme === "dark" ? "#fff" : "#222"}
                />
              }
            >
              {""}
            </Button>
          </div>
        </div>

        {/* mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.24, ease: [0.48, 0.02, 0.32, 1] }}
              className="sm:hidden absolute top-full right-0 mt-2 w-full rounded-3xl bg-grey_scale_100/[98%] !backdrop-blur-xl drop-shadow-2xl dark:bg-black/[98%] shadow-xl border z-[9999] flex flex-col px-5 py-7 gap-7"
            >
              {NAVBAR_CONST.LINKS.slice(0, 3).map(({ HREF, LABEL }) => {
                const active = isActive(pathname, HREF);
                return (
                  <Button
                    key={LABEL}
                    href={HREF}
                    additionalClasses={
                      active
                        ? "w-full justify-start text-grey_scale_700 dark:text-white/40"
                        : "w-full justify-start  text-grey_scale_900 dark:text-background font-[600]"
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {LABEL}
                  </Button>
                );
              })}
              {/* <Button
                href={EXTERNAL_LINKS.CONTACT.HREF}
                additionalClasses="w-full justify-start text-grey_scale_900 dark:text-background"
                onClick={() => setMobileOpen(false)}
              >
                {EXTERNAL_LINKS.CONTACT.LABEL}
              </Button> */}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <ScrollProgress />
    </header>
  );
}
