import Navigation from "@/components/Navigation";
import ProjectGrid from "@/components/ProjectGrid";

const Works = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-8">
            <h1 className="text-7xl font-light bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Works
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              It has been an absolute pleasure to put my heart and soul into these projects. 
              While you're here, browse these projects.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px bg-gray-700 flex-1 max-w-[200px]" />
              <span className="text-gray-400">◆</span>
              <div className="h-px bg-gray-700 flex-1 max-w-[200px]" />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex justify-center gap-2">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              All
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-colors">
              Work
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-colors">
              Projects
            </button>
          </div>

          {/* Project Grid */}
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
};

export default Works;