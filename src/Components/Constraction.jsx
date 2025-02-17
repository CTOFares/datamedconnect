import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Constraction = () => {
  return (
    <div className="w-full h-screen items-center justify-center">
      <p className="sm:text-center mt-9  text-2xl sm:text-4xl  bg-clip-text text-transparent font-montserrat text-[20px] sm:text-[40px] text-[#060606] font-poppins font-semibold">
        Envoyez-nous un e-mail à :<br />
        <span className="text-transparent bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text font-poppins text-[40px] sm:text-[50px] font-semibold ">
          contact@consultingdatamed.com
        </span>
      </p>
      <DotLottieReact
        src="https://lottie.host/cd7257af-a195-42c2-9975-012fbc12a318/hxcc5TRnbk.lottie"
        loop
        autoplay
      />
      {/* <video
        src={assets.constraction}
        autoPlay
        loop
        muted
        className="w-[1440px] max-h-full"
      /> */}
    </div>
  );
};

export default Constraction;
