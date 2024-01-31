import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./views/AboutSection";
import ContactUsSection from "./views/ContactUsSection";
import HeroSection from "./views/HeroSection";
import HoWeWorkSection from "./views/HoWeWorkSection";
import ServiceSection from "./views/ServiceSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="mb-[400px]">
          <HeroSection />
        </div>
        <div className="mb-[400px]">
          <Brands />
        </div>
        <div className="mb-[700px] md:mb-[200px]">
          <AboutSection />
        </div>
        <div className="mb-[70vh]">
          <ServiceSection />
        </div>
        <div>
          <HoWeWorkSection />
        </div>
        <div>
          <ContactUsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
