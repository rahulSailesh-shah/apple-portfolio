import React from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Solutions Unified",
    period: "May 2024 - Present",
    description:
      "At Solutions Unified, a SaaS provider for the medical manufacturing industry, I joined as the second engineer and was pivotal in building the core product from its inception to launch. My contributions focused on establishing foundational systems that streamlined critical business operations, including payment systems, automated infrastructure deployment, comprehensive API, frontend and backend development.",
    tech: [
      "React",
      "Node.js",
      "AWS Lambda",
      "DynamoDB",
      "AWS S3",
      "AWS CDK",
      "AWS SQS",
      "AWS SNS",
      "TypeScript",
    ],
    isCurrent: true,
  },
  {
    role: "AI Full Stack Developer",
    company: "Enterprise Technology (Arizona State University)",
    period: "Jan 2024 - Feb 2025",
    description:
      "At ASU, I led the development and scalable deployment of advanced AI platforms, architecting three full-stack solutions for over 10,000 users. My work involved establishing a robust MLOps pipeline, engineering a voice-enabled assistant, designing a modular backend for LLM integration, and creating a multi-agent orchestration system.",
    tech: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "AWS Sagemaker",
      "AWS API Gateway",
      "DynamoDB",
      "AWS S3",
      "Langchain",
    ],
    isCurrent: false,
  },
  {
    role: "Software Engineer II",
    company: "Allegion",
    period: "June 2020 - July 2023",
    description:
      "As a Software Engineer II at Allegion (Schlage), I developed and optimized microservices supporting IoT devices, impacting millions of users. My role spanned various technologies and teams, encompassing comprehensive frontend, backend, and DevOps responsibilities.",
    tech: [
      "Typescript",
      "Python",
      "GraphQL",
      "React",
      "FastAPI",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    isCurrent: false,
  },
];

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="relative py-[80px] md:py-[100px] lg:py-[120px] px-6 lg:px-8 overflow-hidden bg-black">
      <div className="relative z-10 max-w-[1200px] lg:max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight mb-8 text-gradient">
            Experience
          </h2>
          <p className="text-[18px] text-white/70">
            A journey through my professional development and technical growth.
          </p>
        </div>

        <div className="space-y-8 relative pl-8">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[34px] top-0 w-4 h-4 rounded-full border-4 border-background ${
                  exp.isCurrent
                    ? "bg-white shadow-lg"
                    : "bg-foreground/20"
                }`}
              />

              <div className="glass-card p-8 ml-4">
                <div className="mb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <h3 className="text-[28px] md:text-[32px] font-bold text-gradient-blue">
                      {exp.role}
                    </h3>
                    <span className="text-[14px] text-white/50 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[20px] text-white/70">
                    {exp.company}
                  </p>
                </div>
                <p className="text-[18px] text-white/80 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[16px] text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
