import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          {/* Minimal availability banner */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                Open to new opportunities
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
            <span className="block font-semibold"> Rahul Shah</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm a Full Stack Developer focused on building scalable backend
            systems, AI-driven personalization engines, and cloud-native
            platforms driven to make an impact, one line of code at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="/Rahul_Shah_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
