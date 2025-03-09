
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  vertical?: boolean;
}

export function SocialLinks({
  className,
  iconSize = 18,
  showLabels = false,
  vertical = false,
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/rajan-prakash-chand",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/rajanprakashchand",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@rajanprakashchand",
      color: "hover:text-[#FF0000]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rajan@example.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+441234567890",
      color: "hover:text-green-600",
    },
  ];

  return (
    <div
      className={cn(
        vertical ? "flex flex-col space-y-2" : "flex items-center space-x-2",
        className
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "transition-all duration-300 transform hover:-translate-y-1",
            showLabels ? "flex items-center gap-2" : ""
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full", link.color)}
            aria-label={link.name}
          >
            <link.icon size={iconSize} />
            {showLabels && <span>{link.name}</span>}
          </Button>
        </a>
      ))}
    </div>
  );
}
