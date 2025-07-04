"use client";
import React from "react";
import { NAVBAR_CONST } from "./const";
import { Button } from "../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircleMore, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NavBar = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] mx-auto 
                    dark:bg-black/50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center p-2.5 max-w-[1280px]">
        <ul className="flex items-center gap-5 text-base">
          <Link
            href="/"
            className="group flex items-center hover:gap-2.5 duration-300 gap-1.5 pl-5 pr-5"
          >
            <h3 className="group-hover:scale-95 duration-300 font-Crimson italic text-primary dark:text-white/90">
              ✦ (Logo)
            </h3>
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
                  {LABEL}
                </Button>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center gap-4 dark:text-white/80 text-base">
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

          <li>
            <Button
              href={NAVBAR_CONST.CONTACT.HREF}
              theme="primary"
              icon={<MessageCircleMore size={16} className="ml-2" />}
              additionalClasses="!py-2.5 !px-3.5 text-sm rounded-[11px]"
            >
              {NAVBAR_CONST.CONTACT.LABEL}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
