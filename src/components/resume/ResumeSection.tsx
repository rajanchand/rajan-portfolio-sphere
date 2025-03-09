
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-secondary/50">
      <div className="section-container">
        <SectionHeading 
          title="My Resume" 
          subtitle="Download my resume or view it online"
        />
        
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-8">
            <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Rajan Prakash Chand</h3>
            <p className="text-muted-foreground">Technical Engineer</p>
          </div>
          
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-medium border-b border-border pb-2 mb-3">Professional Summary</h4>
              <p className="text-muted-foreground">
                Dedicated technical engineer with 5 years of experience in customer service and technical fields. 
                Proven ability to manage complex technical systems, provide excellent customer support, and optimize 
                network infrastructure. Strong problem-solving skills and ability to work under pressure.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium border-b border-border pb-2 mb-3">Core Skills</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Technical support and troubleshooting</li>
                <li>Network infrastructure management</li>
                <li>Customer service excellence</li>
                <li>Team leadership and supervision</li>
                <li>DevOps practices and implementation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium border-b border-border pb-2 mb-3">Education</h4>
              <p className="text-muted-foreground">
                Master's in Information Technology - University of Glasgow (2018-2020)<br />
                Bachelor of Science in Computer Science - Tribhuvan University (2014-2018)
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> View Full Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
