import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Harish",
      role: "Lean to Muscle Mass",
      content:
        "I was very skinny and struggling to gain weight. Santy brother's training and diet plan changed everything. In few months, I've gained solid muscle mass and my strength has increased a lot. Really professional coaching!",
      rating: 5,
    },
    {
      name: "Vijayalakshmi",
      role: "Weightloss Journey",
      content:
        "After trying many things, I finally found the right guidance here. The workouts are perfectly planned for my level. I have lost significant weight and feeling much more energetic and healthy now. Highly recommended for weight loss!",
      rating: 5,
    },
    {
      name: "Gowri",
      role: "Weightloss Journey",
      content:
        "The best transformation journey! The way Santy sir explains each exercise and follows up on nutrition is amazing. I've seen great results in my weight loss journey and my fitness level has improved beyond my expectations.",
      rating: 5,
    },
    {
      name: "Kishore",
      role: "Weightloss",
      content:
        "Joining Santy.Fit was the best decision for my weight loss. The transformation is not just physical but mental too. The motivation he provides keeps me going even on difficult days. Amazing results!",
      rating: 5,
    },
    {
      name: "Sakthi",
      role: "Muscle Building",
      content:
        "If you want to build a strong physique, this is the place. The focus on form and technique is top-notch. I've seen massive improvements in my muscle definition and overall body composition. Pure quality training.",
      rating: 5,
    },
    {
      name: "Vignesh",
      role: "Athletic Physique",
      content:
        "Training with Santy has helped me achieve that sharp athletic look I always wanted. His knowledge of functional training and body mechanics is impressive. Feeling stronger and faster than ever before!",
      rating: 5,
    },
  ];

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 gradient-dark">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what real clients have to say about their transformation journey.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-strong hover:shadow-glow transition-smooth flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-6 italic flex-grow">"{testimonial.content}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-background/20 hover:bg-background/40 text-primary-foreground border-primary-foreground/20" />
          <CarouselNext className="hidden md:flex bg-background/20 hover:bg-background/40 text-primary-foreground border-primary-foreground/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
