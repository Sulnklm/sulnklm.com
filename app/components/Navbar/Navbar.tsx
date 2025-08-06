"use client";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSound } from "../ui/SoundContextType/SoundContextType";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Menu,
  X,
  MessageCircleMore,
} from "lucide-react";
import { NAVBAR_CONST } from "./const";
import { EXTERNAL_LINKS } from "@/lib/const";
import { AnimatedShinyText } from "../ui/ShinyText/ShinyText";
import { HyperText } from "../animation/HyperText/HyperText";
import ProgressiveBlur from "@/components/ui/magicui/progressive-blur";
import { ScrollProgress } from "../ui/ScrollProgress/ScrollProgress";
import { HamburgerXIcon } from "../ui/HamburgerXIcon/HamburgerXIcon";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { muted, setMuted } = useSound();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] max-w-[750px] mx-auto px-5">
      <ProgressiveBlur
        height="20%"
        position="top"
        className="z-[0] fixed left-0 right-0 bottom-0 pointer-events-none"
      />
      <nav className="relative container mx-auto flex justify-between items-center bg-white/90 backdrop-blur-lg dark:bg-black/80 m-5 p-2.5 z-10 mt-3 rounded-3xl border shadow-br dark:shadow-inner-customWhiteDark">
        {/* logo */}
        <Link
          href="/"
          className="group flex items-center hover:gap-2.5 duration-300 gap-1.5 pl-5 pr-5"
        >
          <p className="text-2xl group-hover:scale-95 duration-300 font-[500] font-PerfectlyNineties dark:text-background -translate-y-0.5">
            <AnimatedShinyText>
              Suin✦<span className="italic">k</span>
            </AnimatedShinyText>
          </p>
        </Link>

        <ul className="hidden sm:flex items-center gap-5 text-base z-10">
          {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, LABEL }) => {
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
          <li>
            <Button
              href={EXTERNAL_LINKS.CONTACT.HREF}
              theme="primary"
              icon={<MessageCircleMore size={16} className="ml-2" />}
              additionalClasses="!py-2.5 !px-3.5 text-base font-[450] rounded-[11px] scale-[85%]"
            >
              {EXTERNAL_LINKS.CONTACT.LABEL}
            </Button>
          </li>
        </ul>

        {/* mobile */}
        <div className="flex items-center gap-3 sm:hidden">
          <Button
            onClick={() => setMuted((m) => !m)}
            theme="tertiary"
            additionalClasses="p-2 rounded-full"
            icon={muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          >
            {""}
          </Button>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            theme="tertiary"
            additionalClasses="p-2 rounded-full"
            icon={theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          >
            {""}
          </Button>
          <div className="relative dark:bg-white bg-grey_scale_1000 rounded-xl ml-2">
            <Button
              onClick={() => setMobileOpen((v) => !v)}
              theme="tertiary"
              additionalClasses="!overflow-visible px-1"
              icon={
                <HamburgerXIcon
                  isOpen={mobileOpen}
                  size={30}
                  color={theme === "dark" ? "#222" : "#fff"}
                />
              }
            >
              {""}
            </Button>
          </div>
        </div>

        {/* mobile dropdown */}
        {mobileOpen && (
          <div className="sm:hidden absolute top-full right-0 mt-2 w-full rounded-3xl bg-grey_scale_100/95 !backdrop-blur-xl drop-shadow-2xl dark:bg-black/95 shadow-xl border z-[9999] flex flex-col px-5 py-7 gap-7 animate-fadeIn">
            {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, LABEL }) => (
              <Button
                key={LABEL}
                href={HREF}
                additionalClasses={
                  pathname === HREF
                    ? "w-full justify-start text-grey_scale_700 dark:text-white/40 font-[500]"
                    : "w-full justify-start text-grey_scale_900 dark:!text-background"
                }
                onClick={() => setMobileOpen(false)}
              >
                {LABEL}
              </Button>
            ))}
            <Button
              href={EXTERNAL_LINKS.CONTACT.HREF}
              additionalClasses="w-full justify-start text-grey_scale_900 dark:text-background"
              onClick={() => setMobileOpen(false)}
            >
              {EXTERNAL_LINKS.CONTACT.LABEL}
            </Button>
          </div>
        )}
      </nav>
      <ScrollProgress />
    </header>
  );
}
