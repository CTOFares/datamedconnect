import React from "react";
import Card from "../../../Components/Client/Card";
import { Search } from "lucide-react";

const ConsultantSauvegarder = () => {
  const cardData = {
    id: "#CON-1249",
    availability: "5",
    name: "FS",
    age: 23,
    experience: "5+",
    roles: ["Developeur Full Stack", "Chef De Project IT", "Product Owner"],
    skills: [
      "Docker",
      "React",
      "Node.js",
      "AWS",
      "Python",
      "Terraform",
      "JavaScript",
      "Jenkins",
      "Git",
      "MongoDB",
      "TypeScript",
      "PostgreSQL",
      "Ansible",
      "Vue.js",
      "Azure",
      "GraphQL",
      "Redis",
      "Go",
      "Jenkins",
      "Git",
      "MongoDB",
      "TypeScript",
      "PostgreSQL",
      "Ansible",
      "Vue.js",
      "Azure",
      "GraphQL",
      "Redis",
      "Go",
    ],
    location: "Marmagne(71710)v",
    region: "Mobile : Pays-de-la-Loire, Bretagne, Nouvelle-Aquitaine",
    rate: 700,
    icons: {
      location: true,
      car: true,
    },
  };
  return (
    <div className="">
      <div className="bg-white border-[#E6E7E9] rounded-md w-full h-auto p-4">
        <form action="filter" className="space-y-4">
          <div className="flex justify-between gap-4 items-center">
            <div className="border-[#E6E7E9] flex gap-4 p-4 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-4">
                <input type="checkbox" className="rounded-sm border-2" />
                <p className="text-[16px] font-montserrat">CDI</p>
              </div>
              <div className="flex gap-4 text-[16px]">
                <input type="checkbox" />
                <p className="text-[16px] font-montserrat">FreeLance</p>
              </div>
            </div>
            <input
              type="text"
              placeholder="Full Stack Developer"
              className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-4 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
            />
            <button className="flex w-[151px] h-full items-center justify-center gap-2 rounded-[10px] bg-[#173A6D] px-[19px] py-4 text-white">
              <Search size={20} />
              <span className="text-[16px]">Rechercher</span>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <p className="text-[#696A6B] font-montserrat text-base font-medium leading-[24px]">
          0 a 15 sur 110 résultats filtrés
        </p>
        <div className="space-y-3">
          <Card {...cardData} />
          <Card {...cardData} />
          <Card {...cardData} />
        </div>
      </div>
    </div>
  );
};

export default ConsultantSauvegarder;
