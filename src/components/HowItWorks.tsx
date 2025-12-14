import { UserCheck, Handshake, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserCheck,
      step: "01",
      title: t("howWeWork.step1.title"),
      description: t("howWeWork.step1.description"),
    },
    {
      icon: Handshake,
      step: "02",
      title: t("howWeWork.step2.title"),
      description: t("howWeWork.step2.description"),
    },
    {
      icon: FileText,
      step: "03",
      title: t("howWeWork.step3.title"),
      description: t("howWeWork.step3.description"),
    },
  ];

  return (
    <section className="py-24 bg-white/5 relative" id="how-we-work">
      <div className="container px-4 relative z-10">
        <ScrollAnimation initialClass="opacity-0 -translate-x-10" animationClass="opacity-100 translate-x-0">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("howWeWork.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("howWeWork.subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation initialClass="opacity-0 -translate-x-20" animationClass="opacity-100 translate-x-0" className="delay-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Connection lines (desktop) */}
            <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-border/30 -z-10" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-background border border-border/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm z-10">
                    <Icon className="w-8 h-8 text-deep-blue" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-deep-blue border border-white">
                      {step.step}
                    </div>
                  </div>

                  <div className="bg-background border border-white/5 rounded-xl p-6 w-full shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
