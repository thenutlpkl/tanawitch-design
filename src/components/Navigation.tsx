import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-primary">•</span>
          <Link to="/" className="text-sm font-medium">
            Tanawitch
          </Link>
        </div>
        
        <div className="flex items-center space-x-8">
          <Link to="/works" className="nav-link">
            Works
          </Link>
          <Link to="/myself" className="nav-link">
            Myself
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;