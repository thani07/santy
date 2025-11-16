import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 h-16 flex items-center justify-between">
        <div className="font-heading text-2xl font-bold">
          <span className="gradient-primary bg-clip-text text-transparent">S</span> Fitness
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("transformations")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
          >
            Transformations
          </button>
          <button
            onClick={() => scrollToSection("programs")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection("enquiry")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            onClick={() => scrollToSection("enquiry")}
            className="hidden md:flex"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
