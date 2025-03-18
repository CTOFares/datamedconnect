import React, { useState, useEffect } from "react";
import {
  AlignJustify,
  CircleDotDashedIcon,
  LayoutGrid,
  MapPin,
  X,
} from "lucide-react";
import Card from "../../../Components/Client/Card";
import { consultants } from "../../../Utils/mockdata";
import { useNavigate } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FRENCH_CITIES = [
  { value: "Paris", label: "Paris" },
  { value: "Marseille", label: "Marseille" },
  { value: "Lyon", label: "Lyon" },
  { value: "Bordeaux", label: "Bordeaux" },
  { value: "Toulouse", label: "Toulouse" },
  { value: "Nice", label: "Nice" },
];

const RechercheConsultant = () => {
  const [viewMode, setViewMode] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCDI, setIsCDI] = useState(false);
  const [isFreelance, setIsFreelance] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");
  const [experience, setExperience] = useState({ min: 0, max: 30 });
  const [dailyRate, setDailyRate] = useState({ min: 0, max: 2000 }); // Broadened to include all rates
  const [annualSalary, setAnnualSalary] = useState({ min: 0, max: 1000 }); // Broadened to include all estimated salaries

  const navigate = useNavigate();

  // Debug state updates
  useEffect(() => {
    console.log("Experience:", experience);
    console.log("Daily Rate:", dailyRate);
    console.log("Annual Salary:", annualSalary);
    console.log("Filtered Consultants:", filteredConsultants);
  }, [experience, dailyRate, annualSalary]);

  // Parse experience string to number (e.g., "7+" -> 7)
  const parseExperience = (exp) => {
    return parseInt(exp.replace("+", ""), 10) || 0;
  };

  // Filter consultants based on all criteria
  const filteredConsultants = consultants.filter((consultant) => {
    // Keyword filter (ID, Name, Role, Skills)
    const matchesSearch =
      searchTerm === "" ||
      consultant.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.roles.some((role) =>
        role.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      consultant.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Mission filter (CDI, Freelance)
    const matchesMission =
      (!isCDI && !isFreelance) ||
      (isCDI && consultant.mission === "CDI") ||
      (isFreelance && consultant.mission === "Freelance");

    // City filter
    const matchesCity =
      selectedCity === "All" ||
      consultant.location.toLowerCase().includes(selectedCity.toLowerCase());

    // Experience filter
    const consultantExperience = parseExperience(consultant.experience);
    const matchesExperience =
      consultantExperience >= experience.min &&
      consultantExperience <= experience.max;

    // Daily Rate filter
    const consultantRate = Number(consultant.rate); // Ensure rate is a number
    const matchesDailyRate =
      consultantRate >= dailyRate.min && consultantRate <= dailyRate.max;

    // Annual Salary filter (estimated from daily rate: rate * 220 days / 1000 for thousands)
    const estimatedAnnualSalary = (consultantRate * 220) / 1000;
    const matchesAnnualSalary =
      estimatedAnnualSalary >= annualSalary.min &&
      estimatedAnnualSalary <= annualSalary.max;

    // Log filtering steps for debugging
    console.log(`Consultant ${consultant.id}:`, {
      matchesSearch,
      matchesMission,
      matchesCity,
      matchesExperience,
      matchesDailyRate,
      matchesAnnualSalary,
      consultantExperience,
      consultantRate,
      estimatedAnnualSalary,
    });

    return (
      matchesSearch &&
      matchesMission &&
      matchesCity &&
      matchesExperience &&
      matchesDailyRate &&
      matchesAnnualSalary
    );
  });

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setIsCDI(false);
    setIsFreelance(false);
    setSelectedCity("All");
    setExperience({ min: 0, max: 30 });
    setDailyRate({ min: 0, max: 2000 });
    setAnnualSalary({ min: 0, max: 1000 });
  };

  // Format values for display
  const formatTarif = (value) => `${value.toLocaleString("fr-FR")} €`;
  const formatSalary = (value) => `${(value * 1000).toLocaleString("fr-FR")} €`;

  return (
    <div className="pb-12">
      <h1 className="text-[35px] leading-[30px] py-3 px-4 text-[#324DA9] font-montserrat font-normal">
        Rechercher un Consultant
      </h1>
      <div className="bg-white border-[#E6E7E9] rounded-md w-full h-auto p-4">
        <div className="space-y-4">
          <div className="flex justify-between gap-4 items-center">
            <div className="border-[#E6E7E9] flex gap-4 px-4 py-2 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-3 items-center">
                <input
                  id="cdi-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  checked={isCDI}
                  onChange={(e) => setIsCDI(e.target.checked)}
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
                  checked={isFreelance}
                  onChange={(e) => setIsFreelance(e.target.checked)}
                />
                <label
                  htmlFor="freelance-checkbox"
                  className="text-[16px] font-montserrat"
                >
                  Freelance
                </label>
              </div>
            </div>
            <input
              type="text"
              placeholder="Rechercher par ID, nom, rôle ou compétence (ex: React, Java)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded border border-[#E6E7E9] h-auto px-4 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
            />
            <button
              onClick={handleResetFilters}
              className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white"
            >
              <X size={20} />
              <span className="text-[16px]">Réinitialiser</span>
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
                  id="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="flex w-[300px] px-4 py-2 rounded-md bg-[#F8F8FA] hover:bg-none focus:outline-none"
                >
                  <option value="All" className="text-[#38383A]">
                    Toutes les villes
                  </option>
                  {FRENCH_CITIES.map((city) => (
                    <option
                      key={city.value}
                      value={city.value}
                      className="text-[#38383A]"
                    >
                      {city.label}
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
                    <p className="range-value">{experience.min} ans</p>
                    <RangeSlider
                      min={0}
                      max={30}
                      value={[experience.min, experience.max]}
                      onInput={(value) =>
                        setExperience({
                          min: Math.min(value[0], value[1]),
                          max: Math.max(value[0], value[1]),
                        })
                      }
                      className="range-slider"
                    />
                    <p className="range-value">{experience.max} ans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full px-4 py-2">
              <div className="space-y-2">
                <span className="text-black font-medium">
                  Tarif Journalier en € :
                </span>
                <div className="flex items-center gap-2">
                  <p className="range-value">{formatTarif(dailyRate.min)}</p>
                  <RangeSlider
                    min={0}
                    max={2000}
                    value={[dailyRate.min, dailyRate.max]}
                    onInput={(value) =>
                      setDailyRate({
                        min: Math.min(value[0], value[1]),
                        max: Math.max(value[0], value[1]),
                      })
                    }
                    className="range-slider"
                  />
                  <p className="range-value">{formatTarif(dailyRate.max)}</p>
                </div>
              </div>
            </div>
            <p className="items-center justify-center p-4">ou</p>
            <div className="w-full px-4 py-2">
              <div className="space-y-2">
                <span className="text-black font-medium">
                  Salaire Annuel en € :
                </span>
                <div className="flex items-center gap-2">
                  <p className="range-value">
                    {formatSalary(annualSalary.min)}
                  </p>
                  <RangeSlider
                    min={0}
                    max={1000}
                    value={[annualSalary.min, annualSalary.max]}
                    onInput={(value) =>
                      setAnnualSalary({
                        min: Math.min(value[0], value[1]),
                        max: Math.max(value[0], value[1]),
                      })
                    }
                    className="range-slider"
                  />
                  <p className="range-value">
                    {formatSalary(annualSalary.max)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="justify-between flex items-center">
          <p className="text-[#696A6B] font-montserrat text-base font-medium leading-[24px]">
            {filteredConsultants.length} sur {consultants.length} résultats
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
          {filteredConsultants.length > 0 ? (
            filteredConsultants.map((consultant) => (
              <div
                key={consultant.id}
                onClick={() =>
                  navigate(
                    `/rechercher-un-consultant/${consultant.id.replace(
                      "#",
                      ""
                    )}`
                  )
                }
                className="cursor-pointer"
              >
                <Card {...consultant} />
              </div>
            ))
          ) : (
            <p className="text-[#696A6B] font-montserrat text-base">
              Aucun consultant trouvé
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RechercheConsultant;