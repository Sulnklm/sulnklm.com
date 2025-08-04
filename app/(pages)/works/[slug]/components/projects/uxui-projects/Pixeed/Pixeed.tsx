import { PROJECTS_CONST } from "@/(pages)/works/const";
import type { ProjectType } from "@/(pages)/works/types";

export default function Pixeed() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "pixeed"
  );
  if (!project) return <div>Project not found.</div>;
  return (
    <div>
        
    </div>
)
}

