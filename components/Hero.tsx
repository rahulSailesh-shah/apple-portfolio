"use client";

import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import DotGrid from "./ui/DotGrid";

interface HeroProps {
  scrollY: number;
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ scrollY, darkMode }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={4}
          gap={30}
          baseColor={darkMode ? "#1f1f1f" : "#e5e5e5"}
          activeColor={darkMode ? "#404040" : "#d4d4d4"}
          proximity={120}
          shockRadius={330}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
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
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            {/*<div className="absolute inset-0 z-0">
              <div
                className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20"
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                }}
              >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
              </div>
            </div>*/}

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <ScrollReveal variant="fade-in" delay={0.1}>
                <div className="flex justify-center items-center mb-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-green-400 dark:bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-900 dark:text-gray-100 font-normal">
                      Open to new opportunities
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gradient">
                  Rahul Shah
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.4}>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                  I'm a Full Stack Developer focused on building scalable
                  backend systems, AI-driven personalization engines, and
                  cloud-native platforms driven to make an impact, one line of
                  code at a time.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="scale-up" delay={0.6}>
                <div className="flex justify-center gap-4">
                  <a
                    href="/Rahul_Shah_SDE_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
