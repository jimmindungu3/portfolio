import React from "react";
import AnimatedBackground from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LetsConnect from "./components/LetsConnect";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background component with negative z-index */}
      <AnimatedBackground />

      {/* Content container with positive z-index */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <MySkills />
        <LetsConnect />
        <Contact />
        <Footer />
        {/* Add your other components here */}
      </div>
    </div>
  );
};

export default App;
