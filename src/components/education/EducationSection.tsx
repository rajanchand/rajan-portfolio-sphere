
import { SectionHeading } from "@/components/common/SectionHeading";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationCardProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  delay: number;
}

function EducationCard({ title, institution, period, description, delay }: EducationCardProps) {
  return (
    <div 
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg",
        `animate-fade-in animate-delay-${delay}`
      )}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{institution}</p>
          <p className="text-sm text-muted-foreground mb-2">{period}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function EducationSection() {
  const educations = [
    {
      title: "Master's Degree",
      institution: "University of Glasgow",
      period: "2018 - 2020",
      description: "Master's in Information Technology with focus on networking and systems administration.",
      delay: 1,
    },
    {
      title: "Bachelor's Degree",
      institution: "Tribhuvan University",
      period: "2014 - 2018",
      description: "Bachelor of Science in Computer Science with specialization in software development.",
      delay: 2,
    },
    {
      title: "HSEB Level",
      institution: "National College",
      period: "2012 - 2014",
      description: "Higher Secondary Education Board certification with focus on science and mathematics.",
      delay: 3,
    },
    {
      title: "School Level",
      institution: "Modern Public School",
      period: "2000 - 2012",
      description: "Completed school education with distinction in science and mathematics.",
      delay: 4,
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="section-container">
        <SectionHeading 
          title="Education" 
          subtitle="Academic qualifications and educational background"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education) => (
            <EducationCard key={education.title} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
}
