import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rahul Shah - Full Stack Developer",
  description:
    "Rahul Shah - Full Stack Developer. Building scalable and efficient web applications. Arizona State University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
