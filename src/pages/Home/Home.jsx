import React from "react";
import { assets } from "../../assets/assets";
import Hero from "../../Components/Home/Hero";
import Hero2 from "../../Components/Home/Home2";
import Consultant from "../../Components/Home/Consultant";
import Clients from "../../Components/Home/Clients";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <Hero2 />
      {/* <Hero /> */}
      <Clients />
      <Consultant />
      <Footer />
    </>
  );
};

export default Home;
