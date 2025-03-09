
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-subtle" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-primary animate-fade-in">
                Hi, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight animate-fade-in animate-delay-1">
                Rajan Prakash Chand
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-delay-2">
                A technical engineer driven by curiosity and desire to push the boundaries 
                of what is possible with technology.
              </p>
            </div>
            
            <p className="text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-delay-3">
              With over four years of experience working in the IT industry, I have gained 
              a deep understanding of software design and development principles, as well as 
              expertise in various programming languages and frameworks.
            </p>
            
            <p className="text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-delay-4">
              I believe that diversity is essential to creating truly innovative solutions, 
              and I am committed to bringing my unique background and perspective to every project I work on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in animate-delay-5">
              <Button asChild className="w-full sm:w-auto">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href="tel:+441234567890">
                  <Phone className="mr-2 h-4 w-4" /> Call Me
                </a>
              </Button>
            </div>

            <div className="pt-4 animate-fade-in animate-delay-5">
              <SocialLinks className="justify-center lg:justify-start" />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-scale-up">
            <div className="relative">
              {/* Profile Image */}
              <div className="profile-image w-64 h-64 md:w-80 md:h-80 border-4 border-primary shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Rajan Prakash Chand"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Circular Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-2 border-dotted border-primary/20 animate-spin-slow" 
                   style={{ animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
}
