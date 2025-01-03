const projects = [
  {
    name: "Peak",
    description: "A fitness tracking application",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "Chef App",
    description: "Recipe management platform",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "Health App",
    description: "Wellness monitoring system",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "CP Origin",
    description: "Creative portfolio showcase",
    logo: "https://placehold.co/100x100",
    link: "#"
  }
];

const Works = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl mb-8 font-light">
          <span className="text-primary">building</span> with love
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="group relative aspect-square bg-card/50 rounded-3xl p-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hologram-glow backdrop-blur-sm border border-primary/10 overflow-hidden"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="w-full h-auto opacity-80 group-hover:opacity-30 transition-opacity duration-300"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                <h4 className="relative z-10 text-lg font-medium text-white mb-2">{project.name}</h4>
                <p className="relative z-10 text-sm text-white/80 px-4 text-center">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl mb-8 font-light">
            <span className="text-primary">sketch</span> here
          </h3>
          
          <div className="gradient-card rounded-3xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/887ba66f-f950-4db2-9622-0fe64b37c6fc.png" 
                  alt="Sketch Design" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-medium text-primary">Design Process</h4>
                <p className="text-muted-foreground">
                  Every great project starts with a sketch. This is where ideas come to life, 
                  where creativity meets functionality, and where the foundation of amazing 
                  user experiences is laid.
                </p>
                <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Learn more about my process →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works;