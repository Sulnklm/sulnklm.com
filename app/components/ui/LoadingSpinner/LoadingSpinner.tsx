import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="h-screen relative inset-0 z-50 flex items-center justify-center bg-background dark:bg-black backdrop-blur-sm">
      <div className="text-8xl animate-spin text-primary dark:text-background">✦</div>
    </div>
  );
}
