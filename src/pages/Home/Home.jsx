import React from "react";
import { assets } from "../../assets/assets";
import Hero from "../../Components/Home/Hero";
import Consultant from "../../Components/Home/Consultant";
import Clients from "../../Components/Home/Clients";
import Footer from "../../Components/Footer";
import Testimonials from "../../Components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Consultant />
      <Testimonials />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
