import { Check, Edit, Eye, Search, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Demandes = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
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
  // Function to handle checkbox toggle
  const handleCheckboxChange = (id) => {
    setSelectedRows(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((rowId) => rowId !== id) // Deselect
          : [...prevSelected, id] // Select
    );
  };

  // Function to handle "Select All" checkbox
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRows(demandeechange.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm, "Selected Date:", selectedDate);
    // Add filtering logic here if needed
  };

  const handleEditClick = (id) => {
    navigate(`/admin/demandes/${id}`); // Navigate to the edit page
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

  const isAnyRowSelected = selectedRows.length > 0;

  return (
    <div>
      <div className="bg-white border-[#E6E7E9] rounded-md w-full h-auto">
        <div className="justify-between border p-2 rounded-[5px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat py-5 text-[16px] font-semibold leading-[24px] capitalize">
            Options de recherche
          </p>
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="flex justify-between gap-4 items-center">
              <input
                type="text"
                placeholder="Fares Safer"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
              />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="flex w-[300px] py-2 px-4 rounded-md border border-[#E6E7E9] bg-white"
                placeholderText="Select a date"
                dateFormat="dd/MM/yyyy"
              />
              <button
                type="submit"
                className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white"
              >
                <Search size={20} />
                <span className="text-[16px]">Rechercher</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[16px] font-semibold leading-[24px] capitalize">
            Demande D'échange
          </p>
          {/* Conditional rendering of buttons */}
          {isAnyRowSelected ? (
            <div className="flex gap-2">
              <a
                href="/admin/demandes"
                className="flex w-[153px] px-[10px] py-[5px] text-white  bg-[#646d17] justify-center items-center gap-[5px] rounded-full border"
              >
                Clôture
                <Check />
              </a>
            </div>
          ) : (
            <></>
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
                        selectedRows.length === demandeechange.length &&
                        demandeechange.length > 0
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
                    Email
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {demandeechange.map((exchange, index) => (
                  <tr key={index} className={`hover:bg-gray-50`}>
                    <td className="py-3 px-4 border-b">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        checked={selectedRows.includes(exchange.id)}
                        onChange={() => handleCheckboxChange(exchange.id)}
                      />
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.id}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.NomDentreprise}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.Email}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
                      {exchange.NombreDeRdv}
                    </td>
                    <td className="py-3 px-4 border-b font-montserrat">
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
                        aria-label={`Edit consultant ${exchange.id}`}
                      >
                        <Eye size={20} />
                      </button>
                      <button
                        onClick={() => handleEditClick(exchange.id)}
                        className="text-green-600 hover:text-green-800"
                        aria-label={`Edit consultant ${exchange.id}`}
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
