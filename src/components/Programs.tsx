import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import strengthImage from "@/assets/sample_1.jpg";
import hiitImage from "@/assets/sample_2.jpg";
import transformationImage from "@/assets/sample_3.jpg";
import yogaImage from "@/assets/sample_4.jpg";
import enduranceImage from "@/assets/sample_5.jpg";
import personalTrainingImage from "@/assets/sample_6.jpg";
import rehabImage from "@/assets/sample_7.jpg";
import muscleBuildImage from "@/assets/sample_8.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Personal Training",
      image: personalTrainingImage,
      description: "Tailored one-on-one coaching to achieve your unique fitness goals.",
      features: [
        "Custom workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Dedicated coach support",
      ],
    },
    {
      title: "90 Day Transformation",
      image: transformationImage,
      description: "Our intensive 90-day program for rapid and sustainable results.",
      features: [
        "Comprehensive workout regimen",
        "Personalized meal plans",
        "Weekly progress reviews",
        "Mindset coaching",
      ],
      featured: true,
    },
    {
      title: "Athletic Physique Build",
      image: hiitImage,
      description: "Develop a powerful and aesthetic physique with performance-focused training.",
      features: [
        "Strength & conditioning focus",
        "Agility and speed drills",
        "Targeted muscle development",
        "Advanced periodization",
      ],
    },
    {
      title: "Surgery Rehabilitation",
      image: rehabImage,
      description: "Safe and effective recovery program designed to restore strength and mobility post-surgery.",
      features: [
        "Doctor-approved exercises",
        "Gradual progression",
        "Pain management strategies",
        "Functional movement restoration",
      ],
    },
    {
      title: "Effective Fat Loss",
      image: strengthImage,
      description: "Sculpt your body and boost metabolism with our scientifically proven fat loss strategies.",
      features: [
        "High-intensity workouts",
        "Sustainable calorie deficit plans",
        "Cardio integration",
        "Body composition tracking",
      ],
    },
    {
      title: "Muscle Mass Build",
      image: muscleBuildImage,
      description: "Maximize hypertrophy and gain lean muscle mass with expert-designed programs.",
      features: [
        "Progressive overload training",
        "Advanced lifting techniques",
        "Optimized protein intake",
        "Recovery protocols",
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
            Our Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the program that aligns with your goals, available both in-person and online. All programs include personalized coaching and support, including specialized competition preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-strong h-96">
              {program.featured && (
                <div className="absolute top-0 left-0 z-10 gradient-primary text-center py-2 px-4 rounded-br-lg">
                  <span className="text-primary-foreground font-bold text-sm">MOST POPULAR</span>
                </div>
              )}
              {/* Background image with opacity */}
              <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-300 group-hover:opacity-10" />

              {/* Title overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-heading text-3xl font-bold text-center text-white">{program.title}</h3>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 bg-background/90 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="font-heading text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
