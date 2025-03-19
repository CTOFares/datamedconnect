import { ChevronDown, X } from "lucide-react"; // Removed unused Search import
import React, { useState } from "react";

const ECHANGE_STATUS = [
  { value: "En Attente", label: "En Attente" },
  { value: "Reporté", label: "Reporté" },
  { value: "Confirmé", label: "Confirmé" },
];

const DemandeEchange = () => {
  const [isOpen, setIsOpen] = useState(false); // Unused, but kept for potential future use
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All"); // Default to "All"
  const exchanges = [
    {
      id: "ECH-512",
      acronym: "MK",
      title: "Développeur Full Stack",
      date: "22/07/2024",
      time: "09:15",
      status: "Confirmé",
    },
    {
      id: "ECH-513",
      acronym: "JL",
      title: "Développeur Full Stack",
      date: "-",
      time: "-",
      status: "En Attente",
    },
    {
      id: "ECH-514",
      acronym: "PB",
      title: "Développeur Full Stack",
      date: "-",
      time: "-",
      status: "En Attente",
    },
    {
      id: "ECH-515",
      acronym: "NV",
      title: "Développeur Full Stack",
      date: "22/07/2024",
      time: "09:15",
      status: "Confirmé",
    },
    {
      id: "ECH-516",
      acronym: "RD",
      title: "Ingénieur IA",
      date: "-",
      time: "-",
      status: "Reporté",
    },
    {
      id: "ECH-517",
      acronym: "AS",
      title: "Ingénieur IA",
      date: "-",
      time: "-",
      status: "Reporté",
    },
    {
      id: "ECH-518",
      acronym: "LC",
      title: "Ingénieur IA",
      date: "-",
      time: "-",
      status: "Reporté",
    },
    {
      id: "ECH-519",
      acronym: "XF",
      title: "Ingénieur IA",
      date: "-",
      time: "-",
      status: "Reporté",
    },
  ];

  // Filter exchanges based on search term and status
  const filteredExchanges = exchanges.filter((exchange) => {
    const matchesSearch =
      searchTerm === "" ||
      exchange.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exchange.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exchange.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || exchange.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedStatus("All");
  };

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
      <h1 className="text-[35px] leading-[30px] py-4 text-[#324DA9] font-montserrat font-normal">
        Demandes d'Échange
      </h1>
      <div className="bg-white border border-[#E6E7E9] rounded-md w-full space-y-2 h-auto p-2">
        <p className="text-[#38383A] font-montserrat p-2 text-[18px] font-semibold leading-[24px] capitalize">
          Options de recherche
        </p>
        <div className="flex justify-between gap-4 items-center">
          <input
            type="text"
            placeholder="Rechercher par ID, acronyme ou intitulé"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
          />
          <select
            id="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="flex w-[300px] py-2 px-4 rounded-md border border-[#E6E7E9] bg-white"
          >
            <option value="All" className="text-[#38383A]">
              Tous les statuts
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
          <button
            onClick={handleResetFilters}
            className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white"
          >
            <X size={20} />
            <span className="text-[16px]">Réinitialiser</span>
          </button>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[18px] font-semibold leading-[24px] capitalize">
            Demandes d’Échange ({filteredExchanges.length})
          </p>
          <a
            href="/admin/demandes"
            className="flex w-[153px] px-[10px] py-[5px] justify-center items-center gap-[5px] rounded-full border border-[#3855B3]"
          >
            Voir Plus
          </a>
        </div>
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
                {filteredExchanges.map((exchange, index) => (
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
