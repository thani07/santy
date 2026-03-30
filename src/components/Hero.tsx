import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage1 from "@/assets/hero-bg.jpg";
import heroImage2 from "@/assets/hero-bg-1.JPG";
import heroImage3 from "@/assets/hero-bg-2.JPG";

const heroImages = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center justify-center overflow-hidden pb-12 md:pb-0">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="container relative z-10 px-4 pt-20 pb-0 md:py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 animate-fade-in">
            UNLEASH YOUR STRONGEST SELF
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium animate-fade-in [animation-delay:200ms]">
            Forge your ultimate physique with elite coaching and proven results. Your transformation starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToEnquiry}
              className="group"
            >
              Claim Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() =>
                document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
