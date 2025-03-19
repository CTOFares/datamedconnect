import { Check, Edit, Eye, RotateCcw, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Backdrop } from "@mui/material";

const Demandes = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const navigate = useNavigate();

  const demandeechange = [
    {
      id: "ECH-01",
      NomDentreprise: "Société Générale",
      Email: "contact@societegenerale.com",
      NombreDeRdv: "10",
      Date: "10/11/2025",
      status: "En Attente",
    },
    {
      id: "ECH-02",
      NomDentreprise: "Orange Business",
      Email: "support@orange.com",
      NombreDeRdv: "7",
      Date: "05/10/2025",
      status: "Reporté",
    },
    {
      id: "ECH-03",
      NomDentreprise: "BNP Paribas",
      Email: "info@bnpparibas.com",
      NombreDeRdv: "20",
      Date: "20/12/2025",
      status: "Confirmé",
    },
    {
      id: "ECH-04",
      NomDentreprise: "LE MACIF",
      Email: "fares.safer@gamdjak",
      NombreDeRdv: "15",
      Date: "14/12/2025",
      status: "Confirmé",
    },
    {
      id: "ECH-05",
      NomDentreprise: "Renault Group",
      Email: "admin@renault.com",
      NombreDeRdv: "12",
      Date: "25/09/2025",
      status: "En Attente",
    },
    {
      id: "ECH-06",
      NomDentreprise: "L'Oréal",
      Email: "hr@loreal.com",
      NombreDeRdv: "8",
      Date: "30/11/2025",
      status: "Reporté",
    },
    {
      id: "ECH-07",
      NomDentreprise: "Air France",
      Email: "booking@airfrance.com",
      NombreDeRdv: "18",
      Date: "22/10/2025",
      status: "Confirmé",
    },
    {
      id: "ECH-08",
      NomDentreprise: "TotalEnergies",
      Email: "contact@totalenergies.com",
      NombreDeRdv: "5",
      Date: "12/12/2025",
      status: "En Attente",
    },
  ];

  // Function to parse date strings in "dd/MM/yyyy" format
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  // Filter data based on search term, date range, and status
  const filteredDemandes = demandeechange.filter((request) => {
    const requestDate = parseDate(request.Date);
    const matchesSearch =
      searchTerm === "" ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.NomDentreprise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.Email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate =
      (!dateFrom || requestDate >= dateFrom) &&
      (!dateTo || requestDate <= dateTo);
    const matchesStatus =
      selectedStatus === "All" || request.status === selectedStatus;
    return matchesSearch && matchesDate && matchesStatus;
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
      setSelectedRows(filteredDemandes.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  // Reset all filter inputs
  const handleResetFilters = () => {
    setSearchTerm("");
    setDateFrom(null);
    setDateTo(null);
    setSelectedStatus("All");
  };

  const handleEditClick = (id) => {
    navigate(`/admin/demandes/${id}`);
  };

  // Updated status colors to match actual data
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

  const isAnyRowSelected = selectedRows.length > 0;

  return (
    <div>
      <div className="bg-white border-[#E6E7E9] rounded-md w-full h-auto">
        <div className="justify-between border p-2 rounded-[5px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-4 text-[18px] font-semibold leading-[24px] capitalize">
            Options de recherche
          </p>
          <div className="flex justify-between gap-4 items-center">
            <input
              type="text"
              placeholder="Rechercher par ID, Nom d'Entreprise ou Courriel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[14px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
            />
            <DatePicker
              selected={dateFrom}
              onChange={(date) => setDateFrom(date)}
              className="flex w-[150px] py-2 px-4 rounded-md border border-[#E6E7E9] bg-white"
              placeholderText="Date de début"
              dateFormat="dd/MM/yyyy"
            />
            <DatePicker
              selected={dateTo}
              onChange={(date) => setDateTo(date)}
              className="flex w-[150px] py-2 px-4 rounded-md border border-[#E6E7E9] bg-white"
              placeholderText="Date de fin"
              dateFormat="dd/MM/yyyy"
            />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="flex w-[300px] py-2 px-4 rounded-md border border-[#E6E7E9] bg-white"
            >
              <option value="All">Tous les statuts</option>
              <option value="En Attente">En Attente</option>
              <option value="Reporté">Reporté</option>
              <option value="Confirmé">Confirmé</option>
            </select>
            {/* Reset Filters Button */}
            <button
              onClick={handleResetFilters}
              className="flex w-[300px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white"
            >
              <span className="text-[14px]">Réinitialiser</span>
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[18px] font-semibold leading-[24px] capitalize">
            Demande D'échange
          </p>
          {isAnyRowSelected && (
            <div className="flex gap-2">
              <a
                href="/admin/demandes"
                className="flex w-[153px] px-[10px] py-[5px] text-white bg-[#646d17] justify-center items-center gap-[5px] rounded-full border"
              >
                Clôture
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
                        selectedRows.length === filteredDemandes.length &&
                        filteredDemandes.length > 0
                      }
                    />
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    ECH
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Nom d'Entreprise
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Courriel
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Nombre de Rdv
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
                {filteredDemandes.map((exchange, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        checked={selectedRows.includes(exchange.id)}
                        onChange={() => handleCheckboxChange(exchange.id)}
                      />
                    </td>
                    <td className="py-3 px-4 text-[14px] border-b font-montserrat">
                      {exchange.id}
                    </td>
                    <td className="py-3 px-4 text-[14px] border-b font-montserrat">
                      {exchange.NomDentreprise}
                    </td>
                    <td className="py-3 px-4 text-[14px] border-b font-montserrat">
                      {exchange.Email}
                    </td>
                    <td className="py-3 px-4 text-[14px] border-b font-montserrat">
                      {exchange.NombreDeRdv}
                    </td>
                    <td className="py-3 px-4 text-[14px] border-b font-montserrat">
                      {exchange.Date}
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
                    <td className="flex py-5 h-full px-4 border-b gap-2">
                      <button
                        onClick={() => handleEditClick(exchange.id)}
                        className="text-green-600 hover:text-green-800"
                        aria-label={`Voir l'échange ${exchange.id}`}
                      >
                        <Eye size={20} />
                      </button>
                      <button
                        onClick={() => handleEditClick(exchange.id)}
                        className="text-green-600 hover:text-green-800"
                        aria-label={`Modifier l'échange ${exchange.id}`}
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

export default Demandes;