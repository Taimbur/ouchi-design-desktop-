import React from "react";
import Navbar from "./components/Navbar";
import HighLign from "./components/HighLign";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eye from "./components/Eye";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen bg-zinc-900   ">
      <Navbar />
      <HighLign />
      <Marquee />
      <About />
      <Eye />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
