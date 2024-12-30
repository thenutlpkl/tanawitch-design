import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <nav className="bg-background/40 backdrop-blur-lg border border-primary/10 rounded-full px-6">
        <div className="h-14 flex items-center gap-16">
          <div className="flex items-center gap-2">
            <span className="text-[#FEC6A1]">•</span>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Tanawitch
            </Link>
          </div>
          
          <div className="flex items-center gap-16">
            <Link to="/works" className="nav-link">
              Works
            </Link>
            <Link to="/myself" className="nav-link">
              Myself
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="bg-[#FEC6A1]/20 text-[#FEC6A1] hover:bg-[#FEC6A1]/30 backdrop-blur-sm border border-[#FEC6A1]/20 rounded-full px-6"
            >
              Resume
            </Button>
            <Copy className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;