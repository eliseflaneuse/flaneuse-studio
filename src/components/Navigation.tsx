import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.models, href: "#models" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft-md"
          : "bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top row: centered logo + right-side controls */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start py-4 md:py-5">
          {/* left spacer */}
          <div />

          {/* center: logo + desktop nav */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => scrollToSection("#home")}
              className="font-fredoka text-2xl md:text-3xl font-semibold text-primary hover:text-primary/80 transition-colors text-center"
            >
              Flaneuse Studio
            </button>

            {/* desktop nav under the logo */}
            <div className="hidden md:flex items-center gap-6 mt-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* right: theme + language + mobile menu */}
          <div className="flex items-center justify-end gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-primary transition-colors p-1.5"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Language toggle */}
            <div className="flex gap-1 bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors",
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("pt")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors",
                  language === "pt"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                PT
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="md:hidden text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav links (below header) */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/40">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full py-3 text-center text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
