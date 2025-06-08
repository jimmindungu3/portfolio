import AnimatedBackground from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LetsConnect from "./components/LetsConnect";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <MySkills />
        <LetsConnect />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
