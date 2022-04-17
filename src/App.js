import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import InteriorSection from "./components/InteriorSection";
import ModernDesign from "./components/ModernDesignSection";
import Footer from "./components/Footer";
import NewHouse from "./components/NewHouse";
import {
  InfoDataThree,
  InfoDataTwo,
  InfoDataFour,
  InfoDataFive,
} from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <NewHouse {...InfoDataThree} />
      <InteriorSection {...InfoDataFour} />
      <ModernDesign {...InfoDataTwo} />
      <Footer {...InfoDataFive} />
    </>
  );
}

export default App;
