import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
      <div className="container flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient-gold">جود</span>
          <span className="text-xl font-semibold">Joud</span>
        </div>
        
        {/* Centered Pill Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10 shadow-lg">
          <button 
            onClick={() => scrollToSection('agents')} 
            className="px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            {t("nav.agents") || "Agents"}
          </button>
          <button 
            onClick={() => scrollToSection('how-we-work')} 
            className="px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            {t("nav.howItWorks") || "How It Works"}
          </button>
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            {t("nav.whyJoud") || "Why Joud"}
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            {t("nav.demo") || "Demo"}
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => scrollToSection('waitlist')}
            className="hidden md:flex bg-white text-black hover:bg-white/90 rounded-full font-semibold px-6"
          >
            {t("nav.requestAccess") || "Request Access"}
          </Button>
          <div className="flex items-center gap-2 border-l border-white/10 pl-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
