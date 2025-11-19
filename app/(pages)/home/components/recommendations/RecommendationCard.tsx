"use client";

import Image from "next/image";
import React from "react";
import type { Recommendation } from "./const";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  item: Recommendation;
  className?: string;
};

export default function RecommendationCard({ item, className }: Props) {
  return (
    <article
      className={clsx(
        "grid gap-6 items-start rounded-2xl border !border-grey_scale_500/20 bg-white/40 dark:bg-grey_scale_1000/30 h-fit",
        "p-5 sm:p-6 lg:p-8",
        className
      )}
    >
      <div className="w-full mx-auto lg:mx-0">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-5">
              <div className="relative max-w-[3.8rem] h-auto w-full rounded-lg overflow-hidden">
                <Image
                  src={item.avatarSrc}
                  alt={item.avatarAlt ?? item.name}
                  className={clsx(item.imageClassName ?? "object-cover")}
                  priority
                  width={170}
                  height={170}
                />
              </div>
              <div className="mt-3">
                <p className="font-medium leading-tight dark:text-grey_scale_100">
                  {item.name}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {item.role}
                  {item.company ? ` @ ${item.company}` : ""}
                </p>
              </div>
            </div>

            {item.quote && item.quote.trim() !== "" && (
              <p className="text-sm lg:text-base leading-6 lg:leading-7 text-neutral-800 dark:text-neutral-400 mt-5">
                {item.quote}
              </p>
            )}
          </div>

          {/* CTA  */}
          {item.cta && (
            <div>
              <Link
                href={item.cta.href}
                className="flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-neutral-800 text-white dark:bg-white dark:text-black lg:hover:scale-[98%] lg:hover:opacity-80 duration-300 transition"
              >
                <div className="hidden sm:block">
                {item.cta.label}
                </div>
                <ArrowRight size={16}/>
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
