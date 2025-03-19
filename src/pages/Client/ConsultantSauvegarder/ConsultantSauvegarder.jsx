import React, { useState } from "react";
import Card from "../../../Components/Client/Card";
import { AlignJustify, LayoutGrid, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import consultants from "../../../Utils/mockdata";

const ConsultantSauvegarder = () => {
  const [viewMode, setViewMode] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCDI, setIsCDI] = useState(false);
  const [isFreelance, setIsFreelance] = useState(false);
  const navigate = useNavigate();

  const keywords = searchTerm
    .toLowerCase()
    .split(/[\s,]+/)
    .filter((keyword) => keyword.length > 0);

  const filteredConsultants = consultants.filter((consultant) => {
    const matchesSearch =
      keywords.length === 0 ||
      keywords.every((keyword) =>
        [
          consultant.id.toLowerCase(),
          consultant.name.toLowerCase(),
          ...consultant.roles.map((role) => role.toLowerCase()),
          ...(consultant.skills || []).map((skill) => skill.toLowerCase()),
        ].some((field) => field.includes(keyword))
      );

    const matchesMission =
      (!isCDI && !isFreelance) ||
      (isCDI && consultant.mission === "CDI") ||
      (isFreelance && consultant.mission === "Freelance");

    return matchesSearch && matchesMission;
  });

  const handleResetFilters = () => {
    setSearchTerm("");
    setIsCDI(false);
    setIsFreelance(false);
  };

  return (
    <div className="">
      <h1 className="text-[35px] leading-[30px] py-4 text-[#324DA9] font-montserrat font-normal">
        Consultants Sauvegardés
      </h1>
      <div className="bg-white border border-[#E6E7E9] rounded-md w-full space-y-2 h-auto p-2">
        <p className="text-[#38383A] font-montserrat p-2 text-[18px] font-semibold leading-[24px] capitalize">
          Options de recherche
        </p>
        <div className="space-y-4">
          <div className="flex justify-between gap-4 items-center">
            <div className="border-[#E6E7E9] flex gap-4 px-4 py-2 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="rounded-sm border-2"
                  checked={isCDI}
                  onChange={(e) => setIsCDI(e.target.checked)}
                />
                <p className="text-[16px] font-montserrat">CDI</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="rounded-sm border-2"
                  checked={isFreelance}
                  onChange={(e) => setIsFreelance(e.target.checked)}
                />
                <p className="text-[16px] font-montserrat">Freelance</p>
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
        </div>
      </div>
      <div className="mt-4">
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
            viewMode === "list"
              ? "space-y-3"
              : "grid grid-cols-2 gap-4 auto-rows-[minmax(300px,_auto)]"
          }
        >
          {filteredConsultants.map((consultant) => (
            <div
              key={consultant.id}
              onClick={() =>
                navigate(`/demande-echange/${consultant.id.replace("#", "")}`)
              }
              className="cursor-pointer"
            >
              <Card {...consultant} />
            </div>
          ))}
          {filteredConsultants.length === 0 && (
            <p className="text-[#696A6B] font-montserrat text-base">
              Aucun consultant trouvé
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultantSauvegarder;