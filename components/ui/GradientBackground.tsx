"use client";

import React, { useEffect, useRef } from "react";

interface GradientBackgroundProps {
  variant?: "hero" | "section" | "subtle";
  className?: string;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = "hero",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Gradient configuration based on variant - Electric blue, warm orange, coral pink
    const configs = {
      hero: {
        colors: [
          { r: 59, g: 130, b: 246, a: 0.5 }, // Electric blue
          { r: 255, g: 107, b: 53, a: 0.4 }, // Warm orange
          { r: 255, g: 95, b: 130, a: 0.3 }, // Coral pink
          { r: 37, g: 99, b: 235, a: 0.3 }, // Deeper blue
        ],
        speed: 0.0008,
        blobCount: 4,
      },
      section: {
        colors: [
          { r: 59, g: 130, b: 246, a: 0.25 }, // Electric blue
          { r: 255, g: 107, b: 53, a: 0.2 }, // Warm orange
          { r: 255, g: 95, b: 130, a: 0.15 }, // Coral pink
        ],
        speed: 0.0005,
        blobCount: 3,
      },
      subtle: {
        colors: [
          { r: 59, g: 130, b: 246, a: 0.15 }, // Electric blue
          { r: 255, g: 107, b: 53, a: 0.12 }, // Warm orange
        ],
        speed: 0.0003,
        blobCount: 2,
      },
    };

    const config = configs[variant];
    const blobs: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: { r: number; g: number; b: number; a: number };
    }> = [];

    // Initialize blobs with varied sizes and speeds for flowing effect
    for (let i = 0; i < config.blobCount; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: 250 + Math.random() * 400, // Larger, more flowing blobs
        color: config.colors[i % config.colors.length],
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += config.speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );

      // Add color stops based on blobs
      blobs.forEach((blob, i) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;

        // Keep in bounds
        blob.x = Math.max(0, Math.min(canvas.width, blob.x));
        blob.y = Math.max(0, Math.min(canvas.height, blob.y));

        // Draw blob with gradient
        const blobGradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        blobGradient.addColorStop(
          0,
          `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a})`
        );
        blobGradient.addColorStop(
          1,
          `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`
        );

        ctx.fillStyle = blobGradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
};

// CSS-based gradient background as fallback/alternative with flowing blue-to-orange
export const CSSGradientBackground: React.FC<{
  variant?: "hero" | "section" | "subtle";
  className?: string;
}> = ({ variant = "hero", className = "" }) => {
  const gradients = {
    hero: "bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-orange-500/20",
    section: "bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10",
    subtle: "bg-gradient-to-br from-blue-500/6 via-transparent to-orange-500/6",
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full ${gradients[variant]} animate-gradient-shift bg-gradient-size ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(255, 107, 53, 0.1) 50%, rgba(255, 95, 130, 0.12) 100%)",
        backgroundSize: "200% 200%",
      }}
    />
  );
};
