import React from "react";
import TechBadge from "./ui/TechBadge";
import BentoCard from "@/components/ui/BentoCard";
import {
  Coffee,
  Terminal,
  Cpu,
  Monitor,
  Heart,
  Globe,
  Zap,
  User,
  Mountain,
  Volleyball,
} from "lucide-react";

export interface TechStackItem {
  name: string;
  category: string;
}

export interface AboutContent {
  headline: string;
  paragraphs: string[];
  hobbies: string[];
  techStack: {
    languages: string[];
    cloud: string[];
    tools: string[];
  };
}

export const ABOUT_DATA: AboutContent = {
  headline: "About Me",
  paragraphs: [
    "I'm a Full Stack Developer who fell into software through an unexpected web development elective. What started as curiosity transformed into a career of building full-scale applications that redefine user experiences.",
    "My journey has bridged the gap between nimble startups and global MNCs. I've designed and deployed systems for IoT smart locks, AI-powered healthcare platforms, and enterprise SaaS for manufacturing. My focus is on architecture that scales and automation that simplifies.",
    "Beyond the terminal, I'm an advocate for clean code and impactful solutions. I believe every line written should serve a purpose and every pixel rendered should delight.",
  ],
  hobbies: ["Hiking", "Table Tennis", "Coffee Brewing"],
  techStack: {
    languages: [
      "Java",
      "Go",
      "TypeScript",
      "Python",
      "Node.js",
      "React",
      "React Native",
      "Next.js",
      "GraphQL",
      "FastAPI",
      "Spring Boot",
      "GenAI",
      "LangChain",
    ],
    cloud: [
      "AWS API Gateway",
      "AWS Lambda",
      "AWS S3",
      "AWS EC2",
      "AWS ECS",
      "CloudFormation",
      "AWS CDK",
      "Docker",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "DynamoDB",
      "Kafka",
      "Elasticsearch",
      "MongoDB",
      "RabbitMQ",
    ],
    tools: [
      "Git",
      "Jenkins",
      "Kubernetes",
      "Selenium",
      "Prometheus",
      "Grafana",
    ],
  },
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative space-y-16 py-12">
      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit">
          <User size={12} className="text-[hsl(var(--hero-glow))]" />
          <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/50 code-text">
            About Me
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          The Story.
        </h2>
        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
          A journey through code, creativity, and continuous learning.
        </p>
      </div>

      {/* Bento Grid Redesign */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Profile / Hero Card */}
        <div className="md:col-span-12 lg:col-span-4 h-full">
          <div className="glass-card p-0 overflow-hidden h-full flex flex-col relative group">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Identity"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-1 bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <p className="text-xs text-white/40 font-mono tracking-widest uppercase">
                Current Status
              </p>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold">Building the future</h3>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[hsl(var(--hero-glow))]" />
                  <div className="w-1 h-1 rounded-full bg-[hsl(var(--hero-glow))]/50" />
                  <div className="w-1 h-1 rounded-full bg-[hsl(var(--hero-glow))]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Philosophy / Bio */}
        <BentoCard
          className="md:col-span-8 lg:col-span-8 group"
          title="The Protocol"
          icon={
            <Terminal
              size={18}
              className="group-hover:text-[hsl(var(--hero-glow))]"
            />
          }
        >
          <div className="flex flex-col h-full space-y-6">
            <div className="space-y-4">
              {ABOUT_DATA.paragraphs.slice(0, 3).map((p, i) => (
                <p
                  key={i}
                  className="text-white/60 text-lg leading-relaxed font-light"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-4 group/item">
                <div className="p-2 rounded-lg bg-white/[0.01] group-hover/item:bg-white/[0.02] transition-colors">
                  <Monitor size={16} className="text-[hsl(var(--hero-glow))]" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-[0.1em]">
                    Availability
                  </p>
                  <p className="text-sm font-medium code-text">
                    Seeking opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group/item">
                <div className="p-2 rounded-lg bg-white/[0.01] group-hover/item:bg-white/[0.02] transition-colors">
                  <Globe size={16} className="text-[hsl(var(--hero-accent))]" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-[0.1em]">
                    Location
                  </p>
                  <p className="text-sm font-medium code-text">
                    Remote / EST-PST
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group/item">
                <div className="p-2 rounded-lg bg-white/[0.01] group-hover/item:bg-white/[0.02] transition-colors">
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-[0.1em]">
                    Response
                  </p>
                  <p className="text-sm font-medium code-text">&lt; 4 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Tech Stack Horizontal - Scroll Style or Grid */}
        <BentoCard
          className="md:col-span-12 group"
          title="Engineered With"
          icon={
            <Cpu
              size={18}
              className="group-hover:text-[hsl(var(--hero-accent))]"
            />
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold flex items-center gap-2">
                <div className="w-1 h-1 bg-[hsl(var(--hero-glow))] rounded-full" />
                Language Core
              </h4>
              <div className="flex flex-wrap gap-2">
                {ABOUT_DATA.techStack.languages.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold flex items-center gap-2">
                <div className="w-1 h-1 bg-[hsl(var(--hero-accent))] rounded-full" />
                Cloud Systems
              </h4>
              <div className="flex flex-wrap gap-2">
                {ABOUT_DATA.techStack.cloud.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full" />
                Orchestration
              </h4>
              <div className="flex flex-wrap gap-2">
                {ABOUT_DATA.techStack.tools.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Philosophy Card - Aesthetic */}
        <BentoCard
          className="md:col-span-7 bg-[hsl(var(--hero-glow))]/[0.015] hover:bg-[hsl(var(--hero-glow))]/[0.03] transition-colors"
          title="Philosophy"
          icon={<Heart size={18} className="text-[hsl(var(--hero-glow))]" />}
        >
          <div className="flex flex-col justify-center h-full space-y-4">
            <p className="text-3xl font-bold text-white/85">
              "The best code is the code that isn't written. The next best is
              the code that is easy to delete."
            </p>
            <p className="text-white/40 text-sm font-mono">
              — Engineering Manifesto v2.4
            </p>
          </div>
        </BentoCard>

        {/* Life Card */}
        <BentoCard
          className="md:col-span-5 relative group overflow-hidden"
          title="Environment"
          icon={
            <Coffee
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          }
        >
          <div className="flex flex-col h-full gap-6">
            <p className="text-white/60 font-light">
              Equilibrium found in high-altitude treks, competitive table
              tennis, and a genuine love for coffee.
            </p>
            <div className="grid grid-cols-3 gap-2 mt-auto">
              <div className="aspect-square rounded-lg bg-white/[0.01] group-hover:bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 transition-all hover:border-white/10">
                <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest">
                  Channel 01
                </div>
                <Mountain size={24} className="text-white/70" />
                <div className="text-[10px] font-medium text-white/60">
                  Hiking
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white/[0.01] group-hover:bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 transition-all hover:border-white/10">
                <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest">
                  Channel 02
                </div>
                <Volleyball size={24} className="text-white/70" />
                <div className="text-[10px] font-medium text-white/60">
                  Table Tennis
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white/[0.01] group-hover:bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 transition-all hover:border-white/10">
                <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest">
                  Channel 03
                </div>
                <Coffee size={24} className="text-white/70" />
                <div className="text-[10px] font-medium text-white/60">
                  Coffee Lover
                </div>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export const About = () => {
  return <AboutSection />;
};
