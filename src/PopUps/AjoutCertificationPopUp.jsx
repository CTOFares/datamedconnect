// src/PopUps/AjoutCertificationPopUp.jsx
import React, { useState } from "react";
import { icon } from "../assets/assets";

const AjoutCertificationPopUp = ({
  isOpen,
  onClose,
  profileData,
  setProfileData,
}) => {
  if (!isOpen) return null;

  const [certif, setCertif] = useState("");
  const [organisme, setOrganisme] = useState("");
  const [anneeCertif, setAnneeCertif] = useState("");

  // Handle Add button click
  const handleAdd = () => {
    const newCertification = {
      Certif: certif || "Not Specified",
      Organisme: organisme || "Not Specified",
      AnnéeCertif: anneeCertif
        ? parseInt(anneeCertif.split("-")[0])
        : "Not Specified", // Extract year from "YYYY-MM"
    };

    // Append to Certifications
    setProfileData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        data: [
          {
            ...prev.profile.data[0],
            Certifications: [
              ...(prev.profile.data[0].Certifications || []),
              newCertification,
            ],
          },
        ],
      },
    }));

    // Reset form and close popup
    setCertif("");
    setOrganisme("");
    setAnneeCertif("");
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
            Ajouter Une Certification
          </h2>
          {/* Nom de la certification */}
          <div className="space-y-2">
            <label htmlFor="certif">Nom de la Certification</label>
            <input
              type="text"
              value={certif}
              onChange={(e) => setCertif(e.target.value)}
              className="flex w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] border-gray-300 bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-gray-400 placeholder:italic"
              placeholder="Ex: Certification Scrum Master"
              id="certif"
            />
          </div>
          {/* Organisme */}
          <div className="space-y-2 pt-4">
            <label htmlFor="organisme">Organisme</label>
            <input
              type="text"
              value={organisme}
              onChange={(e) => setOrganisme(e.target.value)}
              className="flex w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] border-gray-300 bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-gray-400 placeholder:italic"
              placeholder="Ex: Scrum Alliance"
              id="organisme"
            />
          </div>
          {/* Année de certification */}
          <div className="space-y-2 pt-4 w-full">
            <label htmlFor="anneeCertif">Obtenue en</label>
            <div className="relative flex items-center w-full">
              <img
                src={icon.calendar}
                alt="Calendar"
                className="absolute left-3 w-[20px] h-[20px]"
              />
              <input
                type="month"
                value={anneeCertif}
                onChange={(e) => setAnneeCertif(e.target.value)}
                className="flex w-full p-[18px_30px] h-[45px] rounded-[10px] border-[1px] border-gray-300 bg-gray-50 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-gray-400 placeholder:italic"
                id="anneeCertif"
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

export default AjoutCertificationPopUp;
