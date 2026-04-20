import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { LinkButton } from "@/components/LinkButton";
import {
  GalleryHorizontalEndFreeIcons,
  Github,
  MediumIcon,
  Play,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Traffic Control & Violation Detection System",
      description:
        "A distributed system for detecting traffic violations using embedded sensors, with cloud-based logging and a real-time dashboard.",

      image: "/projects/traffic_control_system.png",

      tags: ["IoT", "Embedded Systems", "Cloud", "Next.js"],

      github: "https://github.com/Perception12/Raspberry-Pi-Violation-Capture",

      links: {
        demo: null,
        video: null,
        blog: null,
        gallery: "/projects/traffic-gallery", // local images
      },
    },
    {
      title: "Reinforcement Learning for Traffic Optimization",
      description:
        "A reinforcement learning system using SUMO simulations to optimize traffic flow and reduce congestion.",

      image: "/projects/rl_traffic_control.png",

      tags: ["Reinforcement Learning", "Python", "SUMO"],

      github: "https://github.com/Perception12/traffic-optimization-RL",

      links: {
        demo: null,
        video: null,
        blog: null,
        gallery: null,
      },
    },
    {
      title: "LitSense",
      description:
        "An AI-powered literary recommendation and decision-support system designed to help users make informed book-buying decisions.",

      image: "/projects/litsense.png",

      tags: ["LLM", "RAG", "Python"],

      github: "https://github.com/Perception12/LitSense",

      links: {
        demo: null,
        video: "https://your-demo-video-link",
        blog: null,
        gallery: null,
      },
    },

    {
      title: "Ripeness AI",
      description:
        "A computer vision system that assesses fruit ripeness to support better purchasing decisions in real-world market scenarios.",

      image: "/projects/ripeness_ai.png",

      tags: ["Computer Vision", "Deep Learning", "Python"],

      github: "https://github.com/Perception12/ripenessAI",

      links: {
        demo: null,
        video: null,
        blog: null,
        gallery: "/projects/fruit-gallery",
      },
    },

    {
      title: "Airbot",
      description:
        "An intelligent chatbot for airline-related queries, bookings, and support, built using LLMs with a conversational interface.",

      image: "/projects/airbot.png",

      tags: ["LLM", "OpenAI", "Gradio", "SQLite"],

      github: "https://github.com/Perception12/Airbot",

      links: {
        demo: null,
        video: null,
        blog: "https://medium.com/@kehindeadejumobi82/building-a-flight-booking-chatbot-with-llm-tool-calling-5f2d055f8423",
        gallery: null,
      },
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my work, from complex detection applications to
            innovative tools that solve real-world problems
          </p>
        </div>
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                        bg-linear-to-t from-card via-card/50
                         to-transparent opacity-60"
                />
              </div>

              {/* Content */}
              <div className="px-6 pt-6 space-y-4">
                <div className="flex items-start justify-between cursor-pointer">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                          text-muted-foreground group-hover:text-primary
                           group-hover:translate-x-1 
                           group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className=" w-full flex flex-wrap lg:flex-nowrap px-6 py-4 mt-auto items-center gap-4">
                <LinkButton type="outline" link={project.github}>
                  <HugeiconsIcon icon={Github} className="w-5 h-5" /> Github
                </LinkButton>

                {project.links.video && (
                  <LinkButton link={project.links.video}>
                    <HugeiconsIcon icon={Play} className="w-5 h-5" /> Watch Demo
                  </LinkButton>
                )}

                {project.links.blog && (
                  <LinkButton link={project.links.blog}>
                    <HugeiconsIcon icon={MediumIcon} className="w-5 h-5" /> Case
                    Study
                  </LinkButton>
                )}

                {project.links.gallery && (
                  <LinkButton link={project.links.gallery}>
                    <HugeiconsIcon
                      icon={GalleryHorizontalEndFreeIcons}
                      className="w-5 h-5"
                    />{" "}
                    View Process
                  </LinkButton>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
