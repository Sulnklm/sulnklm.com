import { PROJECTS_CONST } from "@/(pages)/works/const";
import { YUMPICK_PROJECT } from "./const";
import Overview from "../../../overview/Overview";
import type { ProjectType } from "@/(pages)/works/types";

export default function Yumpick() {
  const project = PROJECTS_CONST.PROJECTS.find(
    (p: ProjectType) => p.SLUG === "yumpick"
  );
  if (!project) return <div>Project not found.</div>;

  return (
    <div>
    <Overview project={project} />
  {/* 추가로 다른 컴포넌트도 여기에 넣을 수 있어요 */}
    </div>
  );
}
