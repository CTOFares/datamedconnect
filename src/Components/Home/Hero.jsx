import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Deposer");
  };

  return (
    <div className="relative rounded-b-[30px] min-h-screen mb-[500px] lg:mb-[500px]  bg-gradient-to-r from-[#173A6D] to-[#2D70D3]">
      <div className="w-full items-center justify-between flex sm:p-9">
        <img
          src={assets.logowhite}
          alt="Logo"
          onClick={handleClick}
          className="cursor-pointer"
        />
        <div className="sm:flex hidden gap-4">
          <a
            href="/"
            className="text-white font-montserrat text-[16px] font-normal leading-[120%]"
          >
            Acceuil
          </a>
          <a
            href="/Apropos"
            className="text-white font-montserrat text-[16px] font-normal leading-[120%]"
          >
            À propos de nous
          </a>
          <a
            href="/ContactezNous"
            className="text-white font-montserrat text-[16px] font-normal leading-[120%]"
          >
            Contactez Nous
          </a>
        </div>
      </div>
      <div className="space-y-4 p-9">
        <div className="w-full sm:flex space-y-4 sm:space-y-0  items-center justify-center gap-4">
          <div className="gap-4 flex items-center justify-center">
            <img src={assets.check} alt="" />
            <p className="text-[#A5A5A5] text-center font-montserrat text-sm font-medium leading-normal">
              200,000 Consultant Confirmé
            </p>
          </div>
          <div className="gap-4 flex items-center justify-center">
            <img src={assets.check} alt="" />
            <p className="text-[#A5A5A5] text-center font-montserrat text-sm font-medium leading-normal">
              50+ Spécialité
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[#FFF] text-center font-montserrat text-lg font-semibold leading-[21.672px]">
            DATAMED CONNECT
          </h1>
        </div>
        <div className="sm:flex   gap-4 w-full items-center justify-center">
          <p className="text-[#FFF]   text-center font-montserrat text-[50px] sm:text-[90px] font-medium sm:leading-[108.362px]">
            Le
          </p>
          <div className="flex gap-5   text-center justify-center items-center">
            <p className="text-[#C8EDC7] font-montserrat text-[50px]  sm:text-[90px] font-bold sm:leading-[108.362px]">
              Tinder
            </p>
            <img src={assets.tinder} className="" alt="" />
          </div>
          <p className="text-[#FFF] font-montserrat text-center text-[50px] sm:text-[90px] font-medium sm:leading-[108.362px]">
            des ESN
          </p>
        </div>
        <div>
          <p className="text-[#FFF] text-center font-montserrat text-[18px] font-normal leading-[21.672px]">
            Votre vitrine pour devenir visible de 2224 ESN et 923 clients
            finaux.
          </p>
        </div>
        <div className="sm:flex   space-y-5 sm:space-y-0 items-center gap-4 justify-center">
          <div className="  flex justify-center items-center">
            <button
              onClick={handleClick}
              className="flex w-auto h-[52px] px-[19px] py-[13px] justify-center items-center gap-[10px] rounded-[14px] bg-[#02B2E1]"
            >
              <p className="text-[#FFF] font-montserrat text-[18px] sm:text-[16px] font-normal leading-[19.264px]">
                Je Crée Mon Profile
              </p>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex w-auto h-[52px] px-[19px] py-[13px] justify-center items-center gap-[10px] rounded-[14px] bg-[#C8EDC7]">
              <p className="flex gap-4 text-[#000] font-montserrat text-[18px] font-normal leading-[19.264px]">
                <img src={assets.tv} alt="" />
                Regarder le Demo
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-500px] lg:bottom-[-450px] left-1/2 transform -translate-x-1/2 sm:p-14 flex gap-5 w-full">
        <div className="hidden sm:block">
          <img src={assets.left} alt="" />
        </div>
        <div className="h-[560px] justify-center items-center flex w-full rounded-lg bg-[#FFF2F2]">
          <img src={assets.lock} alt="" />
        </div>
        <div className="hidden sm:block">
          <img src={assets.right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
