
import { SectionHeading } from "@/components/common/SectionHeading";
import { Network, HeadphonesIcon, Container, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

function SkillCard({ title, description, icon: Icon, delay }: SkillCardProps) {
  return (
    <div 
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        `animate-fade-in animate-delay-${delay}`
      )}
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function SkillsSection() {
  const skills = [
    {
      title: "Networking",
      description: "Experienced in designing, implementing, and troubleshooting complex network infrastructures.",
      icon: Network,
      delay: 1,
    },
    {
      title: "Technical Support",
      description: "Providing high-level technical assistance and resolving complex technical issues efficiently.",
      icon: HeadphonesIcon,
      delay: 2,
    },
    {
      title: "DevOps",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure automation.",
      icon: Container,
      delay: 3,
    },
    {
      title: "Customer Support",
      description: "Delivering exceptional customer service with a focus on technical problem-solving and communication.",
      icon: Users,
      delay: 4,
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeading 
          title="My Skills" 
          subtitle="Leveraging technical expertise and industry knowledge to deliver exceptional results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
