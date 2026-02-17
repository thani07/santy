import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import strengthImage from "@/assets/sample_1.jpg";
import hiitImage from "@/assets/sample_2.jpg";
import transformationImage from "@/assets/sample_3.jpg";
import yogaImage from "@/assets/sample_4.jpg";
import enduranceImage from "@/assets/sample_5.jpg";
import personalTrainingImage from "@/assets/sample_6.jpg";
import rehabImage from "@/assets/sample_7.jpg";
import muscleBuildImage from "@/assets/sample_8.jpg";
import clientBefore1 from "@/assets/sample_9.jpg";
import clientAfter1 from "@/assets/sample_10.jpg";
import clientBefore2 from "@/assets/sample_11.jpg";
import clientAfter2 from "@/assets/photo-output 3.jpg";
import trainerImage1 from "@/assets/Coach1.jpg";
import trainerImage2 from "@/assets/Coach2.png";
import trainerImage3 from "@/assets/Coach3.jpg";
import trainerImage4 from "@/assets/IMG_4248.JPG";
import trainerImage5 from "@/assets/IMG_4249.JPG";
import trainerImage6 from "@/assets/IMG_4250.JPG";
import trainerImage7 from "@/assets/IMG_4275.JPG";
import trainerImage8 from "@/assets/IMG_4277.JPG";
import trainerImage9 from "@/assets/IMG_4310.JPG";
//import trainerImage10 from "@/assets/IMG_4311.JPG";
import trainerImage11 from "@/assets/IMG_4312.JPG";
import trainerImage12 from "@/assets/IMG_4390.JPG";
import trainerImage13 from "@/assets/IMG_4456.JPG";
import trainerImage14 from "@/assets/IMG_4460.JPG";
import trainerImage15 from "@/assets/IMG_4507.JPG";
import fatlossimage  from "@/assets/sample_12.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const programs = [
  {
    title: "Personal Training",
    images: [clientAfter2,personalTrainingImage],
  },
  {
    title: "90 Day Transformation",
    images: [
      transformationImage,
      clientAfter1,
      clientBefore2
    ],
  },
  {
    title: "Athletic Physique Build",
    images: [ hiitImage, enduranceImage],
  },
  {
    title: "Surgery Rehabilitation",
    images: [rehabImage, yogaImage],
  },
  {
    title: "Effective Fat Loss",
    images: [ strengthImage,fatlossimage ],
  },
  {
    title: "Muscle Mass Build",
    images: [ clientBefore1, muscleBuildImage],
  },
];

const coaches = [
  {
    title: "Santy",
    images: [trainerImage4, trainerImage5, trainerImage6, trainerImage7, trainerImage8, trainerImage9, trainerImage11, trainerImage12, trainerImage13, trainerImage14, trainerImage15],
  },
];

const Gallery = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Santy.Fit Gallery | Client Transformations & Results</title>
        <meta name="description" content="Browse the gallery of incredible client transformations and fitness results achieved with Santy.Fit's personal training programs in Tambaram and online." />
      </Helmet>
      <Header />
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Program Gallery</h1>
          <div className="space-y-12">
            {programs.map((program) => (
              <div key={program.title}>
                <h2 className="text-2xl font-semibold mb-4">{program.title}</h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {program.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                              <img src={image} alt={`${program.title} image ${index + 1}`} className="w-full h-full object-cover"/>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              </div>
            ))}
          </div>
          <h1 id="coach-gallery" className="text-4xl font-bold mb-8 mt-16 text-center">Coach Gallery</h1>
          <div className="space-y-12">
            {coaches.map((program) => (
              <div key={program.title}>
                <h2 className="text-2xl font-semibold mb-4">{program.title}</h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {program.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                              <img src={image} alt={`${program.title} image ${index + 1}`} className="w-full h-full object-cover"/>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;