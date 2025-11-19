import { useRef, useEffect, useState } from "react";
import type { ProjectFeature } from "./types";

export function useKeyFeatures(features: ProjectFeature[]) {
  const [activeIdx, setActiveIdx] = useState(0);

  // desktop indicator ref
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // indicator style (desktop)
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (tabRefs.current[activeIdx]) {
      const btn = tabRefs.current[activeIdx]!;
      setIndicatorStyle({
        left: btn.offsetLeft + btn.offsetWidth / 2,
        width: 50,
      });
    }
  }, [activeIdx, features.length]);

  // mobile slider navigation handlers
  const goPrev = () => setActiveIdx((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  const goNext = () => setActiveIdx((prev) => (prev === features.length - 1 ? 0 : prev + 1));

  return {
    activeIdx,
    setActiveIdx,
    tabRefs,
    indicatorStyle,
    goPrev,
    goNext,
  };
}
