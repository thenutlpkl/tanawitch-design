const projects = [
  {
    name: "My Invoice",
    year: "2024",
    logo: "https://placehold.co/100x100",
    link: "#",
    badge: "NEW"
  },
  {
    name: "Figma",
    year: "2024",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "Croods V2",
    year: "2024",
    logo: "https://placehold.co/100x100",
    link: "#",
    badge: "WIP"
  },
  {
    name: "Project 4",
    year: "2024",
    logo: "https://placehold.co/100x100",
    link: "#",
    badge: "NEW"
  },
  {
    name: "Project 5",
    year: "2024",
    logo: "https://placehold.co/100x100",
    link: "#"
  },
  {
    name: "Ghost Hand Kit",
    year: "2024",
    logo: "https://placehold.co/100x100",
    link: "#",
    badge: "NEW"
  }
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.link}
          className="group relative h-[300px] bg-[#1A1A1A] rounded-3xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hologram-glow backdrop-blur-sm border border-gray-800/30 overflow-hidden"
        >
          {project.badge && (
            <span className="absolute top-4 left-4 px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
              {project.badge}
            </span>
          )}
          
          <img
            src={project.logo}
            alt={project.name}
            className="w-24 h-24 object-contain mb-4"
          />
          
          <div className="text-center">
            <h4 className="text-lg font-medium text-white mb-1">{project.name}</h4>
            <p className="text-sm text-gray-400">{project.year}</p>
          </div>
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;