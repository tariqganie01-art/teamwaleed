import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import About from "@/components/About";
import Education from "@/components/Education";
import MPSSection from "@/components/MPSSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureCards />
      <About />
      <Education />
      <MPSSection />
      <Footer />
    </>
  );
}