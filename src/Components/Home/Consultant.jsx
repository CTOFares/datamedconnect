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
      <div className="sm:gap-40 sm:flex space-y-4">
        <h1 className="text-[#060606] font-montserrat text-[30px] font-semibold leading-[120.402%]">
          Ce que
          <p className="bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent font-poppins text-4xl font-semibold leading-[120.402%] uppercase">
            DatamedConnect
          </p>
          vous offre
        </h1>
        <p className="text-black font-montserrat text-[18px] font-normal leading-[120.402%] justify-center">
          Rejoignez DatamedConnect dès aujourd'hui ! Nous mettons en relation
          les meilleurs talents avec des clients idéaux, en trouvant
          l'opportunité parfaite pour vos compétences. Ne laissez plus passer
          les bonnes occasions !
        </p>
      </div>
      <div className="space-y-11 sm:space-y-0 sm:grid-cols-3 sm:gap-4 sm:grid">
        <div className="space-y-4">
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
          <h1 className="text-[#1A1A1A] font-montserrat text-[20px] font-medium tracking-[-0.361px]">
            Déposez votre CV
          </h1>
          <p className="text-[#767676] font-montserrat text-[16px] font-normal leading-[26px] tracking-[-0.289px]">
            Bénéficiez d'une visibilité maximale en déposant votre CV sur notre
            plateforme. Faites-vous repérer par les entreprises à la recherche
            de vos compétences !
          </p>
        </div>
        <div className="space-y-4">
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
            Choisissez votre mission préférée
          </h1>
          <p className="text-[#767676] font-montserrat text-[16px] font-normal leading-[26px] tracking-[-0.289px]">
            Découvrez une sélection de missions adaptées à vos compétences et à
            vos préférences. Trouvez l'opportunité qui vous correspond le mieux
            !
          </p>
        </div>
        <div className="space-y-4">
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
            Personnalisez votre profil
          </h1>
          <p className="text-[#767676] font-montserrat text-[16px] font-normal leading-[26px] tracking-[-0.289px]">
            Mettez en avant vos compétences et expériences en personnalisant
            votre profil. Assurez-vous que votre présentation reflète vos
            meilleures qualités !
          </p>
        </div>
      </div>
      <div className="sm:items-center sm:flex sm:justify-center pt-11">
        <button
          className="flex w-auto text-white p-[13px_19px] gap-[10px] rounded-[14px] bg-[#173A6D]"
          onClick={handleClick}
        >
          Déposer votre CV
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
