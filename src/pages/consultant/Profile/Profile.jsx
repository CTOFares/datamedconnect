import React, { useState, useEffect, useCallback, memo } from "react";
import axios from "axios";
import Footer from "../../../Components/Footer";
import Skill from "../../../Components/Home/Profile/Skill";
import Experience from "../../../Components/Home/Profile/Experience";
import Formation from "../../../Components/Home/Profile/Formation";
import Certification from "../../../Components/Home/Profile/Certification";
import Langue from "../../../Components/Home/Profile/Langue";
import { assets, icon, links } from "../../../assets/assets";
import { useCVData } from "../../../Context/CVDataContext";
import { useNavigate } from "react-router-dom";
import AjoutCompetencePopUp from "../../../PopUps/AjoutCompetencePopUp";
import AjoutExperiencePopUp from "../../../PopUps/AjoutExperiencePopUp";
import AjoutForamtionPopUp from "../../../PopUps/AjoutForamtionPopUp";
import AjoutCertificationPopUp from "../../../PopUps/AjoutCertificationPopUp";
import AjoutLanguePopUp from "../../../PopUps/AjoutLanguePopUp";
import ProfileSkeleton from "../../../Utils/ProfileSkeleton";
import Nav from "../../../Components/Nav";

// Constants
const NOT_SPECIFIED = "Not Specified";
const DEFAULT_CONSULTANT_ID = "67c842a4d03f8e2864cab3e5";

// Axios instance with base config
const api = axios.create({
  baseURL: "https://datamedconnectbackend.onrender.com",
  timeout: 10000, // 10s timeout
});

// Interceptor for retry logic (optional)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (error.code === "ECONNABORTED" && !config.retry) {
      config.retry = true;
      console.log("Retrying request...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s delay
      return api(config);
    }
    return Promise.reject(error);
  }
);

// Custom hook for profile data with Axios
const useProfileData = (id) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfileData = useCallback(async (consultantId) => {
    try {
      setLoading(true);
      const response = await api.get(`/api/consultants/${consultantId}`);
      const data = response.data;
      setProfileData(data);
      localStorage.setItem("profileData", JSON.stringify(data));
      localStorage.setItem("consultantId", consultantId);
      setError(null);
    } catch (err) {
      const cachedData = localStorage.getItem("profileData");
      if (!navigator.onLine && cachedData) {
        setProfileData(JSON.parse(cachedData));
        setError("Offline mode: Using cached data.");
      } else {
        setError(err.response?.data?.message || "Failed to load profile data.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const saveProfileData = useCallback(async (consultantId, data) => {
    try {
      setLoading(true);
      const response = await api.put(`/api/consultants/${consultantId}`, data);
      setProfileData(response.data);
      localStorage.setItem("profileData", JSON.stringify(response.data));
      return true; // Success
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save profile data.");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const effectiveId = id || localStorage.getItem("consultantId") || DEFAULT_CONSULTANT_ID;
    fetchProfileData(effectiveId);
  }, [id, fetchProfileData]);

  return { profileData, setProfileData, loading, error, fetchProfileData, saveProfileData };
};

const Profile = memo(() => {
  const navigate = useNavigate();
  const { Tjm, mobility, PretentionSalariale, Mission, id } = useCVData();

  const { profileData, setProfileData, loading, error, saveProfileData } = useProfileData(id);
  const [popupStates, setPopupStates] = useState({
    skill: false,
    experience: false,
    formation: false,
    certification: false,
    langue: false,
  });
  const [editState, setEditState] = useState({
    langueIndex: null,
    langue: null,
    expIndex: null,
    experience: null,
  });

  const togglePopup = useCallback((key, value) => {
    setPopupStates((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleDeleteLanguage = useCallback((index) => {
    setProfileData((prev) => {
      const updated = {
        ...prev,
        profile: {
          ...prev.profile,
          data: [{
            ...prev.profile.data[0],
            Langues: prev.profile.data[0].Langues.filter((_, i) => i !== index),
          }],
        },
      };
      localStorage.setItem("profileData", JSON.stringify(updated));
      return updated;
    });
  }, [setProfileData]);

  const handleEditLanguage = useCallback((index) => {
    const langue = profileData?.profile.data[0].Langues[index];
    setEditState((prev) => ({ ...prev, langueIndex: index, langue }));
    togglePopup("langue", true);
  }, [profileData, togglePopup]);

  const handleDeleteExperience = useCallback((index) => {
    setProfileData((prev) => {
      const updated = {
        ...prev,
        profile: {
          ...prev.profile,
          data: [{
            ...prev.profile.data[0],
            ExperienceProfessionnelle: prev.profile.data[0].ExperienceProfessionnelle.filter((_, i) => i !== index),
          }],
        },
      };
      localStorage.setItem("profileData", JSON.stringify(updated));
      return updated;
    });
  }, [setProfileData]);

  const handleEditExperience = useCallback((index) => {
    const experience = profileData?.profile.data[0].ExperienceProfessionnelle[index];
    setEditState((prev) => ({ ...prev, expIndex: index, experience }));
    togglePopup("experience", true);
  }, [profileData, togglePopup]);

  const handleSave = useCallback(async () => {
    const effectiveId = id || localStorage.getItem("consultantId") || DEFAULT_CONSULTANT_ID;
    const success = await saveProfileData(effectiveId, profileData);
    if (success) {
      navigate("/Merci");
    }
  }, [id, profileData, saveProfileData, navigate]);

  if (loading) return <ProfileSkeleton />;
  if (error) return (
    <div>
      <Nav />
      <div className="text-center my-11 text-red-500">{error}</div>
      <Footer />
    </div>
  );

  const profile = profileData.profile.data[0];
  const consultant = profileData.consultant;

  return (
    <div>
      <Nav />
      <div className="space-y-6 my-11 mx-20">
        <div className="flex gap-6">
          <img src={assets.pdp} className="rounded-[20px]" alt="Profile" />
          <div className="w-full flex flex-col justify-between space-y-1">
            <h1 className="font-montserrat text-[40px] font-semibold uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              {profile.Name === NOT_SPECIFIED ? "Votre Nom" : profile.Name}
            </h1>
            <p className="text-[#141414] font-montserrat text-[30px] font-semibold">
              {profile.Poste === NOT_SPECIFIED ? "Votre Poste" : profile.Poste}
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center">
                <img src={icon.location} className="w-auto h-[16px]" alt="Location" />
                <span>{profile.Location === NOT_SPECIFIED ? "Ajouter Votre Ville" : profile.Location}</span>
              </div>
              <div className="flex gap-4 items-center">
                <img src={icon.car} className="w-auto h-[16px]" alt="Mobility" />
                <span>{mobility.length > 0 ? mobility.join(", ") : "N/A"}</span>
              </div>
              <div className="flex gap-4 items-center">
                <img src={icon.phonecall} className="w-[16px] h-[16px]" alt="Phone" />
                <span>{consultant.phone !== NOT_SPECIFIED ? consultant.phone : "Ajouter Votre Téléphone"}</span>
              </div>
              <div className="flex gap-4 items-center">
                <img src={icon.at} className="w-auto h-[16px]" alt="Email" />
                <span>{consultant.email !== NOT_SPECIFIED ? consultant.email : "Ajouter Votre Email"}</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-[24px_19px_24px_37px] bg-white rounded-[15px] shadow-lg">
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold">
                  {profile.Age === NOT_SPECIFIED ? "-" : profile.Age}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px]">Ans</p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold">
                  {profile.AnnéeExperience === NOT_SPECIFIED ? "-" : profile.AnnéeExperience}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px]">Experience</p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold">
                  {PretentionSalariale !== "Null" ? PretentionSalariale : Tjm !== "Null" ? Tjm : "-"}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px]">Tarif</p>
              </div>
              <div className="flex gap-6">
                {[links.github, links.behance, links.linkedIn, links.dribble, links.sitePerso].map((link, idx) => (
                  <img key={idx} src={link} className="w-[40px] h-[40px]" alt={`Social ${idx}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-1/3 space-y-6">
            <div className="flex flex-col gap-[10px] p-[32px_24px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">Langues</h1>
                <img
                  src={icon.square}
                  alt="Add Language"
                  className="cursor-pointer"
                  onClick={() => togglePopup("langue", true)}
                />
              </div>
              {profile.Langues?.length > 0 ? (
                profile.Langues.map((langue, index) => (
                  <div key={index} className="flex items-center justify-between w-full">
                    <Langue Name={langue.Intitulé} Niveau={langue.Niveau} />
                    <div className="flex gap-2">
                      <img src={icon.edit} alt="Edit" className="w-[20px] h-[20px] cursor-pointer" onClick={() => handleEditLanguage(index)} />
                      <img src={icon.trash} alt="Delete" className="w-[20px] h-[20px] cursor-pointer" onClick={() => handleDeleteLanguage(index)} />
                    </div>
                  </div>
                ))
              ) : (
                <p>Aucune langue spécifiée</p>
              )}
            </div>
            <div className="flex flex-col gap-[10px] p-[32px_24px] rounded-[15px] bg-white shadow-lg">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">Préference De Mission</h1>
              <div>{Mission || "N/A"}</div>
            </div>
          </div>
          <div className="w-2/3 space-y-6">
            <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full pb-3">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">Compétence</h1>
                <div className="flex gap-4 p-2 cursor-pointer hover:bg-gray-100" onClick={() => togglePopup("skill", true)}>
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px]">Ajouter Une Compétence</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.Skills?.map((skill, index) => <Skill key={index} skill={skill} />) || <p>Aucune compétence spécifiée</p>}
              </div>
            </div>
            <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">Expérience</h1>
                <div className="flex gap-4 p-2 cursor-pointer hover:bg-gray-100" onClick={() => togglePopup("experience", true)}>
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px]">Ajouter Une Experience</p>
                </div>
              </div>
              {profile.ExperienceProfessionnelle?.map((exp, index) => (
                <div key={index} className="flex w-full justify-between p-4 rounded-lg">
                  <Experience
                    NomEntreprise={exp.NomEntreprise}
                    Date={exp.Date}
                    Description={exp.ParagrapheExperience}
                    Localisation={exp.Localisation === NOT_SPECIFIED ? " " : exp.Localisation}
                    context={exp.Context}
                    Realisation={exp.Réalisation}
                  />
                  <div className="flex gap-2 pt-6">
                    <img src={icon.edit} alt="Edit" className="w-[20px] h-[20px] cursor-pointer" onClick={() => handleEditExperience(index)} />
                    <img src={icon.trash} alt="Delete" className="w-[20px] h-[20px] cursor-pointer" onClick={() => handleDeleteExperience(index)} />
                  </div>
                </div>
              )) || <p>Aucune expérience spécifiée</p>}
            </div>
            <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">Formation</h1>
                <div className="flex gap-4 p-2 cursor-pointer hover:bg-gray-100" onClick={() => togglePopup("formation", true)}>
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px]">Ajouter Une Formation</p>
                </div>
              </div>
              {profile.Formation?.map((form, index) => (
                <Formation key={index} Diplome={form.Diplome} Ecole={form.Ecole} Année={form.Année} />
              )) || <p>Aucune formation spécifiée</p>}
            </div>
            <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">Certification</h1>
                <div className="flex gap-4 p-2 cursor-pointer hover:bg-gray-100" onClick={() => togglePopup("certification", true)}>
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px]">Ajouter Une Certification</p>
                </div>
              </div>
              {profile.Certifications?.length > 0 ? (
                profile.Certifications.map((certif, index) => (
                  <Certification
                    key={index}
                    Certif={certif.Certif === NOT_SPECIFIED ? "--" : certif.Certif}
                    Organisme={certif.Organisme === NOT_SPECIFIED ? "--" : certif.Organisme}
                    AnnéeCertif={certif.AnnéeCertif === NOT_SPECIFIED ? "--" : certif.AnnéeCertif}
                  />
                ))
              ) : (
                <p>Aucune certification spécifiée</p>
              )}
            </div>
          </div>
        </div>
        <div className="border-2 flex justify-end">
          <button
            onClick={handleSave}
            className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] hover:bg-[#2D70D3] disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Enregistrement..." : "Enregistrer"}
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
        </div>
      </div>
      <Footer />
      <AjoutCompetencePopUp
        isOpen={popupStates.skill}
        onClose={() => togglePopup("skill", false)}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <AjoutExperiencePopUp
        isOpen={popupStates.experience}
        onClose={() => togglePopup("experience", false)}
        profileData={profileData}
        setProfileData={setProfileData}
        editExpIndex={editState.expIndex}
        editExperience={editState.experience}
      />
      <AjoutForamtionPopUp
        isOpen={popupStates.formation}
        onClose={() => togglePopup("formation", false)}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <AjoutCertificationPopUp
        isOpen={popupStates.certification}
        onClose={() => togglePopup("certification", false)}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <AjoutLanguePopUp
        isOpen={popupStates.langue}
        onClose={() => togglePopup("langue", false)}
        profileData={profileData}
        setProfileData={setProfileData}
        editIndex={editState.langueIndex}
        editLangue={editState.langue}
      />
    </div>
  );
});

export default Profile;

