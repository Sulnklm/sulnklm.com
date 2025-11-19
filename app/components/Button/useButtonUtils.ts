import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useButtonUtils() {
  const { resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme === "system" ? systemTheme : resolvedTheme;

  return { currentTheme, mounted, router };
}
