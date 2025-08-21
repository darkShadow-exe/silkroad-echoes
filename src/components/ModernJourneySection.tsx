import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModernJourneySection = () => {
  const journeyStages = [
    {
      title: "Start of the Journey (Ravu)",
      description: "Middleton begins in Ravu, Tibet, with his guide Tsetan and fellow traveler Daniel. The group faces immediate challenges: altitude, cold, and limited supplies. Despite this, the team pushes forward, motivated by the spiritual significance of Mount Kailash.",
      icon: "🏔️"
    },
    {
      title: "High Passes & Nomadic Life",
      description: "Traversing snow-capped passes, Middleton experiences headaches, congestion, and physical exhaustion. Along the way, they encounter Tibetan nomads, tending flocks guarded by mastiffs, living in traditional tents. The nomads' lifestyle reflects centuries of adaptation to these harsh environments.",
      icon: "⛺"
    },
    {
      title: "Arrival in Darchen & Meeting Norbu",
      description: "Darchen is the starting point of the kora around Mount Kailash. Middleton meets Norbu, a fellow pilgrim, and together they prepare for the spiritual circumambulation. The town is desolate, highlighting the isolation and intensity of the pilgrimage.",
      icon: "🙏"
    },
    {
      title: "The Kora",
      description: "The kora is a 52 km circumambulation of Mount Kailash. Middleton reflects on the spiritual and personal significance of the journey, facing physical challenges while observing rituals, prayer flags, and sacred sites. He notes the perseverance of pilgrims and the harmony of human effort with the natural landscape.",
      icon: "🚶‍♂️"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-mountains relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🏔️</div>
        <div className="absolute top-20 right-20 text-4xl">🎌</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">⛺</div>
        <div className="absolute bottom-10 right-10 text-4xl">🙏</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Nick Middleton's Journey
          </h2>
          <p className="font-roboto text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            A modern pilgrimage through the ancient landscapes of the Silk Road in Tibet
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {journeyStages.map((stage, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{stage.icon}</span>
                  <CardTitle className="font-playfair text-xl text-primary">
                    {stage.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-foreground leading-relaxed">
                  {stage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-spiritual/90 rounded-lg p-8 max-w-3xl mx-auto">
            <blockquote className="font-playfair text-xl md:text-2xl italic text-spiritual-foreground mb-4">
              "The kora represents humanity's quest for connection — through goods, ideas, or spiritual fulfillment. Traversing deserts, mountains, and valleys, the road continues to link people across time."
            </blockquote>
            <cite className="font-roboto text-spiritual-foreground/80">
              — Nick Middleton, Silk Road
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernJourneySection;