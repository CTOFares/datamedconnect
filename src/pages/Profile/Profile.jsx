import React from "react";
import Nav from "../../Components/Nav";
import Skill from "../../Components/Home/Profile/Skill";
import { assets, icon, links } from "../../assets/assets";
import Experience from "../../Components/Home/Profile/Experience";
import Formation from "../../Components/Home/Profile/Formation";
import Certification from "../../Components/Home/Profile/Certification";
import Footer from "../../Components/Footer";
import Langue from "../../Components/Home/Profile/Langue";

const Profile = () => {
  const profileData = {
    Name: "John Doe",
    Poste: "Senior Software Engineer",
    Location: "Paris, France",
    Mobilité: "Full Mobility",
    AnnéeExperience: 8,
    Age: 30,
    Tarif: 500,
    Skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS", "Docker"],
    ExperienceProfessionnelle: [
      {
        NomEntreprise: "TechCorp",
        Date: "2020 - Present",
        Localisation: "Paris, France",
        ParagrapheExperience:
          "Leading a team of developers to build scalable web applications using React and Node.js. Managed cloud infrastructure on AWS, and worked on containerization with Docker.",
      },
      {
        NomEntreprise: "DevSolutions",
        Date: "2016 - 2020",
        Localisation: "Lyon, France",
        ParagrapheExperience:
          "Developed web applications in JavaScript and supported backend development with Node.js. Implemented automated testing and CI/CD pipelines.",
      },
    ],
    Formation: [
      {
        Diplome: "Master's in Computer Science",
        Ecole: "University of Lyon",
        Année: 2016,
      },
    ],
    Certifications: [
      {
        Certif: "AWS Certified Solutions Architect",
        Organisme: "Amazon",
        AnnéeCertif: 2021,
      },
      {
        Certif: "Docker Certified Associate",
        Organisme: "Docker",
        AnnéeCertif: 2020,
      },
    ],
    Langues: [
      {
        Intitulé: "Francais",
        Niveau: "Trés Bien",
      },
      {
        Intitulé: "Anglais",
        Niveau: "Trés Bien",
      },
    ],
    Mission: [
      {
        TypedeContract: "CDI",
      },
    ],
  };

  return (
    <div>
      <Nav />
      <div className="space-y-6 my-11">
        {/* Header */}
        <div className="flex gap-6 mx-52">
          <div>
            <img src={assets.pdp} className="rounded-[20px]" alt="" />
          </div>
          <div className="w-full h-full space-y-1">
            <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              {profileData.Name}
            </h1>
            <p className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
              {profileData.Poste}
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.location} className="w-[16px] h-[16px]" alt="" />
                <span>{profileData.Location}</span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <img src={icon.car} className="w-[16px] h-[16px]" alt="" />
                <span>{profileData.Mobilité}</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-[24px_19px_24px_37px] w-full bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {profileData.Age}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Ans
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {profileData.AnnéeExperience}
                </h3>
                <p className="text-[#807A7A] font-montserrat text-[16px] font-normal leading-[120.402%]">
                  Experience
                </p>
              </div>
              <div>
                <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
                  {profileData.Tarif}$/Jour
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
        {/* Bottom Section */}
        <div className="flex gap-6 mx-52">
          <div className="w-1/3 space-y-6">
            <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Langues
              </h1>
              {profileData.Langues.map((lougha, index) => (
                <Langue
                  key={index}
                  Name={lougha.Intitulé}
                  Niveau={lougha.Niveau}
                />
              ))}
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[32px_24px] self-stretch rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Préférence De Mission
              </h1>
              {profileData.Mission.map((mission, index) => (
                <div key={index} className="flex w-full justify-between">
                  <p>Type de Contrat Recherché</p>
                  <p>{mission.TypedeContract}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/3 space-y-6">
            {/* Competences */}
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Compétence
              </h1>
              <div className="flex flex-wrap gap-2 w-full">
                {profileData.Skills.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </div>
            </div>
            {/* Experience */}
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Expériences
              </h1>
              <div className="space-y-6">
                {profileData.ExperienceProfessionnelle.map((exp, index) => (
                  <Experience
                    key={index}
                    NomEntreprise={exp.NomEntreprise}
                    Date={exp.Date}
                    Localisation={exp.Localisation}
                    paragrapheExperience={exp.ParagrapheExperience}
                  />
                ))}
              </div>
            </div>
            {/* Formation */}
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Formations
              </h1>
              <div className="space-y-6">
                {profileData.Formation.map((formation, index) => (
                  <Formation
                    key={index}
                    Diplome={formation.Diplome}
                    Ecole={formation.Ecole}
                    Année={formation.Année}
                  />
                ))}
              </div>
            </div>
            {/* Certification */}
            <div className="flex flex-col items-start gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-[0px_403px_113px_rgba(23,58,109,0.00),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)]">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold leading-[120.402%]">
                Certification
              </h1>
              <div className="space-y-6">
                {profileData.Certifications.map((certif, index) => (
                  <Certification
                    key={index}
                    Certif={certif.Certif}
                    Organisme={certif.Organisme}
                    AnnéeCertif={certif.AnnéeCertif}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 items-end flex justify-end mx-52">
          <button
            type="submit"
            className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
          >
            Continuer
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
    </div>
  );
};

export default Profile;
