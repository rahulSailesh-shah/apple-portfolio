"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  variant?: "fade-up" | "fade-in" | "scale-up" | "slide-right" | "slide-left";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  width = "100%",
  delay = 0,
  duration = 0.5,
  variant = "fade-up",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.98 },
      visible: { opacity: 1, scale: 1 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -15 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 15 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width }}
      className={className}
    >
      <motion.div
        variants={variants[variant] as { hidden: Variant; visible: Variant }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
