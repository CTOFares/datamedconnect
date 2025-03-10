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
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-[600px] sm:w-[700px] md:w-[888px] p-8 rounded-lg shadow-lg z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter Une Compétence
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div>
          <label
            htmlFor="skill"
            className="block text-sm font-medium text-gray-600"
          >
            Compétence
          </label>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Oracle"
          />
        </div>

        <div className="mt-4">
          {/* Display local skills */}
          {localSkills.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-4">
              {localSkills.map((skill, index) => (
                <div key={index}>
                  <Skill skill={skill} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-2">
              Aucune compétence ajoutée pour l'instant
            </p>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="w-[189px] py-2 px-6 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 focus:outline-none"
          >
            Annuler
          </button>
          <button
            onClick={handleAdd}
            
            className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
            disabled={localSkills.length === 0}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AjoutCompetencePopUp;
