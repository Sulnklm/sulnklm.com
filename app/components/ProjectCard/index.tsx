import { ProjectCardPropTypes } from "./types";

export const ProjectCard = ({ PROJECT }: ProjectCardPropTypes) => {
  return (
    <div>
      <img src={PROJECT.IMAGE.SRC} alt={PROJECT.IMAGE.ALT} />
      <h1>{PROJECT.TITLE}</h1>
      {/* 추가로 DISCIPLINE, DESCRIPTION 등도 필요하면 표시 */}
    </div>
  );
};