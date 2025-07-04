import NavBar from "../components/Navbar";
import "../globals.css";
import { ReactNode } from "react";
import { Providers } from "../providers";
import { HOME_HERO_CONST } from "./home/const";

export const metadata = {
  title: "Suin Kim | Portfolio",
  keywords: [
    "Portfolio",
    "Suin Kim",
    "UX/UI Designer",
    "Web Developer",
    "Graphic Designer",
  ],
  authors: [{ name: "Suin Kim", url: "https://sulnklm.com" }],
  creator: "Suin Kim",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background dark:bg-black">
        <Providers>
          <NavBar />
          <main>
            <img
              src={HOME_HERO_CONST.SUNSHINE.SRC}
              alt={HOME_HERO_CONST.SUNSHINE.ALT}
              className="absolute scale-[150%] brightness-200 md:-left-1/4 top-20 md:-bottom-20 dark:hidden z-[1]"
            />
            {children}
          </main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
