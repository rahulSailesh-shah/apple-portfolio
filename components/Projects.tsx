import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
  hasDemo?: boolean;
}

const projects: Project[] = [
  {
    title: "Vistruct",
    description:
      "AI-powered educational video platform that lets educators create professional videos with chat-based script editing, AI voice-over, and Manim animations.",
    image: "/vistruct.png",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Manim",
      "AI Voice Synthesis",
    ],
    github: "https://github.com/rahulSailesh-shah/Vistruct",
    link: "https://drive.google.com/file/d/18MGKPrNjHCtFnitiacK9q8H_95TjGIop/view?usp=sharing",
    hasDemo: true,
  },
  {
    title: "Conversense",
    description:
      "Platform to build AI agents for real-time video call Q&A, meeting summarization, and post-meeting chat-based interaction.",
    image: "/conversense.png",
    tech: [
      "Golang",
      "Gin",
      "PostgreSQL",
      "Livekit",
      "Gemini Live API",
      "Docker",
    ],
    github: "https://github.com/rahulSailesh-shah/conversense",
    link: "https://vistruct-demo.com",
    hasDemo: true,
  },
  {
    title: "CreateAI Platform",
    description:
      "Built scalable LLM platforms for 150K+ users that lets users create and share custom AI chatbots and agents trained on their own data.",
    image: "/createAI.png",
    tech: [
      "DynamoDB",
      "API Gateway",
      "Web Sockets",
      "Python",
      "FastAPI",
      "React",
    ],
    link: "https://ai.asu.edu/technical-foundation",
  },
  {
    title: "FigPro",
    description:
      "Built a real-time collaborative Figma clone with multi-cursor support, user tracking, comments, shape tools, and image uploads.",
    image: "/figma.webp",
    tech: ["Next.js", "Liveblocks", "Fabric.js", "Tailwind"],
    github: "https://github.com/rahulSailesh-shah/Figma-Clone",
    link: "https://figma-clone-coral.vercel.app/",
  },
  {
    title: "Route Tracker",
    description:
      "Developed a React Native mobile app that tracks and records routes using GPS, with MongoDB storage for review.",
    image: "/route.webp",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/rahulSailesh-shah/Route-Tracker",
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative py-[80px] md:py-[100px] lg:py-[120px] px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-[1200px] lg:max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight mb-8 text-gradient">
            Featured Projects
          </h2>
          <p className="text-[18px] text-white/70 max-w-2xl mx-auto">
            Here are some projects I've worked on. Due to academic policies or
            non-disclosures, some of the code isn't posted.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="glass-card p-8 space-y-6">
                  <h3 className="text-[32px] md:text-[36px] font-bold tracking-tight text-gradient-blue">
                    {project.title}
                  </h3>
                  <p className="text-[18px] text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[16px] text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    {project.link && (
                      <Button
                        variant="cta"
                        className="rounded-full px-8 py-4 text-base font-semibold"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {project.title === "CreateAI Platform"
                            ? "Project Details"
                            : project.hasDemo
                            ? "See Video"
                            : "Live Demo"}
                        </a>
                      </Button>
                    )}

                    {project.github && (
                      <Button
                        variant="glass"
                        className="rounded-full px-8 py-4 text-base font-medium"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="relative group">
                  <div className="relative glass-card overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button
            variant="cta"
            size="lg"
            className="rounded-full px-10 py-7 text-lg font-semibold"
            asChild
          >
            <a
              href="https://github.com/rahulSailesh-shah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
