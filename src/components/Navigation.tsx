import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.models, href: "#models" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="text-xl lg:text-2xl tracking-wide relative group"
          >
            <span className="relative">
              Flaneuse Studio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-xs lg:text-sm uppercase tracking-wider text-muted-foreground hover:text-accent transition-all duration-300 relative group flex items-center gap-1"
              >
                <ArrowRight className="w-0 h-3 opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100" />
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2 py-1 transition-all duration-300 rounded-sm",
                  language === "en"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                EN
              </button>
              <span className="text-border">/</span>
              <button
                onClick={() => setLanguage("pt")}
                className={cn(
                  "px-2 py-1 transition-all duration-300 rounded-sm",
                  language === "pt"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                PT
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:rotate-180"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-1 transition-all duration-300",
                  language === "en" ? "text-accent" : "text-muted-foreground"
                )}
              >
                EN
              </button>
              <span className="text-border">/</span>
              <button
                onClick={() => setLanguage("pt")}
                className={cn(
                  "px-1 transition-all duration-300",
                  language === "pt" ? "text-accent" : "text-muted-foreground"
                )}
              >
                PT
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:rotate-180"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center gap-2 w-full text-left py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
