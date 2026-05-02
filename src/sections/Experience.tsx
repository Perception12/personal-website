import { experiences } from "@/data/experience";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronDown, ChevronUp } from "@hugeicons/core-free-icons";
import { useState } from "react";

export const Experience = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleAchievements = (idx: number) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Experience
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            A journey through{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              systems, data, and intelligent engineering
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            My journey spans data science, systems engineering, and software
            development, forming the foundation for designing scalable AI-driven
            systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_20px_rgba(81,112,255,0.35)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp?.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(81,112,255,0.15)] transform transition-all duration-500 hover:-translate-y-1`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                    <p
                      className="flex w-fit gap-2 items-center cursor-pointer text-primary hover:text-primary/90 glow-text text-sm my-6 transition-colors duration-300"
                      onClick={() => toggleAchievements(idx)}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          toggleAchievements(idx);
                        }
                      }}
                      tabIndex={0}
                      aria-expanded={openItems.includes(idx)}
                    >
                      {openItems.includes(idx)
                        ? "Hide Details"
                        : "See Contributions"}
                      <HugeiconsIcon
                        icon={openItems.includes(idx) ? ChevronUp : ChevronDown}
                        className="w-5 h-5"
                      />
                    </p>
                    <div className="mt-4 flex flex-col gap-4">
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          openItems.includes(idx)
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div
                          className="overflow-hidden min-h-0"
                          aria-hidden={!openItems.includes(idx)}
                        >
                          <div
                            key={openItems.includes(idx) ? "open" : "closed"}
                            className="flex flex-col gap-2 p-2 text-sm text-muted-foreground"
                          >
                            {exp.accomplishments.map((contribution, a_idx) => (
                              <div
                                key={`contribution-${idx}-${a_idx}`}
                                className="flex gap-2"
                              >
                                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary/80" />
                                <p>{contribution}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
