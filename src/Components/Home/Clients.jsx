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
    <div className="sm:p-[100px] my-9 sm:my-0 px-[10px]">
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
            className="flex transition-all duration-[30000ms] gap-11 " // Smooth transition on X-axis
            style={{
              transform: `translateX(${translateX}%)`, // Apply translation based on state
            }}
          >
            <img src={carouselclient.client1} alt="client1" className="w-[200px] h-[90px] mx-5" />
            <img
              src={carouselclient.client2}
              alt="client2"
              className="w-[200px] h-[90px]"
            />
            <img src={carouselclient.client3} alt="client3"  className="w-[200px] h-[90px]  mx-5"/>
            <img
              src={carouselclient.client4}
              alt="client4"
              className="w-full mx-5"
            />
            {/* <img src={carouselclient.client5} alt="client5" className="w-[200px] h-[90px]" /> */}
            {/* <img src={carouselclient.client6} alt="client6" className="w-[200px] h-[90px]" /> */}
            {/* <img src={carouselclient.client7} alt="client7" /> */}
            <img src={carouselclient.client8} alt="client8" className="w-[200px] h-[90px]  mx-5"/>
            <img
              src={carouselclient.client9}
              alt="client9"
              className="w-[200px] h-[90px]  mx-5"
            />
            <img
              src={carouselclient.client10}
              alt="client10"
              className="w-[200px] h-[90px]  mx-5"
            />
            <img
              src={carouselclient.client11}
              alt="client11"
              className="w-[200px] h-[90px]  mx-5"
            />
            <img
              src={carouselclient.client12}
              alt="client12"
              className="w-[200px] h-[90px]  mx-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
