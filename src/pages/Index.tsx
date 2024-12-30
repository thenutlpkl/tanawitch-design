import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Contact />
      </main>
    </div>
  );
};

export default Index;