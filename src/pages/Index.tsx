import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Agents } from "@/components/Agents";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { PrototypeDemo } from "@/components/PrototypeDemo";
import { Pricing } from "@/components/Pricing";
import { WaitlistForm } from "@/components/WaitlistForm";
import { CTA } from "@/components/CTA";
import { LevelUp } from "@/components/LevelUp";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Agents />
      <HowItWorks />
      <Benefits />
      <PrototypeDemo />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;