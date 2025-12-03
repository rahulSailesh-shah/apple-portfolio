import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  setDarkMode,
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#resume"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Contact
            </a>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
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
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200/20 dark:border-gray-800/20">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#projects"
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#resume"
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium"
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
