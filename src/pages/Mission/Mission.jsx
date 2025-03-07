import React, { useState, useEffect } from "react"; // Add useEffect
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import LeftSide from "../../Components/LeftSide";
import { useNavigate } from "react-router-dom";
import { useCVData } from "../../Context/CVDataContext";
import Select from "react-select";

// Sample French cities data (expand with full list from INSEE)
const frenchCities = [
  { value: "Paris", label: "Paris" },
  { value: "Marseille", label: "Marseille" },
  { value: "Lyon", label: "Lyon" },
  { value: "Toulouse", label: "Toulouse" },
  { value: "Nice", label: "Nice" },
  { value: "Nantes", label: "Nantes" },
  { value: "Strasbourg", label: "Strasbourg" },
  { value: "Bordeaux", label: "Bordeaux" },
];

const Mission = () => {
  const navigate = useNavigate();
  const {
    setMission,
    setExperience,
    setPretentionSalariale,
    setPortage,
    setAutoEntrepreuneur,
    setTjm,
    mobility,
    setMobility,
  } = useCVData();

  const [contractType, setContractType] = useState("");
  const [experience, setExperienceLocal] = useState("");
  const [pretentionSalariale, setPretentionSalarialeLocal] = useState("");
  const [tjm, setTjmLocal] = useState("");
  const [portage, setPortageLocal] = useState(false);
  const [autoEntrepreneur, setAutoEntrepreneurLocal] = useState(false);
  const [mobilityLocal, setMobilityLocal] = useState([]); // Array for selected cities

  const [contractTypeError, setContractTypeError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [pretentionSalarialeError, setPretentionSalarialeError] = useState("");
  const [tjmError, setTjmError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [mobilityError, setMobilityError] = useState("");

  // UseEffect to log context mobility whenever it changes
  useEffect(() => {
    console.log("Context mobility updated:", mobility);
  }, [mobility]); // Runs whenever mobility from context changes

  const handleClick = (e) => {
    e.preventDefault();
    let valid = true;

    if (!contractType) {
      setContractTypeError("Veuillez sélectionner un type de contrat.");
      valid = false;
    } else {
      setContractTypeError("");
    }

    if (!experience) {
      setExperienceError("Veuillez remplir le champ Expérience.");
      valid = false;
    } else {
      setExperienceError("");
    }

    if (contractType === "CDI") {
      if (!pretentionSalariale) {
        setPretentionSalarialeError(
          "Veuillez sélectionner une prétention salariale."
        );
        valid = false;
      } else {
        setPretentionSalarialeError("");
      }
    }

    if (contractType === "FreeLance") {
      if (!tjm) {
        setTjmError("Veuillez remplir le champ TJM mission.");
        valid = false;
      } else {
        setTjmError("");
      }

      if (!portage && !autoEntrepreneur) {
        setCheckboxError("Veuillez sélectionner au moins une option.");
        valid = false;
      } else {
        setCheckboxError("");
      }
    }

    if (mobilityLocal.length === 0) {
      setMobilityError("Veuillez ajouter au moins une option de mobilité.");
      valid = false;
    } else {
      setMobilityError("");
    }

    if (valid) {
      setMission(contractType);
      setExperience(experience);
      setPretentionSalariale(pretentionSalariale || "0");
      setTjm(tjm || "0");
      setPortage(portage || false);
      setAutoEntrepreuneur(autoEntrepreneur || false);
      const mobilityValues = mobilityLocal.map((item) => item.value);
      setMobility(mobilityValues); // Save only values to context
      console.log("Mobility saved to context:", mobilityValues); // Log the value being saved
      navigate("/Profile");
    }
  };

  // Handle changes in react-select
  const handleMobilityChange = (selectedOptions) => {
    setMobilityLocal(selectedOptions || []);
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
              </select>
              {contractTypeError && (
                <p className="text-red-500 text-sm">{contractTypeError}</p>
              )}
              {contractType === "FreeLance" && (
                <div className="gap-4 flex justify-start">
                  <div className="flex gap-3 items-center">
                    <input
                      id="portage-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                      checked={portage}
                      onChange={(e) => setPortageLocal(e.target.checked)}
                    />
                    <label
                      htmlFor="portage-checkbox"
                      className="text-[16px] font-montserrat font-normal leading-[28px] text-black"
                    >
                      Portage
                    </label>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input
                      id="auto-entrepreneur-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                      checked={autoEntrepreneur}
                      onChange={(e) =>
                        setAutoEntrepreneurLocal(e.target.checked)
                      }
                    />
                    <label
                      htmlFor="auto-entrepreneur-checkbox"
                      className="text-[16px] font-montserrat font-normal leading-[28px] text-black"
                    >
                      Auto Entrepreuneur
                    </label>
                  </div>
                </div>
              )}
              {checkboxError && (
                <p className="text-red-500 text-sm">{checkboxError}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="Mobilité">Mobilité*</label>
              <Select
                id="Mobilité"
                isMulti
                options={frenchCities}
                value={mobilityLocal}
                onChange={handleMobilityChange}
                className="w-full sm:w-[641px]"
                classNamePrefix="select"
                placeholder="Ex: Pays-de-la-Loire, Bretagne, Nouvelle-Aquitaine"
                styles={{
                  control: (base, { isFocused }) => ({
                    ...base,
                    height: "55px",
                    borderRadius: "14px",
                    border: isFocused ? "1px solid #000" : "1px solid #000",
                    boxShadow: "none",
                    backgroundColor: "white",
                  }),
                  option: (base, { isFocused, isSelected }) => ({
                    ...base,
                    backgroundColor: isSelected
                      ? "#e9ecef"
                      : isFocused
                      ? "#f8f9fa"
                      : "white",
                    color: "black",
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: "#e9ecef",
                    borderRadius: "14px",
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: "black",
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "black",
                    ":hover": {
                      backgroundColor: "#ced4da",
                      color: "black",
                    },
                  }),
                  menu: (base) => ({
                    ...base,
                    borderRadius: "14px",
                    border: "1px solid #000",
                  }),
                }}
              />
              {mobilityError && (
                <p className="text-red-500 text-sm">{mobilityError}</p>
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
                onChange={(e) => setExperienceLocal(e.target.value)}
              />
              {experienceError && (
                <p className="text-red-500 text-sm">{experienceError}</p>
              )}
            </div>

            {/* Conditionally render fields based on contractType */}
            {contractType === "CDI" && (
              <div className="space-y-2">
                <label htmlFor="pretentionSalariale">
                  Prétention Salariale*
                </label>
                <select
                  id="pretentionSalariale"
                  onChange={(e) => setPretentionSalarialeLocal(e.target.value)}
                  value={pretentionSalariale}
                  className="flex w-full sm:w-[641px] p-[15px_20px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                >
                  <option value="" disabled hidden>
                    Ex: 25k-35k
                  </option>
                  <option value="25k-50k">€30,000 - €40,000</option>
                  <option value="50k-65k">€40,000 - €50,000</option>
                  <option value="65k-80k">€50,000 - €70,000</option>
                  <option value="65k-80k">€70,000+</option>
                </select>
                {pretentionSalarialeError && (
                  <p className="text-red-500 text-sm">
                    {pretentionSalarialeError}
                  </p>
                )}
              </div>
            )}

            {contractType === "FreeLance" && (
              <div className="space-y-2">
                <label htmlFor="tjm">TJM mission*</label>
                <input
                  id="tjm"
                  type="tel"
                  className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border border-[#000] bg-white"
                  placeholder="Ex: 600€/jour"
                  value={tjm}
                  onChange={(e) => setTjmLocal(e.target.value)}
                />
                {tjmError && <p className="text-red-500 text-sm">{tjmError}</p>}
              </div>
            )}

            <button
              onClick={handleClick}
              type="button"
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
      {/* <Footer /> */}
    </div>
  );
};

export default Mission;