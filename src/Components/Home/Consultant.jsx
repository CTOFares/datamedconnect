import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Consultant = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Deposer");
  };
  return (
    <div className="p-6 sm:p-[100px] space-y-6">
      <div className="  sm:gap-40 sm:flex space-y-4">
        <h1 className="text-[#060606] font-montserrat text-[30px] font-semibold leading-[120.402%]">
          Ce Que Vous Offre DatamedConnect
        </h1>
        <p className="text-black font-montserrat text-[18px] font-normal leading-[120.402%]  justify-center">
          Rejoignez CVTECH dès aujourd’hui ! Nous mettons en relation les
          meilleurs talents avec les clients idéaux, en trouvant l’opportunité
          parfaite pour vos compétences. Ne laissez plus passer les bonnes
          occasions !
        </p>
      </div>
      <div className="space-y-11 sm:space-y-0 sm:grid-cols-3 sm:gap-4 sm:grid">
        <div className="space-y-4  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="54"
            viewBox="0 0 57 54"
            fill="none"
          >
            <ellipse cx="28.2869" cy="27" rx="28.2869" ry="27" fill="#D9D6FE" />
            <image href={assets.grid} x="10" y="10" height="34" width="34" />
          </svg>
          <h1 className="text-[#1A1A1A]    font-montserrat text-[20px] font-medium tracking-[-0.361px]">
            Etape 1{" "}
          </h1>
          <p className="text-[#767676] font-montserrat   text-[16px] font-normal leading-[26px] tracking-[-0.289px]">
            Gorgeous, high-quality design system for mobile, tablet & desktop
            devices a few reasons digital lending platforms{" "}
          </p>
        </div>
        <div className="space-y-4  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="54"
            viewBox="0 0 57 54"
            fill="none"
          >
            <ellipse cx="28.2869" cy="27" rx="28.2869" ry="27" fill="#D9D6FE" />
            <image href={assets.star} x="10" y="10" height="34" width="34" />

          </svg>
          <h1 className="text-[#1A1A1A] font-montserrat text-[20px] font-medium tracking-[-0.361px]">
            Etape 1{" "}
          </h1>
          <p className="text-[#767676] font-montserrat   text-[16px] font-normal leading-[26px] tracking-[-0.289px]">
            Gorgeous, high-quality design system for mobile, tablet & desktop
            devices a few reasons digital lending platforms{" "}
          </p>
        </div>
        <div className="space-y-4  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="54"
            viewBox="0 0 57 54"
            fill="none"
          >
            <ellipse cx="28.2869" cy="27" rx="28.2869" ry="27" fill="#D9D6FE" />
            <image href={assets.layers} x="10" y="10" height="34" width="34" />
          </svg>
          <h1 className="text-[#1A1A1A] font-montserrat text-[20px] font-medium tracking-[-0.361px]">
            Etape 1{" "}
          </h1>
          <p className="text-[#767676] font-montserrat text-[16px] font-normal leading-[26px] tracking-[-0.289px]">
            Gorgeous, high-quality design system for mobile, tablet & desktop
            devices a few reasons digital lending platforms{" "}
          </p>
        </div>
      </div>
      <div className="  sm:items-center sm:flex sm:justify-center pt-11">
        <button
          className="flex w-auto text-white p-[13px_19px] gap-[10px] rounded-[14px] bg-[#173A6D]"
          onClick={handleClick}
        >
          Deposer Votre CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Consultant;
