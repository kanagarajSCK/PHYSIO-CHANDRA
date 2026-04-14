import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import HowIHelpSection from "@/components/HowIHelpSection";
import BlogsSection from "@/components/BlogsSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhoIHelpSection />
      <HowIHelpSection />
      <BlogsSection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
