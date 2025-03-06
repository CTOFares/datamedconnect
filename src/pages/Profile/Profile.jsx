import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Skill from "../../Components/Home/Profile/Skill";
import { assets, icon, links } from "../../assets/assets";
import Experience from "../../Components/Home/Profile/Experience";
import Formation from "../../Components/Home/Profile/Formation";
import Certification from "../../Components/Home/Profile/Certification";
import Footer from "../../Components/Footer";
import Langue from "../../Components/Home/Profile/Langue";
import { useCVData } from "../../Context/CVDataContext";
import axios from "axios";

const Profile = () => {
  const { Tjm, PretentionSalariale, Numero, Email, Mission } = useCVData();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const consultantId = "67c842a4d03f8e2864cab3e5"; // Replace with dynamic value if needed // Local state for fetched data
  // const { id } = useCVData();
  const fetchProfileData = async (consultantId) => {
    try {
      const response = await axios.get(
        `https://datamedconnectbackend.onrender.com/api/consultants/${consultantId}`
      );
      const data = response.data;
      console.log("Fetched data:", data);
      setProfileData(data); // Update local state with fetched data
      setLoading(false); // Data is loaded
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchProfileData(consultantId);
  }, [consultantId]); // Dependency array ensures it runs if consultantId changes

  // If still loading or no data, show a loading message or fallback
  if (loading || !profileData) {
    return (
      <div>
        <Nav />
        <div className="text-center my-11">Loading profile data...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="space-y-6 my-11">
        <div className="flex gap-6 mx-40">
          <div>
            <img src={assets.pdp} className="rounded-[20px]" alt="" />
          </div>
          <div className="w-full flex flex-col justify-between space-y-1">
            <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              {profileData.profile.data[0].Name === "Not Specified"
                ? "Votre Nom"
                : profileData.profile.data[0].Name}
            </h1>
            <p className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
              {profileData.profile.data[0].Poste === "Not Specified"
                ? "Votre Poste"
                : profileData.profile.data[0].Poste}
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.location} className="w-[16px] h-[16px]" alt="" />
                <span>
                  {profileData.profile.data[0].Location === "Not Specified"
                    ? "Ajouter Votre Ville de Residence"
                    : profileData.profile.data[0].Location}
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.car} className="w-[16px] h-[16px]" alt="" />
                <span>
                  {profileData.Mobilité === "Not Specified"
                    ? "Ajouter Votre Mobilité"
                    : "Ajouter Votre Mobilité"}
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img
                  src={icon.phonecall}
                  className="w-[16px] h-[16px]"
                  alt=""
                />
                <span>
                  {profileData.Mobilité === "Not Specified"
                    ? "Ajouter Votre Teléphone"
                    : "Ajouter Votre Teléphone"}
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.at} className="w-[16px] h-[16px]" alt="" />
                <span>
                  {profileData.Mobilité === "Not Specified"
                    ? "Ajouter Votre Email"
                    : "Ajouter Votre Email"}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center p-[24px_19px_24px_37px] w-full bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {profileData.profile.data[0].Age === "Not Specified"
                    ? "-"
                    : profileData.profile.data[0].Age}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Ans
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {profileData.profile.data[0].AnnéeExperience ===
                  "Not Specified"
                    ? "-"
                    : profileData.profile.data[0].AnnéeExperience}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Experience
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {profileData.profile.data[0].Age === "Not Specified"
                    ? "-"
                    : profileData.profile.data[0].Age}
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
        <div className="flex gap-6 mx-40">
          <div className="w-1/3 space-y-6">
            <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Langues
              </h1>
              {profileData.profile.data[0]?.Langues?.length > 0 ? (
                profileData.profile.data[0].Langues.map((lougha, index) => (
                  <Langue
                    key={index}
                    Name={lougha.Intitulé}
                    Niveau={lougha.Niveau}
                  />
                ))
              ) : (
                <p>Aucune langue spécifiée</p>
              )}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Préference De Mission
              </h1>
              <div>TEsting</div>
            </div>
          </div>
          <div className="w-2/3 space-y-6">
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div className="flex justify-between w-full border-2 pb-3">
                <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                  Compétence
                </h1>
                <div className="flex gap-4 border-2 w-auto ">
                  <img src={icon.square} alt="" />
                  <p className="text-[rgba(83,83,83,0.40)] font-montserrat text-[18px] font-normal">
                    Ajouter Une Competence
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 w-full">
                {profileData.profile.data[0]?.Skills?.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Expérience
              </h1>
              {profileData.profile.data[0]?.ExperienceProfessionnelle?.map(
                (exp, index) => (
                  <Experience
                    key={index}
                    NomEntreprise={exp.NomEntreprise}
                    Date={exp.Date}
                    Localisation={
                      exp.Localisation === "Not Specified"
                        ? " "
                        : exp.Localisation
                    }
                    context={exp.ParagrapheExperience}
                    Realisation={exp.Réalisation}
                  />
                )
              )}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Formation
              </h1>
              {profileData.profile.data[0]?.Formation?.map((form, index) => (
                <Formation
                  key={index}
                  Diplome={form.Diplome}
                  Ecole={form.Ecole}
                  Année={form.Année}
                />
              ))}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Certification
              </h1>
              {profileData.profile.data[0]?.Certifications?.length > 0 ? (
                profileData.profile.data[0].Certifications.map(
                  (certif, index) => (
                    <Certification
                      key={index}
                      Certif={certif.Certif}
                      Organisme={certif.Organisme}
                      AnnéeCertif={certif.AnnéeCertif}
                    />
                  )
                )
              ) : (
                <p>Aucune certification spécifiée</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
