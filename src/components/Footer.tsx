const Footer = () => {
  const references = [
    "Hornbill Unit 8 – Nick Middleton, \"Silk Road\"",
    "UNESCO Silk Road Interactive Map",
    "Khan Academy – Silk Road Article",
    "Carolina Asia Center – Lesson Plans",
    "Wikimedia Commons – Tibet and Silk Road imagery"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">About This Project</h3>
            <p className="font-roboto leading-relaxed opacity-90">
              An educational exploration of the Silk Road's historical significance and its modern echoes in contemporary pilgrimage journeys through Tibet.
            </p>
          </div>

          {/* References */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">References & Bibliography</h3>
            <ul className="space-y-2 font-roboto text-sm opacity-90">
              {references.map((ref, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {ref}
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="md:col-span-2 lg:col-span-1">
            <blockquote className="font-playfair text-lg italic opacity-90 mb-4">
              "From the ancient trade caravans to the modern-day pilgrims, the Silk Road represents humanity's quest for connection."
            </blockquote>
            <div className="flex items-center gap-4">
              <span className="text-2xl">🏔️</span>
              <span className="text-2xl">🐪</span>
              <span className="text-2xl">🎌</span>
              <span className="text-2xl">☸️</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-roboto opacity-75">
            © 2024 Silk Road Project. Exploring the intersection of history, culture, and personal journeys.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;