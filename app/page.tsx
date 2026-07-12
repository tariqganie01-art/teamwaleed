import About from "@/components/About";
import Education from "@/components/Education";
import FeatureCards from "@/components/FeatureCards";
import FeaturedResources from "@/components/FeaturedResources";
import FeaturedVideos from "@/components/FeaturedVideos";
import HealthcareCollaboration from "@/components/HealthcareCollaboration";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import LatestNews from "@/components/LatestNews";
import Mission from "@/components/Mission";
import MPSSection from "@/components/MPSSection";
import RareDiseaseKnowledge from "@/components/RareDiseaseKnowledge";
import Timeline from "@/components/Timeline";
import WaleedStory from "@/components/WaleedStory";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Impact />
      <Mission />
      <WaleedStory />
      <MPSSection />
      <RareDiseaseKnowledge />
      <HealthcareCollaboration />
      <Education />
      <FeaturedResources />
      <FeaturedVideos />
      <LatestNews />
      <FeatureCards />
      <Timeline />
      <About />
    </main>
  );
}