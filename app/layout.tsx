import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TerminalProvider } from "@/context/TerminalContext";
import { GlobalTerminal } from "@/components/GlobalTerminal";
import { TerminalFab } from "@/components/TerminalFab";

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
      <body className={`${inter.className} antialiased`}>
        <TerminalProvider>
          {children}
          <GlobalTerminal />
          <TerminalFab />
        </TerminalProvider>
      </body>
    </html>
  );
}
