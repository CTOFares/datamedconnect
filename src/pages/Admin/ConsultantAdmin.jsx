import { Check, Delete, Edit, Eye, Search, Trash, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// Define ECHANGE_STATUS once, matching the aprobation statuses
const ECHANGE_STATUS = [
  { value: "Qualifié", label: "Qualifié" },
  { value: "Non Qualifié", label: "Non Qualifié" },
];

const ConsultantAdmin = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Initial empty string
  const [selectedStatus, setSelectedStatus] = useState("All");
  const navigate = useNavigate();

  const aprobation = [
    {
      id: "CON-1250",
      NomDeConsultant: "Jean Dupont",
      Email: "jean.dupont@example.com",
      Numero: "0123456789",
      Date: "15/10/2025",
      status: "Qualifié",
    },
    {
      id: "CON-1251",
      NomDeConsultant: "Marie Curie",
      Email: "marie.curie@example.com",
      Numero: "0987654321",
      Date: "20/10/2025",
      status: "Qualifié",
    },
    {
      id: "CON-1252",
      NomDeConsultant: "Albert Einstein",
      Email: "albert.einstein@example.com",
      Numero: "1122334455",
      Date: "25/10/2025",
      status: "Non Qualifié",
    },
    {
      id: "CON-1253",
      NomDeConsultant: "Isaac Newton",
      Email: "isaac.newton@example.com",
      Numero: "2233445566",
      Date: "30/10/2025",
      status: "Qualifié",
    },
    {
      id: "CON-1254",
      NomDeConsultant: "Charles Darwin",
      Email: "charles.darwin@example.com",
      Numero: "5566778899",
      Date: "05/11/2025",
      status: "Non Qualifié",
    },
    {
      id: "CON-1255",
      NomDeConsultant: "Nikola Tesla",
      Email: "nikola.tesla@example.com",
      Numero: "6677889900",
      Date: "10/11/2025",
      status: "Qualifié",
    },
  ];

  // Filter data based on search term, phone number, and status
  const filteredAprobation = aprobation.filter((consultant) => {
    const matchesSearch =
      searchTerm === "" ||
      consultant.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.NomDeConsultant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.Email.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Safely handle phoneNumber being undefined
    const phoneFilter = phoneNumber || ""; // Default to empty string if undefined
    const matchesPhone =
      phoneFilter === "" ||
      consultant.Numero.includes(phoneFilter.replace(/\D/g, ""));
    
    const matchesStatus =
      selectedStatus === "All" || consultant.status === selectedStatus;
    
    return matchesSearch && matchesPhone && matchesStatus;
  });

  // Handle individual checkbox toggle
  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle "Select All" checkbox for filtered rows
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRows(filteredAprobation.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  // Reset all filter inputs
  const handleResetFilters = () => {
    setSearchTerm("");
    setPhoneNumber(""); // Explicitly reset to empty string
    setSelectedStatus("All");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Qualifié":
        return "bg-green-100 text-green-800";
      case "Non Qualifié":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEditClick = (id) => {
    navigate(`/admin/consultant/${id}`);
  };

  const isAnyRowSelected = selectedRows.length > 0;

  return (
    <div>
      <div className="bg-white border-[#E6E7E9] rounded-md w-full h-auto">
        <div className="justify-between border p-2 rounded-[5px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat py-5 text-[16px] font-semibold leading-[24px] capitalize">
            Options de recherche
          </p>
          <div className="flex justify-between gap-4 items-center">
            <input
              type="text"
              placeholder="Rechercher par ID, Nom de Consultant ou Courriel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
            />
            <div className="rounded border border-[#E6E7E9] h-auto px-4 py-2 font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]">
              <PhoneInput
                placeholder="Numéro de téléphone"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>
            <select
              id="contractType"
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
      </div>
      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[16px] font-semibold leading-[24px] capitalize">
            En attente d'approbations ({filteredAprobation.length})
          </p>
          {isAnyRowSelected && (
            <div className="flex gap-2">
              <a
                href="/admin/demandes"
                className="flex w-[153px] px-[10px] py-[5px] text-white bg-[#ED6567] justify-center items-center gap-[5px] rounded-full border"
              >
                Refusé
                <X />
              </a>
              <a
                href="/admin/demandes"
                className="flex w-[153px] text-white px-[10px] py-[5px] bg-[#173A6D] justify-center items-center gap-[5px] rounded-full border border-[#3855B3]"
              >
                Approuver
                <Check />
              </a>
            </div>
          )}
        </div>
        <div className="rounded-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                      onChange={handleSelectAllChange}
                      checked={
                        selectedRows.length === filteredAprobation.length &&
                        filteredAprobation.length > 0
                      }
                    />
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    ID
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Nom de Consultant
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Courriel
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Numéro
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Statut
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAprobation.map((approval, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        checked={selectedRows.includes(approval.id)}
                        onChange={() => handleCheckboxChange(approval.id)}
                      />
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {approval.id}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {approval.NomDeConsultant}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {approval.Email}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {approval.Numero}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {approval.Date}
                    </td>
                    <td className="py-3 px-4 border-b">
                      <span
                        className={`inline-flex px-2 py-2 rounded-full text-xs font-montserrat font-medium ${getStatusColor(
                          approval.status
                        )}`}
                      >
                        {approval.status}
                      </span>
                    </td>
                    <td className="flex py-5 h-full px-4 border-b gap-2">
                      <button
                        onClick={() => handleEditClick(approval.id)}
                        className="text-green-600 hover:text-green-800"
                        aria-label={`Voir le consultant ${approval.id}`}
                      >
                        <Eye size={20} />
                      </button>
                      <button
                        onClick={() => handleEditClick(approval.id)}
                        className="text-green-600 hover:text-green-800"
                        aria-label={`Modifier le consultant ${approval.id}`}
                      >
                        <Edit size={20} />
                      </button>
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

export default ConsultantAdmin;