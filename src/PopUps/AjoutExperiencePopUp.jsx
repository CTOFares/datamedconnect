import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const AjoutExperiencePopUp = ({
  isOpen,
  onClose,
  profileData,
  setProfileData,
  editExpIndex,
  editExperience,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    nomEntreprise: "",
    startDate: "",
    endDate: "",
    context: "",
    realisation: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editExperience) {
      const [start, end] = editExperience.Date.split(" – ");
      setFormData({
        nomEntreprise: editExperience.NomEntreprise || "",
        startDate: convertToMonthInput(start) || "",
        endDate: convertToMonthInput(end) || "",
        context: editExperience.Context || "",
        realisation: editExperience.Réalisation || "",
      });
    }
  }, [editExperience]);

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

  const formatMonthYear = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nomEntreprise) newErrors.nomEntreprise = "Ce champ est requis";
    if (!formData.startDate) newErrors.startDate = "Ce champ est requis";
    if (!formData.endDate) newErrors.endDate = "Ce champ est requis";
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      newErrors.endDate = "La date de fin doit être après la date de début";
    }
    return newErrors;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSave = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedExperience = {
      NomEntreprise: formData.nomEntreprise || "Not Specified",
      Date: `${formatMonthYear(formData.startDate)} – ${formatMonthYear(formData.endDate)}`.trim(),
      Localisation: "Not Specified",
      Context: formData.context || "Not Specified",
      Réalisation: formData.realisation || "Not Specified",
    };

    setProfileData((prev) => {
      const experiences = [...(prev.profile.data[0].ExperienceProfessionnelle || [])];
      if (editExpIndex !== null && editExpIndex !== undefined) {
        experiences[editExpIndex] = updatedExperience;
      } else {
        experiences.push(updatedExperience);
      }
      return {
        ...prev,
        profile: {
          ...prev.profile,
          data: [{ ...prev.profile.data[0], ExperienceProfessionnelle: experiences }],
        },
      };
    });

    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFormData({
      nomEntreprise: "",
      startDate: "",
      endDate: "",
      context: "",
      realisation: "",
    });
    setErrors({});
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-md"
        onClick={handleCancel}
        aria-label="Fermer la fenêtre"
      />

      <div className="relative bg-white border-2 border-gray-200 max-w-[90%] w-[888px] p-6 rounded-[15px] shadow-md z-10">
        <h2 className="text-[#141414] font-montserrat text-[24px] font-bold mb-4">
          {editExpIndex !== null && editExpIndex !== undefined
            ? "Modifier Une Expérience"
            : "Ajouter Une Expérience"}
        </h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="nomEntreprise" className="text-sm text-gray-600 font-medium">
              Nom D'Entreprise
            </label>
            <input
              type="text"
              value={formData.nomEntreprise}
              onChange={handleChange("nomEntreprise")}
              className={`w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] ${
                errors.nomEntreprise ? "border-red-500" : "border-gray-300"
              } bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-gray-400 placeholder:italic`}
              placeholder="DATAMED Consulting"
              id="nomEntreprise"
              aria-label="Nom de l'entreprise"
            />
            {errors.nomEntreprise && (
              <p className="text-red-500 text-sm mt-1">{errors.nomEntreprise}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 w-full">
              <label htmlFor="startDate" className="text-sm text-gray-600 font-medium">
                Date de Début (Mois/Année)
              </label>
              <div className="relative">
                <input
                  type="month"
                  value={formData.startDate}
                  onChange={handleChange("startDate")}
                  className={`w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] ${
                    errors.startDate ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
                  id="startDate"
                  aria-label="Date de début (mois et année)"
                />
                <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <label htmlFor="endDate" className="text-sm text-gray-600 font-medium">
                Date de Fin (Mois/Année)
              </label>
              <div className="relative">
                <input
                  type="month"
                  value={formData.endDate}
                  onChange={handleChange("endDate")}
                  className={`w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] ${
                    errors.endDate ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
                  id="endDate"
                  aria-label="Date de fin (mois et année)"
                />
                <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              {errors.endDate && (
                <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="context" className="text-sm text-gray-600 font-medium">
              Contexte
            </label>
            <input
              type="text"
              value={formData.context}
              onChange={handleChange("context")}
              className="w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] border-gray-300 bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-gray-400 placeholder:italic"
              placeholder="Créé des tableaux de bord et des flux de réservation."
              id="context"
              aria-label="Contexte de l'expérience"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="realisation" className="text-sm text-gray-600 font-medium">
              Réalisation
            </label>
            <textarea
              value={formData.realisation}
              onChange={handleChange("realisation")}
              rows="4"
              className="w-full p-[18px_30px] min-h-[120px] rounded-[10px] border-[1px] border-gray-300 bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-gray-400 placeholder:italic resize-y"
              placeholder="Ex: Gestion de projet, Développement d'interfaces..."
              id="realisation"
              aria-label="Réalisation ou description de l'expérience"
            />
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handleCancel}
            className="w-[189px] bg-gray-200 text-gray-700 rounded-[10px] hover:bg-gray-300 p-[13px_30px] transition-colors duration-200"
          >
            Annuler
          </button>
          <button
            onClick={handleSave}
            className="w-[189px] text-white p-[13px_19px] rounded-[14px] bg-[#173A6D] hover:bg-[#122d55] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!formData.nomEntreprise || !formData.startDate || !formData.endDate}
          >
            {editExpIndex !== null && editExpIndex !== undefined ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AjoutExperiencePopUp;