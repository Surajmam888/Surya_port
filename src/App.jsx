import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";

import Resume from "./Components/Resume/Resume";
import Myprojects from "./Components/Myprojects/Myprojects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Resume />
      <Myprojects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
