import React from "react";
import { assets } from "../../assets/assets";
import Hero from "../../Components/Home/Hero";
import Consultant from "../../Components/Home/Consultant";
import Clients from "../../Components/Home/Clients";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Consultant />
      <Footer />
    </>
  );
};

export default Home;
