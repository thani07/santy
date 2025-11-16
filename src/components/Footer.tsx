import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">S Fitness</h3>
            <p className="text-primary-foreground/70">
              Elite personal training and transformation programs. Your journey to peak performance starts here.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#transformations" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#enquiry" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@sfitness.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 S Fitness. All rights reserved. Transform your body, transform your life.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
