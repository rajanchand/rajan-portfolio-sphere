
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-display tracking-tight">
          Rajan <span className="text-primary">Prakash Chand</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary link-underline"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild className="ml-2">
            <a href="#contact">
              <Calendar className="mr-2 h-4 w-4" /> Schedule Meeting
            </a>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="glass md:hidden py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="mr-2 h-4 w-4" /> Schedule Meeting
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
