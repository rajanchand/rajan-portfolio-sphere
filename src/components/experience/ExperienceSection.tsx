
import { SectionHeading } from "@/components/common/SectionHeading";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay: number;
}

function ExperienceCard({ title, company, period, description, delay }: ExperienceCardProps) {
  return (
    <div 
      className={cn(
        "glass rounded-xl p-6 border-l-4 border-primary transition-all duration-300 hover:shadow-lg",
        `animate-fade-in animate-delay-${delay}`
      )}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
          <p className="text-sm text-muted-foreground mb-2">{period}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Technical Support Engineer",
      company: "Tech Solutions Ltd",
      period: "2022 - Present",
      description: "Providing high-level technical support for enterprise clients, troubleshooting complex network and system issues, and implementing technical solutions.",
      delay: 1,
    },
    {
      title: "Network Administrator",
      company: "Global IT Services",
      period: "2020 - 2022",
      description: "Managed and maintained network infrastructure, implemented security protocols, and conducted system upgrades for improved performance.",
      delay: 2,
    },
    {
      title: "Customer Service Specialist",
      company: "Service Excellence Inc.",
      period: "2018 - 2020",
      description: "Delivered exceptional customer service, resolved client inquiries, and assisted with technical troubleshooting for product-related issues.",
      delay: 3,
    },
    {
      title: "IT Intern",
      company: "InnoTech Solutions",
      period: "2017 - 2018",
      description: "Assisted the IT team with daily operations, learned system administration, and gained hands-on experience with network configurations.",
      delay: 4,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="Professional journey and career highlights"
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
