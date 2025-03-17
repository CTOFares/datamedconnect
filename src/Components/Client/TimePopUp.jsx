import React, { useState } from "react";
import { X } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 18) slots.push(`${hour.toString().padStart(2, "0")}:30`);
  }
  return slots;
};

const TimePopUp = ({ onClose, slotIndex, consultantId, initialDate, initialStartTime, initialEndTime }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(initialStartTime || null);
  const [selectedEndTime, setSelectedEndTime] = useState(initialEndTime || null);
  const [isEndTimeSelection, setIsEndTimeSelection] = useState(false);
  const timeSlots = generateTimeSlots();

  const handleTimeSelect = (time) => {
    if (!isEndTimeSelection) {
      setSelectedStartTime(time);
      setSelectedEndTime(null); // Reset end time when start time changes
      setIsEndTimeSelection(true);
    } else {
      setSelectedEndTime(time);
    }
  };

  const handleConfirm = () => {
    if (selectedDate && selectedStartTime && selectedEndTime) {
      const start = new Date(`1970-01-01T${selectedStartTime}:00`);
      const end = new Date(`1970-01-01T${selectedEndTime}:00`);
      if (end > start) {
        onClose(selectedDate, selectedStartTime, selectedEndTime);
      } else {
        alert("End time must be after start time.");
      }
    } else {
      alert("Please select a date, start time, and end time.");
    }
  };

  const handleCancel = () => {
    onClose(null, null, null);
  };

  return (
    <div className="flex flex-col space-y-4 w-[600px] h-auto mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          Sélectionner une heure
        </h2>
        <X onClick={handleCancel} className="cursor-pointer" />
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col w-2/3">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-full rounded-[10px] bg-white"
          />
        </div>
        <div className="space-y-4 w-1/3">
          <h2 className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
            {isEndTimeSelection ? "Heure de fin" : "Heure de début"}
          </h2>
          <div className="flex flex-col space-y-2 overflow-y-auto h-[260px] scrollbar-hide">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                className={`w-full border border-[#D9D9D9] p-2 text-center rounded-md cursor-pointer text-[14px] font-montserrat font-normal ${
                  (!isEndTimeSelection && selectedStartTime === time) ||
                  (isEndTimeSelection && selectedEndTime === time)
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white"
                } hover:bg-blue-50 transition-colors ${
                  isEndTimeSelection && selectedStartTime && time <= selectedStartTime
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleTimeSelect(time)}
                disabled={isEndTimeSelection && selectedStartTime && time <= selectedStartTime}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors font-montserrat text-[14px] font-normal flex-1"
        >
          Fermer
        </button>
        <button
          onClick={handleConfirm}
          className="px-4 py-2 bg-[#173A6D] text-white rounded-md hover:bg-[#122f57] transition-colors font-montserrat text-[14px] font-normal flex-1"
          disabled={!selectedStartTime || !selectedEndTime}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default TimePopUp;