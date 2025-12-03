import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Github, Linkedin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-8 bg-black dark:bg-white text-white dark:text-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, interesting
            projects, or just talking about technology.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="mailto:shah.rahulsailesh@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 dark:border-black/20 bg-transparent dark:bg-transparent text-white dark:text-black hover:text-white dark:hover:text-black hover:bg-white/10 dark:hover:bg-black/10 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="https://calendly.com/shah-rahulsailesh/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                Schedule Call
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.4}>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/rahulSailesh-shah"
              target="_blank"
              className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors hover:scale-110 transform duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-shah17/"
              target="_blank"
              className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/rahul_shah107"
              target="_blank"
              className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors hover:scale-110 transform duration-300"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
