import React, { useState, useEffect, useRef } from "react";
import { TerminalLine } from "./TerminalLine";
import { HistoryItem } from "@/types";
import {
  ASCII_BANNER_DESKTOP,
  ASCII_BANNER_MOBILE,
  HELP_TEXT,
} from "@/constants";
import { sendMessageStream, resetChat } from "@/services/geminiService";

export const TerminalWindow: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial boot sequence
  useEffect(() => {
    const bootSequence = async () => {
      const lines = [
        "Initializing Rahul Shah AI Assistant...",
        "Accessing portfolio data...",
        "Ask me anything about Rahul's work, skills, or experience.",
      ];

      // Add banner first immediately
      setHistory([
        {
          id: "banner-init",
          type: "output",
          content: (
            <div>
              {/* Desktop Banner */}
              <pre className="hidden md:block text-[10px] sm:text-xs md:text-sm text-[#9ece6a] font-bold leading-none mb-4 overflow-x-auto whitespace-pre">
                {ASCII_BANNER_DESKTOP}
              </pre>
              {/* Mobile Banner */}
              <pre className="block md:hidden text-[10px] text-[#9ece6a] font-bold leading-none mb-4 overflow-x-auto whitespace-pre">
                {ASCII_BANNER_MOBILE}
              </pre>
            </div>
          ),
        },
      ]);

      // Staggered text entry
      for (let i = 0; i < lines.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setHistory((prev) => [
          ...prev,
          {
            id: `init-${i}`,
            type: "system",
            content: lines[i],
          },
        ]);
      }
    };
    bootSequence();
  }, []);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus management
  const handleContainerClick = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    inputRef.current?.focus();
  };

  const addToHistory = (item: HistoryItem) => {
    setHistory((prev) => [...prev, item]);
  };

  const processCommand = async (cmd: string) => {
    const trimmed = cmd.trim();
    const lowerCmd = trimmed.toLowerCase();

    // Echo command
    addToHistory({
      id: Date.now().toString(),
      type: "input",
      content: trimmed,
      prefix: "ai> ",
    });

    // Add to command history if not empty
    if (trimmed) {
      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1); // Reset index after executing command
    }

    if (!trimmed) return;

    // Utility commands
    switch (lowerCmd) {
      case "help":
        addToHistory({
          id: Date.now() + "out",
          type: "output",
          content: HELP_TEXT.join("\n"),
        });
        return;
      case "clear":
        setHistory([]);
        return;
      case "banner":
        addToHistory({
          id: Date.now() + "out",
          type: "output",
          content: (
            <div>
              {/* Desktop Banner */}
              <pre className="hidden md:block text-[10px] sm:text-xs md:text-sm text-[#9ece6a] font-bold leading-none mb-4 overflow-x-auto whitespace-pre">
                {ASCII_BANNER_DESKTOP}
              </pre>
              {/* Mobile Banner */}
              <pre className="block md:hidden text-[10px] text-[#9ece6a] font-bold leading-none mb-4 overflow-x-auto whitespace-pre">
                {ASCII_BANNER_MOBILE}
              </pre>
            </div>
          ),
        });
        return;
    }

    // Default to AI query for everything else
    await handleAIQuery(trimmed);
  };

  const handleAIQuery = async (query: string) => {
    setIsAiProcessing(true);
    const responseId = Date.now().toString() + "ai-res";

    // Create a placeholder for streaming
    addToHistory({
      id: responseId,
      type: "output",
      content: "",
    });

    try {
      const streamResult = await sendMessageStream(query);

      let fullText = "";

      for await (const chunk of streamResult) {
        if (chunk.text) {
          fullText += chunk.text;
          // Update the last history item with the accumulated text
          setHistory((prev) =>
            prev.map((item) =>
              item.id === responseId ? { ...item, content: fullText } : item
            )
          );
        }
      }
    } catch (error) {
      setHistory((prev) =>
        prev.map((item) =>
          item.id === responseId
            ? {
                ...item,
                type: "error",
                content:
                  "AI Connection Error: Failed to get response from Gemini.",
              }
            : item
        )
      );
    } finally {
      setIsAiProcessing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isAiProcessing) {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0 || historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  return (
    <div
      className="w-full h-full bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden border border-[#24283b] flex flex-col relative"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
      onClick={handleContainerClick}
    >
      {/* Title Bar - Tokyo Night Darker shade */}
      <div className="h-8 bg-[#16161e] border-b border-[#101014] flex items-center px-4 space-x-2 shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#f7768e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#e0af68]"></div>
        <div className="w-3 h-3 rounded-full bg-[#9ece6a]"></div>
        <div className="flex-1 text-center text-[#565f89] text-xs font-mono">
          rahul@terminal:~$
        </div>
      </div>

      {/* Terminal Content Area */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#24283b] scrollbar-track-transparent"
      >
        {history.map((item) => (
          <div key={item.id} className="mb-2">
            <TerminalLine item={item} />
          </div>
        ))}

        {/* Active Input Line or Thinking State */}
        {isAiProcessing ? (
          <div className="flex flex-row items-center">
            <span className="mr-2 font-bold text-[#bb9af7]">ai&gt;</span>
            <div className="flex items-center space-x-2 px-3 py-1 bg-[#bb9af7]/10 rounded border border-[#bb9af7]/20">
              <span className="text-[#bb9af7] text-sm animate-pulse">
                thinking
              </span>
              <span className="flex space-x-1">
                <span
                  className="w-1 h-1 bg-[#bb9af7] rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></span>
                <span
                  className="w-1 h-1 bg-[#bb9af7] rounded-full animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                ></span>
                <span
                  className="w-1 h-1 bg-[#bb9af7] rounded-full animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                ></span>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <span className="mr-2 font-bold text-[#bb9af7]">ai&gt;</span>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-[#c0caf5] outline-none border-none font-inherit p-0 m-0 caret-[#c0caf5]"
                autoFocus
                autoComplete="off"
                disabled={isAiProcessing}
                spellCheck="false"
              />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};
