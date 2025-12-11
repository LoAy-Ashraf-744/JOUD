import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolioTameem from "@/assets/portfolio-tameem-1.jpg";
import portfolioSalah from "@/assets/portfolio-salah-1.jpg";
import portfolioMoaz from "@/assets/portfolio-moaz-1.jpg";

export const Agents = () => {
  const { t } = useLanguage();

  const agents = [
    {
      name: t("agents.tameem.name"),
      role: t("agents.tameem.title"),
      description: t("agents.tameem.description"),
      image: portfolioTameem,
      badges: ["Fashion", "Editorial", "Lifestyle"]
    },
    {
      name: t("agents.salah.name"),
      role: t("agents.salah.title"),
      description: t("agents.salah.description"),
      image: portfolioSalah,
      badges: ["Product", "Luxury", "Still Life"]
    },
    {
      name: t("agents.moaz.name"),
      role: t("agents.moaz.title"),
      description: t("agents.moaz.description"),
      image: portfolioMoaz,
      badges: ["E-commerce", "Catalog", "Conversion"]
    }
  ];

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="agents" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("agents.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("agents.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="liquid-glass-card group hover:border-gold/50 transition-all duration-300 relative overflow-hidden text-left"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="p-6 flex items-center gap-4 border-b border-white/5">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                  <p className="text-sm text-purple-400 font-medium">{agent.role}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.badges.map((badge, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/5 rounded text-muted-foreground">
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                  {agent.description}
                </p>

                <div className="mt-auto">
                  <Button
                    className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-semibold rounded-lg"
                    onClick={scrollToWaitlist}
                  >
                    Hire {agent.name.split(' ')[1] || agent.name}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};