import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="font-heading text-2xl font-bold">
            <span className="text-foreground">IGN</span>
            <span className="text-primary">ITE</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Programs
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Athletes
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Stories
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              About
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="fire" size="sm">
            Join Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
