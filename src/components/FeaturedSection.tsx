import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-card border border-border rounded-lg p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] cursor-pointer`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-[1px] h-0 bg-gradient-to-b from-primary to-transparent transition-all duration-500 ${
            isHovered ? "h-20" : "h-0"
          }`}
        />
        <div
          className={`absolute top-0 right-0 h-[1px] w-0 bg-gradient-to-l from-primary to-transparent transition-all duration-500 ${
            isHovered ? "w-20" : "w-0"
          }`}
        />
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  const features = [
    {
      title: "Elite Training",
      description:
        "World-class coaching methodologies designed to unlock your maximum potential and push you beyond your limits.",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Peak Performance",
      description:
        "Data-driven insights and advanced analytics to track your progress and optimize every aspect of your training.",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Mental Strength",
      description:
        "Build unshakeable confidence and mental resilience that separates champions from the rest of the field.",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            TRAIN LIKE A
            <span className="bg-gradient-fire bg-clip-text text-transparent"> CHAMPION</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
