import React, { useState, useMemo } from "react";
import TechBadge from "./ui/TechBadge";
import VideoModal from "./ui/VideoModal";
import {
  Play,
  Github,
  ChevronRight,
  Layers,
  Monitor,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const CATEGORIES = ["All", "AI", "Tools", "Full Stack"] as const;
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  videoUrl?: string;
  hasVideoDemo?: boolean;
  sourceCodeUrl?: string;
  category: "AI" | "Full Stack" | "Distributed Systems" | "Tools";
}

const PROJECTS_DATA: Project[] = [
  // AI Projects
  {
    id: "vistruct",
    title: "Vistruct",
    subtitle: "AI-Powered Educational Videos",
    category: "AI",
    description:
      "AI-powered educational video platform that lets educators create professional videos with chat-based script editing, AI voice-over, and Manim animations.",
    techStack: [
      "Python",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Manim",
      "GenAI",
    ],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/vistruct.png",
    videoUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/videos/Integration_Demo.mov",
    hasVideoDemo: true,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/Vistruct",
  },
  {
    id: "conversense",
    title: "Conversense",
    subtitle: "Realtime AI Video Q&A with Coach Guides",
    category: "AI",
    description:
      "Platform to create AI agents for real-time video call Q&A with in-call emotion analysis, live meeting summaries, and post-meeting chat-based follow-up.",
    techStack: [
      "Golang",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Livekit",
      "Gemini Live API",
      "GenAI",
    ],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/conversense.png",
    videoUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/videos/Integration_Demo.mov",
    hasVideoDemo: true,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/conversense",
  },
  {
    id: "create-ai",
    title: "CreateAI",
    subtitle: "AI Infra for Chatbots on Custom Knowledge",
    category: "AI",
    description:
      "CreateAI is a platform that enables anyone to build and deploy AI agents and chatbots on private knowledge bases with support for 40+ models, with built-in guardrails for privacy and ethical AI use. It emphasizes safe sharing, compliance, and extensibility for secure, transparent AI assistants.",
    techStack: [
      "Python",
      "React",
      "AWS Bedrock",
      "AWS Lambda",
      "AWS S3",
      "AWS DynamoDB",
      "LangChain",
      "OpenAI",
      "Anthropic",
      "Gemini",
    ],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/createAI.png",
    videoUrl: "https://ai.asu.edu/technical-foundation/createai-builder",
    hasVideoDemo: false,
    sourceCodeUrl: "",
  },
  {
    id: "VoicePad",
    title: "VoicePad",
    subtitle: "Voice to Whiteboard",
    category: "AI",
    description:
      "VoicePad is a real-time app that lets you talk directly to an AI language model and control a shared whiteboard by giving spoken instructions. Collaborate by describing what you want drawn, and see the AI turn your words into visual ideas instantly.",
    techStack: [
      "Golang",
      "Python",
      "React",
      "TypeScript",
      "Gemini Live API",
      "gRPC",
      "Whisper",
      "Livekit",
    ],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/voicepad.png",
    videoUrl: "https://voicepad.com",
    hasVideoDemo: true,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/VoicePad",
  },
  {
    id: "Ch8n",
    title: "Ch8n",
    subtitle: "Create n8n style workflows with AI",
    category: "AI",
    description:
      "Ch8n is a platform that lets you create n8n style workflows with AI. It allows you to create workflows that can be used to automate tasks and processes.",
    techStack: [
      "Go",
      "React",
      "TypeScript",
      "Better Auth",
      "PostgreSQL",
      "Docker",
      "GenAI",
    ],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/vistruct.png",
    videoUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/videos/Integration_Demo.mov",
    hasVideoDemo: true,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/ch8n_go",
  },

  // Tools
  {
    id: "Shell",
    title: "Shell",
    subtitle: "POSIX-compliant shell in Go",
    category: "Tools",
    description:
      "A simple POSIX-compliant shell implementation in Go. Supports built-in commands (exit, echo, type, pwd, cd), executes external programs, handles single and double quotes, and supports ~ in cd",
    techStack: ["Go"],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/shell.webp",
    hasVideoDemo: false,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/go-shell",
  },
  {
    id: "Redis",
    title: "Redis",
    subtitle: "Minimalist Redis-compatible Server in Go",
    category: "Tools",
    description:
      "A minimalist, in-memory Redis-compatible server written in Go. It implements the RESP protocol and supports basic commands like PING, SET/GET, and hash operations (HSET, HGET, HGETALL).\n\nFeatures:\n- RESP protocol parsing and serialization\n- Thread-safe key-value store (SET / GET)\n- Thread-safe hash map store (HSET / HGET / HGETALL)",
    techStack: ["Go", "TCP Networking"],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/redis.webp",
    hasVideoDemo: false,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/redis",
  },
  {
    id: "Loadbalancer",
    title: "Load Balancer",
    subtitle: "Round-Robin HTTP Load Balancer in Go",
    category: "Tools",
    description:
      "A simple round-robin HTTP load balancer written in Go. Incoming requests are proxied to a pool of backend servers, health-checked periodically, and automatically removed from rotation when unreachable. Reverse proxy using net/http/httputil",
    techStack: ["Go", "net/http", "httputil", "Viper", "YAML"],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/loadbalancer.webp",
    hasVideoDemo: false,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/go-loadbalancer",
  },
  {
    id: "Logger",
    title: "Logger",
    subtitle: "Structured Logging Library for Go",
    category: "Tools",
    description:
      "A high-performance, structured logging library for Go that provides a context-aware abstraction over zerolog for enterprise-grade observability. It features native support for multi-destination transports like AWS CloudWatch and local files, alongside built-in trace ID propagation and custom event hooks.",
    techStack: ["Go", "Zerolog", "AWS CloudWatch", "Local Files"],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/loadbalancer.webp",
    hasVideoDemo: false,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/go-logger",
  },

  // Full Stack Projects
  {
    id: "FigPro",
    title: "FigPro",
    subtitle: "A whiteboard tool alternative to Figma",
    category: "Full Stack",
    description:
      "A real-time live collaboration tool and alternative to Figma.",
    techStack: ["Next.js", "Liveblocks", "Fabric.js", "Tailwind CSS"],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/figma.webp",
    videoUrl: "https://figma-clone-coral.vercel.app/",
    hasVideoDemo: false,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/Figma-Clone",
  },
  {
    id: "Route Tracker",
    title: "Route Tracker",
    subtitle: "Mobile Route Tracking App",
    category: "Full Stack",
    description:
      "Mobile app tracks routes using GPS capabilities. Stores recorded routes in MongoDB for review. User authentication and data privacy included.",
    techStack: ["React Native", "Node.js", "MongoDB", "Express"],
    imageUrl:
      "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/images/route.webp",
    hasVideoDemo: false,
    sourceCodeUrl: "https://github.com/rahulSailesh-shah/Route-Tracker",
  },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [selectedProjectId, setSelectedProjectId] = useState(
    PROJECTS_DATA[0].id,
  );
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeProject = useMemo(() => {
    return (
      PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0]
    );
  }, [selectedProjectId]);

  return (
    <section id="projects" className="relative space-y-16 py-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--hero-glow))]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit">
          <Layers size={12} className="text-[hsl(var(--hero-glow))]" />
          <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/50 code-text">
            Portfolio
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          The Creations.
        </h2>
        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
          A selection of my architectural experiments and production-ready
          systems. Use the navigator to explore different domains.
        </p>
      </div>

      {/* Category Navigation Bar */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const projectsInCat =
                  cat === "All"
                    ? PROJECTS_DATA
                    : PROJECTS_DATA.filter((p) => p.category === cat);
                if (projectsInCat.length > 0)
                  setSelectedProjectId(projectsInCat[0].id);
              }}
              className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black shadow-lg"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Project Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Project Selector Sidebar (Scrollable List) */}
        <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`flex flex-col p-6 text-left transition-all duration-500 rounded-2xl border ${
                selectedProjectId === project.id
                  ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  : "bg-white/[0.02] border-white/5 opacity-50 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[10px] font-mono text-[hsl(var(--hero-glow))] uppercase tracking-widest">
                  {project.category}
                </span>
                {selectedProjectId === project.id && (
                  <ChevronRight size={16} className="text-white" />
                )}
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h4>
              <p className="text-white/40 text-xs font-light line-clamp-1">
                {project.subtitle}
              </p>
            </button>
          ))}

          {filteredProjects.length === 0 && (
            <div className="p-12 text-center glass-card">
              <Code2 className="mx-auto mb-4 text-white/10" size={32} />
              <p className="text-white/20 font-mono text-xs uppercase tracking-widest">
                No Projects Found
              </p>
            </div>
          )}
        </div>

        {/* Detailed Project View */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="glass-card h-full flex flex-col overflow-hidden group">
            {/* Project Image Header */}
            <div className="relative h-[240px] md:h-[350px] overflow-hidden">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center gap-2">
                  <Monitor size={12} className="text-white/60" />
                  <span className="text-[10px] font-mono text-white/60 uppercase">
                    Preview Active
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-10 flex-1 flex flex-col gap-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-4xl md:text-5xl font-black text-white">
                      {activeProject.title}
                    </h3>
                    <p className="text-[hsl(var(--hero-accent))] font-mono text-xs uppercase tracking-[0.2em]">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {activeProject.videoUrl && (
                      <button
                        onClick={() => {
                          if (activeProject.hasVideoDemo) {
                            setCurrentVideoUrl(activeProject.videoUrl!);
                            setCurrentVideoTitle(activeProject.title);
                            setIsVideoModalOpen(true);
                          } else {
                            window.open(
                              activeProject.videoUrl,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase hover:bg-white/90 transition-all code-text tracking-[0.1em]"
                      >
                        <Play size={14} fill="currentColor" /> See Demo
                      </button>
                    )}
                    {activeProject.sourceCodeUrl && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={activeProject.sourceCodeUrl}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase hover:bg-white/10 transition-all code-text tracking-[0.1em]"
                      >
                        <Github size={14} /> Source Code
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-white/60 text-lg leading-relaxed font-light max-w-3xl">
                  {activeProject.description}
                </p>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-white/10" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">
                    Technology Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-6 px-8 py-4 rounded-full bg-white/[0.02] border border-white/5">
          <a
            href="https://github.com/rahulSailesh-shah?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-mono text-[hsl(var(--hero-glow))] hover:text-white transition-colors uppercase tracking-widest group"
          >
            View GitHub Archive{" "}
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
        title={currentVideoTitle}
      />
    </section>
  );
};
