import React, { useState } from "react";
import { useParams } from "react-router-dom";
import consultants from "../../../Utils/mockdata"; // Adjust path as needed
import { Plus } from "lucide-react";
import TimePopUp from "../../../Components/Client/TimePopUp"; // Adjust path as needed

const ReserverCreneau = () => {
  const { id } = useParams();
  const consultantId = `#${id}`;
  const consultant = consultants.find((c) => c.id === consultantId);

  if (!consultant) {
    return <div className="text-red-500">Consultant not found.</div>;
  }

  // State for popup and slot selections
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([
    { date: null, startTime: null, endTime: null },
    { date: null, startTime: null, endTime: null },
    { date: null, startTime: null, endTime: null },
  ]);

  // Open the popup for a specific slot
  const handleSlotClick = (slotIndex) => {
    setSelectedSlot(slotIndex);
    setIsPopupOpen(true);
  };

  // Close the popup and update the selected slot
  const handleClosePopup = (date, startTime, endTime) => {
    if (date && startTime && endTime) {
      const newSlots = [...slots];
      newSlots[selectedSlot] = { date, startTime, endTime };
      setSlots(newSlots);
    }
    setIsPopupOpen(false);
    setSelectedSlot(null);
  };

  // Render each slot based on whether it has a selection
  const renderSlot = (slotIndex) => {
    const slot = slots[slotIndex];
    if (slot && slot.date && slot.startTime && slot.endTime) {
      // Get day of the week in French, capitalized
      const dayOfWeek = slot.date.toLocaleDateString("fr-FR", {
        weekday: "long",
      });
      const capitalizedDay =
        dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
      // Format date as DD/MM/YYYY
      const formattedDate = slot.date.toLocaleDateString("fr-FR");
      // Calculate duration in minutes
      const startHour = parseInt(slot.startTime.split(":")[0]);
      const startMinute = parseInt(slot.startTime.split(":")[1]);
      const endHour = parseInt(slot.endTime.split(":")[0]);
      const endMinute = parseInt(slot.endTime.split(":")[1]);
      const duration =
        endHour * 60 + endMinute - (startHour * 60 + startMinute);
      // Format time range with colons (e.g., "10:00-10:30")
      const timeRange = `${slot.startTime}-${slot.endTime}`;

      return (
        <div
          className="w-full items-center cursor-pointer justify-start flex flex-col p-4 space-y-2 rounded-md bg-white shadow-sm border-[#D9D9D9] hover:border-[#2D4C7B]"
          onClick={() => handleSlotClick(slotIndex)} // Allow editing
        >
          <h1 className="items-start w-full text-[#2D4C7B] font-montserrat text-[20px] font-semibold leading-[120.402%]">
            {capitalizedDay}
          </h1>
          <div className="flex w-full text-[#04B4E2] font-montserrat text-[16px] font-normal leading-[120.402%] justify-between">
            <p>{timeRange}</p>
            <p className="text-[#2D4D7B] font-montserrat text-[16px] font-normal leading-[120.402%]">
              {duration}'
            </p>
          </div>
          <p className="text-[#000] w-full font-montserrat text-[16px] font-medium leading-[120.402%]">
            {formattedDate}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className="border-2 w-full items-center cursor-pointer justify-center flex p-6 rounded-md border-dashed border-[#D9D9D9] hover:border-[#2D4C7B]"
          onClick={() => handleSlotClick(slotIndex)}
        >
          <Plus />
        </div>
      );
    }
  };

  return (
    <div className="space-y-4 my-2 mx-10 relative">
      <p className="text-[#04B4E2] font-montserrat text-[16px] font-medium leading-[120.402%]">
        Réserver Un Créneau : {consultant.id}
      </p>
      <div className="space-y-4">
        <div className="flex justify-between">
          <h1 className="text-[#141414] font-montserrat text-[30px] font-semibold leading-[120.402%]">
            Choisissez des Créneaux
          </h1>
          <button className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white">
            <span className="text-[16px]">Confirmer</span>
          </button>{" "}
        </div>

        <p className="text-[#535353] font-montserrat text-[12px] font-normal leading-[120.402%]">
          Veuillez Ajouter au moins 3 Créneaux
        </p>
      </div>
      <div className="flex justify-between gap-4">
        {[0, 1, 2].map((index) => renderSlot(index))}
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0  w-screen min-h-screen bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
            <TimePopUp
              onClose={(date, startTime, endTime) =>
                handleClosePopup(date, startTime, endTime)
              }
              slotIndex={selectedSlot}
              consultantId={consultantId}
              initialDate={slots[selectedSlot]?.date}
              initialStartTime={slots[selectedSlot]?.startTime}
              initialEndTime={slots[selectedSlot]?.endTime}
            />

        </div>
      )}
    </div>
  );
};

export default ReserverCreneau;
