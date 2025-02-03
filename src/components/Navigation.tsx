import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Navigation = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      description: "Current page URL copied to clipboard!",
    });
    
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <nav className="bg-background/40 backdrop-blur-lg border border-primary/10 rounded-full px-6">
        <div className="h-14 flex items-center gap-16">
          <div className="flex items-center gap-2">
            {isActive('/') && <span className="text-[#FEC6A1]">•</span>}
            <Link to="/" className="text-sm font-medium hover:text-[#FEC6A1] transition-colors">
              Tanawitch
            </Link>
          </div>
          
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              {isActive('/works') && <span className="text-[#FEC6A1]">•</span>}
              <Link to="/works" className="nav-link">
                Works
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {isActive('/myself') && <span className="text-[#FEC6A1]">•</span>}
              <Link to="/myself" className="nav-link">
                Myself
              </Link>
            </div>
            <div>
              <button 
                onClick={handleCopy} 
                className="text-sm hover:text-[#FEC6A1] transition-colors"
              >
                {isCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;