import React, { useState, useEffect } from "react";
import {
  AlignJustify,
  CircleDotDashedIcon,
  LayoutGrid,
  MapPin,
  Search,
} from "lucide-react";
import Card from "../../../Components/Client/Card"; // Ensure this path is correct
import { consultants } from "../../../Utils/mockdata";
import { useNavigate } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FRENCH_CITIES = [
  { value: "Paris", label: "Paris" },
  { value: "Marseille", label: "Marseille" },
  { value: "Lyon", label: "Lyon" },
  // Add more cities as needed
];

const RechercheConsultant = () => {
  const [experience, setExperience] = useState({ min: 0, max: 30 });
  const [dailyRate, setDailyRate] = useState({ min: 0, max: 17 }); // New state for Tarif Journalier (in thousands)
  const [viewMode, setViewMode] = useState("list");
  const [annualSalary, setAnnualSalary] = useState({ min: 30, max: 70 }); // Renamed 'tarif' to 'annualSalary' for clarity

  const navigate = useNavigate();

  // Debug state updates
  useEffect(() => {
    console.log("Updated daily rate state:", dailyRate);
    console.log("Updated annual salary state:", annualSalary);
  }, [dailyRate, annualSalary]);

  const handleExperienceChange = (e) => {
    setExperience(parseInt(e.target.value, 10));
  };

  // Function to format the value as thousands of euros
  const formatTarif = (value) => {
    return `${(value * 100).toLocaleString("fr-FR")} `;
  };
  const formatSalary = (value) => {
    return `${(value * 1000).toLocaleString("fr-FR")} `;
  };

  return (
    <div className="pb-12">
      <h1 className="text-[35px] leading-[30px] py-3 px-4 text-[#324DA9] font-montserrat font-normal">
        Rechercher Un Consultant
      </h1>
      <div className="bg-white  border-[#E6E7E9] rounded-md w-full h-auto">
        <form action="filter" className="space-y-4">
          <div className="flex justify-between gap-4 items-center">
            <div className="border-[#E6E7E9] flex gap-4 px-4 py-2 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-3 items-center">
                <input
                  id="cdi-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                />
                <label
                  htmlFor="cdi-checkbox"
                  className="text-[16px] font-montserrat"
                >
                  CDI
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  id="freelance-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                />
                <label
                  htmlFor="freelance-checkbox"
                  className="text-[16px] font-montserrat"
                >
                  FreeLance
                </label>
              </div>
            </div>
            <input
              type="text"
              placeholder="Full Stack Developer"
              className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
            />
            <button className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white">
              <Search size={20} />
              <span className="text-[16px]">Rechercher</span>
            </button>
          </div>
          <div className="flex justify-between gap-6">
            <div className="border-[#E6E7E9] justify-between w-full flex gap-2 px-4 py-2 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-4 items-center justify-start text-[16px]">
                <CircleDotDashedIcon className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="100km"
                  className="text-[16px] border-none w-1/2 bg-transparent text-[#38383A] focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <MapPin color="#000000" strokeWidth={1.5} />
                <select
                  id="contractType"
                  className="flex w-[300px] px-4 py-2 rounded-md bg-[#F8F8FA] hover:bg-none focus:outline-none"
                >
                  <option value="" className="text-[#38383A]" disabled hidden>
                    Ex: Confirmé, En Attente
                  </option>
                  {FRENCH_CITIES.map((type) => (
                    <option
                      className="text-[#38383A]"
                      key={type.value}
                      value={type.value}
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full px-4 py-2">
              <div className="flex items-center gap-4">
                <span className="text-black font-medium">Expérience :</span>
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex items-center w-full gap-3">
                    <p className="range-value">{experience.min}</p>
                    <RangeSlider
                      min={0}
                      max={37} // Adjusted max to 100 (representing 100,000 €)
                      value={[experience.min, experience.max]}
                      onInput={(value) => {
                        console.log("Daily rate onInput event:", value);
                        if (Array.isArray(value) && value.length === 2) {
                          const newMin = Math.min(value[0], value[1]);
                          const newMax = Math.max(value[0], value[1]);
                          console.log("New daily rate values:", [
                            newMin,
                            newMax,
                          ]);
                          setExperience({ min: newMin, max: newMax });
                        } else {
                          console.error(
                            "Invalid daily rate value received:",
                            value
                          );
                        }
                      }}
                      className="range-slider"
                      style={{
                        "--min-value": dailyRate.min,
                        "--max-value": dailyRate.max,
                      }}
                    />
                    <p className="range-value">{experience.max}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full px-4 py-2">
              <div className="space-y-2">
                <span className="text-black font-medium">
                  Tarif Journalier en €:{" "}
                </span>
                <div className="flex items-center gap-2">
                  <p className="range-value">
                    {formatTarif(dailyRate.min)}
                  </p>
                  <RangeSlider
                    min={0}
                    max={17} // Adjusted max to 100 (representing 100,000 €)
                    value={[dailyRate.min, dailyRate.max]}
                    onInput={(value) => {
                      console.log("Daily rate onInput event:", value);
                      if (Array.isArray(value) && value.length === 2) {
                        const newMin = Math.min(value[0], value[1]);
                        const newMax = Math.max(value[0], value[1]);
                        console.log("New daily rate values:", [newMin, newMax]);
                        setDailyRate({ min: newMin, max: newMax });
                      } else {
                        console.error(
                          "Invalid daily rate value received:",
                          value
                        );
                      }
                    }}
                    className="range-slider"
                    style={{
                      "--min-value": dailyRate.min,
                      "--max-value": dailyRate.max,
                    }}
                  />
                  <p className="range-value">{formatTarif(dailyRate.max)}</p>
                </div>
              </div>
            </div>
            <p className="items-center justify-center p-4">ou</p>
            <div className="w-full px-4 py-2">
              <div className="space-y-2">
                <span className="text-black font-medium">
                  Salaire Annuel en €:
                </span>
                <div className="flex items-center gap-2">
                  <p className="range-value">
                    {formatSalary(annualSalary.min)}
                  </p>
                  <RangeSlider
                    min={30}
                    max={70}
                    value={[annualSalary.min, annualSalary.max]}
                    onInput={(value) => {
                      console.log("Annual salary onInput event:", value);
                      if (Array.isArray(value) && value.length === 2) {
                        const newMin = Math.min(value[0], value[1]);
                        const newMax = Math.max(value[0], value[1]);
                        console.log("New annual salary values:", [
                          newMin,
                          newMax,
                        ]);
                        setAnnualSalary({ min: newMin, max: newMax });
                      } else {
                        console.error(
                          "Invalid annual salary value received:",
                          value
                        );
                      }
                    }}
                    className="range-slider"
                    style={{
                      "--min-value": annualSalary.min,
                      "--max-value": annualSalary.max,
                    }}
                  />
                  <p className="range-value">
                    {formatSalary(annualSalary.max)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4 space-y-4">
        <div className="justify-between flex items-center">
          <p className="text-[#696A6B] font-montserrat text-base font-medium leading-[24px]">
            0 a 15 sur 110 résultats filtrés
          </p>
          <div className="flex p-1 gap-2 bg-[#F8F8FA] rounded-md">
            <button
              className={`p-1 rounded-sm ${
                viewMode === "list" ? "bg-[#e5e5ed]" : ""
              } hover:bg-[#e5e5ed]`}
              onClick={() => setViewMode("list")}
            >
              <AlignJustify color="#000000" strokeWidth={1.5} />
            </button>
            <button
              className={`p-1 rounded-sm ${
                viewMode === "grid" ? "bg-[#e5e5ed]" : ""
              } hover:bg-[#e5e5ed]`}
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid color="#000000" strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div
          className={
            viewMode === "list" ? "space-y-3" : "grid grid-cols-2 gap-4"
          }
        >
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              onClick={() =>
                navigate(
                  `/rechercher-un-consultant/${consultant.id.replace("#", "")}`
                )
              }
              className="cursor-pointer"
            >
              <Card {...consultant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RechercheConsultant;
