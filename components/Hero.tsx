"use client";

import React from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <div className="flex justify-center items-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-foreground/70">
                  Open to new opportunities
                </span>
              </div>
            </div>

            <h1 className="text-[80px] md:text-[100px] lg:text-[120px] font-bold mb-8 tracking-tight leading-[1.1]">
              <span className="text-gradient">
                Rahul Shah
              </span>
            </h1>
            <p className="text-[28px] md:text-[32px] text-white/80 mb-12 font-medium">
              Full Stack Developer
            </p>

            <p className="text-[18px] md:text-[20px] text-white/70 mb-16 font-normal max-w-3xl mx-auto leading-relaxed">
              Building scalable backend systems, AI-driven personalization engines, and
              cloud-native platforms driven to make an impact, one line of code at a time.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <Button
                variant="cta"
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-semibold"
                asChild
              >
                <a
                  href="/Rahul_Shah_SDE_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-medium"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-foreground/40">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
