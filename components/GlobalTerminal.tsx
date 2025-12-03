"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminal } from "@/context/TerminalContext";
import { Spotlight } from "./ui/Spotlight";
import { X } from "lucide-react";

export const GlobalTerminal: React.FC = () => {
  const { isOpen, closeTerminal } = useTerminal();

  // Handle escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTerminal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeTerminal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTerminal}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Spotlight Container */}
          <div className="relative z-10 w-full max-w-2xl">
            <Spotlight />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
