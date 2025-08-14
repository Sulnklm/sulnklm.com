import FlickMood from "./components/projects/dev-projects/FlickMood";
import Pixeed from "./components/projects/uxui-projects/Pixeed";
import Yumpick from "./components/projects/uxui-projects/Yumpick";

const PROJECT_COMPONENTS: Record<string, React.FC> = {
  pixeed: Pixeed,
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

export async function generateStaticParams() {
  return Object.keys(PROJECT_COMPONENTS).map((slug) => ({ slug }));
}
