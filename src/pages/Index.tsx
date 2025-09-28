import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import IdeasSection from "@/components/IdeasSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <EventsSection />
        <IdeasSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
