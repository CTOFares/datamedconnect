import React from "react";
import { assets } from "../../assets/assets";

const Testimonial = ({ quote, paragraphe, Name, Position }) => {
  return (
    <div className="flex sm:w-auto space-y-4 w-auto p-[25px_26px] flex-col items-start gap-2.5 rounded-[15px] sm:bg-white mx-4 shadow-[0px_403px_113px_0px_rgba(23,58,109,0),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.1)]">
      <div className="flex p-[14px_15px] justify-center items-center gap-[10px] rounded-[15px] bg-[#FDE1E1]">
        {quote}
      </div>
      <p className="text-[#000] font-montserrat text-[16px] font-normal leading-[120.402%]">
        {paragraphe}
      </p>
      <div className="flex justify-center gap-4">
        <div
          className="w-[56px] h-[56px] rounded-[56px] flex-shrink-0 aspect-[1/1] bg-[lightgray] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${assets.pdf})` }}
        ></div>
        <div className="flex flex-col justify-between">
          <h1 className="text-black font-montserrat text-[20px] font-semibold leading-[120.402%]">
            {Name}
          </h1>
          <p className="text-[#717070] font-montserrat text-[16px] font-normal leading-[120.402%]">
            {Position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
