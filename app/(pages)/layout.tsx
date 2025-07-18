import NavBar from "../components/Navbar";
import "../globals.css";
import { ReactNode } from "react";
import { Providers } from "../providers";
import { HOME_HERO_CONST } from "./home/const";
import Footer from "@/components/Footer/Footer";
import { SoundProvider } from "@/components/SoundContextType/SoundContextType";
import ProgressiveBlur from "components/magicui/progressive-blur";

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
      <body className="bg-background dark:bg-black relative">
        <ProgressiveBlur
          height="10%"
          position="bottom"
          className="z-[500] fixed left-0 right-0 bottom-0 pointer-events-none"
        />{" "}
        <SoundProvider>
          <Providers>
            <NavBar />
            <main className="overflow-hidden">
              {/* <img
                src={HOME_HERO_CONST.SUNSHINE.SRC}
                alt={HOME_HERO_CONST.SUNSHINE.ALT}
                className="absolute scale-[150%] brightness-200 md:-left-1/4 top-20 md:-bottom-20 dark:hidden z-[1]"
              /> */}
              {children}
            </main>
            <Footer />
          </Providers>
        </SoundProvider>
      </body>
    </html>
  );
}
