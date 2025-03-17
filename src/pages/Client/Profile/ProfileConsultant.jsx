import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { consultants } from "../../../Utils/mockdata";
import { icon } from "../../../assets/assets";
import Langue from "../../../Components/Home/Profile/Langue";
import Certification from "../../../Components/Home/Profile/Certification";
import Experience from "../../../Components/Home/Profile/Experience";
import Formation from "../../../Components/Home/Profile/Formation";
import Skill from "../../../Components/Home/Profile/Skill";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProfileConsultant = () => {
  const { id } = useParams(); // Get the consultant ID from the URL
  const consultantId = `#${id}`; // Add '#' to match the ID format

  // Find the consultant by ID
  const consultant = consultants.find((c) => c.id === consultantId);
  const navigate = useNavigate();
  // If no consultant is found, show a message
  if (!consultant) {
    return <div className="text-red-500">Consultant not found.</div>;
  }

  const path = location.pathname
    .split("/")
    .slice(0, 2)
    .join("/")
    .slice(1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="space-y-4 my-2 p-5">
      <div className="flex gap-2">
        <p className="text-[#04B4E2] font-montserrat text-[16px] font-medium leading-[120.402%]">
          {path}
        </p>
        <ChevronRight color="#04B4E2" size={20} />
        <p className="text-[#04B4E2] font-montserrat text-[16px] font-medium leading-[120.402%]">
          Consultant ID: {consultant.id}
        </p>
      </div>

      <div className="flex gap-6">
        <div className="w-full flex flex-col justify-between space-y-1">
          <div className="flex justify-between">
            <h1 className="font-montserrat text-[40px] font-semibold uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              {consultant.name}
            </h1>
            <button
              onClick={() =>
                navigate(`/rechercher-un-consultant/${id}/creneau`)
              } // Navigate to /[id]/creneau
              className="flex w-auto h-[50px] items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white transition-all duration-300 ease-in-out hover:bg-[#122f57] hover:scale-105 active:bg-[#0d1f3a] active:scale-100"
            >
              <span className="text-[16px]">Demande D'Echange</span>
            </button>
          </div>

          <p className="text-[#141414] font-montserrat text-[30px] font-semibold">
            {consultant.roles.join(", ")}
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <img
                src={icon.location}
                className="w-auto h-[16px]"
                alt="Location"
              />
              <span>{consultant.location}</span>
            </div>
            <div className="flex gap-4 items-center">
              <img src={icon.car} className="w-auto h-[16px]" alt="Mobility" />
              <span>{consultant.region}</span>
            </div>
          </div>
          <div className="flex justify-start gap-16 items-center p-[24px_19px_24px_37px] bg-white rounded-[15px] shadow-lg">
            <div>
              <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold">
                {consultant.age}
              </h3>
              <p className="text-[#807A7A] font-montserrat text-[16px]">Ans</p>
            </div>
            <div>
              <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold">
                {consultant.experience}
              </h3>
              <p className="text-[#807A7A] font-montserrat text-[16px]">
                Experience
              </p>
            </div>
            <div>
              <h3 className="text-[#141414] font-montserrat text-[30px] font-semibold">
                {consultant.rate} /Jour
              </h3>
              <p className="text-[#807A7A] font-montserrat text-[16px]">
                Tarif
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-1/3 space-y-6">
          <div className="flex flex-col gap-[10px] p-[32px_24px] rounded-[15px] bg-white shadow-lg">
            <div className="flex justify-between w-full">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">
                Langues
              </h1>
            </div>
            <div className="space-y-2 items-center justify-between w-full">
              <Langue Name="Arabe" Niveau="Langue maternelle" />
              <Langue Name="Anglais" Niveau="Courant" />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] p-[32px_24px] rounded-[15px] bg-white shadow-lg">
            <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">
              Préference De Mission
            </h1>
            <div>{consultant.mission}</div>
          </div>
        </div>
        <div className="w-2/3 space-y-6">
          <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
            <div className="flex justify-between w-full pb-3">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">
                Compétence
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <Skill skill="React.js" />
              <Skill skill="Node.js" />
              <Skill skill="Docker" />
              <Skill skill="Kubernetes" />
              <Skill skill="GraphQL" />
              <Skill skill="TypeScript" />
              <Skill skill="MongoDB" />
              <Skill skill="PostgreSQL" />
              <Skill skill="AWS" />
              <Skill skill="Terraform" />
              <Skill skill="Ansible" />
              <Skill skill="Jenkins" />
              <Skill skill="Git" />
              <Skill skill="CI/CD Pipelines" />
              <Skill skill="Agile & Scrum" />
            </div>

            {/* <div className="flex flex-wrap gap-2">
              {profile.Skills?.map((skill, index) => (
                <Skill key={index} skill={skill} />
              )) || <p>Aucune compétence spécifiée</p>}
            </div> */}
          </div>
          <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
            <div className="flex justify-between w-full">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">
                Expérience Professionnel
              </h1>
            </div>
            <div className="flex flex-col w-full justify-between p-4 rounded-lg">
              <Experience
                NomEntreprise="Novation City"
                Date="Juin 2020- Aout 2024"
                Localisation="Sousse, Tunisia"
                Realisation="Designed and led a cross-cultural innovation program, facilitating collaboration between Tunisian and Chinese stakeholders"
                Description="Managed project planning, stakeholder engagement, and implementation of workshops to promote cultural exchange"
                context="Cdra Chniya Project - A community-based initiative to integrate Chinese cultural and business practices"
              />
              <Experience
                NomEntreprise="Novation City"
                Date="Juin 2020- Aout 2024"
                Localisation="Sousse"
                Realisation="Developed and executed a digital transformation strategy, improving operational efficiency by 30%"
                Description="Oversaw a team of 10 consultants, conducted market analysis, and implemented digital tools to enhance business processes"
                context="Digital Innovation Project - A local initiative to modernize business operations in the Sousse region"
              />
            </div>
            {/* {profile.ExperienceProfessionnelle?.map((exp, index) => (
              <div
                key={index}
                className="flex w-full justify-between p-4 rounded-lg"
              >
                <Experience
                  NomEntreprise={exp.NomEntreprise}
                  Date={exp.Date}
                  Description={exp.ParagrapheExperience}
                  Localisation={
                    exp.Localisation === NOT_SPECIFIED ? " " : exp.Localisation
                  }
                  context={exp.Context}
                  Realisation={exp.Réalisation}
                />
              </div>
            ))} */}
          </div>
          <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
            <div className="flex justify-between w-full">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">
                Formation
              </h1>
            </div>
            <Formation
              Diplome="Master en Intelligence Artificielle"
              Ecole="Université Paris-Saclay"
              Année="2023"
            />
            <Formation
              Diplome="Licence en Informatique"
              Ecole="Université de Lyon"
              Année="2020"
            />

            {/* {profile.Formation?.map((form, index) => (
              <Formation
                key={index}
                Diplome={form.Diplome}
                Ecole={form.Ecole}
                Année={form.Année}
              />
            )) || <p>Aucune formation spécifiée</p>} */}
          </div>
          <div className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
            <div className="flex justify-between w-full">
              <h1 className="text-[#141414] font-montserrat text-[20px] font-semibold">
                Certification
              </h1>
            </div>
            <Certification
              Certif="AWS Certified Solutions Architect"
              Organisme="Amazon Web Services (AWS)"
              AnnéeCertif="2024"
            />
            <Certification
              Certif="Google Cloud Professional Data Engineer"
              Organisme="Google Cloud"
              AnnéeCertif="2023"
            />

            {/* {profile.Certifications?.length > 0 ? (
              profile.Certifications.map((certif, index) => (
                <Certification
                  key={index}
                  Certif={
                    certif.Certif === NOT_SPECIFIED ? "--" : certif.Certif
                  }
                  Organisme={
                    certif.Organisme === NOT_SPECIFIED ? "--" : certif.Organisme
                  }
                  AnnéeCertif={
                    certif.AnnéeCertif === NOT_SPECIFIED
                      ? "--"
                      : certif.AnnéeCertif
                  }
                />
              ))
            ) : (
              <p>Aucune certification spécifiée</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileConsultant;
