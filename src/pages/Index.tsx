
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { useEffect } from "react";

const Index = () => {
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
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
