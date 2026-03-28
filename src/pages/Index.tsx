import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AreasWeServe from "@/components/AreasWeServe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PortfolioPreview />
      <FeaturedProjects />
      <ServicesSection />
      <WhyChooseSection />
      <Testimonials />
      <CTASection />
      <AreasWeServe />
      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
