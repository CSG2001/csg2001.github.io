import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Sponsors from "@/components/sections/Sponsors";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";
import NimblersoftFooter from "@/components/sections/NimblersoftFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Intro />
      <Sponsors />
      <Gallery />
      <Footer />
      <NimblersoftFooter />
    </div>
  );
};

export default Index;
