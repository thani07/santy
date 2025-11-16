import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Programs from "@/components/Programs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
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
