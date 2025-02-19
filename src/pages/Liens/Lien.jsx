import React from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import LeftSide from "../../Components/LeftSide";

const Lien = () => {
  return (
    <div>
      <Nav />
      <div className="sm:flex pb-11">
        <LeftSide
          title="Montrez votre impact !"
          paragraphe="Partagez vos profils professionnels et portfolios pour maximiser votre visibilité auprès des recruteurs."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="Malt">Malt*</label>
              <input
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Fares"
                alt="Malt"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Site Perso">Site Perso*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Site Perso"
                alt="Site Perso"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="LinkedIn">LinkedIn*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="LinkedIn"
                alt="LinkedIn"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Github">Github*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Github"
                alt="Github"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Behance">Behance*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Behance"
                alt="Behance"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Dribble">Dribble*</label>
              <input
                type="text"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Dribble"
                alt="Dribble"
              />
            </div>
            <button
              type="submit"
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
