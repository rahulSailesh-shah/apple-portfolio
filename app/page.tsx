"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Heart } from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black dark">
      <div className="bg-black text-white">
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="relative py-12 px-6 lg:px-8 border-t border-white/10 bg-black">
          <div className="max-w-[1200px] lg:max-w-[1400px] mx-auto text-center">
            <p className="text-white/60 flex items-center justify-center gap-2 flex-wrap text-[16px]">
              <span>© {new Date().getFullYear()} Rahul Shah</span>
              <span className="text-white/40">•</span>
              <span>
                Built with{" "}
                <Heart className="inline h-4 w-4 text-white" fill="currentColor" />
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
