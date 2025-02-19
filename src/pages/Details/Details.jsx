import React from "react";
import Nav from "../../Components/Nav";
import LeftSide from "../../Components/LeftSide";
import { assets } from "../../assets/assets";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Verification");
  };
  return (
    <div className="">
      <Nav />
      <div className="sm:flex pb-11">
        <LeftSide
          title="Déposer Votre CV"
          paragraphe=" Partagez vos coordonnées et votre CV pour que nous puissions vous proposer des opportunités adaptées à votre profil."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="Prenom">Email*</label>
              <input
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Fares"
                alt="Prenom"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Téléphone">Téléphone*</label>
              <input
                type="tel"
                className="flex w-full  sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="+33 25 556  8855"
                alt="Téléphone"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="pdfUpload">Upload PDF*</label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="pdfUpload"
                  accept="application/pdf"
                  className="hidden h-[250px]"
                />
                <label
                  htmlFor="pdfUpload"
                  className="flex w-full sm:w-[641px] p-[18px_30px] items-center justify-center gap-2 h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white cursor-pointer"
                >
                  <img
                    src={assets.iconpdf}
                    alt="PDF Icon"
                    className="h-6 w-6"
                  />
                  <span>Upload PDF</span>
                </label>
              </div>
            </div>
            <div class="flex gap-3  mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="text-[16px] font-montserrat font-normal leading-[28px] text-black"
              >
                J’accepte les termes et conditions.Voir les Conditions
                d’utilisation
              </label>
            </div>
            <button
              onClick={handleClick}
              className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
            >
              Envoyer
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

export default Details;
