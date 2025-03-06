// src/PopUps/AjoutCompetencePopUp.jsx
import React, { useState } from "react";
import Skill from "../Components/Home/Profile/Skill";

const AjoutCompetencePopUp = ({
  isOpen,
  onClose,
  profileData,
  setProfileData,
}) => {
  if (!isOpen) return null;

  const [newSkill, setNewSkill] = useState(""); // Input value
  const [localSkills, setLocalSkills] = useState([]); // Local list of skills in popup

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newSkill.trim()) {
      setLocalSkills([...localSkills, newSkill.trim()]);
      setNewSkill(""); // Clear input
    }
  };

  // Handle Add button click
  const handleAdd = () => {
    if (localSkills.length > 0) {
      // Update profileData directly
      setProfileData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          data: [
            {
              ...prev.profile.data[0],
              Skills: [...prev.profile.data[0].Skills, ...localSkills], // Append new skills
            },
          ],
        },
      }));
    }
    onClose(); // Close popup
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
            Ajouter Une Compétence
          </h2>
          <div className="space-y-4">
            <label htmlFor="skill">Compétence</label>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex w-full sm:w-full p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Ex: Oracle"
            />
          </div>
        </div>
        <div className="mt-4">
          {/* Display local skills */}
          {localSkills.length > 0 ? (
            <div className="flex flex-wrap gap-2 w-full">
              {localSkills.map((skill, index) => (
                <div
                  key={index}
                  className="text-[#141414] font-montserrat text-[16px]"
                >
                  <Skill skill={skill} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Aucune compétence ajoutée pour l'instant
            </p>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onClose}
            className="flex w-[189px]  bg-gray-300 rounded-[14px] hover:bg-gray-400 text-white p-[13px_30px] justify-center items-center gap-[10px]  disabled:opacity-50"
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

export default AjoutCompetencePopUp;
