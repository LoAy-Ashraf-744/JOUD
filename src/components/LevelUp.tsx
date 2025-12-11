import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LevelUp = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-deep-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-up">
          <div className="inline-flex p-6 rounded-3xl liquid-glass glow-gold mb-8">
            <Rocket className="w-16 h-16 text-gold" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black">
            <span className="text-gradient-gold">{t("levelUp.title")}</span>
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground/80">
            {t("levelUp.subtitle")}
          </p>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("levelUp.description")}
          </p>

          <Button 
            size="lg"
            className="bg-gradient-gold hover:opacity-90 glow-gold text-background font-semibold px-12 py-6 text-xl rounded-2xl mt-8"
            onClick={scrollToWaitlist}
          >
            {t("levelUp.cta")}
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
