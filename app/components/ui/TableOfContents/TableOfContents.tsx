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

  useEffect(() => {
    const handleScroll = () => {
      let closest = sections[0]?.id || "";
      let minOffset = Infinity;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (Math.abs(rect.top) < minOffset) {
            minOffset = Math.abs(rect.top);
            closest = id;
          }
        }
      });
      setActiveId(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    
    <nav className="sticky top-32 left-0 flex flex-col font-Sans text-grey_scale_900 dark:text-grey_scale_700">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`hover:bg-grey_scale_200 hover:dark:bg-grey_scale_1000/50 py-2.5 rounded-xl px-3 cursor-pointer ${activeId === section.id ? "font-[450] text-coral bg-grey_scale_200 dark:bg-grey_scale_1000/50" : ""}`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
