import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import strengthImage from "@/assets/strength-program.jpg";
import hiitImage from "@/assets/hiit-program.jpg";
import transformationImage from "@/assets/transformation-program.jpg";
import yogaImage from "@/assets/yoga-program.jpg";
import enduranceImage from "@/assets/endurance-program.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Strength & Power",
      image: strengthImage,
      description: "Build serious muscle mass and explosive strength with progressive overload training.",
      features: [
        "4-5 sessions per week",
        "Compound lift focused",
        "Progressive programming",
        "Nutrition plan included",
      ],
    },
    {
      title: "HIIT Elite",
      image: hiitImage,
      description: "High-intensity interval training designed to burn fat while maintaining muscle mass.",
      features: [
        "3-4 sessions per week",
        "Metabolic conditioning",
        "Cardio & strength fusion",
        "Recovery protocols",
      ],
    },
    {
      title: "Total Transformation",
      image: transformationImage,
      description: "Our most comprehensive program combining strength, conditioning, and lifestyle coaching.",
      features: [
        "5-6 sessions per week",
        "Full nutrition guidance",
        "Weekly check-ins",
        "Lifestyle optimization",
      ],
      featured: true,
    },
    {
      title: "Yoga & Flexibility",
      image: yogaImage,
      description: "Enhance mobility, flexibility, and mind-body connection through guided yoga practice.",
      features: [
        "3-4 sessions per week",
        "All skill levels welcome",
        "Injury prevention focus",
        "Stress reduction techniques",
      ],
    },
    {
      title: "Endurance Training",
      image: enduranceImage,
      description: "Build cardiovascular endurance and stamina for peak athletic performance.",
      features: [
        "4-5 sessions per week",
        "Running & cardio protocols",
        "Performance tracking",
        "Race preparation support",
      ],
    },
  ];

  const scrollToEnquiry = () => {
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Elite Training <span className="gradient-primary bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the program that aligns with your goals. All programs include personalized coaching and support.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {programs.map((program, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className={`overflow-hidden shadow-strong hover:shadow-glow transition-smooth h-full ${
                    program.featured ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {program.featured && (
                    <div className="gradient-primary text-center py-2">
                      <span className="text-primary-foreground font-bold text-sm">MOST POPULAR</span>
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={`${program.title} fitness program`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={program.featured ? 'hero' : 'default'}
                      className="w-full"
                      size="lg"
                      onClick={scrollToEnquiry}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Programs;
