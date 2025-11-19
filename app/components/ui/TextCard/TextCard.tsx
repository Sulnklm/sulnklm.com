"use client";

import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

type Align = "left" | "center" | "right";
type Size = "sm" | "md" | "lg";
type MediaType = "image" | "video";
type Position = "top" | "bottom" | "left" | "right";
type Responsive<T> = T | { base?: T; md?: T; lg?: T; xl?: T };

interface MediaProps {
  type: MediaType | (string & {});
  src: string;
  alt?: string;
  width?: string | number;
  height?: number | { base?: number; md?: number; lg?: number; xl?: number };
  containerWidth?: number | { base?: number; md?: number; lg?: number; xl?: number };
  scale?: number;
  padding?: string;
  borderRadius?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  objectFit?: "contain" | "cover";
}

export interface TextCardProps {
  eyebrow?: React.ReactNode;
  header?: React.ReactNode;
  body: React.ReactNode;
  align?: Align;
  size?: Size;
  showDot?: boolean;
  dotColorClass?: string;
  eyebrowColorClass?: string;
  headerColorClass?: string;
  bgClassName?: string;
  roundedClassName?: string;
  shadowClassName?: string;
  className?: string;
  media?: MediaProps | [MediaProps] | [MediaProps, MediaProps];
  mediaPosition?: Responsive<Position>;
  contentGapClass?: string;
  mediaBasis?: Responsive<string | number>;
  contentBasis?: Responsive<string | number>;
  mediaItemsGapClass?: string;
}

function resolveResponsive<T>(
  val: Responsive<T> | undefined,
  bp: "base" | "md" | "lg" | "xl",
  fallback?: T
): T | undefined {
  if (val === undefined) return fallback;
  if (typeof val !== "object" || val === null) return (val as T) ?? fallback;
  const obj = val as any;
  if (obj[bp] !== undefined) return obj[bp];
  if (bp === "xl" && obj.lg !== undefined) return obj.lg;
  if (obj.base !== undefined) return obj.base;
  return fallback;
}

const toCssVal = (v?: string | number) =>
  typeof v === "number" ? `${v}px` : v;

function buildHeight(media?: MediaProps) {
  let heightStyle: React.CSSProperties = {};
  let heightClass = "";
  if (typeof media?.height === "number") {
    heightStyle.height = media.height;
  } else if (typeof media?.height === "object") {
    heightStyle = {
      ["--h-base" as any]: `${media.height.base ?? 240}px`,
      ["--h-md" as any]: `${media.height.md ?? media.height.base ?? 240}px`,
      ["--h-lg" as any]: `${media.height.lg ?? media.height.md ?? media.height.base ?? 240}px`,
      ["--h-xl" as any]: `${media.height.xl ?? media.height.lg ?? media.height.md ?? media.height.base ?? 240}px`,
    } as React.CSSProperties;
    heightClass =
      "h-[var(--h-base)] md:h-[var(--h-md)] lg:h-[var(--h-lg)] xl:h-[var(--h-xl)]";
  }
  return { heightStyle, heightClass };
}

function buildContainerWidth(media?: MediaProps) {
  let widthStyle: React.CSSProperties = {};
  let widthClass = "";
  if (typeof media?.containerWidth === "number") {
    widthStyle.width = media.containerWidth;
  } else if (typeof media?.containerWidth === "object") {
    widthStyle = {
      ["--w-base" as any]: `${media.containerWidth.base ?? ""}px`,
      ["--w-md" as any]: `${media.containerWidth.md ?? media.containerWidth.base ?? ""}px`,
      ["--w-lg" as any]: `${media.containerWidth.lg ?? media.containerWidth.md ?? media.containerWidth.base ?? ""}px`,
      ["--w-xl" as any]: `${media.containerWidth.xl ?? media.containerWidth.lg ?? media.containerWidth.md ?? media.containerWidth.base ?? ""}px`,
    } as React.CSSProperties;
    widthClass =
      "w-[var(--w-base)] md:w-[var(--w-md)] lg:w-[var(--w-lg)] xl:w-[var(--w-xl)]";
  }
  return { widthStyle, widthClass };
}

export default function TextCard({
  eyebrow,
  header,
  body,
  align = "left",
  size = "md",
  showDot = true,
  dotColorClass = "bg-orange-500 dark:bg-orange-600",
  eyebrowColorClass = "text-orange-500 dark:text-orange-600",
  headerColorClass = "",
  bgClassName = "bg-gray-200/40 w-full dark:bg-white/10",
  roundedClassName = "rounded-2xl",
  shadowClassName = "",
  className = "",
  media,
  mediaPosition = "bottom",
  contentGapClass = "gap-10 lg:gap-10 2xl:gap-20",
  mediaBasis,
  contentBasis,
  mediaItemsGapClass = "gap-4 md:gap-6",
}: TextCardProps) {
  const basePos = resolveResponsive<Position>(mediaPosition, "base", "bottom")!;
  const mdPos = resolveResponsive<Position>(mediaPosition, "md", basePos)!;
  const lgPos = resolveResponsive<Position>(mediaPosition, "lg", mdPos)!;
  const xlPos = resolveResponsive<Position>(mediaPosition, "xl", lgPos)!;

  const orientationClasses = clsx("flex", {
    "flex-col": basePos === "top",
    "flex-col-reverse": basePos === "bottom",
    "flex-row": basePos === "left",
    "flex-row-reverse": basePos === "right",
    "md:flex-col": mdPos === "top",
    "md:flex-col-reverse": mdPos === "bottom",
    "md:flex-row": mdPos === "left",
    "md:flex-row-reverse": mdPos === "right",
    "lg:flex-col": lgPos === "top",
    "lg:flex-col-reverse": lgPos === "bottom",
    "lg:flex-row": lgPos === "left",
    "lg:flex-row-reverse": lgPos === "right",
    "xl:flex-col": xlPos === "top",
    "xl:flex-col-reverse": xlPos === "bottom",
    "xl:flex-row": xlPos === "left",
    "xl:flex-row-reverse": xlPos === "right",
  });

  const mediaBasisBase = toCssVal(resolveResponsive(mediaBasis, "base"));
  const mediaBasisMd = toCssVal(resolveResponsive(mediaBasis, "md", mediaBasisBase));
  const mediaBasisLg = toCssVal(resolveResponsive(mediaBasis, "lg", mediaBasisMd));
  const mediaBasisXl = toCssVal(resolveResponsive(mediaBasis, "xl", mediaBasisLg));

  const contentBasisBase = toCssVal(resolveResponsive(contentBasis, "base"));
  const contentBasisMd = toCssVal(resolveResponsive(contentBasis, "md", contentBasisBase));
  const contentBasisLg = toCssVal(resolveResponsive(contentBasis, "lg", contentBasisMd));
  const contentBasisXl = toCssVal(resolveResponsive(contentBasis, "xl", contentBasisLg));

  const mediaBasisStyle: React.CSSProperties = {
    ...(mediaBasisBase && { ["--mf-base" as any]: mediaBasisBase }),
    ...(mediaBasisMd && { ["--mf-md" as any]: mediaBasisMd }),
    ...(mediaBasisLg && { ["--mf-lg" as any]: mediaBasisLg }),
    ...(mediaBasisXl && { ["--mf-xl" as any]: mediaBasisXl }),
  };

  const contentBasisStyle: React.CSSProperties = {
    ...(contentBasisBase && { ["--cf-base" as any]: contentBasisBase }),
    ...(contentBasisMd && { ["--cf-md" as any]: contentBasisMd }),
    ...(contentBasisLg && { ["--cf-lg" as any]: contentBasisLg }),
    ...(contentBasisXl && { ["--cf-xl" as any]: contentBasisXl }),
  };

  const mediaBasisClass =
    mediaBasisBase || mediaBasisMd || mediaBasisLg || mediaBasisXl
      ? "basis-[var(--mf-base)] md:basis-[var(--mf-md)] lg:basis-[var(--mf-lg)] xl:basis-[var(--mf-xl)]"
      : "";

  const contentBasisClass =
    contentBasisBase || contentBasisMd || contentBasisLg || contentBasisXl
      ? "basis-[var(--cf-base)] md:basis-[var(--cf-md)] lg:basis-[var(--cf-lg)] xl:basis-[var(--cf-xl)]"
      : "";

  const mediaArray = React.useMemo(() => {
    if (!media) return [];
    return Array.isArray(media) ? media.slice(0, 2) : [media];
  }, [media]);

  const renderSingleMedia = (m: MediaProps, key: React.Key) => {
    const scale = m.scale ?? 1;
    const padding = m.padding ?? "";
    const borderRadius = m.borderRadius ?? "rounded-xl";
    const { heightStyle, heightClass } = buildHeight(m);
    const { widthStyle, widthClass } = buildContainerWidth(m);
    const wrapperWidthClass = widthClass || "w-full";
    const objectFitClass = m.objectFit === "cover" ? "object-cover" : "object-contain";

    return (
      <div
        key={key}
        className={clsx(
          "overflow-hidden mx-auto flex justify-center items-center bg-gray-100/40 dark:bg-white/10",
          wrapperWidthClass,
          borderRadius,
          padding,
          heightClass,
          m.className
        )}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          ...heightStyle,
          ...widthStyle,
        }}
      >
        {m.type === "image" && (
          <Image
            src={m.src}
            alt={m.alt ?? ""}
            width={typeof m.width === "number" ? m.width : 800}
            height={typeof m.height === "number" ? m.height : 500}
            className={clsx(objectFitClass, "w-full h-full", borderRadius)}
          />
        )}
        {m.type === "video" && (
          <video
            src={m.src}
            className={clsx("w-full h-full", objectFitClass, borderRadius)}
            autoPlay={m.autoPlay ?? true}
            loop={m.loop ?? false}
            muted={m.muted ?? true}
            controls={m.controls ?? false}
            playsInline
          />
        )}
      </div>
    );
  };

  const renderMediaGroup = () => {
    if (mediaArray.length === 0) return null;
    if (mediaArray.length === 1) return renderSingleMedia(mediaArray[0], 0);

    const sideBySide =
      xlPos === "left" || xlPos === "right" ||
      lgPos === "left" || lgPos === "right" ||
      mdPos === "left" || mdPos === "right" ||
      basePos === "left" || basePos === "right";

    return (
      <div
        className={clsx(
          mediaItemsGapClass,
          sideBySide ? "grid grid-cols-1 md:grid-cols-2" : "grid grid-cols-1"
        )}
      >
        {mediaArray.map((m, i) => renderSingleMedia(m, i))}
      </div>
    );
  };

  const renderBody = () => (
    <div>
      {eyebrow && (
        <div className="flex items-center gap-2">
          {showDot && <span aria-hidden className={clsx("h-2 w-2 rounded-full", dotColorClass)} />}
          <p
            className={clsx(
              "uppercase tracking-wide font-medium text-sm",
              eyebrowColorClass,
              align === "center" && "text-center",
              align === "right" && "text-right"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}
      {header && (
        <div className="flex items-center gap-2">
          {showDot && <span aria-hidden className={clsx("h-2 w-2 rounded-full", dotColorClass)} />}
          <p
            className={clsx(
              "tracking-normal font-[400] text-xl max-w-3xl mb-3 mt-2 dark:text-white",
              headerColorClass,
              align === "center" && "text-center",
              align === "right" && "text-right"
            )}
          >
            {header}
          </p>
        </div>
      )}
      <p
        className={clsx(
          "mt-3 text-sm lg:text-base opacity-80 leading-relaxed md:max-w-3xl",
          align === "center" && "text-center",
          align === "right" && "text-right"
        )}
      >
        {body}
      </p>
    </div>
  );

  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "w-full h-full p-5 lg:p-10 place-content-start items-center",
          bgClassName,
          roundedClassName,
          shadowClassName,
          orientationClasses,
          contentGapClass
          
        )}
      >
        {mediaArray.length > 0 && (
          <div className={clsx("mx-auto w-full", mediaBasisClass)} style={mediaBasisStyle}>
           <div className="flex justify-center">
            {renderMediaGroup()}
            </div>
          </div>
        )}
        <div className={clsx("w-full", contentBasisClass)} style={contentBasisStyle}>
          {renderBody()}
        </div>
      </div>
    </div>
  );
}
