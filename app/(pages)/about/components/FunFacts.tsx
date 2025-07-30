import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/magicui/marquee";

const FUN_FACTS = [
  {
    emoji: "🦉",
    body: "A proud night owl—late-night vibe coding sessions are my jam.",
  },
  {
    emoji: "🫂",
    body: "I’m pretty good at managing stress—thanks to my super positive mom mojo!",
  },
  {
    emoji: "‼️",
    body: "These are some of my fun facts, by the way 😀 Hover over me to pause.",
  },
  {
    emoji: "🥷",
    body: "My MBTI is INTJ, and sometimes I turn into a total efficiency ninja.",
  },
  {
    emoji: "🤹‍♀️",
    body: "Random questions are my secret weapon to spark fun conversations.",
  },
  {
    emoji: "🦦",
    body: "Otters steal my heart. They’re one of my favorite animals.",
  },
  {
    emoji: "⛳️",
    body: "Golf is the best way to spend the day. Want to tee off with me? Hit me up! :)",
  },

  {

    emoji: "‼️",
    body: "These are some of my fun facts, by the way 😀 Hover over me to pause.",
  },
  {
    emoji: "❤️‍🔥",
    body: "No matter how hot it gets, I’m sweating over spicy food, and when it’s freezing cold, iced coffee is still my go-to.",
  },
];

const firstRow = FUN_FACTS.slice(0, FUN_FACTS.length / 2);
const secondRow = FUN_FACTS.slice(FUN_FACTS.length / 2);

const FunfactCard = ({
  emoji,
  body,
}: {
  emoji: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 2xl:w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]"
      )}
    >
      <div className="flex flex-row gap-2">
        <p className="text-2xl">{emoji}</p>
        <div className="flex flex-col">
          <p className="text-sm text-primary/80 dark:text-grey_scale_200/80">
            {body}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function FunFacts() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-16 pt-10 md:pt-5">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <FunfactCard key={review.emoji} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <FunfactCard key={review.emoji} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-black"></div>
    </div>
  );
}
