import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A journey through my professional development and technical
              growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 pl-4">
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-8 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black" />
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Software Engineer </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Solutions Unified • May 2024 - Present
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At Solutions Unified, a SaaS provider for the medical
                manufacturing industry, I joined as the second engineer and was
                pivotal in building the core product from its inception to
                launch. My contributions focused on establishing foundational
                systems that streamlined critical business operations, including
                payment systems, automated infrastructure deployment,
                comprehensive API, frontend and backend development.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "AWS Lambda",
                  "DynamoDB",
                  "AWS S3",
                  "AWS CDK",
                  "AWS SQS",
                  "AWS SNS",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-8 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full border-4 border-white dark:border-black" />
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">
                  AI Full Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enterprise Technology{" "}
                  <span className="italic">(Arizona State University)</span> •
                  Jan 2024 - Feb 2025
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At ASU, I led the development and scalable deployment of
                advanced AI platforms, architecting three full-stack solutions
                for over 10,000 users. My work involved establishing a robust
                MLOps pipeline, engineering a voice-enabled assistant, designing
                a modular backend for LLM integration, and creating a
                multi-agent orchestration system.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "FastAPI",
                  "AWS Sagemaker",
                  "AWS API Gateway",
                  "DynamoDB",
                  "AWS S3",
                  "Langchain",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-8 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full border-4 border-white dark:border-black" />
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Software Engineer II</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Allegion • June 2020 - July 2023
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                As a Software Engineer II at Allegion (Schlage), I developed and
                optimized microservices supporting IoT devices, impacting
                millions of users. My role spanned various technologies and
                teams, encompassing comprehensive frontend, backend, and DevOps
                responsibilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Typescript",
                  "Python",
                  "GraphQL",
                  "React",
                  "FastAPI",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
