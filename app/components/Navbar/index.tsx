"use client";
import React, { Children } from "react";
import { NAVBAR_CONST } from "./const";
import { Button } from "../Button";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props): JSX.Element => {
  return (
    <header className="absolute top-0 left-0 w-full z-[100]">
      <nav className="container mx-auto flex justify-between items-center p-5">
        <Link href="/" className="group flex items-center hover:gap-2.5 duration-300 gap-1.5">
            <img
                src={NAVBAR_CONST.LOGO.SRC}
                alt={NAVBAR_CONST.LOGO.ALT}
                className="w-8 h-8 object-cover dark:invert group-hover:scale-125 group-hover:-rotate-12 duration-300 pb-0.5"></img>
          <h3 className="group-hover:scale-95 duration-300">Suin.K</h3>
        </Link>
        <div>
          <ul className="flex items-center gap-5 dark:text-white/80">
            {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, LABEL }) => (
              <li key={LABEL}>
                <Button href={HREF}>{LABEL}</Button>
              </li>
            ))}
            <Button
              href={NAVBAR_CONST.CONTACT.HREF}
              theme="primary"
            >
              {NAVBAR_CONST.CONTACT.LABEL}
            </Button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
