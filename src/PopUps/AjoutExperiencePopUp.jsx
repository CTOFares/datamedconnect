// src/PopUps/AjoutExperiencePopUp.jsx
import React, { useState, useEffect } from "react";
import { icon } from "../assets/assets";

const AjoutExperiencePopUp = ({
  isOpen,
  onClose,
  profileData,
  setProfileData,
  editExpIndex,
  editExperience,
}) => {
  if (!isOpen) return null;

  const [nomEntreprise, setNomEntreprise] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [context, setContext] = useState("");
  const [realisation, setRealisation] = useState("");

  // Pre-fill form if in edit mode
  useEffect(() => {
    if (editExperience) {
      setNomEntreprise(editExperience.NomEntreprise || "");
      // Split Date into startDate and endDate (assuming format "Month YYYY – Month YYYY")
      const [start, end] = editExperience.Date.split(" – ");
      setStartDate(convertToMonthInput(start) || "");
      setEndDate(convertToMonthInput(end) || "");
      setContext(editExperience.Context || "");
      setRealisation(editExperience.Réalisation || "");
    }
  }, [editExperience]);

  // Helper function to convert "Month YYYY" to "YYYY-MM" for type="month"
  const convertToMonthInput = (dateStr) => {
    if (!dateStr) return "";
    const [monthStr, year] = dateStr.split(" ");
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
    ];
    const monthIndex = months.indexOf(monthStr) + 1;
    return monthIndex ? `${year}-${String(monthIndex).padStart(2, "0")}` : "";
  };

  // Helper function to format month/year (e.g., "2023-07" -> "Juillet 2023")
  const formatMonthYear = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  // Handle Save (Add or Edit) button click
  const handleSave = () => {
    const updatedExperience = {
      NomEntreprise: nomEntreprise || "Not Specified",
      Date: `${formatMonthYear(startDate)} – ${formatMonthYear(endDate)}`.trim(),
      Localisation: "Not Specified", // Default as per your example
      Context: context || "Not Specified",
      Réalisation: realisation || "Not Specified",
    };

    setProfileData((prev) => {
      const updatedExperiences = [...(prev.profile.data[0].ExperienceProfessionnelle || [])];
      if (editExpIndex !== null && editExpIndex !== undefined) {
        // Edit existing experience
        updatedExperiences[editExpIndex] = updatedExperience;
      } else {
        // Add new experience
        updatedExperiences.push(updatedExperience);
      }
      return {
        ...prev,
        profile: {
          ...prev.profile,
          data: [
            {
              ...prev.profile.data[0],
              ExperienceProfessionnelle: updatedExperiences,
            },
          ],
        },
      };
    });

    // Reset form and close popup
    setNomEntreprise("");
    setStartDate("");
    setEndDate("");
    setContext("");
    setRealisation("");
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
            {editExpIndex !== null && editExpIndex !== undefined
              ? "Modifier Une Expérience"
              : "Ajouter Une Expérience"}
          </h2>
          {/* Nom d'entreprise */}
          <div className="space-y-2">
            <label htmlFor="nomEntreprise">Nom D'Entreprise</label>
            <input
              type="text"
              value={nomEntreprise}
              onChange={(e) => setNomEntreprise(e.target.value)}
              className="flex w-full p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="DATAMED Consulting"
              id="nomEntreprise"
            />
          </div>
          {/* Start and End Dates */}
          <div className="flex w-full gap-4 pt-4 justify-between">
            <div className="space-y-2 w-full">
              <label htmlFor="startDate">Date de Début (Mois/Année)</label>
              <div className="relative flex items-center w-full">
                <img
                  src={icon.calendar}
                  alt="Calendar"
                  className="absolute left-3 w-[20px] h-[20px]"
                />
                <input
                  type="month"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="flex w-full p-[18px_30px_18px_50px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                  id="startDate"
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="endDate">Date de Fin (Mois/Année)</label>
              <div className="relative flex items-center w-full">
                <input
                  type="month"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="flex w-full p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                  id="endDate"
                />
              </div>
            </div>
          </div>
          {/* Context */}
          <div className="space-y-2 pt-4">
            <label htmlFor="context">Contexte</label>
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="flex w-full p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Créé des tableaux de bord et des flux de réservation."
              id="context"
            />
          </div>
          {/* Réalisation */}
          <div className="space-y-2 pt-4">
            <label htmlFor="realisation">Réalisation</label>
            <textarea
              value={realisation}
              onChange={(e) => setRealisation(e.target.value)}
              rows="4"
              className="flex w-full p-[18px_30px] rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Ex: Gestion de projet, Développement d'interfaces..."
              id="realisation"
            />
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
            disabled={!nomEntreprise || !startDate || !endDate}
          >
            {editExpIndex !== null && editExpIndex !== undefined ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AjoutExperiencePopUp;