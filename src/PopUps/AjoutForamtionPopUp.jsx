// src/PopUps/AjoutFormationPopUp.jsx
import React, { useState } from "react";
import { icon } from "../assets/assets";

const AjoutFormationPopUp = ({ isOpen, onClose, profileData, setProfileData }) => {
  if (!isOpen) return null;

  const [diplome, setDiplome] = useState("");
  const [ecole, setEcole] = useState("");
  const [annee, setAnnee] = useState("");

  // Handle Add button click
  const handleAdd = () => {
    const newFormation = {
      Diplome: diplome || "Not Specified",
      Ecole: ecole || "Not Specified",
      Année: annee ? parseInt(annee.split("-")[0]) : "Not Specified", // Extract year from "YYYY-MM"
    };

    // Append to Formation
    setProfileData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        data: [
          {
            ...prev.profile.data[0],
            Formation: [...(prev.profile.data[0].Formation || []), newFormation],
          },
        ],
      },
    }));

    // Reset form and close popup
    setDiplome("");
    setEcole("");
    setAnnee("");
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
            <label htmlFor="diplome">Nom de la Formation</label>
            <input
              type="text"
              value={diplome}
              onChange={(e) => setDiplome(e.target.value)}
              className="flex w-full p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Ex: Master en Télécommunications"
              id="diplome"
            />
          </div>
          {/* Organisme */}
          <div className="space-y-2 pt-4">
            <label htmlFor="ecole">Organisme</label>
            <input
              type="text"
              value={ecole}
              onChange={(e) => setEcole(e.target.value)}
              className="flex w-full p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Ex: École Nationale d’Ingénierie de Sousse"
              id="ecole"
            />
          </div>
          {/* Année */}
          <div className="space-y-2 pt-4 w-full">
            <label htmlFor="annee">Obtenue en</label>
            <div className="relative flex items-center w-full">
              <img
                src={icon.calendar}
                alt="Calendar"
                className="absolute left-3 w-[20px] h-[20px]"
              />
              <input
                type="month"
                value={annee}
                onChange={(e) => setAnnee(e.target.value)}
                className="flex w-full p-[18px_30px_18px_50px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                id="annee"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onClose}
            className="flex w-[189px] bg-gray-300 rounded-[14px] hover:bg-gray-400 text-white p-[13px_30px] justify-center items-center gap-[10px] disabled:opacity-50"
          >
            Annuler
          </button>
          <button
            onClick={handleAdd}
            className="flex w-[189px] text-white p-[13px_30px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AjoutFormationPopUp;