"use client";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
};