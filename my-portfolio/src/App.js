
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CodingPlatforms from "./components/CodingPlatforms";
import Certificate from "./components/Certificate";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Pass BOTH darkMode & setDarkMode to Navbar */}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Certificate />
      <CodingPlatforms />


    </>
  );
};

export default App;
