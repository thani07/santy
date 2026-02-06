import { Trophy, Users, Star, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "4+ Years Experience",
      description: "Trainer at YMCA Rock Gym & King Gym",
    },
    {
      icon: Trophy,
      title: "Certified Trainer",
      description: "Level 1 Fitness & Nutrition",
    },
    {
      icon: Medal,
      title: "Award Winning Physique",
      description: "Mr. Tamilnadu 1st Place, Mr. Chennai Runner-up, Bronze Medalist Mr. University",
    },
    {
      icon: Users,
      title: "150+ Transformations",
      description: "Clients Achieved Goals",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Awards & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and certifications that demonstrate excellence in fitness training and client transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-glow transition-smooth group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 group-hover:scale-110 transition-smooth">
                <achievement.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
