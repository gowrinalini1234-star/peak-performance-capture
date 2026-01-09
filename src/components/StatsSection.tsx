import { useEffect, useState, useRef } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatCounter = ({ value, suffix, label, delay }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-heading text-5xl md:text-7xl font-bold bg-gradient-fire bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 uppercase tracking-widest text-sm">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 50, suffix: "K+", label: "Athletes Trained", delay: 0 },
    { value: 120, suffix: "+", label: "World Records", delay: 200 },
    { value: 98, suffix: "%", label: "Success Rate", delay: 400 },
    { value: 24, suffix: "/7", label: "Training Access", delay: 600 },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
