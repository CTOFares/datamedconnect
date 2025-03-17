import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";
import Select from "react-select";
const ECHANGE_STATUS = [
  { value: "En Attente", label: "En Attente" },
  { value: "Reporté", label: "Reporté" },
  { value: "Confirmé", label: "Confirmé" },
];

const DemandeEchange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const exchanges = [
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "12/05/2024",
      time: "14:30",
      status: "Confirmé",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "-",
      time: "-",
      status: "En Attente",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "-",
      time: "-",
      status: "En Attente",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "12/05/2024",
      time: "14:30",
      status: "Confirmé",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "-",
      time: "-",
      status: "Reporté",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "-",
      time: "-",
      status: "Reporté",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "-",
      time: "-",
      status: "Reporté",
    },
    {
      id: "ECH-309",
      acronym: "FS",
      title: "Ingénieur DevSecOps",
      date: "-",
      time: "-",
      status: "Reporté",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmé":
        return "bg-green-100 text-green-800";
      case "En Attente":
        return "bg-pink-100 text-pink-800";
      case "Reporté":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="">
      <h1 className="text-[35px] leading-[30px] py-4  text-[#324DA9] font-montserrat font-normal">
        Demande D'Echange
      </h1>
      <div className="bg-white border-[#E6E7E9] rounded-md w-full space-y-2 h-auto p-2">
        <p className="text-[#38383A] font-montserrat text-[16px] font-semibold leading-[24px]">
          Options de recherche
        </p>
        <form action="filter" className="">
          <div className="flex justify-between gap-4 items-center">
            <input
              type="text"
              placeholder="Full Stack Developer"
              className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
            />
            <select
              id="contractType"
              className="flex w-[300px] py-2 px-4 rounded-md border  border-[#E6E7E9] bg-white"
            >
              <option value="" className="text-[#38383A]" disabled hidden>
                Ex: Confirmé, En Attente
              </option>
              {ECHANGE_STATUS.map((type) => (
                <option
                  className="text-[#38383A]"
                  key={type.value}
                  value={type.value}
                >
                  {type.label}
                </option>
              ))}
            </select>
            <button className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white">
              <Search size={20} />
              <span className="text-[16px]">Rechercher</span>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 bg-white rounded-md ">
        <p className="text-[#38383A] font-montserrat py-2 text-[16px] font-semibold leading-[24px] capitalize">
          Demande D’échange
        </p>
        <div className="rounded-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Numéro d'Échange
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Acronyme
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Intitulé
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Heure
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {exchanges.map((exchange, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 ${
                      exchange.error ? "border-l-4 border-red-500" : ""
                    }`}
                  >
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.id}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.acronym}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.title}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.date}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.time}
                    </td>
                    <td className="py-3 px-4 border-b">
                      <span
                        className={`inline-flex px-2 py-2 rounded-full text-xs font-montserrat font-medium ${getStatusColor(
                          exchange.status
                        )}`}
                      >
                        {exchange.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandeEchange;
