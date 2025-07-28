import type { ProjectType } from "../../types";

interface OverviewProps {
  project: ProjectType;
}
export default function Overview({ project }: OverviewProps) {
  return (
    <section className="mt-[12vh]">
      <h2>{project.TITLE}</h2>
      <img
        src={project.IMAGE.SRC}
        alt={project.IMAGE.ALT}
        className="max-w-[70rem] mx-auto"
      />
      <p>{project.DESCRIPTION}</p>
      {project.TOOLS && project.TOOLS.length > 0 && (
        <div>
          <strong>Tools:</strong>
          <ul>
            {project.TOOLS.map((tool) => (
              <li key={tool.name}>
                <img
                  src={tool.src}
                  alt={tool.name}
                  style={{ width: 24, height: 24 }}
                />
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <strong>Timeline:</strong> {project.TIMELINE}
      </div>
    </section>
  );
}
