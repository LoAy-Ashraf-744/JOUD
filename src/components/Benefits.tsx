import { Clock, Shield, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: t("benefits.online.title"),
      description: t("benefits.online.description"),
      color: "gold",
    },
    {
      icon: Shield,
      title: t("benefits.ownership.title"),
      description: t("benefits.ownership.description"),
      color: "deep-blue",
    },
    {
      icon: Wrench,
      title: t("benefits.maintenance.title"),
      description: t("benefits.maintenance.description"),
      color: "desert-sand",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-deep-blue/10 via-transparent to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("benefits.title")} <span className="text-gradient-blue-gold">{t("benefits.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="liquid-glass-card text-center space-y-4 hover:scale-105 transition-transform duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl liquid-glass glow-${benefit.color}`}>
                  <Icon className={`w-8 h-8 text-${benefit.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
