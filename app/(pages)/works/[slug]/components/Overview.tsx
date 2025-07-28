import { Safari } from "@/components/SafariMode/SafariMode";
import type { ProjectType } from "../../types";
import { Button } from "@/components/Button/Button";
import { ExternalLink, GithubIcon } from "lucide-react";
import { ToolImage } from "@/components/ToolImage";
import { Ruler } from "@/components/ruler/Ruler";
import { CornerBoxes } from "@/components/CornerBoxes/CornerBoxes";

interface OverviewProps {
  project: ProjectType;
}

// 네모 사각형 모듈 컴포넌트
const CornerBox = ({ position }: { position: string }) => (
  <div className={`absolute ${position}`}>
    <div className="w-3 h-3 border rounded-[4px] border-gray-200 bg-white dark:bg-primary" />
  </div>
);

const CORNERS = [
  { position: "left-0 top-0 -translate-x-1/2 -translate-y-1/2" },
  { position: "left-0 bottom-0 -translate-x-1/2 translate-y-1/2" },
  { position: "right-0 top-0 translate-x-1/2 -translate-y-1/2" },
  { position: "right-0 bottom-0 translate-x-1/2 translate-y-1/2" },
];

export default function Overview({ project }: OverviewProps) {
  const isSafariMode = project.SHOW_SAFARI === true;
  const height = 800;
  return (
    <section className="relative md:border-x container mx-auto border-dashed md:max-w-[85vw]">
      {/* 꼭짓점 네모 map */}
       <CornerBoxes />
      
      <Ruler height={height} left />
      {/* 오른쪽 ruler */}
      <Ruler height={height} left={false} />
      <div className="mt-[20vh] mx-auto place-items-center px-5">
        <div className="max-w-[55rem] grid gap-5 justify-center items-center">
          {project.TOOLS && project.TOOLS.length > 0 && (
            <div className="flex flex-wrap -space-x-2 mx-auto">
              {project.TOOLS.map((tool) => (
                <ToolImage
                  key={tool.name}
                  src={tool.src}
                  alt={tool.name}
                  size={28}
                />
              ))}
            </div>
          )}

          <h1 className="text-5xl lg:text-7xl text-grey_scale_1000">
            {project.SUBTITLE}
          </h1>
          <h5 className="text-center max-w-[35rem] mx-auto">
            {project.OVERVIEW}
          </h5>
          {project.GITHUB_LINK && project.LIVE_LINK && (
            <div className="flex gap-3 mx-auto">
              <Button
                href={project.GITHUB_LINK.HREF}
                theme="primary"
                icon={<GithubIcon size={16} className="ml-2" />}
                additionalClasses="!py-2.5 !px-3.5 text-sm rounded-[11px]"
              >
                {project.GITHUB_LINK.LABEL}
              </Button>
              <Button
                href={project.LIVE_LINK.HREF}
                theme="tertiary"
                icon={<ExternalLink size={16} className="ml-2" />}
                additionalClasses="!py-2.5 !px-3.5 text-sm rounded-full border"
              >
                {project.LIVE_LINK.LABEL}
              </Button>
            </div>
          )}
        </div>

        {isSafariMode ? (
          <Safari
            url={project.URL}
            videoSrc={project.VIDEO}
            imageSrc={project.SAFARI_IMAGE?.SRC}
            className="mx-auto drop-shadow-lg mt-20"
          />
        ) : (
          <img
            src={project.IMAGE.SRC}
            alt={project.IMAGE.ALT}
            className="max-w-[70rem] mx-auto"
          />
        )}
      </div>
    </section>
  );
}
