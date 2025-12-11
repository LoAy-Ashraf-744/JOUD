import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 liquid-glass border-b border-border/20 backdrop-blur-xl">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient-gold">جود</span>
          <span className="text-xl font-semibold">Joud</span>
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
