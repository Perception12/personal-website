import { useParams } from "react-router-dom";
import { demo_projects } from "@/data/projects";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Demo = () => {
  const { id } = useParams();

  const project_info = demo_projects.find((project) => project.id === id);

  if (!project_info) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Project not found
      </div>
    );
  }

  return (
    <main className="py-32 min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <div className="animate-fade-in group flex items-center gap-4 text-primary">
            <h1 className="text-5xl md:text-6xl text-secondary-foreground">
              {project_info.title}
            </h1>

            {project_info.github && (
              <a
                href={project_info.github}
                target="_blank"
                className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-muted-foreground group-hover:text-primary
                group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              >
                <HugeiconsIcon icon={ArrowUpRight} className="w-6 h-6" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project_info.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  animationDelay: `${200 * (idx + 1)}ms`,
                }}
                className="animate-fade-in px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="animate-fade-in animation-delay-600 text-muted-foreground">{project_info.description}</p>
        </div>

        <div className="mx-auto mt-8 md:mt-16 space-y-8 glass-strong rounded-2xl border border-primary/10 p-2 md:p-6">
          <video
            src={project_info.video_url}
            controls
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </main>
  );
};

export default Demo;
