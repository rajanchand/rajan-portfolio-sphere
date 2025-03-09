
import { SocialLinks } from "@/components/common/SocialLinks";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/70 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">About Me</h3>
            <p className="text-muted-foreground mb-4">
              A technical engineer with a passion for innovation and problem solving.
              Specialized in networking, technical support, and customer service.
            </p>
            <SocialLinks />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Experience
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Education
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  Glasgow, Scotland, United Kingdom
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a href="tel:+441234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +44 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a href="mailto:rajan@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  rajan@example.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Memberships</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                British Computer Society (BCS)
              </li>
              <li className="text-muted-foreground">
                Institute of Electrical and Electronics Engineers (IEEE)
              </li>
              <li className="text-muted-foreground">
                International Association of Engineers (IAENG)
              </li>
              <li className="text-muted-foreground">
                Association for Computing Machinery (ACM)
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Rajan Prakash Chand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
