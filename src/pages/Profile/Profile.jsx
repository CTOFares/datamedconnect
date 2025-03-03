import React, { useEffect } from "react";
import Nav from "../../Components/Nav";
import Skill from "../../Components/Home/Profile/Skill";
import { assets, icon, links } from "../../assets/assets";
import Experience from "../../Components/Home/Profile/Experience";
import Formation from "../../Components/Home/Profile/Formation";
import Certification from "../../Components/Home/Profile/Certification";
import Footer from "../../Components/Footer";
import Langue from "../../Components/Home/Profile/Langue";
import { useCVData } from "../../Context/CVDataContext";

const Profile = () => {
  const { profileData,Tjm,PretentionSalariale   } = useCVData();

  useEffect(() => {
    console.log("Profile Data from Context:", profileData);
    if (!profileData) {
      const storedProfileData = localStorage.getItem("profileData");
      console.log("Profile Data from localStorage:", storedProfileData);
    }
  }, [profileData]);

  const finalProfileData =
    profileData || JSON.parse(localStorage.getItem("profileData"));

  if (!finalProfileData) {
    return (
      <div>
        <Nav />
        <div className="text-center my-11">
          <p>Loading profile data...</p>
        </div>
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
          <div className="w-full h-full space-y-1">
            <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              {finalProfileData.Name}
            </h1>
            <p className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
              {finalProfileData.Poste}
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.location} className="w-[16px] h-[16px]" alt="" />
                <span>{finalProfileData.Location}</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.car} className="w-[16px] h-[16px]" alt="" />
                <span>{finalProfileData.Mobilité}</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-[24px_19px_24px_37px] w-full bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {finalProfileData.Age === "Non spécifié"
                    ? "N/A"
                    : finalProfileData.Age}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Ans
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {finalProfileData.AnnéeExperience}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Experience
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {Tjm === "Null"
                    ? PretentionSalariale
                    : Tjm}
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
              {finalProfileData?.Langues?.length > 0 ? (
                finalProfileData.Langues.map((lougha, index) => (
                  <Langue
                    key={index}
                    Name={lougha.Langue}
                    Niveau={lougha.Niveau}
                  />
                ))
              ) : (
                <p>Aucune langue spécifiée</p>
              )}
            </div>
          </div>
          <div className="w-2/3 space-y-6">
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Compétence
              </h1>
              <div className="flex flex-wrap gap-2 w-full">
                {finalProfileData?.Skills?.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Expérience
              </h1>
              {finalProfileData?.ExperienceProfessionnelle?.map(
                (exp, index) => (
                  <Experience
                    key={index}
                    NomEntreprise={exp.NomEntreprise}
                    Date={exp.Date}
                    Localisation={exp.Localisation}
                    context={exp.ParagrapheExperience}
                    Realisation={exp.Réalisations}
                  />
                )
              )}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Formation
              </h1>
              {finalProfileData?.Formation?.map((form, index) => (
                <Formation
                  key={index}
                  Diplome={form.Diplôme}
                  Ecole={form.Ecole}
                  Année={form.Année}
                />
              ))}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Certification
              </h1>
              {finalProfileData?.Certifications?.length > 0 ? (
                finalProfileData.Certifications.map((certif, index) => (
                  <Certification
                    key={index}
                    Certif={certif.Certif}
                    Organisme={certif.Organisme}
                    AnnéeCertif={certif.AnnéeCertif}
                  />
                ))
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
