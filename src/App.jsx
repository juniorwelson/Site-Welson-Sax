import { useEffect } from "react";
//importanto componentes
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import MusicAsTherapy from "./components/MusicAsTherapy";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Trofeus from "./components/Trofeus";
import VideosComp from "./components/VideosComp";
import Plans from "./components/Plans";
import Testimony from "./components/Testimony";
import About from "./components/About";
import Footerr from "./components/Footerr";

//importando a lib AOS da animação
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <MusicAsTherapy />
        <Services />
        <Gallery />
        <Trofeus />
        <VideosComp />
        <Plans />
        <Testimony />
        <About />
        <Footerr />
      </div>
    </>
  );
}

export default App;
