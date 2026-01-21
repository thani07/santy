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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const programs = [
  {
    title: "Personal Training",
    images: [trainerImage1, trainerImage2, personalTrainingImage],
  },
  {
    title: "90 Day Transformation",
    images: [
      transformationImage,
      clientBefore1,
      clientAfter1,
      clientBefore2,
      clientAfter2,
    ],
  },
  {
    title: "Athletic Physique Build",
    images: [hiitImage, muscleBuildImage, enduranceImage],
  },
  {
    title: "Surgery Rehabilitation",
    images: [rehabImage, yogaImage, strengthImage],
  },
  {
    title: "Effective Fat Loss",
    images: [strengthImage, clientBefore1, clientAfter1, clientBefore2, clientAfter2],
  },
  {
    title: "Muscle Mass Build",
    images: [muscleBuildImage, strengthImage, personalTrainingImage],
  },
];

const Gallery = () => {
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
