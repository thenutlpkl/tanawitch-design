import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      description: "Copied to clipboard!",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <nav className="bg-background/40 backdrop-blur-lg border border-primary/10 rounded-full px-6">
        <div className="h-14 flex items-center gap-16">
          <div className="flex items-center gap-2">
            <span className="text-[#FEC6A1]">•</span>
            <Link to="/" className="text-sm font-medium hover:text-[#FEC6A1] transition-colors">
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
              className="bg-[#FEC6A1]/20 text-[#FEC6A1] hover:bg-gradient-to-tr hover:from-[#FF6C5C] hover:to-[#FFF7D3] hover:text-white backdrop-blur-sm border border-[#FEC6A1]/20 rounded-full px-6 transition-all duration-500 ease-in"
            >
              Resume
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Copy 
                    onClick={handleCopy}
                    className="w-5 h-5 text-muted-foreground hover:text-[#FEC6A1] cursor-pointer transition-colors" 
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy my url</p>
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