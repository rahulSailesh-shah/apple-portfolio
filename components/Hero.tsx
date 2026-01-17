"use client";

import React from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] min-h-screen flex md:items-center md:justify-center antialiased overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 60%, .12) 0, hsla(210, 100%, 60%, .04) 50%, hsla(210, 100%, 60%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 60%, .08) 0, hsla(210, 100%, 60%, .03) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 60%, .06) 0, hsla(210, 100%, 60%, .02) 80%, transparent 100%)"
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full text-center max-w-7xl mx-auto px-6">
        <div className="relative min-h-screen flex items-center justify-center py-20">
          <div className="relative z-10 text-center w-full -translate-y-20">
            {/* Badge */}
            <div className="flex justify-center items-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white/70">
                  Open to new opportunities
                </span>
              </div>
            </div>

            <h1 className="text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-bold mb-8 tracking-tight leading-[1.1] text-white">
              Rahul Shah
            </h1>


            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/70 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
              Building scalable backend systems, AI-driven personalization engines, and cloud-native platforms that enable grounded and accurate solutions on demand.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                variant="cta"
                size="lg"
                className="rounded-lg px-8 py-6 text-sm bg-white text-black border border-black hover:bg-white/90"
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
              <Button
                variant="glass"
                size="lg"
                className="rounded-lg px-8 py-6 text-sm bg-transparent text-white border border-white/30 hover:bg-white/10"
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
            <div className="flex flex-col items-center gap-2 text-white/40">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
