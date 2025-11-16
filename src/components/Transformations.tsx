import { Card } from "@/components/ui/card";
import clientBefore1 from "@/assets/client-before-1.jpg";
import clientAfter1 from "@/assets/client-after-1.jpg";
import clientBefore2 from "@/assets/client-before-2.jpg";
import clientAfter2 from "@/assets/client-after-2.jpg";

const Transformations = () => {
  const transformations = [
    {
      before: clientBefore1,
      after: clientAfter1,
      name: "Mike Johnson",
      duration: "12 Weeks",
      results: "Lost 25lbs • Gained Muscle • Increased Energy",
    },
    {
      before: clientBefore2,
      after: clientAfter2,
      name: "David Chen",
      duration: "16 Weeks",
      results: "Lost 30lbs • Built Strength • Transformed Lifestyle",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Real <span className="gradient-accent bg-clip-text text-transparent">Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These results speak for themselves. Every transformation is backed by dedication, expert guidance,
            and proven training systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {transformations.map((transformation, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-strong hover:shadow-glow transition-smooth group"
            >
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      BEFORE
                    </span>
                  </div>
                  <img
                    src={transformation.before}
                    alt={`${transformation.name} before transformation`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="gradient-accent px-3 py-1 rounded-full text-xs font-bold text-accent-foreground">
                      AFTER
                    </span>
                  </div>
                  <img
                    src={transformation.after}
                    alt={`${transformation.name} after transformation`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-heading text-xl font-bold mb-2">{transformation.name}</h3>
                <p className="text-sm text-primary mb-2 font-semibold">{transformation.duration}</p>
                <p className="text-sm text-muted-foreground">{transformation.results}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
