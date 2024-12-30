import { Instagram, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <h1 className="text-4xl font-light">Hey,</h1>
          <img
            src="/lovable-uploads/024e8b4a-8995-427f-a0b2-7aff96ab4c2a.png"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-4xl font-light">I'm Tanawitch Saentree,</h1>
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-8">
          <h2 className="text-2xl font-light">Lead Product Designer at</h2>
          <img
            src="https://placehold.co/30x30"
            alt="Company"
            className="w-8 h-8 rounded-full"
          />
          <h2 className="text-2xl font-light">Invitracehealth</h2>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a href="#" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <span className="w-[18px] h-[18px] flex items-center justify-center">M</span>
            <span>Medium</span>
          </a>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I am a lifelong learner and designer who grows my stories through designs and illustrations. With over 15 years of experience in the design industry, I strive to prove that design can solve anything while working towards creating something of my own.
        </p>
      </div>
    </div>
  );
};

export default Hero;