import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Copy, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Navigation = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const url = "https://tanawitch-design.vercel.app/";
    navigator.clipboard.writeText(url);
    toast({
      description: "Copied to clipboard!",
    });
    
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Show check icon for 2 seconds
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
          </div>

          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="bg-[#FEC6A1]/20 text-[#FEC6A1] hover:bg-gradient-to-tr hover:from-[#FF6C5C] hover:to-[#FFF7D3] hover:text-white backdrop-blur-sm border border-[#FEC6A1]/20 rounded-full px-6 transition-all duration-500 ease-in"
              onClick={() => window.open("https://drive.google.com/file/d/1lZpfp1wJf_XbO1Q0jsu01AHN9FXijJro/view?usp=sharing", "_blank")}
            >
              Resume
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    {isCopied ? (
                      <Check 
                        className="w-5 h-5 text-green-500 animate-ping" 
                      />
                    ) : (
                      <Copy 
                        onClick={handleCopy}
                        className="w-5 h-5 text-muted-foreground hover:text-[#FEC6A1] cursor-pointer transition-colors" 
                      />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isCopied ? "Copied!" : "Copy my url"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;