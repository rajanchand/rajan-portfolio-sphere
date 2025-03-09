
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { AISearch } from "@/components/home/AISearch";
import { useEffect, useState } from "react";

const Index = () => {
  const [showSearch, setShowSearch] = useState(true);
  
  // Scroll to section on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          setTimeout(() => {
            window.scrollTo({
              top: section.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });
          }, 0);
        }
      }
    };

    // Initial scroll if hash exists
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    // Hide search after 30 seconds automatically if not interacted with
    const timer = setTimeout(() => {
      setShowSearch(false);
    }, 30000);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {showSearch && <AISearch />}
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ResumeSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
