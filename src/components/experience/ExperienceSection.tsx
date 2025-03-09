
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
      title: "Customer Support Supervisor",
      company: "Dish Media Network",
      period: "2022 - 2024",
      description: "Led the customer support team, resolved escalated technical issues, improved customer satisfaction metrics, and implemented new support protocols.",
      delay: 1,
    },
    {
      title: "Technical Supervisor",
      company: "Worldlink Communication Ltd",
      period: "2019 - 2022",
      description: "Managed technical operations, supervised technical teams, implemented network solutions, and ensured service quality standards were maintained.",
      delay: 2,
    },
    {
      title: "Technical Support",
      company: "Kalash Services Pvt Ltd",
      period: "2018 - 2019",
      description: "Provided technical support to customers, troubleshooted hardware and software issues, and assisted with network configurations.",
      delay: 3,
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
