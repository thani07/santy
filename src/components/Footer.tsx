import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
<h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Santy.Fit</h3>
© 2025 Santy.Fit. All rights reserved. Transform your body, transform your life.
            <p className="text-primary-foreground/70">
              Elite personal training and transformation programs. Your journey to peak performance starts here.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#programs" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/#transformations" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Transformations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/#enquiry" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>santy.fit03@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 93614 95774</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tambaram, Chennai</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/santy_fit03?igsh=MW5naHhzemRpbmp3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="https://youtube.com/@santy-fit03?si=bjMsSDoetJTLgq9o"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-primary-foreground" />
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
