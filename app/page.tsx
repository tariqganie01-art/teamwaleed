import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import FeatureCards from "@/components/FeatureCards";
import Mission from "@/components/Mission";
import WaleedStory from "@/components/WaleedStory";
import FeaturedResources from "@/components/FeaturedResources";
import About from "@/components/About";
import Education from "@/components/Education";
import MPSSection from "@/components/MPSSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Impact />
      <FeatureCards />
      <Mission />
      <WaleedStory />
      <FeaturedResources />
      <About />
      <Education />
      <MPSSection />
      <Footer />
    </>
  );
}