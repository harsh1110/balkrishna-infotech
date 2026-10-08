import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Capabilities } from "@/components/sections/Capabilities";
import { Products } from "@/components/sections/Products";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Technology } from "@/components/sections/Technology";
import { WhyBalkrishna } from "@/components/sections/WhyBalkrishna";
import { ProjectBuilder } from "@/components/sections/ProjectBuilder";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="relative">
        <Hero />
        <Marquee />
        <WhoWeAre />
        <Capabilities />
        <Products />
        <Work />
        <Process />
        <Technology />
        <WhyBalkrishna />
        <ProjectBuilder />
        <Testimonials />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
