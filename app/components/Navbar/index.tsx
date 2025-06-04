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
        <Link href="/">
          <h3>Suin.K</h3>
        </Link>
        <div>
          <ul className="flex items-center gap-5">
            {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, LABEL }) => (
              <li key={LABEL}>
                <Button href={HREF}>{LABEL}</Button>
              </li>
            ))}
            <Button href={NAVBAR_CONST.CONTACT.HREF} theme="secondary">
              {NAVBAR_CONST.CONTACT.LABEL}
            </Button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
