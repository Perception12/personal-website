import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  Download01Icon,
  Github,
  Linkedin,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ChevronDown } from "lucide-react";
/* eslint-disable react-hooks/purity */
export const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Perception12" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kehinde-adejumobi-05799b1bb",
    },
    { icon: NewTwitterIcon, href: "https://x.com/hey_itskenny" },
  ];

  const skills = [
    "Python",
    "PyTorch",
    "LangChain",
    "FAISS",
    "Docker",
    "FastAPI",
    "Hugging Face",
    "Supabase",
    "OpenAI",
    "TensorFlow",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}

      <div className="absolute inset-0">
        <img
          src="/hero_bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden poiner-events-none">
        {[...Array(30)].map((_, i) => {
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${Math.random() * 20 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                AI • Machine Learning Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                I build{" "}
                <span className="text-primary glow-text">Intelligent</span>
                <br />
                systems with
                <br />
                <span className="font-serif italic font-normal text-white animation-delay-100">
                  Elegance.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Kehinde Adejumobi, an AI/ML engineer focused on building
                practical intelligent systems using machine learning,
                reinforcement learning, LLMs, and retrieval-augmented
                generation.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center w-full md:justify-start items-center gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact Me
                <HugeiconsIcon icon={ArrowRight02Icon} className="w-5 h-5" />
              </Button>

              <a href="/cv.pdf" download="Kehinde_Adejumobi_CV.pdf">
                <AnimatedBorderButton>
                  <HugeiconsIcon icon={Download01Icon} className="w-5 h-5" />{" "}
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <HugeiconsIcon icon={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}

          <div className="relative animate-fade-in animation-delay 300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile_photo.png"
                  alt="Kehinde Adejumobi"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-4 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
            animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
