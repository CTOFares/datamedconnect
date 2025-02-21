import React from "react";
import { assets } from "../../assets/assets";
import Hero from "../../Components/Home/Hero";
import Hero2 from "../../Components/Home/Home2";
import Consultant from "../../Components/Home/Consultant";
import Clients from "../../Components/Home/Clients";
import Footer from "../../Components/Footer";
import Hero3 from "../../Components/Home/Hero3";
import Nav from "../../Components/Nav";
import Testimonials from "../../Components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero3 />
      {/* <Hero2 /> */}
      {/* <Hero /> */}
      <Clients />
      <Consultant />
      <Testimonials/>
      <Footer />
    </>
  );
};

export default Home;
