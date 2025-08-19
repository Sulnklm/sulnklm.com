"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useLoadingSpinner(delay = 500) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [pathname, delay]);

  return isLoading;
}
