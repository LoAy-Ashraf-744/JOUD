import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="liquid-glass gap-2 px-3 py-2 text-sm font-medium hover:bg-primary/10"
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? t("language.ar") : t("language.en")}</span>
    </Button>
  );
};
