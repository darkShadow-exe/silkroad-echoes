import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import InteractiveMap from "./InteractiveMap";

const InteractiveMapSection = () => {
  const ancientRoutes = [
    { name: "Chang'an to Kashgar", description: "Primary eastern route through the Tarim Basin" },
    { name: "Samarkand to Merv", description: "Central Asian commercial highway" },
    { name: "Ctesiphon to Antioch", description: "Western terminus connecting to Mediterranean" },
  ];

  const modernRoute = [
    { name: "Ravu to Darchen", description: "Middleton's pilgrimage starting point" },
    { name: "Mount Kailash Kora", description: "52km sacred circumambulation path" },
    { name: "Tibetan Plateau", description: "High-altitude nomadic regions" },
  ];

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Interactive Route Comparison
          </h2>
          <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trace the ancient trade networks alongside modern pilgrimage paths
          </p>
        </div>

        {/* Map Visualization */}
        <div className="bg-gradient-ancient rounded-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <h3 className="font-playfair text-3xl font-semibold mb-6">
              Routes Across Time
            </h3>
            <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Explore how ancient trade routes and modern spiritual journeys traverse similar landscapes, connecting civilizations across millennia.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Ancient Routes */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-playfair text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                    Ancient Silk Road Routes
                  </h4>
                  <div className="space-y-3">
                    {ancientRoutes.map((route, index) => (
                      <div key={index} className="border-l-2 border-accent/50 pl-4">
                        <div className="font-roboto font-medium text-white">{route.name}</div>
                        <div className="font-roboto text-sm text-white/70">{route.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Modern Route */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-playfair text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-spiritual rounded-full mr-3"></span>
                    Middleton's Pilgrimage Path
                  </h4>
                  <div className="space-y-3">
                    {modernRoute.map((route, index) => (
                      <div key={index} className="border-l-2 border-spiritual/50 pl-4">
                        <div className="font-roboto font-medium text-white">{route.name}</div>
                        <div className="font-roboto text-sm text-white/70">{route.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="text-center">
          <p className="font-roboto text-muted-foreground mb-6">
            Modern journeys trace echoes of ancient commerce and culture
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-roboto px-8 py-3"
              >
                Explore Full Interactive Map
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl w-[95vw] h-[80vh] p-6">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl">Interactive Route Comparison</DialogTitle>
                <DialogDescription>
                  Explore the ancient Silk Road routes alongside Nick Middleton's modern pilgrimage path
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 mt-4">
                <InteractiveMap />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;