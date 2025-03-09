
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Calendar } from "lucide-react";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleSchedule = () => {
    setShowCalendly(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch for collaborations, opportunities, or just to say hello"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-slide-in-left">
            <div className="glass rounded-xl p-6 h-full">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">Glasgow, Scotland, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a 
                      href="mailto:rajanchand48@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      rajanchand48@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a 
                      href="tel:+441234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +44 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Schedule a Meeting</h4>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-muted-foreground hover:text-primary"
                      onClick={handleSchedule}
                    >
                      Click here to schedule a meeting
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Connect With Me</h4>
                <SocialLinks showLabels iconSize={20} />
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Location Map</h4>
                <div className="rounded-lg overflow-hidden h-[220px] border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143542.86241914454!2d-4.314422842592945!3d55.85439876629776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2sus!4v1654801220987!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Glasgow"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            {showCalendly ? (
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
                <div className="rounded-lg overflow-hidden h-[500px] border">
                  <iframe
                    src="https://calendly.com/rajanchand48"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Scheduling Page"
                  ></iframe>
                </div>
                <Button variant="outline" className="mt-4" onClick={() => setShowCalendly(false)}>
                  Back to Contact Form
                </Button>
              </div>
            ) : (
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={handleSchedule}
                    >
                      <Calendar className="mr-2 h-4 w-4" /> Schedule Meeting
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
