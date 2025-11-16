import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Marketing Executive",
      content:
        "Working with S Fitness has been life-changing. The personalized approach and constant motivation helped me achieve results I never thought possible. Down 35lbs and feeling incredible!",
      rating: 5,
    },
    {
      name: "James Martinez",
      role: "Business Owner",
      content:
        "Best investment I've ever made in myself. The training programs are challenging but achievable, and the nutritional guidance is spot-on. I've gained muscle, lost fat, and have more energy than ever.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Teacher",
      content:
        "I've tried many trainers before, but S Fitness is different. The attention to detail, the customized workouts, and the genuine care for my progress made all the difference. Highly recommend!",
      rating: 5,
    },
  ];

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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/95 backdrop-blur-sm shadow-strong hover:shadow-glow transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
