import NavBar from "../components/Navbar/Navbar";
import "../globals.css";
import { ReactNode } from "react";
import { Providers } from "../providers";
import Footer from "@/components/Footer/Footer";
import { SoundProvider } from "@/components/ui/SoundContextType/SoundContextType";
import ProgressiveBlur from "@/components/ui/magicui/progressive-blur";
import { SmoothScroll } from "@/components/ui/Smoothscroll/SmoothScroll";
import { SmoothCursor } from "@/components/ui/Cursor/Cursor";

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
  icons: {
    icon: '/images/icons/icon.png', 
  },
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
            <SmoothScroll>
              <div className="hidden lg:block">
                <SmoothCursor />
              </div>
              <NavBar />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
          </Providers>
        </SoundProvider>
      </body>
    </html>
  );
}
