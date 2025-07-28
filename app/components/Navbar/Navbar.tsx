"use client";
import React from "react";
import { NAVBAR_CONST } from "./const";
import { Button } from "../Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircleMore, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import { useSound } from "../SoundContextType/SoundContextType";
import { HyperText } from "../HyperText/HyperText";
import { ScrollProgress } from "../ScrollProgress/ScrollProgress";
import { EXTERNAL_LINKS } from "@/lib/const";
import ProgressiveBlur from "components/magicui/progressive-blur";

const NavBar = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const { muted, setMuted } = useSound();

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] max-w-[750px] mx-auto">
      <ProgressiveBlur
        height="20%"
        position="top"
        className="z-[0] fixed left-0 right-0 bottom-0 pointer-events-none"
      />{" "}
      <nav className="relative container mx-auto flex justify-between items-center bg-white/90 backdrop-blur-lg dark:bg-black/80 m-5 p-2.5 z-10 mt-3 rounded-3xl border shadow-br">
        <ul className="flex items-center gap-5 text-base z-10">
          <Link
            href="/"
            className="group flex items-center hover:gap-2.5 duration-300 gap-1.5 pl-5 pr-5"
          >
            <p className="text-2xl group-hover:scale-95 duration-300 font-[300] font-PerfectlyNineties dark:text-background">
              ✦
            </p>
          </Link>
          {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, LABEL }) => {
            const isCurrentPage = pathname === HREF;
            return (
              <li key={LABEL}>
                <Button
                  href={HREF}
                  additionalClasses={
                    isCurrentPage
                      ? "text-sm"
                      : "text-grey_scale_700 dark:text-white/40 text-sm"
                  }
                >
                  <HyperText key={LABEL}>{LABEL}</HyperText>
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
