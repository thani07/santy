import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    setIsOpen(false);
    if (location.pathname === '/gallery') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs bg-background p-6">
        <div className="flex flex-col gap-6">
          <NavLink
            to="/"
            className="font-heading text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Santy.Fit
          </NavLink>
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => handleNavigation("about")}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-smooth text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("transformations")}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-smooth text-left"
            >
              Transformations
            </button>
            <button
              onClick={() => handleNavigation("programs")}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-smooth text-left"
            >
              Programs
            </button>
            <NavLink
              to="/gallery"
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
            <button
              onClick={() => handleNavigation("enquiry")}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-smooth text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
