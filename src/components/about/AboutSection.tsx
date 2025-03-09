
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Getting to know me better"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1 animate-slide-in-left">
            <div className="aspect-square relative rounded-xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Rajan Prakash Chand"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">Rajan Prakash Chand</h3>
                <p className="text-white/80">Technical Engineer</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Technical Support</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Networking</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">DevOps</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Customer Service</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">System Administration</Badge>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://github.com/rajanprakashchand" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://linkedin.com/in/rajan-prakash-chand" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://youtube.com/@rajanprakashchand" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-4 w-4" /> YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="glass rounded-xl p-6 space-y-4">
              <p className="text-lg">
                Rajan Prakash Chand is a professional based in Glasgow, Scotland, with a background in customer service and technical fields. He has 2 years of experience in customer service and 3 years in technical roles, combining strong communication skills with technical expertise.
              </p>
              
              <p>
                In addition to his professional endeavors, Rajan maintains an active online presence. He has a GitHub profile where he shares his coding projects and interests. He also has a YouTube channel, though it currently has limited content.
              </p>
              
              <p>
                Furthermore, there is a "Prakash Chand Rajan" listed as a director of Marvel Worldwide Services UK Ltd., a company registered in Slough, United Kingdom. This individual was appointed on May 15, 2024.
              </p>
              
              <p className="italic text-muted-foreground">
                Please note that "Prakash Chand" is a common name, and multiple individuals share this name across various professions and locations.
              </p>
              
              <div className="pt-4">
                <Button asChild>
                  <a href="/resume.pdf" download>Download Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
