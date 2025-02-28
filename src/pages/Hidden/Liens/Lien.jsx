import React from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import LeftSide from "../../../Components/LeftSide";

const Lien = () => {
  return (
    <div>
      <Nav />
      <div className="sm:flex pb-11 min-h-screen">
        <LeftSide
          title="Montrez votre impact !"
          paragraphe="Partagez vos profils professionnels et portfolios pour maximiser votre visibilité auprès des recruteurs."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="Malt">Malt*</label>
              <input
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: https://www.malt.fr/profile/username"
                alt="Malt"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="SitePerso">Site Perso*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: https://www.yoursite.com"
                alt="Site Perso"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="LinkedIn">LinkedIn*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: https://www.linkedin.com/in/username"
                alt="LinkedIn"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Github">GitHub*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: https://github.com/username"
                alt="GitHub"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Behance">Behance*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: https://www.behance.net/username"
                alt="Behance"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Dribbble">Dribbble*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Ex: https://dribbble.com/username"
                alt="Dribbble"
              />
            </div>
            <button
              type="submit"
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

export default Lien;
