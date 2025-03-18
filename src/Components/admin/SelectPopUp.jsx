import { X } from "lucide-react";
import React from "react";

const SelectPopUp = ({ consultant, onClose }) => {
  // Assume slot details come from the backend via consultant.slot
  const slot = consultant.slot;

  const handleConfirm = () => {
    if (slot) {
      onClose(slot); // Pass the slot details back to DemandeDetails
    } else {
      alert("No slot available for this consultant.");
    }
  };

  const handleCancel = () => {
    onClose(null); // Indicate cancellation
  };

  return (
    <div className="flex flex-col space-y-4 w-[600px] h-auto mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Header with Consultant Name */}
      <div className="flex items-center justify-between">
        <h2 className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          Confirmer le créneau pour {consultant.NomDeConsultant}
        </h2>
        <X className="cursor-pointer" onClick={handleCancel} />
      </div>

      {/* Slot Details Display */}
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          <strong>Date:</strong> {slot.date}
        </p>
        <p className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          <strong>Heure de début:</strong> {slot.start}
        </p>
        <p className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          <strong>Heure de fin:</strong> {slot.end}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 gap-4">
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors font-montserrat text-[14px] font-normal flex-1"
          onClick={handleCancel}
        >
          Annuler
        </button>
        <button
          className="px-4 py-2 bg-[#173A6D] text-white rounded-md hover:bg-[#122f57] transition-colors font-montserrat text-[14px] font-normal flex-1"
          onClick={handleConfirm}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default SelectPopUp;