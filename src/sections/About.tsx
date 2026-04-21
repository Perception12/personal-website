import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code that follows best practices and design patterns.",
  },

  {
    icon: Rocket,
    title: "Performance",
    description:
      "I optimize my code for performance, ensuring that it runs efficiently and scales well.",
  },

  {
    icon: Users,
    title: "Collaboration",
    description:
      "I value collaboration and communication, working closely with teams to achieve common goals.",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I am always looking for new and innovative ways to solve problems and improve my skills.",
  },
];

export const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div ref={ref} className={isVisible ? "animate-fade-in": ""}>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${isVisible ? "animate-fade-in animation-delay-100" : ""} text-secondary-foreground`}>
              From concepts
              <span className="font-serif italic font-normal text-white">
                {" "}
                to scalable AI systems.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
              <p>
                I am an AI/ML Engineer with expertise in developing and
                deploying intelligent systems for solving real-world problems.
                This is achieved through my understanding of machine learning,
                embedded systems, and cloud technology.
              </p>

              <p>
                I have special interests in reinforcement learning, LLM systems,
                and retrieval augmented generation (RAG), particularly in how
                these techniques can be applied beyond theory into usable
                systems.
              </p>

              <p>
                As an engineer, I have designed systems that combine both
                software and hardware solutions, along with cloud services.
                From edge-based detection systems, to dashboard applications
                that leverage the power of cloud computing, with an emphasis on
                reliability, clarity, and thoughtful design.
              </p>

              <p>
                I bring engineering excellence through my structured approach to
                designing solutions. I always ensure that my designs are
                maintainable and scalable. I have a First Class Degree in
                Computer Engineering.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to bridge the gap between advanced AI and
                real-world applications by creating systems that are practical,
                impactful, and built to scale."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  {item.icon && <item.icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
