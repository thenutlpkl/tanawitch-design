const projects = [
  {
    name: "Peak",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "Chef App",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "Health App",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "CP Origin",
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
              className="aspect-square bg-card rounded-3xl p-8 flex items-center justify-center transition-transform hover:-translate-y-1"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="w-full h-auto"
              />
            </a>
          ))}
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