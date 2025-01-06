import Navigation from "@/components/Navigation";

const Myself = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* About Section */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-light bg-gradient-to-r from-[#FEC6A1] to-[#93278F] bg-clip-text text-transparent">
              About
            </h2>
            <p className="text-xl text-gray-300">
              Little about me. Also, It's not that hard to find my contact just search realvjy.
            </p>
            <div className="flex justify-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-primary">✦</span>
              <span className="text-primary">•</span>
            </div>
          </div>

          {/* Desk Setup Section */}
          <div className="gradient-card rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/9c1c5c89-dad2-488d-8078-a92f16df341c.png" 
              alt="My desk setup" 
              className="w-full h-auto"
            />
            <div className="text-center p-4">
              <h3 className="text-2xl font-light text-gray-300 uppercase tracking-wider">
                What's on my desk
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              As a digital artist, I have been bringing a splash of color to the internet for years through my illustrations and designs. I assist brands in developing their visual identity and design language to make their products more appealing and accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;