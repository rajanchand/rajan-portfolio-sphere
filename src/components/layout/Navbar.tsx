
import { useState, useEffect } from "react";
import { Menu, X, Calendar, Home, Briefcase, Cpu, GraduationCap, User, Mail } from "lucide-react";
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
    { name: "Home", href: "#home", icon: Home },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Resume", href: "#resume", icon: GraduationCap },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
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
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex flex-col items-center justify-center px-3 py-2"
              >
                <span className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/10">
                  <Icon className="h-5 w-5 transition-colors duration-300 group-hover:text-primary" />
                </span>
                <span className="absolute bottom-0 text-xs font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-18px] group-hover:text-primary">
                  {link.name}
                </span>
              </a>
            );
          })}
          <Button variant="outline" size="sm" asChild className="ml-2 rounded-full">
            <a href="#contact" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Schedule Meeting
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
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 rounded-md flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5 text-primary" />
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="mr-3 h-5 w-5 text-primary" /> Schedule Meeting
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
