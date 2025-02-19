import React, { useState } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import LeftSide from "../../Components/LeftSide";

const Mission = () => {
  // State to track the selected contract type
  const [contractType, setContractType] = useState("");

  const handleContractTypeChange = (e) => {
    setContractType(e.target.value);
  };

  return (
    <div>
      <Nav />
      <div className="sm:flex pb-11">
        <LeftSide
          title="Trouvons la mission parfaite pour vous !"
          paragraphe="Indiquez vos préférences en matière de contrat, de mission et de mobilité pour des opportunités sur mesure."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            {/* Contract Type Selection */}
            <div className="space-y-2">
              <label htmlFor="contractType">Type de Contract Recherché*</label>
              <select
                id="contractType"
                onChange={handleContractTypeChange}
                value={contractType}
                className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
              >
                <option value="" disabled hidden>
                  Ex: Télétravail
                </option>
                <option value="CDI">CDI</option>
                <option value="FreeLance">FreeLance</option>
                <option value="Both">CDI &amp; FreeLance</option>
              </select>
            </div>

            {/* Second selection (if needed, e.g., work location) */}
            <div className="space-y-2">
              <label htmlFor="workLocation">
                Type de Contrat (Localisation)*
              </label>
              <select
                id="workLocation"
                className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
              >
                <option value="" disabled hidden>
                  Ex: Télétravail
                </option>
                <option value="SurSite">Sur Site</option>
                <option value="Hybride">Hybride</option>
                <option value="FullRemote">Full Remote</option>
              </select>
            </div>

            {/* Experience Input */}
            <div className="space-y-2">
              <label htmlFor="experience">Experience*</label>
              <input
                id="experience"
                type="tel"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border border-[#000] bg-white"
                placeholder="+33 25 556 8855"
              />
            </div>

            {/* Conditionally render fields based on contractType */}
            {(contractType === "CDI" || contractType === "Both") && (
              <div className="space-y-2">
                <label htmlFor="pretentionSalariale">
                  Pretention Salariale*
                </label>
                <select
                  id="pretentionSalariale"
                  className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                >
                  <option value="" disabled hidden>
                    Ex: 25k-35k
                  </option>
                  <option value="25-50">25k-50k</option>
                  <option value="50-65">50k-65k</option>
                  <option value="65-80">65k-80k</option>
                </select>
              </div>
            )}

            {(contractType === "FreeLance" || contractType === "Both") && (
              <>
                <div className="space-y-2">
                  <label htmlFor="tjmLongue">TJM mission longue*</label>
                  <input
                    id="tjmLongue"
                    type="tel"
                    className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border border-[#000] bg-white"
                    placeholder="+33 25 556 8855"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="tjmCourte">TJM mission Courte*</label>
                  <input
                    id="tjmCourte"
                    type="tel"
                    className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px]  rounded-[14px] border border-[#000] bg-white"
                    placeholder="+33 25 556 8855"
                  />
                </div>
              </>
            )}

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

export default Mission;
