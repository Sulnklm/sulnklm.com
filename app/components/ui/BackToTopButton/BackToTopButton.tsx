"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-5 right-5 z-[1000000]
        group
        flex items-center
        transition-all duration-300
        ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Back to Top"
    >
      <span
        className={`
          flex items-center justify-center
          bg-coral
          shadow-lg
          transition-all duration-200
          ${
            "group-hover:w-32 group-hover:rounded-xxl group-hover:pl-3 group-hover:pr-2" +
            " w-10 h-10 rounded-xl p-0"
          }
          overflow-hidden
        `}
      >
        <p
          className={`
            text-sm font-[450] !text-background dark:!text-primary whitespace-nowrap
            transition-all duration-200
            opacity-0 scale-x-0
            group-hover:opacity-100 group-hover:scale-x-100
          `}
        >
          Back to Top
        </p>
        <ChevronUp size={20} className="text-white dark:text-primary mx-auto" />
      </span>
      <div className="absolute right-0 left-0 group-hover:opacity-0">
      <ChevronUp size={26} className="text-white dark:text-primary mx-auto" />
      </div>
    </button>
  );
}
