import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg liquid-glass glow-gold border border-gold/20">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-gold">Joud</span>
              <span className="text-sm font-arabic text-gold/70">جود</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#agents" className="hover:text-gold transition-colors">{t("footer.nav.agents")}</a>

            <a href="#how-we-work" className="hover:text-desert-sand transition-colors">{t("footer.nav.howWeWork")}</a>
            <a href="#pricing" className="hover:text-gold transition-colors">{t("footer.nav.pricing")}</a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Joud. {t("footer.rights")}
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          {t("footer.tagline")}
        </div>
      </div>
    </footer>
  );
};