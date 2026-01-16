import React from "react";
import { Mail, Github, Linkedin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-[80px] md:py-[100px] lg:py-[120px] px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-[1200px] lg:max-w-[1400px] mx-auto text-center">
        <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight mb-8 text-gradient">
          Let's Connect
        </h2>
        <p className="text-[18px] text-white/70 mb-16 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, interesting
          projects, or just talking about technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button
            variant="cta"
            size="lg"
            className="rounded-full px-10 py-7 text-lg font-semibold"
            asChild
          >
            <a href="mailto:shah.rahulsailesh@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="rounded-full px-10 py-7 text-lg font-medium"
            asChild
          >
            <a
              href="https://calendly.com/shah-rahulsailesh/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Call
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/rahulSailesh-shah"
            target="_blank"
            className="glass-panel p-4 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-shah17/"
            target="_blank"
            className="glass-panel p-4 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/rahul_shah107"
            target="_blank"
            className="glass-panel p-4 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
