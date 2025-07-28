import { PROJECTS_CONST } from "@/(pages)/works/const";
import Overview from "../../Overview";
import type { ProjectType } from "@/(pages)/works/types";


export default function FlickMood() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "flickmood"
  );
  if (!project) return <div>Project not found.</div>;

  return (
    <div>
      <Overview project={project} />
    </div>
  );
}
