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
}

const projects: Project[] = [
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
      className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some projects I' worked on. Due to academic policies or
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
                <h3 className="text-3xl md:text-4xl font-light tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <Button
                      variant="outline"
                      className="group border-gray-300 dark:border-gray-700 rounded-full px-6 py-3 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        {project.title === "CreateAI Platform"
                          ? "Project Details"
                          : "Live Demo"}
                      </a>
                    </Button>
                  )}

                  {project.github && (
                    <Button
                      variant="outline"
                      className="group border-gray-300 dark:border-gray-700 rounded-full px-6 py-3 transition-all duration-300"
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
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://github.com/rahulSailesh-shah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
