import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { assets } from "../assets/assets";

const Thankyou = () => {
  const [showCheckGif, setShowCheckGif] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCheckGif(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Nav />
      <div className="p-9 flex flex-col items-center justify-center space-y-9 text-center">
        <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          Un instant s'il vous plaît
        </h1>

        <div className="flex flex-col items-center space-y-3">
          {showCheckGif ? (
            <>  
              <p>Merci pour votre patience</p>
              <img src={assets.checkgif} alt="Checkmark" className="w-20 h-20" />
            </>
          ) : (
            <>
              <p>Merci d'avoir rempli vos informations. Vous serez contacté sous peu.</p>
              <img src={assets.loading} alt="Loading" className="w-20 h-20" />
            </>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Thankyou;
