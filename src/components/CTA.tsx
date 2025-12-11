import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
export const CTA = () => {
  const {
    t
  } = useLanguage();
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-24 relative overflow-hidden">
      
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-desert-sand/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1.5s"
    }} />

      <div className="container px-4 relative z-10">
        
      </div>
    </section>;
};