import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidEther from "./ui/LiquidEther";
import { useTheme } from "next-themes";

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const { theme } = useTheme();

  // Different color palettes for light and dark modes
  const lightModeColors = ["#7DD3FC", "#60A5FA", "#818CF8"]; // Lighter blues
  const darkModeColors = ["#0EA5E9", "#3B82F6", "#6366F1"]; // Deeper blues

  const colors = theme === "dark" ? darkModeColors : lightModeColors;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={colors}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.25}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <div
          className="transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          {/* availability banner */}
          <div className="flex justify-center items-center mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 bg-green-400 dark:bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-900 dark:text-gray-100 font-normal">
                Open to new opportunities
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block">Rahul Shah</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
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
