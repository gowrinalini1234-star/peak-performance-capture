import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedSection from "@/components/FeaturedSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
