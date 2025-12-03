import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal variant="fade-up">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                  About Me
                </h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I'm a Full Stack Developer who got into software through an
                    unexpected web development elective in college. Since then,
                    I've gone from small projects to building full-scale
                    applications that improve real-world user experiences.
                  </p>
                  <p>
                    I've worked across both nimble startups and global MNCs,
                    contributing to products in IoT (smart locks), AI-powered
                    platforms, and enterprise SaaS for manufacturing and
                    healthcare. My focus is on scalable backends, cloud systems,
                    and automation with a drive to write clean, impactful code.
                  </p>
                  <p>
                    Outside of coding, you'll find me hiking, playing table
                    tennis, or brainstorming over coffee.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-black dark:text-white">
                    Core Technologies
                  </h3>

                  <div className="space-y-4">
                    <ScrollReveal variant="fade-up" delay={0.2}>
                      <div>
                        <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                          Programming Languages & Frameworks
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "Go",
                            "TypeScript",
                            "Python",
                            "Node.js",
                            "React",
                            "React Native",
                            "Next.js",
                            "GraphQL",
                            "FastAPI",
                            "Spring Boot",
                            "GenAI",
                            "Autogen",
                            "LangChain",
                          ].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover-lift"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={0.3}>
                      <div>
                        <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                          Cloud & Infrastructure
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "AWS API Gateway",
                            "AWS Lambda",
                            "AWS S3",
                            "AWS EC2",
                            "AWS ECS",
                            "AWS CloudFormation",
                            "AWS CDK",
                            "Docker",
                            "MySQL",
                            "PostgreSQL",
                            "Redis",
                            "DynamoDB",
                            "Apache Kafka",
                            "Elasticsearch",
                            "MongoDB",
                            "RabbitMQ",
                          ].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium hover-lift"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={0.4}>
                      <div>
                        <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                          Tools & DevOps
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Git",
                            "Jenkins",
                            "Kubernetes",
                            "Selenium",
                            "Prometheus",
                            "Grafana",
                          ].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover-lift"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2 relative">
            <ScrollReveal variant="scale-up" delay={0.2}>
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={400}
                height={500}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
