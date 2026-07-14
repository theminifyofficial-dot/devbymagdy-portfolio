import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import BackgroundDecor from "@/components/BackgroundDecor";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="relative overflow-hidden">
          <BackgroundDecor />
          <Services />
          <Portfolio />
          <HowItWorks />
          <Booking />
        </div>
      </main>
      <Footer />
    </>
  );
}
