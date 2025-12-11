import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pricing = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="max-w-md mx-auto animate-slide-in-up">
          <div className="relative rounded-2xl p-8 liquid-glass-card border-2 border-gold/50 glow-gold overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{t("pricing.plan.name")}</h3>
              <p className="text-muted-foreground mb-6">{t("pricing.plan.description")}</p>
              <div className="flex justify-center items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white">{t("pricing.plan.price")}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{t("pricing.plan.period")}</p>
            </div>

            <ul className="space-y-4 mb-8 border-t border-white/10 pt-8">
              {[
                "pricing.plan.feature1",
                "pricing.plan.feature2",
                "pricing.plan.feature3",
                "pricing.plan.feature4",
                "pricing.plan.feature5"
              ].map((featureKey, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500/20 text-green-500 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium">{t(featureKey)}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full bg-gradient-gold text-background hover:opacity-90 font-bold py-6 text-lg rounded-xl shadow-lg shadow-gold/20"
              onClick={scrollToWaitlist}
            >
              {t("pricing.plan.cta")}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              {t("pricing.plan.guarantee")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};