import { useSound } from "@/components/SoundContextType/SoundContextType";

export function useClickSound() {
  const { muted } = useSound();

  return () => {
    if (muted) return;
    if (typeof window !== "undefined") {
      const audio = new Audio("/audio/click.wav");
      audio.currentTime = 0;
      audio.volume = 0.4;
      audio.play();
    }
  };
}
