"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { Logo } from "./Logo";

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export const Navigation: React.FC<NavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <Navbar className="fixed top-0 z-50">
      <NavBody>
        <Logo className="relative z-20" />
        <NavItems
          items={navItems}
          className="text-white dark:text-white"
          onItemClick={() => {}}
        />
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="bg-black/95 dark:bg-black/95 border border-white/10"
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white dark:text-white hover:text-white/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
