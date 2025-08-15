import React, { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  sections: Section[];
};

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");
  const SCROLL_OFFSET = 120; 

  useEffect(() => {
    const handleScroll = () => {
      let closest = sections[0]?.id || "";
      let minOffset = Infinity;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rectTop = el.getBoundingClientRect().top;
          if (Math.abs(rectTop - SCROLL_OFFSET) < minOffset) {
            minOffset = Math.abs(rectTop - SCROLL_OFFSET);
            closest = id;
          }
        }
      });
      setActiveId(closest);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.pushState(null, "", `#${id}`);
  };

  return (
    <nav className="sticky top-32 left-0 flex flex-col font-Sans text-grey_scale_900 dark:text-grey_scale_700">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleClick(e, section.id)}
          className={`hover:bg-grey_scale_200 hover:dark:bg-grey_scale_1000/50 py-2.5 rounded-xl px-3 cursor-pointer ${
            activeId === section.id
              ? "font-[450] text-coral bg-grey_scale_200 dark:bg-grey_scale_1000/50"
              : ""
          }`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
