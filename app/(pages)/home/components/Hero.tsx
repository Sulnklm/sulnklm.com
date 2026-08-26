"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, MoonStar, Sunrise, Sun, Sunset } from "lucide-react";
import { DotBackground } from "@/components/ui/DotBackground/DotBackground";
import { Button } from "@/components/Button/Button";
import { EXTERNAL_LINKS } from "@/lib/const";
import { HOME_HERO_CONST } from "../const";
import { SubTextBox } from "@/components/ui/SubTextBox/SubTextBox";
import { useVancouverTime } from "@/hooks/useVancouverTime";
import OutlineTag from "@/components/ui/OutlineTag/OutlineTag";
import ScrollOffscreen from "@/components/ui/ScrollOffScreen/ScrollOffScreen";
import ScrollOffscreenImage from "@/components/ui/ScrollOffScreen/ScrollOffScreenImage";
import Image from "next/image";
import FloatingScrollCue from "@/components/ui/FloatingScrollCue/FloatingScrollCue";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { PointerHighlight } from "@/components/ui/PointerHighlight/PointerHighlight";
import { FlipWords } from "@/components/animation/FlipWords/FlipWords";
import { Highlighter } from "@/components/ui/highlighter";

interface HeroProps {
  lastUpdate: Date | null;
}

type Deco = {
  side: "left" | "right";
  src: string;
  alt?: string;
  width: number;
  height: number;
  positionClass?: string;
  initialX?: number;
  initialY?: number;
  initialRotate?: number;
  scale?: number;
  disappearAt?: number; // 0~1
  z?: number;
};

const LEFT_ITEMS: Deco[] = [
  {
    side: "left",
    src: "/images/home/figma.svg",
    alt: "Figma blobs",
    width: 150,
    height: 220,
    positionClass:
      "left-[-20px] grayscale dark:brightness-50 dark:opacity-80 top-[120px] hidden lg:block rotate-[30deg] 2xl:scale-[1.2] dark:opacity-70",
    initialX: 0,
    initialY: 0,
    initialRotate: 0,
    scale: 1,
    disappearAt: 0.95,
    z: 410,
  },
  {
    side: "left",
    src: "/images/home/headshot.webp",
    alt: "Headshot",
    width: 140,
    height: 220,
    positionClass:
      "left-[-20px]  top-[380px] hidden dark:grayscale dark:brightness-50 dark:opacity-80 lg:block -rotate-[10deg] 2xl:scale-[120%] dark:opacity-70",
    initialX: 0,
    initialY: 0,
    initialRotate: 0,
    scale: 1,
    disappearAt: 0.95,
    z: 420,
  },
];

const RIGHT_ITEMS: Deco[] = [
  {
    side: "right",
    src: "/images/home/smile.svg",
    alt: "Portfolio browser card",
    width: 140,
    height: 340,
    positionClass:
      "right-[4px] dark:invert translate-x-3 grayscale opacity-60 dark:opacity-30 top-[140px] hidden lg:block",
    initialX: 10,
    initialY: 0,
    initialRotate: 3,
    scale: 1,
    disappearAt: 0.95,
    z: 410,
  },
  {
    side: "right",
    src: "/images/home/pixel.webp",
    alt: "Avatar orange tile",
    width: 300,
    height: 150,
    positionClass:
      "right-[-129px] bottom-[100px] hidden lg:block dark:grayscale dark:opacity-40 dark:brightness-75 overflow-hidden -rotate-[20deg] xl:scale-[120%] 2xl:scale-[130%] dark:opacity-70",
    initialX: 0,
    initialY: 0,
    scale: 1,
    disappearAt: 0.9,
    z: 420,
  },
];

export default function Hero({ lastUpdate }: HeroProps) {
  const actions = useMemo(
    () => [
      {
        href: EXTERNAL_LINKS.CONTACT.HREF,
        theme: "primary" as const,
        label: EXTERNAL_LINKS.CONTACT.LABEL,
        icon: null,
        extraClasses: "dark:px-8",
      },
      {
        href: EXTERNAL_LINKS.LINKEDIN.href,
        theme: "secondary" as const,
        label: EXTERNAL_LINKS.LINKEDIN.label,
        icon: <ArrowRight size={16} className="-rotate-45"/>,
        extraClasses: "",
      },
    ],
    []
  );

  const { str: timeStr, hour } = useVancouverTime();

  const Icon = useMemo(() => {
    if (hour >= 0 && hour < 4) return MoonStar;
    if (hour < 7) return Sunrise;
    if (hour < 18) return Sun;
    if (hour < 20) return Sunset;
    return MoonStar;
  }, [hour]);

  const [showLastUpdate, setShowLastUpdate] = useState(true);
  useEffect(() => {
    const onScroll = () => setShowLastUpdate(window.scrollY <= 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const DECOS = useMemo(() => [...LEFT_ITEMS, ...RIGHT_ITEMS], []);

  return (
    <section className="relative place-content-center md:mt-10 py-20 lg:py-0 md:h-[80vh] xl:h-screen bg-background dark:bg-primary px-5 border-b md:border-b-0 !border-b-grey_scale_500/40 dark:!border-b-grey_scale_900 border-dashed overflow-hidden">
      {DECOS.map((d, i) => (
        <ScrollOffscreenImage
          key={`${d.side}-${i}`}
          side={d.side}
          src={d.src}
          alt={d.alt}
          width={d.width}
          height={d.height}
          positionClass={`${d.positionClass} pointer-events-none`}
          initialX={d.initialX}
          initialY={d.initialY}
          initialRotate={d.initialRotate}
          scale={d.scale}
          disappearAt={d.disappearAt}
          z={100}
        />
      ))}

      <div className="absolute inset-0 z-0 opacity-90 dark:opacity-70">
        <DotBackground />
      </div>

      <ScrollOffscreen
        side="left"
        positionClass="left-[1px] top-[670px] rotate-12 hidden lg:block"
        frameClass="pointer-events-auto"
        initialX={0}
        initialY={0}
        disappearAt={0.9}
        z={1000}
      >
        <SubTextBox
          icon={<Icon size={15} strokeWidth={1.8} className="text-coral" />}
        >
          <div className="opacity-80 dark:opacity-50">
            {HOME_HERO_CONST.DESCRIPTION.DESCRIPTION1}: {timeStr}
          </div>
        </SubTextBox>
      </ScrollOffscreen>

      <div className="relative z-[900] container mx-auto flex flex-col items-center justify-center 2xl:pb-20 gap-10 h-full text-center mt-24 mb-10 md:mb-0 md:-mt-28">
        <div className="flex flex-col items-center">
          <div className="grid items-start">
            {/* <OutlineTag
              variant="filled"
              className="rounded-md w-fit font-mono !px-2 !py-1.5 text-sm tracking-tighter font-[300] lg:!py-1.5"
            > */}
            <div className="w-fit mb-3">
              <Highlighter action="highlight" color="#FF500B">
                <p className="text-white dark:text-white font-[450] px-2 lg:py-0.5 text-base lg:text-lg">
                Hey! I’m Suin,
                </p>
              </Highlighter>
            </div>
            {/* </OutlineTag> */}
            <div className="hidden lg:block">
              <h1 className="mt-4 flex gap-1">
                {/* <PointerHighlight
                              rectangleClassName="!border-coral bg-coral/[3%] dark:bg-coral/10"
                              pointerClassName="text-coral dark:text-coral/80"
                            > */}
                <span className="text-[#A2A2A2] dark:text-grey_scale_800">
                  a&nbsp;
                </span>
                <Highlighter action="underline" color="#FF500B">
                  <FlipWords
                    words={["Strategic Empath"]}
                    className="font-[450]"
                  />
                </Highlighter>

                {/* </PointerHighlight> */}
                {/* <OutlineTag
                  variant="outline"
                  showCornerDots
                  className="!rounded-none ring-1 ring-coral"
                  dotSizeEm={0.09}
                >
                  <span className="text-[#A2A2A2] dark:text-grey_scale_800">
                    a&nbsp;
                  </span>
                  <span className="font-[400]">Strategic Empath</span>
                </OutlineTag> */}
                <span className="text-[#A2A2A2] dark:text-grey_scale_800">
                  who designs
                </span>
              </h1>

              <h1 className="mt-4">
                <span className="text-[#A2A2A2] dark:text-grey_scale_800">
                  with
                </span>
                <span className="font-[450]">&nbsp;precision and purpose.</span>
              </h1>
            </div>
            <div className="lg:hidden space-y-5 md:space-y-2.5">
              <h1 className="mt-4 text-nowrap">
                {/* <OutlineTag
                  variant="outline"
                  showCornerDots
                  className="!rounded-none ring-1 ring-coral"
                  dotSizeEm={0.09}
                > */}
                <span className="text-[#A2A2A2] dark:text-grey_scale_800">
                  a&nbsp;
                </span>
                <Highlighter action="underline" color="#FF500B">
                  <FlipWords
                    words={["Strategic Empath"]}
                    className="font-[450]"
                  />
                </Highlighter>

                {/* </OutlineTag> */}
              </h1>
              <h1 className="text-[#A2A2A2] dark:text-grey_scale_800 pb-1 md:pb-0 pt-1.5">
                who designs with
              </h1>
              <h1 className="text-nowrap font-[400]">precision and purpose.</h1>
            </div>
          </div>
        </div>

        <p className="max-w-sm md:max-w-full md:text-lg">
          Currently leading the redesign of KYC and complex identity
          verification flows at{" "}
          <a
            href="https://www.deepidv.com/"
            target="_blank"
            className="underline"
          >
            DeepIDV
          </a>
          .
        </p>

        <div className="scale-90 md:scale-100 flex gap-3.5 dark:gap-1 md:gap-4 md:dark:gap-2 -mt-3 md:mt-0">
          {actions.map((act, i) => (
            <Button
              key={i}
              href={act.href}
              theme={act.theme}
              icon={act.icon || undefined}
              additionalClasses={act.extraClasses}
            >
              {act.label}
            </Button>
          ))}
        </div>
        {/* <Image
          src="images/home/group.png"
          alt=""
          className="hidden border-b md:block w-full lg:hidden scale-125 grayscale-0 mt-10"
          width={100}
          height={100}
        /> */}
      </div>
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-32 z-[1100]">
        <FloatingScrollCue targetId="next-section" label="Scroll" />
      </div>
    </section>
  );
}
