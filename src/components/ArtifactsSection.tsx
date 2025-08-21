import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ArtifactsSection = () => {
  const historicalArtifacts = [
    {
      name: "Ancient Manuscripts",
      description: "Reveal the transmission of knowledge across regions",
      icon: "📜"
    },
    {
      name: "Trade Coins",
      description: "Roman and Persian coins found along trade routes show economic exchange",
      icon: "🪙"
    },
    {
      name: "Silk Fragments",
      description: "Preserved textiles demonstrate the quality and artistry of ancient craftsmen",
      icon: "🧵"
    },
    {
      name: "Ceramic Pottery",
      description: "Pottery styles show influences from China to Central Asia",
      icon: "🏺"
    }
  ];

  const modernCulture = [
    {
      name: "Thangka Paintings",
      description: "Depict Buddhist teachings along the pilgrimage route",
      icon: "🎨"
    },
    {
      name: "Yaks",
      description: "Provide transport and sustenance in harsh terrains",
      icon: "🐂"
    },
    {
      name: "Prayer Wheels",
      description: "Sacred objects used in Tibetan Buddhist practice",
      icon: "☸️"
    },
    {
      name: "Himalayan Wildlife",
      description: "Unique ecosystem adapted to extreme altitudes",
      icon: "🦅"
    }
  ];

  return (
    <section id="artifacts" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Artifacts & Cultural Legacy
          </h2>
          <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bridging millennia through material culture and spiritual traditions
          </p>
        </div>

        <Tabs defaultValue="historical" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="historical" className="font-roboto text-lg py-3">
              Historical Artifacts
            </TabsTrigger>
            <TabsTrigger value="modern" className="font-roboto text-lg py-3">
              Modern Tibetan Culture
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="historical">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {historicalArtifacts.map((artifact, index) => (
                <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2">{artifact.icon}</div>
                    <CardTitle className="font-playfair text-lg text-primary">
                      {artifact.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-roboto text-muted-foreground text-sm">
                      {artifact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="modern">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {modernCulture.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <CardTitle className="font-playfair text-lg text-accent">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-roboto text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Connection Section */}
        <div className="bg-gradient-sunset rounded-xl p-8 text-center text-white">
          <h3 className="font-playfair text-3xl font-semibold mb-6">
            Connection of Past and Present
          </h3>
          <p className="font-roboto text-lg leading-relaxed max-w-4xl mx-auto">
            The Silk Road's historical trade and cultural exchange are mirrored in the modern spiritual and nomadic journeys of Tibet. Pilgrimages like Middleton's echo centuries-old pathways, demonstrating continuity of human movement, exchange, and resilience across the vast landscapes that continue to shape both material culture and spiritual practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtifactsSection;