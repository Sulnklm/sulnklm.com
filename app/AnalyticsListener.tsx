"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;
    if (!window.gtag) return; 

    window.gtag("config", "G-LPB1T054P7", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
