"use client";

export const Content = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <main className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
          {children}
        </main>
      </div>
    );
  };