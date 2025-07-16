"use client";
import React, { createContext, useContext, useState } from "react";

type SoundContextType = {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>
};

const SoundContext = createContext<SoundContextType>({
  muted: false,
  setMuted: () => {},
});

export const useSound = () => useContext(SoundContext);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(false);

  return (
    <SoundContext.Provider value={{ muted, setMuted }}>
      {children}
    </SoundContext.Provider>
  );
}
