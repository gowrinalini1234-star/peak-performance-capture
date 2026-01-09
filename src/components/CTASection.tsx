import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="text-foreground">READY TO</span>
            <br />
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              IGNITE?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Join thousands of athletes who have transformed their potential into 
            extraordinary achievements. Your journey to greatness starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="fire" size="xl" className="animate-pulse-glow">
              Start Your Journey
            </Button>
            <Button variant="ghost" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
