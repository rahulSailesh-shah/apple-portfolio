"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useTerminal } from "@/context/TerminalContext";
import { motion, AnimatePresence } from "framer-motion";

export const TerminalFab: React.FC = () => {
  const { isOpen, toggleTerminal } = useTerminal();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTerminal}
          className="fixed bottom-8 right-8 z-40 p-4 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Open AI Assistant"
        >
          <Sparkles className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
