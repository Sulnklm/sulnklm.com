import "../globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import AnalyticsListener from "@/AnalyticsListener";

const GATE_URL = "https://www.sulnklm.com/gate";

export const metadata = {
  metadataBase: new URL("https://www.sulnklm.com"),
  title: "Suin Kim | Portfolio",
  authors: [{ name: "Suin Kim", url: "https://sulnklm.com" }],
  creator: "Suin Kim",
  description:
    "포트폴리오가 업데이트 되었습니다. 새 포트폴리오로 이동해주세요.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/icons/icon.png",
  },
  openGraph: {
    title: "Suin Kim | Portfolio",
    description:
      "포트폴리오가 업데이트 되었습니다. 새 포트폴리오로 이동해주세요.",
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
    description:
      "포트폴리오가 업데이트 되었습니다. 새 포트폴리오로 이동해주세요.",
    images: ["/images/home/thumbnail.webp"],
  },
};

// NOTE: children is intentionally never rendered below. This layout is
// wrapped around every route in the app (including /about, /projects,
// /projects/[slug]), so leaving {children} out means no route can render
// the old portfolio content anymore — every URL on the site shows only
// this notice.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
        <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center">
          <p className="max-w-md text-base text-black dark:text-white">
            If you’re seeing this page, please visit{" "}
            <a
              href={GATE_URL}
              className="underline underline-offset-4 hover:opacity-70"
            >
              {GATE_URL}
            </a>
            <br />
            My portfolio has been updated!
          </p>
          <a
            href={GATE_URL}
            className="inline-block rounded-full border border-black/20 px-6 py-2 text-sm text-black transition-colors hover:bg-black hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Go to Portfolio
          </a>
        </main>
      </body>
    </html>
  );
}
