import NavBar from "../components/Navbar/Navbar";
import "../globals.css";
import { ReactNode } from "react";
import { Providers } from "../providers";
import Footer from "@/components/Footer/Footer";
import { SoundProvider } from "@/components/ui/SoundContextType/SoundContextType";
import ProgressiveBlur from "@/components/ui/magicui/progressive-blur";
import { SmoothScroll } from "@/components/ui/Smoothscroll/SmoothScroll";
import { SmoothCursor } from "@/components/ui/Cursor/Cursor";
import Script from "next/script";
import AnalyticsListener from "@/AnalyticsListener";
import LetsWork from "@/components/Footer/LetsWork";

export const metadata = {
  metadataBase: new URL("https://www.sulnklm.com"),
  title: "Suin Kim | Portfolio",
  authors: [{ name: "Suin Kim", url: "https://sulnklm.com" }],
  creator: "Suin Kim",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/images/icons/icon.png",
  },
  openGraph: {
    title: "Suin Kim | Portfolio",
    description: "A Strategic Empath who designs with clarity and intention.",
    url: "https://www.sulnklm.com",
    siteName: "Suin Kim Portfolio",
    images: [
      {
        url: "/images/home/thumbnail.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suin Kim | Portfolio",
    description: "A Strategic Empath who designs with clarity and intention.",
    images: ["/images/home/thumbnail.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  (function(){
    try{
      var key = 'theme-v2';
      var t = localStorage.getItem(key);
      var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var wantDark = t === 'dark' || (!t || t === 'system') && sysDark;
      document.documentElement.classList[wantDark ? 'add' : 'remove']('dark');
    }catch(e){}
  })();
`,
        }}
      />
      <body className="bg-background dark:bg-black relative">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LPB1T054P7"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LPB1T054P7', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <AnalyticsListener />
        <ProgressiveBlur
          height="10%"
          position="bottom"
          className="z-[500] fixed left-0 right-0 bottom-0 pointer-events-none"
        />
        <Providers>
          {/* <SmoothScroll> */}
          <div className="hidden lg:block">{/* <SmoothCursor /> */}</div>
          <NavBar />
          <main>{children}</main>
          {/* <LetsWork /> */}
          <Footer />
          {/* </SmoothScroll> */}
        </Providers>
      </body>
    </html>
  );
}
