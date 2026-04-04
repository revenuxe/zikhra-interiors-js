import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeStorySection from "@/components/HomeStorySection";
import PortfolioPreview from "@/components/PortfolioPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectTypeSection from "@/components/ProjectTypeSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AreasWeServe from "@/components/AreasWeServe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ConsultationPopup from "@/components/ConsultationPopup";
import type { MarketId } from "@/lib/market-types";

/** Same sections as the homepage (Portfolio → Areas), for city or area landing pages — no hero, header, or chrome. */
export function HomepageMarketingSections({ market }: { market: MarketId }) {
  return (
    <>
      <PortfolioPreview market={market} />
      <FeaturedProjects market={market} />
      <ProjectTypeSection market={market} />
      <ServicesSection market={market} />
      <WhyChooseSection market={market} />
      <Testimonials market={market} />
      <CTASection market={market} />
      <AreasWeServe market={market} />
    </>
  );
}

type Props = { market: MarketId };

/** Full homepage layout for a market (Hyderabad or Bangalore): hero, all marketing sections, contact, story, footer. */
export default function CityLandingPage({ market }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection market={market} />
      <HomepageMarketingSections market={market} />
      <ContactForm />
      <HomeStorySection market={market} />
      <Footer />
      <BottomNav />
      <ConsultationPopup />
    </div>
  );
}
