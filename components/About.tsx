import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-[80px] md:py-[100px] lg:py-[120px] px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-[1200px] lg:max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight mb-12 text-gradient">
                About Me
              </h2>
              <div className="space-y-6 text-[18px] text-white/80 leading-relaxed">
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
              <div className="space-y-6 mt-16">
                <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-8">
                  Core Technologies
                </h3>

                <div className="space-y-6">
                  <div className="glass-card p-8">
                    <h4 className="text-[20px] md:text-[24px] font-semibold mb-6 text-white">
                      Programming Languages & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-3">
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
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[16px] text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-8">
                    <h4 className="text-[20px] md:text-[24px] font-semibold mb-6 text-white">
                      Cloud & Infrastructure
                    </h4>
                    <div className="flex flex-wrap gap-3">
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
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[16px] text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-8">
                    <h4 className="text-[20px] md:text-[24px] font-semibold mb-6 text-white">
                      Tools & DevOps
                    </h4>
                    <div className="flex flex-wrap gap-3">
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
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[16px] text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 relative">
            <div className="relative group">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={400}
                height={500}
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl glass-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
