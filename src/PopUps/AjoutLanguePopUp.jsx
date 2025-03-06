// src/PopUps/AjoutLanguePopUp.jsx
import React, { useState, useEffect } from "react";

const AjoutLanguePopUp = ({ isOpen, onClose, profileData, setProfileData, editIndex, editLangue }) => {
  if (!isOpen) return null;

  const [intitule, setIntitule] = useState("");
  const [niveau, setNiveau] = useState("");

  // Proficiency level options
  const niveauOptions = ["Débutant", "Intermédiaire", "Avancé", "Courant"];

  // Top 10 popular languages in the world
  const langueOptions = [
    "Anglais",
    "Chinois Mandarin",
    "Hindi",
    "Espagnol",
    "Français",
    "Arabe",
    "Bengali",
    "Portugais",
    "Russe",
    "Ourdou",
  ];

  // Pre-fill form if in edit mode
  useEffect(() => {
    if (editLangue) {
      setIntitule(editLangue.Intitulé);
      setNiveau(editLangue.Niveau);
    }
  }, [editLangue]);

  // Handle Add or Edit button click
  const handleSave = () => {
    const updatedLangue = {
      Intitulé: intitule || "Not Specified",
      Niveau: niveau || "Not Specified",
    };

    setProfileData((prev) => {
      const updatedLangues = [...(prev.profile.data[0].Langues || [])];
      if (editIndex !== null && editIndex !== undefined) {
        // Edit existing language
        updatedLangues[editIndex] = updatedLangue;
      } else {
        // Add new language
        updatedLangues.push(updatedLangue);
      }
      return {
        ...prev,
        profile: {
          ...prev.profile,
          data: [
            {
              ...prev.profile.data[0],
              Langues: updatedLangues,
            },
          ],
        },
      };
    });

    // Reset form and close popup
    setIntitule("");
    setNiveau("");
    onClose();
  };

  const handleIntituleChange = (e) => {
    setIntitule(e.target.value);
  };

  const handleNiveauChange = (e) => {
    setNiveau(e.target.value);
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
            {editIndex !== null && editIndex !== undefined ? "Modifier Une Langue" : "Ajouter Une Langue"}
          </h2>
          {/* Nom de la langue */}
          <div className="space-y-2">
            <label htmlFor="intitule">Langue</label>
            <select
              value={intitule}
              onChange={handleIntituleChange}
              className="w-full p-3 h-[55px] rounded-[14px] border border-[#000] bg-white text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#173A6D]"
              id="intitule"
            >
              <option value="">Sélectionner une langue</option>
              {langueOptions.map((langue) => (
                <option key={langue} value={langue}>
                  {langue}
                </option>
              ))}
            </select>
          </div>
          {/* Niveau */}
          <div className="space-y-2 pt-4">
            <label htmlFor="niveau">Niveau</label>
            <select
              value={niveau}
              onChange={handleNiveauChange}
              className="w-full p-3 h-[55px] rounded-[14px] border border-[#000] bg-white text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#173A6D]"
              id="niveau"
            >
              <option value="">Sélectionner un niveau</option>
              {niveauOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
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
            onClick={handleSave}
            className="flex w-[189px] text-white p-[13px_30px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
            disabled={!intitule || !niveau}
          >
            {editIndex !== null && editIndex !== undefined ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AjoutLanguePopUp;