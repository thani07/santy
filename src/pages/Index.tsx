import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Programs from "@/components/Programs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Index = () => {
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
    }
  }, [location]);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Santy.Fit: Personal Trainer in Tambaram & Online | Body Transformation</title>
        <meta name="description" content="Expert personal trainer and fitness coach in Tambaram, Vandalur, and online. Specializing in 90-day body transformations, muscle building, and fat loss. Start your fitness journey with Santy.Fit today." />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Transformations />
      <Testimonials />
      <Programs />
      <EnquiryForm />
      <Footer />
    </main>
  );
};

export default Index;
