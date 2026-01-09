import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-athlete.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Athlete in peak action"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-heading text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0 [animation-delay:0.2s]">
            Push Beyond Limits
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 animate-fade-in opacity-0 [animation-delay:0.4s]">
            <span className="text-foreground">UNLEASH</span>
            <br />
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              YOUR FIRE
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 animate-fade-in opacity-0 [animation-delay:0.6s]">
            Where determination meets excellence. Train harder, push further, and 
            become the athlete you were born to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 [animation-delay:0.8s]">
            <Button variant="fire" size="lg">
              Start Training
            </Button>
            <Button variant="outline" size="lg">
              Watch Stories
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
