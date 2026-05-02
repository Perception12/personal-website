import { useParams } from "react-router";
import { project_gallery } from "@/data/projects";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Gallery = () => {
  const { id } = useParams();
  const gallery = project_gallery.find((gal) => gal.id === id);

  if (!gallery) {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">
              {gallery.title}
            </h1>

            {gallery.github && (
              <a
                href={gallery.github}
                target="_blank"
                className="w-12 h-12 shrink-0 rounded-full glass-strong flex items-center justify-center text-muted-foreground group-hover:text-primary
                group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              >
                <HugeiconsIcon icon={ArrowUpRight} className="w-6 h-6" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {gallery.tags.map((tag, idx) => (
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

          <p className="animate-fade-in animation-delay-600 text-muted-foreground">
            {gallery.description}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {gallery.sections.map((section, idx) => (
            <div key={`gallery-section-${idx}`} className="flex flex-col gap-4">
              <h1 className="text-2xl text-secondary-foreground font-serif italic">
                {section.title}
              </h1>
              <p className="text-muted-foreground">{section.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((img, img_idx) => (
                  <div key={`section-img-${idx}-${img_idx}`} className="glass p-4 flex flex-col gap-4 rounded-xl group hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-4/3 overflow-hidden rounded-md ">
                      <img
                        src={img.src}
                        className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-center text-muted-foreground mt-2">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
