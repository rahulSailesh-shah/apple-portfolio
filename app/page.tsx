"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Heart } from "lucide-react";
import { About } from "@/components/About";
import { Experience } from "@/components/Resume";
import { Sparkles, MessageSquare } from 'lucide-react';
import AIChatModal from "@/components/ui/AIChatModal";


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black dark">

      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none" />
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-8 right-8 z-[90]">
        <button 
          onClick={() => setIsChatOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-black shadow-2xl transition-all hover:scale-110 active:scale-95 hover:rotate-3"
        >
          {/* Animated Glow Rings */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--hero-glow))] to-[hsl(var(--hero-accent))] rounded-2xl blur-md opacity-40 group-hover:opacity-100 animate-pulse transition-opacity" />
          
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-white rounded-2xl">
            <Sparkles size={24} className="text-black group-hover:scale-125 transition-transform duration-500" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Ask Architect AI
          </div>
        </button>
      </div>

      {/* AI Chat Modal */}
      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      <footer className="py-16 border-t border-white/5 text-center text-white/20 text-xs font-mono tracking-widest uppercase relative z-10">
        <p>© {new Date().getFullYear()} • Rahul Shah</p>
      </footer>

    </div>

  
  );
}
