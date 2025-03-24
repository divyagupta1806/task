
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyWritesonic from "@/components/WhyWritesonic";
import WriterCard from "@/components/WriterCard";
import MarketingAssistant from "@/components/MarketingAssistant";
import ContentSection from "@/components/ContentSection";
import FeatureGrid from "@/components/FeatureGrid";
import PublishSection from "@/components/PublishSection";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Features />
      <WhyWritesonic />
      <WriterCard />
      <MarketingAssistant />
      <ContentSection />
      <FeatureGrid />
      <PublishSection />
      <Footer />
    </div>
  );
}
