import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const AjoutFormationPopUp = ({
  isOpen,
  onClose,
  profileData,
  setProfileData,
}) => {
  if (!isOpen) return null;

  const [diplome, setDiplome] = useState("");
  const [ecole, setEcole] = useState("");
  const [annee, setAnnee] = useState("");
  const [errors, setErrors] = useState({});

  // Handle Add button click
  const handleAdd = () => {
    const newErrors = {};
    if (!diplome) newErrors.diplome = "Nom de la formation est requis";
    if (!ecole) newErrors.ecole = "Organisme est requis";
    if (!annee) newErrors.annee = "Année est requise";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newFormation = {
      Diplome: diplome || "Not Specified",
      Ecole: ecole || "Not Specified",
      Année: annee ? parseInt(annee.split("-")[0]) : "Not Specified",
    };

    // Append to Formation
    setProfileData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        data: [
          {
            ...prev.profile.data[0],
            Formation: [
              ...(prev.profile.data[0].Formation || []),
              newFormation,
            ],
          },
        ],
      },
    }));

    // Reset form and close popup
    setDiplome("");
    setEcole("");
    setAnnee("");
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white border-2 w-[888px] h-auto p-6 rounded-[15px] shadow-lg z-10">
        <div>
          <h2 className="text-[#141414] font-montserrat text-[20px] font-semibold mb-4">
            Ajouter Une Formation
          </h2>
          {/* Nom de la formation */}
          <div className="space-y-2">
            <label htmlFor="diplome" className="text-[#141414] font-semibold">
              Nom de la Formation
            </label>
            <input
              type="text"
              value={diplome}
              onChange={(e) => setDiplome(e.target.value)}
              className={`flex w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] ${
                errors.diplome ? "border-red-500" : "border-gray-300"
              } bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Ex: Master en Télécommunications"
              id="diplome"
            />
            {errors.diplome && (
              <span className="text-red-500 text-sm">{errors.diplome}</span>
            )}
          </div>
          {/* Organisme */}
          <div className="space-y-2 pt-4">
            <label htmlFor="ecole" className="text-[#141414] font-semibold">
              Organisme
            </label>
            <input
              type="text"
              value={ecole}
              onChange={(e) => setEcole(e.target.value)}
              className={`flex w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] ${
                errors.ecole ? "border-red-500" : "border-gray-300"
              } bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Ex: École Nationale d’Ingénierie de Sousse"
              id="ecole"
            />
            {errors.ecole && (
              <span className="text-red-500 text-sm">{errors.ecole}</span>
            )}
          </div>
          {/* Année */}
          <div className="space-y-2 w-full">
            <label
              htmlFor="startDate"
              className="text-sm text-gray-600 font-medium"
            >
              Obtenue en
            </label>
            <div className="relative flex items-center w-full">
              <input
                type="month"
                value={annee}
                onChange={(e) => setAnnee(e.target.value)}
                className={`flex w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] ${
                  errors.annee ? "border-red-500" : "border-gray-300"
                } bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
                id="startDate"
                aria-label="Date de début (mois et année)"
              />
              <FaRegCalendarAlt className="absolute right-4 text-gray-500 pointer-events-none" />
            </div>
            {errors.annee && (
              <span className="text-red-500 text-sm">{errors.annee}</span>
            )}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={onClose}
              className="flex w-[189px] bg-gray-300 rounded-[14px] hover:bg-gray-400 text-white p-[13px_30px] justify-center items-center gap-[10px] transition"
            >
              Annuler
            </button>
            <button
              onClick={handleAdd}
              className="flex w-[189px] text-white p-[13px_30px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] hover:bg-[#0f2f49] transition"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjoutFormationPopUp;
  