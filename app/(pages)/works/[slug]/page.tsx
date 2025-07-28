// app/works/[slug]/page.tsx

import FlickMood from "./components/dev-projects/FlickMood/FlickMood";
import Yumpick from "./components/uxui-projects/Yumpick/Yumpick";

const PROJECT_COMPONENTS: Record<string, React.FC> = {
  flickmood: FlickMood,
  yumpick: Yumpick,
};

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const ProjectComponent = PROJECT_COMPONENTS[slug];

  if (!ProjectComponent) {
    return <div>Project not found.</div>;
}

  return <ProjectComponent />;
}
