import React, { useRef, useEffect, useState } from 'react';

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const startDrawing = (e: MouseEvent) => {
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
        setIsDrawing(true);
      };

      const draw = (e: MouseEvent) => {
        if (!isDrawing) return;
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
      };

      const stopDrawing = () => {
        context.closePath();
        setIsDrawing(false);
      };

      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseleave', stopDrawing);

      return () => {
        canvas.removeEventListener('mousedown', startDrawing);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseleave', stopDrawing);
      };
    }
  }, [isDrawing]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl mb-8 font-light text-left">
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
          <h3 className="text-xl mb-8 font-light text-left">
            <span className="text-primary">sketch</span> here
          </h3>
          
          <div className="gradient-card rounded-3xl p-8 relative overflow-hidden bg-card/50">
            <canvas ref={canvasRef} className="w-full h-[300px]"></canvas>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={clearCanvas} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Clear Sketch
          </button>
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