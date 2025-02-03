import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticleEffect from "./components/ParticleEffect";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Myself from "./pages/Myself";
import Works from "./pages/Works";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
    }
  }
});

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="flex flex-col min-h-screen"> {/* Wrapper for sticky footer */}
        <ParticleEffect />
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <main className="flex-grow"> {/* Main content will expand to push footer down */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/myself" element={<Myself />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </main>
          <Footer /> {/* Footer will always be at the bottom */}
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;