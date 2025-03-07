import React, { useEffect, useState, useMemo } from "react";
import Nav from "../../Components/Nav";
import Skill from "../../Components/Home/Profile/Skill";
import { assets, icon, links } from "../../assets/assets";
import Experience from "../../Components/Home/Profile/Experience";
import Formation from "../../Components/Home/Profile/Formation";
import Certification from "../../Components/Home/Profile/Certification";
import Footer from "../../Components/Footer";
import Langue from "../../Components/Home/Profile/Langue";
import { useCVData } from "../../Context/CVDataContext";
import AjoutCompetencePopUp from "../../PopUps/AjoutCompetencePopUp";
import axios from "axios";
import AjoutExperiencePopUp from "../../PopUps/AjoutExperiencePopUp";
import AjoutForamtionPopUp from "../../PopUps/AjoutForamtionPopUp";
import AjoutCertificationPopUp from "../../PopUps/AjoutCertificationPopUp";
import AjoutLanguePopUp from "../../PopUps/AjoutLanguePopUp";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const {
    Tjm,
    mobility,
    setMobility,
    PretentionSalariale,
    Numero,
    Email,
    Mission,
    id,
  } = useCVData();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSkillPopupOpen, setSkillPopupOpen] = useState(false);
  const [isExpPopupOpen, setExpPopupOpen] = useState(false);
  const [isFormationPopupOpen, setFormationPopupOpen] = useState(false);
  const [isCertificationPopupOpen, setCertificationPopupOpen] = useState(false);
  const [isLanguePopupOpen, setLanguePopupOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // For languages
  const [editLangue, setEditLangue] = useState(null);
  const [editExpIndex, setEditExpIndex] = useState(null); // For experiences
  const [editExperience, setEditExperience] = useState(null);
  const defaultConsultantId = "67c842a4d03f8e2864cab3e5"; // Fallback ID

  // Fetch or load cached profile data
  const fetchProfileData = async (consultantId) => {
    try {
      console.log("Fetching data for ID:", consultantId);
      const response = await axios.get(
        `https://datamedconnectbackend.onrender.com/api/consultants/${consultantId}`
      );
      if (response.status === 200) {
        const data = response.data;
        console.log("Fetched data:", data);
        setProfileData(data);
        // Save to localStorage
        localStorage.setItem("profileData", JSON.stringify(data));
        localStorage.setItem("consultantId", consultantId);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Check if offline or server error
      if (!navigator.onLine || error.response?.status === 404) {
        const cachedData = localStorage.getItem("profileData");
        if (cachedData) {
          console.log("Using cached data:", JSON.parse(cachedData));
          setProfileData(JSON.parse(cachedData));
          setError("Offline mode: Using cached data.");
        } else {
          setError("No internet connection and no cached data available.");
        }
      } else {
        setError("Failed to load profile data. Please try again later.");
      }
      setLoading(false);
    }
  };

  // Memoize profileData to avoid unnecessary re-renders
  const memoizedProfileData = useMemo(() => {
    return profileData;
  }, [profileData]);

  // Delete a language by index
  const handleDeleteLanguage = (indexToDelete) => {
    setProfileData((prev) => {
      const updatedProfile = {
        ...prev,
        profile: {
          ...prev.profile,
          data: [
            {
              ...prev.profile.data[0],
              Langues: prev.profile.data[0].Langues.filter(
                (_, index) => index !== indexToDelete
              ),
            },
          ],
        },
      };
      localStorage.setItem("profileData", JSON.stringify(updatedProfile)); // Update cache
      return updatedProfile;
    });
  };

  // Edit a language
  const handleEditLanguage = (index) => {
    const langueToEdit = memoizedProfileData.profile.data[0].Langues[index];
    setEditIndex(index);
    setEditLangue(langueToEdit);
    setLanguePopupOpen(true);
  };

  // Delete an experience by index
  const handleDeleteExperience = (indexToDelete) => {
    setProfileData((prev) => {
      const updatedProfile = {
        ...prev,
        profile: {
          ...prev.profile,
          data: [
            {
              ...prev.profile.data[0],
              ExperienceProfessionnelle:
                prev.profile.data[0].ExperienceProfessionnelle.filter(
                  (_, index) => index !== indexToDelete
                ),
            },
          ],
        },
      };
      localStorage.setItem("profileData", JSON.stringify(updatedProfile)); // Update cache
      return updatedProfile;
    });
  };

  // Edit an experience
  const handleEditExperience = (index) => {
    const expToEdit =
      memoizedProfileData.profile.data[0].ExperienceProfessionnelle[index];
    setEditExpIndex(index);
    setEditExperience(expToEdit);
    setExpPopupOpen(true);
  };

  const handelButtonThankyou = (e) => {
    e.preventDefault();
    navigate("/Merci");
  };
  useEffect(() => {
    console.log("ID from context:", id);
    // Load from localStorage if available
    const cachedId = localStorage.getItem("consultantId");
    const cachedData = localStorage.getItem("profileData");
    const effectiveId = id || cachedId || defaultConsultantId;

    if (cachedData && !navigator.onLine) {
      console.log("Loading cached data on mount:", JSON.parse(cachedData));
      setProfileData(JSON.parse(cachedData));
      setLoading(false);
      setError("Offline mode: Loaded cached data.");
    } else {
      fetchProfileData(effectiveId);
    }
  }, [id]);

  // Render skeleton structure while loading or no data
  if (loading || !profileData) {
    return (
      <div>
        <Nav />
        <div className="space-y-6 my-11">
          <div className="flex gap-6 mx-20">
            <div>
              <div className="w-[200px] h-[200px] bg-gray-200 rounded-[20px]"></div>
            </div>
            <div className="w-full flex flex-col justify-between space-y-1">
              <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gray-200 h-[48px] w-[300px]"></h1>
              <p className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%] bg-gray-200 h-[36px] w-[250px]"></p>
              <div className="flex gap-4 items-center">
                <div className="flex gap-4 items-center justify-center">
                  <div className="w-[16px] h-[16px] bg-gray-200"></div>
                  <span className="bg-gray-200 h-[16px] w-[150px]"></span>
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <div className="w-[16px] h-[16px] bg-gray-200"></div>
                  <span className="bg-gray-200 h-[16px] w-[100px]"></span>
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <div className="w-[16px] h-[16px] bg-gray-200"></div>
                  <span className="bg-gray-200 h-[16px] w-[150px]"></span>
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <div className="w-[16px] h-[16px] bg-gray-200"></div>
                  <span className="bg-gray-200 h-[16px] w-[150px]"></span>
                </div>
              </div>
              <div className="flex justify-between items-center p-[24px_19px_24px_37px] w-full bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <div>
                  <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%] bg-gray-200 h-[36px] w-[50px]"></h3>
                  <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%] bg-gray-200 h-[19px] w-[50px]"></p>
                </div>
                <div>
                  <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%] bg-gray-200 h-[36px] w-[50px]"></h3>
                  <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%] bg-gray-200 h-[19px] w-[50px]"></p>
                </div>
                <div>
                  <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%] bg-gray-200 h-[36px] w-[50px]"></h3>
                  <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%] bg-gray-200 h-[19px] w-[50px]"></p>
                </div>
                <div className="flex gap-6">
                  <div className="w-[40px] h-[40px] bg-gray-200"></div>
                  <div className="w-[40px] h-[40px] bg-gray-200"></div>
                  <div className="w-[40px] h-[40px] bg-gray-200"></div>
                  <div className="w-[40px] h-[40px] bg-gray-200"></div>
                  <div className="w-[40px] h-[40px] bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mx-20">
            <div className="w-1/3 space-y-6">
              <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <div className="flex justify-between w-full">
                  <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%] bg-gray-200 h-[24px] w-[100px]"></h1>
                  <div className="w-[20px] h-[20px] bg-gray-200"></div>
                </div>
                <div className="w-full h-[100px] bg-gray-200"></div>
              </div>
              <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%] bg-gray-200 h-[24px] w-[200px]"></h1>
                <div className="bg-gray-200 h-[20px] w-[100px]"></div>
              </div>
            </div>
            <div className="w-2/3 space-y-6">
              <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <div className="flex justify-between w-full pb-3">
                  <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%] bg-gray-200 h-[24px] w-[150px]"></h1>
                  <div className="flex gap-4   p-2 bg-gray-200 h-[20px] w-[200px]"></div>
                </div>
                <div className="flex flex-wrap gap-2 w-full">
                  <div className="w-[100px] h-[30px] bg-gray-200"></div>
                  <div className="w-[100px] h-[30px] bg-gray-200"></div>
                  <div className="w-[100px] h-[30px] bg-gray-200"></div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%] bg-gray-200 h-[24px] w-[150px]"></h1>
                  <div className="flex gap-4   p-2 bg-gray-200 h-[20px] w-[200px]"></div>
                </div>
                <div className="w-full h-[200px] bg-gray-200"></div>
              </div>
              <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%] bg-gray-200 h-[24px] w-[150px]"></h1>
                  <div className="flex gap-4   p-2 bg-gray-200 h-[20px] w-[200px]"></div>
                </div>
                <div className="w-full h-[100px] bg-gray-200"></div>
              </div>
              <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%] bg-gray-200 h-[24px] w-[150px]"></h1>
                  <div className="flex gap-4   p-2 bg-gray-200 h-[20px] w-[200px]"></div>
                </div>
                <div className="w-full h-[100px] bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Nav />
        <div className="text-center my-11 text-red-500">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="space-y-6 my-11">
        <div className="flex gap-6 mx-20">
          <div>
            <img src={assets.pdp} className="rounded-[20px]" alt="" />
          </div>
          <div className="w-full flex flex-col justify-between space-y-1">
            <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              {memoizedProfileData.profile.data[0].Name === "Not Specified"
                ? "Votre Nom"
                : memoizedProfileData.profile.data[0].Name}
            </h1>
            <p className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
              {memoizedProfileData.profile.data[0].Poste === "Not Specified"
                ? "Votre Poste"
                : memoizedProfileData.profile.data[0].Poste}
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.location} className="w-auto h-[16px]" alt="" />
                <span>
                  {memoizedProfileData.profile.data[0].Location ===
                  "Not Specified"
                    ? "Ajouter Votre Ville de Residence"
                    : memoizedProfileData.profile.data[0].Location}
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.car} className="w-auto h-[16px]" alt="" />
                <span>{mobility.length > 0 ? mobility.join(", ") : "N/A"}</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img
                  src={icon.phonecall}
                  className="w-[16px] h-[16px]"
                  alt=""
                />
                <span>
                  {memoizedProfileData.consultant.phone !== "Not Specified"
                    ? memoizedProfileData.consultant.phone
                    : "Ajouter Votre Téléphone"}
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.at} className="w-auto h-[16px]" alt="" />
                <span>
                  {memoizedProfileData.consultant.email !== "Not Specified"
                    ? memoizedProfileData.consultant.email
                    : "Ajouter Votre Email"}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center p-[24px_19px_24px_37px] w-full bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {memoizedProfileData.profile.data[0].Age === "Not Specified"
                    ? "-"
                    : memoizedProfileData.profile.data[0].Age}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Ans
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {memoizedProfileData.profile.data[0].AnnéeExperience ===
                  "Not Specified"
                    ? "-"
                    : memoizedProfileData.profile.data[0].AnnéeExperience}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Experience
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {PretentionSalariale !== "Null"
                    ? PretentionSalariale
                    : Tjm !== "Null"
                    ? Tjm
                    : "-"}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Tarif
                </p>
              </div>
              <div className="flex gap-6">
                <img
                  src={links.github}
                  className="w-[40px] h-[40px]"
                  alt="Github"
                />
                <img
                  src={links.behance}
                  className="w-[40px] h-[40px]"
                  alt="Behance"
                />
                <img
                  src={links.linkedIn}
                  className="w-[40px] h-[40px]"
                  alt="LinkedIn"
                />
                <img
                  src={links.dribble}
                  className="w-[40px] h-[40px]"
                  alt="Dribble"
                />
                <img
                  src={links.sitePerso}
                  className="w-[40px] h-[40px]"
                  alt="SiteWeb"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mx-20">
          <div className="w-1/3 space-y-6">
            <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div className="flex justify-between w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                  Langues
                </h1>
                <div
                  onClick={() => {
                    setEditIndex(null);
                    setEditLangue(null);
                    setLanguePopupOpen(true);
                  }}
                  className="cursor-pointer"
                >
                  <img src={icon.square} alt="Add Language" />
                </div>
              </div>
              {memoizedProfileData.profile.data[0]?.Langues?.length > 0 ? (
                memoizedProfileData.profile.data[0].Langues.map(
                  (lougha, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <Langue Name={lougha.Intitulé} Niveau={lougha.Niveau} />
                      <div className="flex gap-2">
                        <img
                          src={icon.edit}
                          alt="Edit"
                          className="w-[20px] h-[20px] cursor-pointer"
                          onClick={() => handleEditLanguage(index)}
                        />
                        <img
                          src={icon.trash}
                          alt="Delete"
                          className="w-[20px] h-[20px] cursor-pointer"
                          onClick={() => handleDeleteLanguage(index)}
                        />
                      </div>
                    </div>
                  )
                )
              ) : (
                <p>Aucune langue spécifiée</p>
              )}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Préference De Mission
              </h1>
              <div>{Mission}</div>
            </div>
          </div>
          <div className="w-2/3 space-y-6">
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div className="flex justify-between w-full pb-3">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                  Compétence
                </h1>
                <div
                  className="flex gap-4 w-auto p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => setSkillPopupOpen(true)}
                >
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px] font-normal">
                    Ajouter Une Compétence
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 w-full">
                {memoizedProfileData.profile.data[0]?.Skills?.map(
                  (skill, index) => (
                    <Skill key={index} skill={skill} />
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                  Expérience
                </h1>
                <div
                  className="flex gap-4 w-auto p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setEditExpIndex(null);
                    setEditExperience(null);
                    setExpPopupOpen(true);
                  }}
                >
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px] font-normal">
                    Ajouter Une Experience
                  </p>
                </div>
              </div>
              {memoizedProfileData.profile.data[0]?.ExperienceProfessionnelle?.map(
                (exp, index) => (
                  <div
                    key={index}
                    className="flex w-full justify-between p-4 rounded-lg"
                  >
                    <Experience
                      NomEntreprise={exp.NomEntreprise}
                      Date={exp.Date}
                      Description={exp.ParagrapheExperience}
                      Localisation={
                        exp.Localisation === "Not Specified"
                          ? " "
                          : exp.Localisation
                      }
                      context={exp.Context}
                      Realisation={exp.Réalisation}
                    />
                    <div className="flex gap-2 pt-6">
                      <img
                        src={icon.edit}
                        alt="Edit"
                        className="w-[20px] h-[20px] cursor-pointer"
                        onClick={() => handleEditExperience(index)}
                      />
                      <img
                        src={icon.trash}
                        alt="Delete"
                        className="w-[20px] h-[20px] cursor-pointer"
                        onClick={() => handleDeleteExperience(index)}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                  Formation
                </h1>
                <div
                  className="flex gap-4 w-auto p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => setFormationPopupOpen(true)}
                >
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px] font-normal">
                    Ajouter Une Formation
                  </p>
                </div>
              </div>
              {memoizedProfileData.profile.data[0]?.Formation?.map(
                (form, index) => (
                  <Formation
                    key={index}
                    Diplome={form.Diplome}
                    Ecole={form.Ecole}
                    Année={form.Année}
                  />
                )
              )}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                  Certification
                </h1>
                <div
                  className="flex gap-4 w-auto p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => setCertificationPopupOpen(true)}
                >
                  <img src={icon.square} alt="Add" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px] font-normal">
                    Ajouter Une Certification
                  </p>
                </div>
              </div>
              {memoizedProfileData.profile.data[0]?.Certifications?.length >
              0 ? (
                memoizedProfileData.profile.data[0].Certifications.map(
                  (certif, index) => (
                    <Certification
                      key={index}
                      Certif={
                        certif.Certif === "Not Specified" ? "--" : certif.Certif
                      }
                      Organisme={
                        certif.Organisme === "Not Specified"
                          ? "--"
                          : certif.Organisme
                      }
                      AnnéeCertif={
                        certif.AnnéeCertif === "Not Specified"
                          ? "--"
                          : certif.AnnéeCertif
                      }
                    />
                  )
                )
              ) : (
                <p>Aucune certification spécifiée</p>
              )}
            </div>
          </div>
        </div>
        <div className="sm:mx-20 border-2 justify-end flex">
          <button
            onClick={handelButtonThankyou}
            type="button"
            className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
          >
            Enregistrer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
      <AjoutCompetencePopUp
        isOpen={isSkillPopupOpen}
        onClose={() => setSkillPopupOpen(false)}
        profileData={memoizedProfileData}
        setProfileData={setProfileData}
      />
      <AjoutExperiencePopUp
        isOpen={isExpPopupOpen}
        onClose={() => setExpPopupOpen(false)}
        profileData={memoizedProfileData}
        setProfileData={setProfileData}
        editExpIndex={editExpIndex}
        editExperience={editExperience}
      />
      <AjoutForamtionPopUp
        isOpen={isFormationPopupOpen}
        onClose={() => setFormationPopupOpen(false)}
        profileData={memoizedProfileData}
        setProfileData={setProfileData}
      />
      <AjoutCertificationPopUp
        isOpen={isCertificationPopupOpen}
        onClose={() => setCertificationPopupOpen(false)}
        profileData={memoizedProfileData}
        setProfileData={setProfileData}
      />
      <AjoutLanguePopUp
        isOpen={isLanguePopupOpen}
        onClose={() => setLanguePopupOpen(false)}
        profileData={memoizedProfileData}
        setProfileData={setProfileData}
        editIndex={editIndex}
        editLangue={editLangue}
      />
    </div>
  );
};

export default Profile;
