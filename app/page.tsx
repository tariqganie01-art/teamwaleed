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
import RareDiseaseKnowledge from "@/components/RareDiseaseKnowledge";
import HealthcareCollaboration from "@/components/HealthcareCollaboration";
import FeaturedVideos from "@/components/FeaturedVideos";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Impact />
      <FeatureCards />
      <Mission />
      <WaleedStory />
      <RareDiseaseKnowledge />
      <HealthcareCollaboration />
      <FeaturedResources />
      <About />
      <Education />
      <MPSSection />
      <FeaturedVideos />
      <Footer />
    </>
  );
}