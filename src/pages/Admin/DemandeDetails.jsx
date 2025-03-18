import { Check, ChevronRight, Edit, Trash, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SelectPopUp from "../../Components/admin/SelectPopUp";

const DemandeDetails = () => {
  const location = useLocation();
  const path = location.pathname
    .split("/")[2]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // State with slot data added to consultants
  const [condidat, setCondidat] = useState([
    {
      id: "CONS-01",
      NomDeConsultant: "Jean Dupont",
      Email: "jean.dupont@example.com",
      Numero: "0123456789",
      Date: "15/10/2025",
      status: "Point Fixé",
      slot: { date: "2023-10-15", start: "09:00", end: "10:00" },
    },
    {
      id: "CONS-02",
      NomDeConsultant: "Marie Curie",
      Email: "marie.curie@example.com",
      Numero: "0987654321",
      Date: "20/10/2025",
      status: "En Cours",
      slot: { date: "2023-10-20", start: "10:00", end: "11:00" },
    },
    {
      id: "CONS-03",
      NomDeConsultant: "Albert Einstein",
      Email: "albert.einstein@example.com",
      Numero: "1122334455",
      Date: "25/10/2025",
      status: "Reporté",
      slot: { date: "2023-10-25", start: "14:00", end: "15:00" },
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "En Cours":
        return "bg-green-100 text-green-800";
      case "Reporté":
        return "bg-red-100 text-red-800";
      case "Point Fixé":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEditClick = (id) => {
    const consultant = condidat.find((c) => c.id === id);
    setSelectedConsultant(consultant);
    setShowPopup(true);
  };

  const handleDeleteClick = (id) => {
    setCondidat(condidat.filter((consultant) => consultant.id !== id));
  };

  const handlePopupClose = (selectedSlot) => {
    if (selectedSlot && selectedConsultant) {
      // Update the consultant's Date and status
      setCondidat((prev) =>
        prev.map((c) =>
          c.id === selectedConsultant.id
            ? { ...c, Date: selectedSlot.date, status: "Point Fixé" }
            : c
        )
      );
    }
    setShowPopup(false);
  };

  return (
    <div>
      <div className="flex gap-2 py-4">
        <p className="text-[#04B4E2] font-montserrat text-[16px] font-medium leading-[120.402%]">
          {path}
        </p>
        <ChevronRight color="#04B4E2" size={20} />
        <p className="text-[#04B4E2] font-montserrat text-[16px] font-medium leading-[120.402%]">
          Echange ID:
        </p>
      </div>
      <div className="flex w-full p-4 py-4 items-center gap-3 justify-between rounded-[8px] border border-[#E6E7E9] bg-white">
        <div className="w-1/3 flex flex-col justify-between">
          <div className="flex py-3 justify-between">
            <p className="text-[#38383A] font-montserrat text-[18px] font-semibold leading-[28px]">
              ID Client
            </p>
            <p className="text-[#919294] font-montserrat text-[16px] font-normal leading-[24px]">
              REQ-897-P
            </p>
          </div>
          <div className="flex py-3 justify-between">
            <p className="text-[#38383A] font-montserrat text-[18px] font-semibold leading-[28px]">
              Nom Client
            </p>
            <p className="text-[#919294] font-montserrat text-[16px] font-normal leading-[24px]">
              LA MACIF
            </p>
          </div>
        </div>
        <div className="h-full w-[1px] bg-[#E6E7E9]"></div>
        <div className="flex w-1/3 flex-col justify-between">
          <div className="flex py-3 justify-between">
            <p className="text-[#38383A] font-montserrat text-[18px] font-semibold leading-[28px]">
              Email
            </p>
            <p className="text-[#919294] font-montserrat text-[16px] font-normal leading-[24px]">
              jordan.s@skyenterprises.com
            </p>
          </div>
          <div className="flex py-3 justify-between">
            <p className="text-[#38383A] font-montserrat text-[18px] font-semibold leading-[28px]">
              Date
            </p>
            <p className="text-[#919294] font-montserrat text-[16px] font-normal leading-[24px]">
              23/02/2025
            </p>
          </div>
        </div>
        <div className="h-full w-[1px] bg-[#E6E7E9]"></div>
        <div className="flex w-1/3 justify-between">
          <p className="text-[#38383A] font-montserrat text-[18px] font-semibold leading-[28px]">
            Statut
          </p>
          <span className="inline-flex px-2 py-2 rounded-full text-xs font-montserrat font-medium bg-pink-100 text-pink-800">
            En Cours
          </span>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-md">
        <div className="flex justify-between border p-2 rounded-tl-[10px] rounded-tr-[10px] border-[#E6E7E9]">
          <p className="text-[#38383A] font-montserrat p-2 text-[16px] font-semibold leading-[24px] capitalize">
            Candidat
          </p>
        </div>
        <div className="rounded-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    ID
                  </th>
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Nom du Consultant
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
                  <th className="py-4 px-4 border-b text-left text-sm font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {condidat.map((approval, index) => (
                  <tr key={index} className="hover:bg-gray-50">
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
                        aria-label={`Edit consultant ${approval.id}`}
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(approval.id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Delete consultant ${approval.id}`}
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <SelectPopUp
            consultant={selectedConsultant}
            onClose={handlePopupClose}
          />
        </div>
      )}
    </div>
  );
};

export default DemandeDetails;