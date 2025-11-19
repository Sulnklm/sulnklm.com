"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import ScrollOffscreen, { ScrollOffscreenProps } from "./ScrollOffScreen";

type Props = Omit<ScrollOffscreenProps, "children"> & {
  src: string;
  alt?: string;
  width: number;
  height: number;
  imgClass?: string;
  quality?: number;           // default 100
  sizes?: string;             // responsive sizes
  priority?: boolean;         // default true (hero이므로)
  loading?: "eager" | "lazy"; // override if needed
  imgStyle?: React.CSSProperties; // fine-grain control
};

export default function ScrollOffscreenImage({
  src,
  alt = "",
  width,
  height,
  imgClass,
  quality = 100,
  sizes = "(min-width: 1024px) 520px, 50vw",
  priority = true,
  loading,
  imgStyle,
  ...rest
}: Props) {
  return (
    <ScrollOffscreen {...rest}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes={sizes}
        draggable={false}
        priority={priority}
        loading={loading}
        className={clsx("block select-none !h-auto", imgClass)}
        style={imgStyle}
      />
    </ScrollOffscreen>
  );
}
