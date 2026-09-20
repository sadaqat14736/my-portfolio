
import Navbar from "../Components/Layout/Navbar";
import Hero from "../Components/Sections/Hero";
import Projects from "../Components/Sections/Projects";
import TechStack from "../Components/Sections/TechStack";
import Contact from "../Components/Sections/Contact";
import Footer from "../Components/Layout/Footer";
import ScrollToTop from "../Components/Ui/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-20" />
        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-20" />
        <TechStack />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-20" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;

