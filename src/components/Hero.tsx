import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Silk Road: From Ancient Trade to Modern Pilgrimage
        </h1>
        <p className="font-roboto text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Exploring how history, culture, and personal journeys intersect along one of the world's most iconic routes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary/80 hover:bg-primary text-primary-foreground font-roboto text-lg px-8 py-6 shadow-warm backdrop-blur-sm"
            onClick={() => scrollToSection('history')}
          >
            Explore the History
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/60 text-white hover:bg-white/20 font-roboto text-lg px-8 py-6 backdrop-blur-sm"
            onClick={() => scrollToSection('journey')}
          >
            Modern Journey
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;