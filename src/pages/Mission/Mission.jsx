import React, { useState, useCallback, useEffect, memo } from "react";
import Nav from "../../Components/Nav";
import LeftSide from "../../Components/LeftSide";
import { useNavigate } from "react-router-dom";
import { useCVData } from "../../Context/CVDataContext";
import Select from "react-select";

// Constants
const ERROR_MESSAGES = {
  CONTRACT_TYPE: "Veuillez sélectionner un type de contrat.",
  EXPERIENCE: "Veuillez remplir le champ Expérience.",
  PRETENTION_SALARIALE: "Veuillez sélectionner une prétention salariale.",
  TJM: "Veuillez remplir le champ TJM mission.",
  CHECKBOX: "Veuillez sélectionner au moins une option.",
  MOBILITY: "Veuillez ajouter au moins une option de mobilité.",
};

const CONTRACT_TYPES = [
  { value: "CDI", label: "CDI" },
  { value: "FreeLance", label: "Freelance" },
];

const EXPERIENCE_OPTIONS = [
  { value: "2-3 Exp", label: "2-3 Ans D'expérience" },
  { value: "3-5 Exp", label: "3-5 Ans D'expérience" },
  { value: "6-8 Exp", label: "6-8 Ans D'expérience" },
  { value: "9+ Exp", label: "9+ Ans D'expérience" },
];

const SALARY_OPTIONS = [
  { value: "25k-50k", label: "€30,000 - €40,000" },
  { value: "50k-65k", label: "€40,000 - €50,000" },
  { value: "65k-80k", label: "€50,000 - €70,000" },
  { value: "80k+", label: "€70,000+" },
];

const FRENCH_CITIES = [
  { value: "Paris", label: "Paris" },
  { value: "Marseille", label: "Marseille" },
  { value: "Lyon", label: "Lyon" },
  // ... (rest of your cities)
];

const Mission = memo(() => {
  const navigate = useNavigate();
  const {
    setMission,
    setExperience,
    setPretentionSalariale,
    setPortage,
    setAutoEntrepreuneur,
    setTjm,
    setMobility,
  } = useCVData();

  // Initial state loaded from localStorage if available
  const [formState, setFormState] = useState(() => {
    const savedState = localStorage.getItem("missionFormState");
    return savedState
      ? JSON.parse(savedState)
      : {
          contractType: "",
          experience: "",
          pretentionSalariale: "",
          tjm: "",
          portage: false,
          autoEntrepreneur: false,
          mobility: [],
        };
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Persist form state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("missionFormState", JSON.stringify(formState));
  }, [formState]);

  const validateField = (name, value) => {
    switch (name) {
      case "contractType": return !value ? ERROR_MESSAGES.CONTRACT_TYPE : "";
      case "experience": return !value ? ERROR_MESSAGES.EXPERIENCE : "";
      case "pretentionSalariale": return formState.contractType === "CDI" && !value ? ERROR_MESSAGES.PRETENTION_SALARIALE : "";
      case "tjm": return formState.contractType === "FreeLance" && !value ? ERROR_MESSAGES.TJM : "";
      case "checkbox": return formState.contractType === "FreeLance" && !formState.portage && !formState.autoEntrepreneur ? ERROR_MESSAGES.CHECKBOX : "";
      case "mobility": return formState.mobility.length === 0 ? ERROR_MESSAGES.MOBILITY : "";
      default: return "";
    }
  };

  const handleBlur = (field) => () => {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formState[field]) }));
  };

  const handleChange = useCallback((field) => (e) => {
    const value = field === "portage" || field === "autoEntrepreneur" ? e.target.checked : e.target.value;
    setFormState((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleMobilityChange = useCallback((selectedOptions) => {
    setFormState((prev) => ({ ...prev, mobility: selectedOptions || [] }));
    setErrors((prev) => ({ ...prev, mobility: selectedOptions?.length ? "" : ERROR_MESSAGES.MOBILITY }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      contractType: validateField("contractType", formState.contractType),
      experience: validateField("experience", formState.experience),
      pretentionSalariale: validateField("pretentionSalariale", formState.pretentionSalariale),
      tjm: validateField("tjm", formState.tjm),
      checkbox: validateField("checkbox", null),
      mobility: validateField("mobility", formState.mobility),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    setLoading(true);
    try {
      setMission(formState.contractType);
      setExperience(formState.experience);
      setPretentionSalariale(formState.pretentionSalariale || "0");
      setTjm(formState.tjm || "0");
      setPortage(formState.portage);
      setAutoEntrepreuneur(formState.autoEntrepreneur);
      const mobilityValues = formState.mobility.map((item) => item.value);
      setMobility(mobilityValues);

      // Clear localStorage after successful submission (optional)
      localStorage.removeItem("missionFormState");

      navigate("/Profile");
    } finally {
      setLoading(false);
    }
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="contractType">Type de Contrat Recherché*</label>
              <select
                id="contractType"
                value={formState.contractType}
                onChange={handleChange("contractType")}
                onBlur={handleBlur("contractType")}
                className="flex w-full sm:w-[641px] p-[15px_20px] h-[55px] rounded-[14px] border border-[#000] bg-white"
                disabled={loading}
              >
                <option value="" disabled hidden>Ex: CDI, Freelance</option>
                {CONTRACT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.contractType && <p className="text-red-500 text-sm">{errors.contractType}</p>}
              {formState.contractType === "FreeLance" && (
                <div className="flex gap-4 mt-2">
                  <div className="flex gap-3 items-center">
                    <input
                      id="portage-checkbox"
                      type="checkbox"
                      checked={formState.portage}
                      onChange={handleChange("portage")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                      disabled={loading}
                    />
                    <label htmlFor="portage-checkbox" className="text-[16px] font-montserrat">Portage</label>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input
                      id="auto-entrepreneur-checkbox"
                      type="checkbox"
                      checked={formState.autoEntrepreneur}
                      onChange={handleChange("autoEntrepreneur")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                      disabled={loading}
                    />
                    <label htmlFor="auto-entrepreneur-checkbox" className="text-[16px] font-montserrat">Auto Entrepreneur</label>
                  </div>
                </div>
              )}
              {errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="mobility">Mobilité*</label>
              <Select
                id="mobility"
                isMulti
                options={FRENCH_CITIES}
                value={formState.mobility}
                onChange={handleMobilityChange}
                onBlur={handleBlur("mobility")}
                className="w-full sm:w-[641px]"
                placeholder="Ex: Pays-de-la-Loire, Bretagne"
                isDisabled={loading}
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
                    backgroundColor: isSelected ? "#e9ecef" : isFocused ? "#f8f9fa" : "white",
                    color: "black",
                  }),
                  multiValue: (base) => ({ ...base, backgroundColor: "#e9ecef", borderRadius: "14px" }),
                  multiValueLabel: (base) => ({ ...base, color: "black" }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "black",
                    ":hover": { backgroundColor: "#ced4da", color: "black" },
                  }),
                  menu: (base) => ({ ...base, borderRadius: "14px", border: "1px solid #000" }),
                }}
              />
              {errors.mobility && <p className="text-red-500 text-sm">{errors.mobility}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="experience">Expérience*</label>
              <select
                id="experience"
                value={formState.experience}
                onChange={handleChange("experience")}
                onBlur={handleBlur("experience")}
                className="flex w-full sm:w-[641px] p-[15px_20px] h-[55px] rounded-[14px] border border-[#000] bg-white"
                disabled={loading}
              >
                <option value="" disabled hidden>Ex: 2 ans Experience</option>
                {EXPERIENCE_OPTIONS.map((exp) => (
                  <option key={exp.value} value={exp.value}>{exp.label}</option>
                ))}
              </select>
              {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
            </div>

            {formState.contractType === "CDI" && (
              <div className="space-y-2">
                <label htmlFor="pretentionSalariale">Prétention Salariale*</label>
                <select
                  id="pretentionSalariale"
                  value={formState.pretentionSalariale}
                  onChange={handleChange("pretentionSalariale")}
                  onBlur={handleBlur("pretentionSalariale")}
                  className="flex w-full sm:w-[641px] p-[15px_20px] h-[55px] rounded-[14px] border border-[#000] bg-white"
                  disabled={loading}
                >
                  <option value="" disabled hidden>Ex: 25k-35k</option>
                  {SALARY_OPTIONS.map((salary) => (
                    <option key={salary.value} value={salary.value}>{salary.label}</option>
                  ))}
                </select>
                {errors.pretentionSalariale && <p className="text-red-500 text-sm">{errors.pretentionSalariale}</p>}
              </div>
            )}

            {formState.contractType === "FreeLance" && (
              <div className="space-y-2">
                <label htmlFor="tjm">TJM mission*</label>
                <input
                  id="tjm"
                  type="tel"
                  value={formState.tjm}
                  onChange={handleChange("tjm")}
                  onBlur={handleBlur("tjm")}
                  className="flex w-full sm:w-[641px] p-[18px_30px] h-[55px] rounded-[14px] border border-[#000] bg-white"
                  placeholder="Ex: 600€/jour"
                  disabled={loading}
                />
                {errors.tjm && <p className="text-red-500 text-sm">{errors.tjm}</p>}
              </div>
            )}

            <button
              type="submit"
              className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi..." : "Continuer"}
              {!loading && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Mission;