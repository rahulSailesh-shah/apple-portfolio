import { ReactNode } from "react";

export type TerminalMode = "command" | "ai";

export type LineType = "input" | "output" | "error" | "system";

export interface HistoryItem {
  id: string;
  type: LineType;
  content: ReactNode | string;
  prefix?: string; // e.g., "> " or "ai> "
}

export interface Command {
  description: string;
  action?: (args: string[]) => void; // If custom logic is needed
  output?: string | ReactNode; // Static output
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Theme {
  background: string;
  foreground: string;
  accent: string;
}
