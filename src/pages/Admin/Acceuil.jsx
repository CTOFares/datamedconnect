import { Check, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "../../Components/admin/Card";

const ECHANGE_STATUS = [
  { value: "En Attente", label: "En Attente" },
  { value: "Reporté", label: "Reporté" },
  { value: "Confirmé", label: "Confirmé" },
];

const Acceuil = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [period, setPeriod] = useState("30days");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle checkbox toggle for approvals table
  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle "Select All" checkbox
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRows(aprobation.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const demandeechange = [
    {
      id: "CLI-01",
      NomDentreprise: "Société Générale",
      Email: "contact@societegenerale.com",
      NombreDeRdv: "10",
      Date: "10/11/2025",
      status: "En Attente",
    },
    {
      id: "CLI-02",
      NomDentreprise: "Orange Business",
      Email: "support@orange.com",
      NombreDeRdv: "7",
      Date: "05/10/2025",
      status: "Reporté",
    },
    {
      id: "CLI-03",
      NomDentreprise: "BNP Paribas",
      Email: "info@bnpparibas.com",
      NombreDeRdv: "20",
      Date: "20/12/2025",
      status: "Confirmé",
    },
    {
      id: "CLI-04",
      NomDentreprise: "LE MACIF",
      Email: "fares.safer@example.com",
      NombreDeRdv: "15",
      Date: "14/12/2025",
      status: "Confirmé",
    },
    {
      id: "CLI-05",
      NomDentreprise: "Renault Group",
      Email: "admin@renault.com",
      NombreDeRdv: "12",
      Date: "25/09/2025",
      status: "En Attente",
    },
    {
      id: "CLI-06",
      NomDentreprise: "L'Oréal",
      Email: "hr@loreal.com",
      NombreDeRdv: "8",
      Date: "30/11/2025",
      status: "Reporté",
    },
    {
      id: "CLI-07",
      NomDentreprise: "Air France",
      Email: "booking@airfrance.com",
      NombreDeRdv: "18",
      Date: "22/10/2025",
      status: "Confirmé",
    },
    {
      id: "CLI-08",
      NomDentreprise: "TotalEnergies",
      Email: "contact@totalenergies.com",
      NombreDeRdv: "5",
      Date: "12/12/2025",
      status: "En Attente",
    },
  ];

  const aprobation = [
    {
      id: "CONS-01",
      NomDeConsultant: "Jean Dupont",
      Email: "jean.dupont@example.com",
      Numero: "0123456789",
      Date: "15/10/2025",
      status: "En Attente",
    },
    {
      id: "CONS-02",
      NomDeConsultant: "Marie Curie",
      Email: "marie.curie@example.com",
      Numero: "0987654321",
      Date: "20/10/2025",
      status: "Confirmé",
    },
    {
      id: "CONS-03",
      NomDeConsultant: "Albert Einstein",
      Email: "albert.einstein@example.com",
      Numero: "1122334455",
      Date: "25/10/2025",
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

  const isAnyRowSelected = selectedRows.length > 0;

  const handleNavigateQualif = () => {
    navigate("/admin/consultant");
  };
  // Handle navigation to /admin/demandes
  const handleNavigateToDemandes = () => {
    navigate("/admin/demandes");
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card
          number="135"
          description="Demande Active"
          color="text-[#173A6D]"
          change="up"
        />
        <Card
          number="18"
          description="Consultant qualifiée"
          color="text-[#173A6D]"
          change="down"
        />
        <Card
          number="12"
          description="Client"
          color="text-[#37C2E8]"
          change="up"
        />
        <Card
          number="567"
          description="Consultant non qualifiée"
          color="text-[#DB4A4C]"
          change="up"
        />
      </div>

      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[18px] font-semibold leading-[24px] capitalize">
            Demande D’échange
          </p>
          <button
            onClick={handleNavigateToDemandes} // Add onClick handler
            className="flex w-[153px] px-[10px] py-[5px] justify-center items-center gap-[5px] rounded-full border border-[#3855B3]"
          >
            Voir Plus
          </button>
        </div>
        <div className="rounded-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-4 border-b text-left text-[16px] text-sm font-medium text-gray-600">
                    ID Client
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
                </tr>
              </thead>
              <tbody>
                {demandeechange.map((exchange, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {exchange.id}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {exchange.NomDentreprise}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {exchange.Email}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {exchange.NombreDeRdv}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* En Attente d'Approbations Table */}
      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[18px] font-semibold leading-[24px] capitalize">
            en attente d'approbations ({aprobation.length})
          </p>
          {isAnyRowSelected ? (
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
          ) : (
            <button
              onClick={handleNavigateQualif} // Add onClick handler
              className="flex w-[153px] px-[10px] py-[5px] justify-center items-center gap-[5px] rounded-full border border-[#3855B3]"
            >
              Voir Plus
            </button>
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
                        selectedRows.length === aprobation.length &&
                        aprobation.length > 0
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
                    Email
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Numero
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {aprobation.map((approval, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        checked={selectedRows.includes(approval.id)}
                        onChange={() => handleCheckboxChange(approval.id)}
                      />
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {approval.id}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {approval.NomDeConsultant}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
                      {approval.Email}
                    </td>
                    <td className="py-3 px-4 border-b text-[14px] font-montserrat">
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

export default Acceuil;
