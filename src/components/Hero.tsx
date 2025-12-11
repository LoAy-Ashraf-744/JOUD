import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import beforeAfter from "@/assets/before-after.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAgents = () => {
    document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-start space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              {t("hero.title")}
              <span className="block text-gradient-blue-gold">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-4">
              <div className="flex items-center gap-3">
                 <Button 
                  size="lg" 
                  className="bg-deep-blue hover:bg-deep-blue/90 text-white text-lg px-8 py-6 rounded-md font-semibold w-full sm:w-auto min-w-[200px]"
                  onClick={scrollToWaitlist}
                >
                  {t("hero.cta.primary")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Button>
                {t("hero.badge") && (
                  <div className="text-sm font-medium text-muted-foreground bg-white/5 px-4 py-2 rounded-md border border-white/10">
                     {t("hero.badge")}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="w-full">
              <img src={beforeAfter} alt="Product Demo" className="w-full h-auto rounded-lg shadow-2xl border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
