import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import trainerImage1 from "@/assets/Coach1.jpg";
import trainerImage2 from "@/assets/Coach2.png";
import trainerImage3 from "@/assets/Coach3.jpg";
import aboutImage1 from "@/assets/about_1.JPG";
import aboutImage2 from "@/assets/about_2.JPG";
import aboutImage3 from "@/assets/about_3.HEIC";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, Target, TrendingUp } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  const trainerImages = [trainerImage1, trainerImage2, trainerImage3, aboutImage1, aboutImage2, aboutImage3];

  const pluginTrainer = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full" />
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[pluginTrainer.current]}
              onMouseEnter={pluginTrainer.current.stop}
              onMouseLeave={pluginTrainer.current.reset}
              className="relative rounded-2xl shadow-strong w-full"
            >
              <CarouselContent>
                {trainerImages.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center items-center">
                    <img
                      src={image}
                      alt={`Santy.Fit Personal Trainer ${index + 1}`}
                      className="w-full h-full object-cover aspect-square rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4" />
              <CarouselNext className="absolute right-4" />
            </Carousel>
          </div>

          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Meet Your Transformation Coach
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 4 years of experience transforming lives, I've developed a proven system that delivers
              real, sustainable results. My approach combines cutting-edge training methods with personalized
              nutrition guidance to help you achieve your ultimate fitness goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Certified in multiple disciplines including strength training, functional fitness, and sports
              nutrition, I bring a comprehensive approach to every client's journey. Your success is my mission.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Beyond fitness, I am also an active model, having proudly represented Chennai and Pondicherry in various model walks.
            </p>
            <div className="flex justify-center">
              <Link to="/gallery#coach-gallery">
                <Button variant="hero" size="lg">View Coach Gallery</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
