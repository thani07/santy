import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import transformation1 from "@/assets/sample_9.jpg";
import transformation2 from "@/assets/sample_10.jpg";
import transformation3 from "@/assets/sample_11.jpg";
import transformation4 from "@/assets/photo-output 3.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Transformations = () => {
  const transformations = [
    {
      image: transformation1,
      results: "Lost 25lbs • Gained Muscle • Increased Energy",
    },
    {
      image: transformation4,
      results: "Lost 30lbs • Built Strength • Transformed Lifestyle",
    },
    {
      image: transformation3,
      results: "Lost 35lbs • Built Lean Muscle • Improved Confidence",
    },
    {
      image: transformation2,
      results: "Lost 20lbs • Toned Body • Increased Strength",
    },
    // Duplicating for smoother loop
    {
      image: transformation1,
      results: "Lost 25lbs • Gained Muscle • Increased Energy",
    },
    {
      image: transformation4,
      results: "Lost 30lbs • Built Strength • Transformed Lifestyle",
    },
    {
      image: transformation3,
      results: "Lost 35lbs • Built Lean Muscle • Improved Confidence",
    },
    {
      image: transformation2,
      results: "Lost 20lbs • Toned Body • Increased Strength",
    },
  ];

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="transformations" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Real Transformations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These results speak for themselves. Every transformation is backed by dedication, expert guidance,
            and proven training systems.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {transformations.map((transformation, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden shadow-strong hover:shadow-glow transition-smooth group h-full flex flex-col">
                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                      <img
                        src={transformation.image}
                        alt={`Transformation ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                    <div className="p-6 bg-card flex-grow flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground text-center font-medium italic">{transformation.results}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-background/20 hover:bg-background/40 text-foreground border-foreground/20" />
          <CarouselNext className="hidden md:flex bg-background/20 hover:bg-background/40 text-foreground border-foreground/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Transformations;
