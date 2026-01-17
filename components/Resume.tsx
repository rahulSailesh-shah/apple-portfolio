
import React from 'react';
import TechBadge from './ui/TechBadge';
import { Briefcase, Calendar, Building2, Sparkle } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Solutions Unified",
    period: "May 2024 - Present",
    isCurrent: true,
    description: "At Solutions Unified, a SaaS provider for the medical manufacturing industry, I joined as the second engineer and was pivotal in building the core product from its inception to launch. My contributions focused on establishing foundational systems that streamlined critical business operations, including payment systems, automated infrastructure deployment, comprehensive API, frontend and backend development.",
    technologies: ["React", "Node.js", "AWS Lambda", "DynamoDB", "AWS S3", "AWS CDK", "AWS SQS", "AWS SNS", "TypeScript"]
  },
  {
    role: "AI Full Stack Developer",
    company: "Enterprise Technology (Arizona State University)",
    period: "Jan 2024 - Feb 2025",
    description: "At ASU, I led the development and scalable deployment of advanced AI platforms, architecting three full-stack solutions for over 10,000 users. My work involved establishing a robust MLOps pipeline, engineering a voice-enabled assistant, designing a modular backend for LLM integration, and creating a multi-agent orchestration system.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "AWS Sagemaker", "AWS API Gateway", "DynamoDB", "AWS S3", "Langchain"]
  },
  {
    role: "Software Engineer II",
    company: "Allegion",
    period: "June 2020 - July 2023",
    description: "As a Software Engineer II at Allegion (Schlage), I developed and optimized microservices supporting IoT devices, impacting millions of users. My role spanned various technologies and teams, encompassing comprehensive frontend, backend, and DevOps responsibilities.",
    technologies: ["Typescript", "Python", "GraphQL", "React", "FastAPI", "AWS", "Docker", "Kubernetes"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative space-y-16 py-12">
      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit">
          <Briefcase size={12} className="text-[hsl(var(--hero-glow))]" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Professional Trajectory</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          The Journey.
        </h2>
        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
          A chronological overview of my technical contributions across startups and enterprise environments.
        </p>
      </div>

      {/* Experience List - Tightened gap between items */}
      <div className="relative space-y-20">
        {/* Main Vertical Timeline Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--hero-glow))] via-white/5 to-transparent hidden sm:block" />

        {EXPERIENCE_DATA.map((item, index) => (
          <div key={index} className="relative pl-0 sm:pl-20 group">
            {/* Timeline Indicator - Adjusted position */}
            <div className="absolute left-[21px] md:left-[29px] top-8 w-[6px] h-[6px] rounded-full bg-[hsl(var(--hero-glow))] group-hover:scale-150 transition-all duration-500 hidden sm:block z-20 shadow-[0_0_15px_rgba(30,144,255,0.5)]" />
            
            <div className="glass-card p-0.5 overflow-hidden transition-all duration-700 group-hover:translate-x-1">
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Left Side: Meta Info (Role & Period) - Reduced padding */}
                <div className="w-full lg:w-1/3 p-6 lg:p-8 bg-white/[0.005]">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[hsl(var(--hero-glow))] font-mono text-[10px] uppercase tracking-[0.2em]">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gradient transition-all duration-500 leading-tight">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-white/60">
                        <Building2 size={14} className="text-white/30" />
                        <span className="text-sm font-medium">{item.company}</span>
                      </div>
                      
                      {item.isCurrent && (
                        <div className="flex items-center gap-2 mt-1">
                           <span className="flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--hero-accent))] animate-pulse shadow-[0_0_8px_rgba(30,255,165,0.5)]" />
                           <span className="text-[9px] font-bold uppercase tracking-widest text-[hsl(var(--hero-accent))]">Active Protocol</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Description & Tech - Reduced padding */}
                <div className="w-full lg:w-3/4 p-6 lg:p-8 bg-black/5">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/30">
                        <Sparkle size={10} />
                        <span className="text-[9px] uppercase tracking-widest font-black">Context & Contribution</span>
                      </div>
                      <p className="text-white/60 text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/30">
                        <div className="h-px w-6 bg-white/10" />
                        <span className="text-[9px] uppercase tracking-widest font-black">Technical Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <div key={tech} className="relative group/tech">
                            <TechBadge name={tech} />
                            <div className="absolute -inset-1 bg-[hsl(var(--hero-glow))]/5 blur opacity-0 group-hover/tech:opacity-100 transition-opacity rounded-md" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Accent for Hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(var(--hero-glow))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-2xl blur-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

