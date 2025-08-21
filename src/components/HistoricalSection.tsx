import { Card, CardContent } from "@/components/ui/card";

const HistoricalSection = () => {
  const tradeGoods = [
    {
      name: "Silk",
      description: "Highly prized in Rome and Persia",
      icon: "🧵"
    },
    {
      name: "Spices",
      description: "Cardamom, cinnamon, saffron enriched cuisines",
      icon: "🌶️"
    },
    {
      name: "Metals & Coins",
      description: "Roman coins and Chinese bronze artifacts",
      icon: "🪙"
    },
    {
      name: "Religion & Technology",
      description: "Buddhism spread, paper and printing techniques",
      icon: "📜"
    }
  ];

  return (
    <section id="history" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            The Historical Silk Road
          </h2>
          <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A vast network of trade routes connecting civilizations for over a millennium
          </p>
        </div>

        {/* Origins & Trade Routes */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-semibold text-primary">
              Origins & Trade Routes
            </h3>
            <p className="font-roboto text-foreground leading-relaxed">
              The Silk Road originated during the Han Dynasty (206 BCE–220 CE) to facilitate trade between China and the West. Routes passed through Central Asia, Persia, India, and into the Roman Empire. Key trade hubs included Xi'an, Samarkand, Bactria, and Constantinople.
            </p>
            <p className="font-roboto text-foreground leading-relaxed">
              Merchants faced harsh deserts, high mountains, and political borders, but the potential rewards of trade — silk, spices, tea, precious metals — made the journey worthwhile.
            </p>
          </div>
          
          <div className="bg-gradient-ancient rounded-lg p-8 text-primary-foreground">
            <h4 className="font-playfair text-2xl font-semibold mb-4">Key Trade Hubs</h4>
            <ul className="space-y-3 font-roboto">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Xi'an - Eastern terminus in China
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Samarkand - Central Asian crossroads
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Bactria - Cultural melting pot
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Constantinople - Western gateway
              </li>
            </ul>
          </div>
        </div>

        {/* Trade Goods */}
        <div className="mb-12">
          <h3 className="font-playfair text-3xl font-semibold text-primary text-center mb-12">
            Trade Goods & Cultural Exchange
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradeGoods.map((good, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{good.icon}</div>
                  <h4 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {good.name}
                  </h4>
                  <p className="font-roboto text-muted-foreground">
                    {good.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Connection to Modern */}
        <div className="bg-accent/10 rounded-lg p-8 text-center">
          <h4 className="font-playfair text-2xl font-semibold text-accent mb-4">
            Connection to Modern Journey
          </h4>
          <p className="font-roboto text-foreground max-w-2xl mx-auto">
            The towns, valleys, and high passes of the historical Silk Road form the landscapes that modern pilgrims like Nick Middleton experience centuries later in Tibet, creating an unbroken thread between ancient commerce and spiritual quest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoricalSection;