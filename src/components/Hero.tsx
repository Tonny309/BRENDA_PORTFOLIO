import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "../assets/hero2.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Brenda Kang'acha
          </h1>
               
          <p className="text-xl md:text-2xl text-white font-bold mb-4 animate-slide-in">
            Graphic Designer & Virtual Assistant
          </p>
          <p className="text-lg text-white font-bold mb-8 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Transforming ideas into stunning visuals while streamlining your business operations. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToPortfolio}
              className="text-lg px-8 py-6"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-card/80 backdrop-blur-sm hover:bg-card"
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;