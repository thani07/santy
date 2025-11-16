import trainerImage from "@/assets/trainer.jpg";
import { Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Target, label: "Success Rate", value: "98%" },
    { icon: TrendingUp, label: "Transformations", value: "500+" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={trainerImage}
              alt="S Fitness Elite Personal Trainer"
              className="relative rounded-2xl shadow-strong w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Meet Your <span className="gradient-primary bg-clip-text text-transparent">Elite Trainer</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience transforming lives, I've developed a proven system that delivers
              real, sustainable results. My approach combines cutting-edge training methods with personalized
              nutrition guidance to help you achieve your ultimate fitness goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Certified in multiple disciplines including strength training, functional fitness, and sports
              nutrition, I bring a comprehensive approach to every client's journey. Your success is my mission.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-3">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
