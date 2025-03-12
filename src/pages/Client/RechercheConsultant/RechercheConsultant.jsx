import React, { useState } from "react";
import {
  CircleDotDashed,
  CircleDotDashedIcon,
  MapPin,
  Search, 
} from "lucide-react";
import Range from "../../../Components/Client/Range";
import Card from "../../../Components/Client/Card";

const RechercheConsultant = () => {
  const [value, setValue] = useState(16);
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 40 }); // State for salary range

  const handleSalaryRangeChange = (newValue) => {
    setSalaryRange(newValue);
    console.log("Salary Range Updated:", newValue); // Debug log
  };

  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10)); // Convert string to integer
  };
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
                <p className="text-[16px]">CDI</p>
              </div>
              <div className="flex gap-4 text-[16px]">
                <input type="checkbox" />
                <p className="text-[16px]">FreeLance</p>
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
          <div className="flex justify-between gap-6">
            <div className="border-[#E6E7E9] justify-between w-full flex gap-2 p-4 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-4 text-[16px]">
                <CircleDotDashedIcon className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="100km"
                  className="text-[16px] border-none w-1/2 bg-transparent text-[#38383A] focus:outline-none"
                />
              </div>
              <div className="flex gap-4 text-[16px] w-1/2 justify-between">
                <div className="relative  flex gap-4">
                  <MapPin className="h-5 w-5" />
                  <select
                    defaultValue="France"
                    className="text-[16px] border-none bg-transparent focus:outline-none appearance-none pr-8"
                  >
                    <option value="France">France</option>
                    <option value="Paris">Paris</option>
                    <option value="Marseille">Marseille</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Toulouse">Toulouse</option>
                    <option value="Nice">Nice</option>
                    <option value="Nantes">Nantes</option>
                    <option value="Strasbourg">Strasbourg</option>
                    <option value="Montpellier">Montpellier</option>
                    <option value="Bordeaux">Bordeaux</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border w-full border-blue-500 p-4 rounded-md">
              <div className="flex items-center gap-4">
                <span className="text-black font-medium">Expérience :</span>
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex items-center  w-full gap-3">
                    <span className="text-black">0</span>
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={value}
                      onChange={handleChange}
                      className="w-full h-2 bg-gray-200  rounded-lg  appearance-none cursor-pointer accent-blue-500 focus:outline-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-md"
                    />
                    <span className="text-black font-medium w-8">{value}</span>
                    <span className="text-black text-sm">Ans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full p-4 rounded-md">
              <div className="space-y-2">
                <span className="text-black font-medium">
                  Tarif Journalier:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-black">0</span>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    className="custom-range flex-1"
                  />
                  <span className="text-black">20 k€</span>
                </div>
              </div>
            </div>
            <p className="items-center justify-center p-4">ou</p>
            <div className="bg-gray-50 border w-full border-blue-500 p-4 rounded-md">
              <div className="space-y-2">
                <span className="text-black font-medium">Salaire Annuel:</span>
                <div className="flex items-center gap-3">
                  <Range
                    min={0}
                    max={40}
                    value={salaryRange}
                    onChange={handleSalaryRangeChange}
                  />
                  <span className="text-black font-medium w-16">{`${salaryRange.min} - ${salaryRange.max}`}</span>
                  <span className="text-black text-sm">k€/Brut</span>
                </div>
              </div>
            </div>
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

export default RechercheConsultant;
