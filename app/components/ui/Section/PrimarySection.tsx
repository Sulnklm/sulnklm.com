"use client";

import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";
import { SubTextBox } from "../SubTextBox/SubTextBox";

type Fit = "contain" | "cover";

export type VisualItem =
  | {
      type: "image";
      src: string;
      darkSrc?: string;
      alt?: string;
      boxHeight?: number | { base?: number; md?: number; lg?: number };
      boxHeightClass?: string;
      objectFit?: Fit;
      className?: string;
      priority?: boolean;
      scale?: number;
      translateX?: string;
      translateY?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      boxHeight?: number | { base?: number; md?: number; lg?: number };
      boxHeightClass?: string;
      objectFit?: Fit;
      className?: string;
      controls?: boolean;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
      playsInline?: boolean;
      scale?: number;
      translateX?: string;
      translateY?: string;
    }
  | {
      type: "lottie";
      data?: any;
      src?: string;
      boxHeight?: number | { base?: number; md?: number; lg?: number };
      boxHeightClass?: string;
      className?: string;
      scale?: number;
      translateX?: string;
      translateY?: string;
    };

interface VisualOptions {
  bg?: string;
  rounded?: string;
  padding?: string;
  customGrid?: string;
  align?: "center" | "start" | "end";
}

interface SectionProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  description?: React.ReactNode;
  description2?: React.ReactNode;
  visuals?: VisualItem[];
  options?: VisualOptions;
}

export default function PrimarySection({
  icon,
  title,
  subtitle,
  description,
  description2,
  visuals = [],
  options,
}: SectionProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const gridCols =
    visuals.length >= 2
      ? options?.customGrid ?? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1";

  const bgClass = options?.bg ?? "";
  const rounded = options?.rounded ?? "rounded-2xl";
  const padding = options?.padding ?? "";

  return (
    <div className="flex flex-col gap-8 lg:container">
      <div className="space-y-4">
        <SubTextBox icon={icon}>{title}</SubTextBox>
        <div className="space-y-6">
          <h2 className="text-start max-w-3xl">{subtitle}</h2>
          {description && (
            <p className="max-w-4xl text-grey_scale_900 leading-relaxed">
              {description}
            </p>
          )}
          {description2 && (
            <p className="max-w-4xl text-grey_scale_900 leading-relaxed">
              {description2}
            </p>
          )}
        </div>
      </div>

      {visuals.length > 0 && (
        <div className={`${rounded} ${bgClass} ${padding}`}>
          <div className={`grid gap-6 ${gridCols}`}>
            {visuals.map((v, i) => {
              const scale = v.scale ?? 1;
              const tx = v.translateX ?? "0";
              const ty = v.translateY ?? "0";
              const align =
                options?.align === "start"
                  ? "justify-start"
                  : options?.align === "end"
                  ? "justify-end"
                  : "justify-center";

              let heightStyle: React.CSSProperties = {};
              let heightClass = v.boxHeightClass ?? "";

              if (typeof v.boxHeight === "number") {
                heightStyle.height = v.boxHeight;
              } else if (typeof v.boxHeight === "object") {
                heightStyle = {
                  ["--h-base" as any]: `${v.boxHeight.base ?? 360}px`,
                  ["--h-md" as any]: `${v.boxHeight.md ?? v.boxHeight.base ?? 360}px`,
                  ["--h-lg" as any]: `${
                    v.boxHeight.lg ?? v.boxHeight.md ?? v.boxHeight.base ?? 360
                  }px`,
                } as React.CSSProperties;
                heightClass =
                  "h-[var(--h-base)] md:h-[var(--h-md)] lg:h-[var(--h-lg)]";
              }

              return (
                <div
                  key={`${v.type}-${i}`}
                  className={`relative overflow-hidden ${rounded} flex ${align} items-center bg-gray-200/40 dark:bg-white/10 w-full ${heightClass}`}
                  style={heightStyle}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-300 ease-out"
                    style={{
                      transform: `scale(${scale}) translate(${tx}, ${ty})`,
                      transformOrigin: "center",
                    }}
                  >
                    {v.type === "image" && (
                      <Image
                        src={
                          mounted && isDark && (v as any).darkSrc
                            ? (v as any).darkSrc
                            : v.src
                        }
                        alt={(v as any).alt ?? ""}
                        fill
                        sizes="100vw"
                        priority={(v as any).priority ?? false}
                        className={`object-${(v as any).objectFit ?? "contain"} ${
                          (v as any).className ?? ""
                        }`}
                      />
                    )}

                    {v.type === "video" && (
                      <video
                        className={`w-fit h-full rounded-[40px] mx-auto p-[0.5px] bg-white border-white object-${
                          (v as any).objectFit ?? "contain"
                        } ${(v as any).className ?? ""}`}
                        src={v.src}
                        poster={(v as any).poster}
                        controls={(v as any).controls ?? false}
                        autoPlay={(v as any).autoPlay ?? true}
                        loop={(v as any).loop ?? true}
                        muted={(v as any).muted ?? true}
                        playsInline={(v as any).playsInline ?? true}
                      />
                    )}

                    {v.type === "lottie" &&
                      ((v as any).data ? (
                        <Lottie
                          animationData={(v as any).data}
                          loop
                          autoplay
                          style={{ width: "100%", height: "100%" }}
                          className={(v as any).className}
                          rendererSettings={{
                            preserveAspectRatio: "xMidYMid meet",
                          }}
                        />
                      ) : (v as any).src ? (
                        <LottieFromSrc
                          src={(v as any).src}
                          className={(v as any).className}
                        />
                      ) : null)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function LottieFromSrc({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [data, setData] = React.useState<any | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(src, { cache: "force-cache" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Failed to load Lottie JSON");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (error) return <div className="text-sm text-red-600 p-2">Load failed</div>;
  if (!data)
    return (
      <div className="w-full h-full animate-pulse bg-black/5 dark:bg-white/10 rounded-lg" />
    );

  return (
    <Lottie
      animationData={data}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
      className={className}
      rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
    />
  );
}
