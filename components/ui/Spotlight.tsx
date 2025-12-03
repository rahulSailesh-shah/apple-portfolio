import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ArrowRight, X } from "lucide-react";
import { sendMessageStream, resetChat } from "@/services/geminiService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Spotlight: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response, isThinking]);

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim() && !isThinking) {
      e.preventDefault();
      setHasInteracted(true);
      setIsThinking(true);
      setResponse("");

      const currentQuery = query;
      setQuery("");

      try {
        const streamResult = await sendMessageStream(currentQuery);
        let fullText = "";

        for await (const chunk of streamResult) {
          if (chunk.text) {
            fullText += chunk.text;
            setResponse(fullText);
          }
        }
      } catch (error) {
        setResponse("Sorry, I encountered an error connecting to the AI.");
      } finally {
        setIsThinking(false);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Input Area */}
        <div className="relative flex items-center h-16 px-4 border-b border-gray-200/50 dark:border-gray-800/50 shrink-0">
          <Search className="w-6 h-6 text-gray-400 dark:text-gray-500 mr-4" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Rahul..."
            className="flex-1 bg-transparent text-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 outline-none"
            autoComplete="off"
            autoFocus
          />
          <div className="flex items-center gap-2">
            {isThinking && (
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-500" />
              </motion.div>
            )}
            {!isThinking && query.length > 0 && (
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 font-medium">
                <span>return</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        </div>

        {/* Response Area */}
        <AnimatePresence>
          {(hasInteracted || response || isThinking) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 overflow-hidden"
            >
              <div
                ref={scrollRef}
                className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar"
              >
                {/* We could show the question here too if we want a chat history feel,
                    but for Spotlight it's usually just the result.
                    Let's just show the result for now to keep it clean. */}

                {isThinking && !response && (
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">Thinking...</span>
                  </div>
                )}

                {response && (
                  <div className="prose dark:prose-invert prose-sm max-w-none text-gray-700 dark:text-gray-300">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {response}
                    </ReactMarkdown>
                  </div>
                )}

                {/* Empty State / Suggestions could go here if response is empty */}
              </div>

              {/* Footer / Actions */}
              <div className="bg-gray-50/50 dark:bg-black/20 px-4 py-2 flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800/50">
                <span>AI-generated response</span>
                <button
                  onClick={() => {
                    setHasInteracted(false);
                    setResponse("");
                    setQuery("");
                    resetChat();
                    inputRef.current?.focus();
                  }}
                  className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  Clear Chat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
