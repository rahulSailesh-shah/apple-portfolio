import React from "react";
import { HistoryItem } from "@/types";
import { PROJECTS, EXPERIENCE, SKILLS, SOCIAL_LINKS } from "../../constants";

interface TerminalLineProps {
  item: HistoryItem;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({ item }) => {
  const { type, content, prefix } = item;

  // Color mapping for Tokyo Night
  const promptColor = prefix?.includes("ai")
    ? "text-[#bb9af7]"
    : "text-[#9ece6a]";

  if (type === "input") {
    return (
      <div className="flex flex-row">
        <span className={`${promptColor} mr-2 font-bold`}>
          {prefix || "> "}
        </span>
        <span className="text-[#c0caf5] opacity-90">{content}</span>
      </div>
    );
  }

  if (type === "error") {
    return <div className="text-[#f7768e]">{content}</div>;
  }

  if (type === "system") {
    return <div className="text-[#565f89] italic">{content}</div>;
  }

  if (React.isValidElement(content)) {
    return <div>{content}</div>;
  }

  // Default text output
  return (
    <div className="text-[#c0caf5] whitespace-pre-wrap leading-relaxed">
      {content}
    </div>
  );
};

export const ProjectsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
    {PROJECTS.map((p, i) => (
      <div
        key={i}
        className="border border-[#24283b] p-4 rounded bg-[#16161e]/80 hover:border-[#7aa2f7]/50 transition-colors"
      >
        <div className="text-[#7aa2f7] font-bold mb-1">./{p.name}</div>
        <div className="text-[#9aa5ce] text-sm mb-2">{p.description}</div>
        <div className="text-xs text-[#565f89] mb-3">[{p.tech.join(", ")}]</div>
        <div className="flex gap-3 text-xs">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#bb9af7] hover:underline"
            >
              &lt;source&gt;
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="text-[#9ece6a] hover:underline"
            >
              &lt;demo&gt;
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

export const WorkTimeline = () => (
  <div className="flex flex-col space-y-6 my-4 border-l border-[#24283b] ml-2 pl-6 relative">
    {EXPERIENCE.map((job, i) => (
      <div key={i} className="relative">
        {/* Dot on timeline */}
        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#bb9af7] border-4 border-[#1a1b26]" />

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
          <h3 className="text-[#bb9af7] font-bold text-lg">{job.role}</h3>
          <span className="text-[#565f89] text-sm font-mono">{job.period}</span>
        </div>
        <div className="text-[#7aa2f7] mb-2">@ {job.company}</div>
        <ul className="list-disc list-inside text-[#a9b1d6] text-sm space-y-1 ml-1">
          {job.details.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const SkillsList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-4">
    {Object.entries(SKILLS).map(([category, items]) => (
      <div key={category}>
        <div className="text-[#e0af68] font-bold border-b border-[#24283b] pb-1 mb-2 uppercase text-sm tracking-wider">
          {category}
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(items as Record<string, any>)
            .filter(
              ([key, value]) =>
                key !== "proficiencyDetails" && Array.isArray(value)
            )
            .flatMap(([, value]) => value as string[])
            .map((skill) => (
              <span
                key={skill}
                className="text-[#c0caf5] text-sm px-2 py-0.5 bg-[#24283b] rounded"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>
    ))}
  </div>
);

export const SocialsList = () => (
  <div className="flex flex-col space-y-2 my-4">
    {SOCIAL_LINKS.map((link) => (
      <div key={link.platform} className="flex items-center space-x-4">
        <span className="w-24 text-[#9ece6a]">{link.platform}:</span>
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-[#7dcfff] hover:underline hover:text-[#7aa2f7] transition-colors"
        >
          {link.username}
        </a>
      </div>
    ))}
  </div>
);
