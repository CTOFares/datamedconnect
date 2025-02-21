import React, { useState } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import LeftSide from "../../Components/LeftSide";
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();

  const [contractType, setContractType] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [pretentionSalariale, setPretentionSalariale] = useState("");
  const [tjmLongue, setTjmLongue] = useState("");
  const [tjmCourte, setTjmCourte] = useState("");

  const [contractTypeError, setContractTypeError] = useState("");
  const [workLocationError, setWorkLocationError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [pretentionSalarialeError, setPretentionSalarialeError] = useState("");
  const [tjmLongueError, setTjmLongueError] = useState("");
  const [tjmCourteError, setTjmCourteError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let valid = true;

    if (!contractType) {
      setContractTypeError("Veuillez sélectionner un type de contrat.");
      valid = false;
    } else {
      setContractTypeError("");
    }

    if (!workLocation) {
      setWorkLocationError("Veuillez sélectionner une localisation.");
      valid = false;
    } else {
      setWorkLocationError("");
    }

    if (!experience) {
      setExperienceError("Veuillez remplir le champ Expérience.");
      valid = false;
    } else {
      setExperienceError("");
    }

    if (contractType === "CDI" || contractType === "Both") {
      if (!pretentionSalariale) {
        setPretentionSalarialeError(
          "Veuillez sélectionner une prétention salariale."
        );
        valid = false;
      } else {
        setPretentionSalarialeError("");
      }
    }

    if (contractType === "FreeLance" || contractType === "Both") {
      if (!tjmLongue) {
        setTjmLongueError("Veuillez remplir le champ TJM mission longue.");
        valid = false;
      } else {
        setTjmLongueError("");
      }

      if (!tjmCourte) {
        setTjmCourteError("Veuillez remplir le champ TJM mission courte.");
        valid = false;
      } else {
        setTjmCourteError("");
      }
    }

    if (valid) {
      navigate("/Expertise");
    }
  };

  return (
    <div>
      <Nav />
      <div className="sm:flex pb-11 min-h-screen">
        <LeftSide
          title="Trouvons la mission parfaite pour vous !"
          paragraphe="Indiquez vos préférences en matière de contrat, de mission et de mobilité pour des opportunités sur mesure."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            {/* Contract Type Selection */}
            <div className="space-y-2">
              <label htmlFor="contractType">Type de Contrat Recherché*</label>
              <select
                id="contractType"
                onChange={(e) => setContractType(e.target.value)}
                value={contractType}
                className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
              >
                <option value="" disabled hidden>
                  Ex: CDI, Freelance
                </option>
                <option value="CDI">CDI</option>
                <option value="FreeLance">Freelance</option>
                <option value="Both">CDI & Freelance</option>
              </select>
              {contractTypeError && (
                <p className="text-red-500 text-sm">{contractTypeError}</p>
              )}
            </div>

            {/* Work Location Selection */}
            <div className="space-y-2">
              <label htmlFor="workLocation">
                Type de Contrat (Localisation)*
              </label>
              <select
                id="workLocation"
                onChange={(e) => setWorkLocation(e.target.value)}
                value={workLocation}
                className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
              >
                <option value="" disabled hidden>
                  Ex: Télétravail, Hybride
                </option>
                <option value="SurSite">Sur Site</option>
                <option value="Hybride">Hybride</option>
                <option value="FullRemote">Full Remote</option>
              </select>
              {workLocationError && (
                <p className="text-red-500 text-sm">{workLocationError}</p>
              )}
            </div>

            {/* Experience Input */}
            <div className="space-y-2">
              <label htmlFor="experience">Expérience*</label>
              <input
                id="experience"
                type="tel"
                className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                placeholder="Ex: 2 ans"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              {experienceError && (
                <p className="text-red-500 text-sm">{experienceError}</p>
              )}
            </div>

            {/* Conditionally render fields based on contractType */}
            {(contractType === "CDI" || contractType === "Both") && (
              <div className="space-y-2">
                <label htmlFor="pretentionSalariale">
                  Prétention Salariale*
                </label>
                <select
                  id="pretentionSalariale"
                  onChange={(e) => setPretentionSalariale(e.target.value)}
                  value={pretentionSalariale}
                  className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                >
                  <option value="" disabled hidden>
                    Ex: 25k-35k
                  </option>
                  <option value="25-50">€30,000 - €40,000</option>
                  <option value="50-65">€40,000 - €50,000</option>
                  <option value="65-80">€50,000 - €70,000</option>
                  <option value="65-80">€70,000+</option>
                </select>
                {pretentionSalarialeError && (
                  <p className="text-red-500 text-sm">
                    {pretentionSalarialeError}
                  </p>
                )}
              </div>
            )}

            {(contractType === "FreeLance" || contractType === "Both") && (
              <>
                <div className="space-y-2">
                  <label htmlFor="tjmLongue">TJM mission longue*</label>
                  <input
                    id="tjmLongue"
                    type="tel"
                    className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                    placeholder="Ex: 500€/jour"
                    value={tjmLongue}
                    onChange={(e) => setTjmLongue(e.target.value)}
                  />
                  {tjmLongueError && (
                    <p className="text-red-500 text-sm">{tjmLongueError}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="tjmCourte">TJM mission courte*</label>
                  <input
                    id="tjmCourte"
                    type="tel"
                    className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                    placeholder="Ex: 600€/jour"
                    value={tjmCourte}
                    onChange={(e) => setTjmCourte(e.target.value)}
                  />
                  {tjmCourteError && (
                    <p className="text-red-500 text-sm">{tjmCourteError}</p>
                  )}
                </div>
              </>
            )}

            <button
              onClick={handleClick}
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

export default Mission;
