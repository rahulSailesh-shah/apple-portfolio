
import React, { useState, useMemo } from 'react';
import TechBadge from './ui/TechBadge';
import { 
  Play, 
  Github, 
  ChevronRight, 
  Layers, 
  Monitor,
  Code2,
  ArrowUpRight
} from 'lucide-react';

const CATEGORIES = ['All', 'AI', 'Full Stack', 'Distributed Systems', 'Tools'] as const;
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  videoUrl?: string;
  sourceCodeUrl?: string;
  category: 'AI' | 'Full Stack' | 'Distributed Systems' | 'Tools';
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'vistruct',
    title: 'Vistruct',
    subtitle: 'AI-Powered Education',
    category: 'AI',
    description: 'AI-powered educational video platform that lets educators create professional videos with chat-based script editing, AI voice-over, and Manim animations.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Manim', 'AI Voice Synthesis'],
    imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop',
    videoUrl: '#',
    sourceCodeUrl: '#'
  },
  {
    id: 'conversense',
    title: 'Conversense',
    subtitle: 'Real-time AI Agents',
    category: 'AI',
    description: 'Platform to build AI agents for real-time video call Q&A, meeting summarization, and post-meeting chat-based interaction.',
    techStack: ['Golang', 'Gin', 'PostgreSQL', 'Livekit', 'Gemini Live API', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2106&auto=format&fit=crop',
    videoUrl: '#',
    sourceCodeUrl: '#'
  },
  {
    id: 'nexus-cloud',
    title: 'Nexus Cloud',
    subtitle: 'Infrastructure Orchestrator',
    category: 'Distributed Systems',
    description: 'A cloud-native infrastructure management tool for automated deployment of microservices across hybrid cloud environments.',
    techStack: ['Python', 'Kubernetes', 'AWS CDK', 'Terraform', 'Prometheus'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop',
    videoUrl: '#',
    sourceCodeUrl: '#'
  },
  {
    id: 'sentinel-ai',
    title: 'Sentinel AI',
    subtitle: 'Security Monitor',
    category: 'AI',
    description: 'Real-time security auditing tool using LLMs to detect vulnerabilities in smart contracts and cloud configurations.',
    techStack: ['TypeScript', 'LangChain', 'FastAPI', 'Redis', 'OpenAI'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    videoUrl: '#',
    sourceCodeUrl: '#'
  },
  {
    id: 'flux-db',
    title: 'FluxDB',
    subtitle: 'High-Performance Store',
    category: 'Distributed Systems',
    description: 'A custom distributed key-value store optimized for high-throughput IoT data ingestion.',
    techStack: ['Go', 'gRPC', 'Raft Consensus', 'RocksDB', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    videoUrl: '#',
    sourceCodeUrl: '#'
  }
];


export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_DATA[0].id);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const activeProject = useMemo(() => {
    return PROJECTS_DATA.find(p => p.id === selectedProjectId) || PROJECTS_DATA[0];
  }, [selectedProjectId]);

  return (
    <section id="projects" className="relative space-y-16 py-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--hero-glow))]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit">
          <Layers size={12} className="text-[hsl(var(--hero-glow))]" />
          <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/50 code-text">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          The Creations.
        </h2>
        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
          A selection of my architectural experiments and production-ready systems. 
          Use the navigator to explore different domains.
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
                const projectsInCat = cat === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === cat);
                if (projectsInCat.length > 0) setSelectedProjectId(projectsInCat[0].id);
              }}
              className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-white/40 hover:text-white/70'
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
                  ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                  : 'bg-white/[0.02] border-white/5 opacity-50 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[10px] font-mono text-[hsl(var(--hero-glow))] uppercase tracking-widest">
                  {project.category}
                </span>
                {selectedProjectId === project.id && <ChevronRight size={16} className="text-white" />}
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
              <p className="text-white/40 text-xs font-light line-clamp-1">{project.subtitle}</p>
            </button>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="p-12 text-center glass-card">
              <Code2 className="mx-auto mb-4 text-white/10" size={32} />
              <p className="text-white/20 font-mono text-xs uppercase tracking-widest">No Projects Found</p>
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
                     <span className="text-[10px] font-mono text-white/60 uppercase">Preview Active</span>
                  </div>
               </div>
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-10 flex-1 flex flex-col gap-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                      {activeProject.title}
                    </h3>
                    <p className="text-[hsl(var(--hero-accent))] font-mono text-xs uppercase tracking-[0.4em]">
                      {activeProject.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    {activeProject.videoUrl && (
                      <a href={activeProject.videoUrl} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase hover:bg-white/90 transition-all code-text tracking-[0.1em]">
                        <Play size={14} fill="currentColor" /> See Video
                      </a>
                    )}
                    {activeProject.sourceCodeUrl && (
                      <a href={activeProject.sourceCodeUrl} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase hover:bg-white/10 transition-all code-text tracking-[0.1em]">
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
                   <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Technology Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map(tech => (
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
          <button className="flex items-center gap-2 text-[10px] font-mono text-[hsl(var(--hero-glow))] hover:text-white transition-colors uppercase tracking-widest group">
            View GitHub Archive <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

