
import Navbar from "../Components/Layout/Navbar";
import Hero from "../Components/Sections/Hero";
import Projects from "../Components/Sections/Projects";
import TechStack from "../Components/Sections/TechStack";
import Contact from "../Components/Sections/Contact";
import Footer from "../Components/Layout/Footer";
// import FloatingChatBot from "../Components/Ui/FloatingChatBot";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      {/* <FloatingChatBot /> */}
    </>
  );
};

export default Home;

