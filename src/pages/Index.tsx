import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HistoricalSection from "@/components/HistoricalSection";
import ModernJourneySection from "@/components/ModernJourneySection";
import ArtifactsSection from "@/components/ArtifactsSection";
import InteractiveMapSection from "@/components/InteractiveMapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-roboto text-lg text-foreground leading-relaxed mb-8">
              The Silk Road was a vast network of trade routes that connected China, Central Asia, Persia, and the Mediterranean for centuries. Merchants transported silk, spices, precious metals, and manuscripts, exchanging not just goods, but ideas, religions, and technology.
            </p>
            <p className="font-roboto text-lg text-foreground leading-relaxed">
              Centuries later, travelers like Nick Middleton retrace the paths of the Silk Road in Tibet, experiencing the landscapes, spiritual rituals, and nomadic life that echo the cultural richness of this ancient network. This website explores both the historical significance of the Silk Road and the modern journey along its paths.
            </p>
          </div>
        </div>
      </section>

      <HistoricalSection />
      <ModernJourneySection />
      <ArtifactsSection />
      <InteractiveMapSection />
      
      {/* Conclusion */}
      <section className="py-20 bg-gradient-sand text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
              Journeys Are About the Soul
            </h2>
            <p className="font-roboto text-lg text-foreground leading-relaxed mb-8">
              From the ancient trade caravans to the modern-day pilgrims, the Silk Road represents humanity's quest for connection — through goods, ideas, or spiritual fulfillment. Traversing deserts, mountains, and valleys, the road continues to link people across time, showing that journeys are as much about the soul and culture as they are about destinations.
            </p>
            <div className="w-32 h-1 bg-gradient-sunset mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;