import React, { useEffect, useState } from "react";
import { carouselclient } from "../../assets/assets";

const Clients = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslateX(-100);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sm:p-[100px]">
      <div className="rounded-[15px] gap-6 sm:flex p-9  border ">
        <div className="w-full sm:w-1/5 border-[rgba(0,0,0,0.10)]">
          <p className="font-montserrat text-[20px] sm:text-[40px] font-semibold sm:leading-[48.161px] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
            NOS <br />
            CLIENTS
          </p>
          <p className="text-[#00B1E0] text-start font-montserrat text-[15px] font-medium leading-[18.06px]">
            Ils nous font confiance
          </p>
        </div>

        <div className=" w-full sm:w-4/5 flex p-6 overflow-hidden">
          <div
            className="flex transition-all duration-[30000ms] gap-9 " // Smooth transition on X-axis
            style={{
              transform: `translateX(${translateX}%)`, // Apply translation based on state
            }}
          >
            <img src={carouselclient.client1} alt="client1" />
            <img src={carouselclient.client2} alt="client2" />
            <img src={carouselclient.client3} alt="client3" />
            <img src={carouselclient.client4} alt="client4" />
            <img src={carouselclient.client1} alt="client1" />
            <img src={carouselclient.client2} alt="client2" />
            <img src={carouselclient.client3} alt="client3" />
            <img src={carouselclient.client4} alt="client4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
