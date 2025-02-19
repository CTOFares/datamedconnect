import React from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import LeftSide from "../../Components/LeftSide";
import { useNavigate } from "react-router-dom";

const Expertise = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Liens");
  };
  return (
    <div>
      <Nav />
      <div className="sm:flex pb-11">
        <LeftSide
          title="Mettez en avant votre savoir-faire !"
          paragraphe="Présentez vos expertises et expériences pour attirer les meilleures opportunités de consulting."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="Expertises">Expertises Principales*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: Data Science, Machine Learning"
                alt="Expertises"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="Profile">Titre de Profil*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: Data Scientist Senior"
                alt="Profile"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="Postes">Postes Recherchés*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: Consultant Data"
                alt="Postes"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="Mobilité">Mobilité Professionnelle*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: Paris, Lyon, Télétravail"
                alt="Mobilité"
              />
            </div>
            <button
              onClick={handleClick}
              className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
            >
              Continuer
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Expertise;
