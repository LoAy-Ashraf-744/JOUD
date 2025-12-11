import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Demo = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-deep-blue/10 via-transparent to-transparent" />
      
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto liquid-glass-card text-center space-y-8 animate-slide-in-up">
          <div className="inline-flex p-4 rounded-2xl liquid-glass glow-blue animate-glow-pulse">
            <Rocket className="w-12 h-12 text-deep-blue" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            {t("demo.title")} <span className="text-gradient-gold">{t("demo.titleHighlight")}</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("demo.subtitle")}
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-blue-gold hover:opacity-90 glow-blue text-lg px-8 py-6 rounded-xl text-background font-semibold"
            onClick={scrollToWaitlist}
          >
            {t("demo.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};