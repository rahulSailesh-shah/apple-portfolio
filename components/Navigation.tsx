import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "glass-panel border-b border-white/10 shadow-xl bg-black/80"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#projects"
              className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              About
            </a>
            <a
              href="#resume"
              className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-2">
            <a
              href="#projects"
              className="block text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="block text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#resume"
              className="block text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
