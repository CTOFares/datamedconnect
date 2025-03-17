import React, { useState } from "react";
import Card from "../../../Components/Client/Card";
import { AlignJustify, LayoutGrid, Search } from "lucide-react";
import consultants from "../../../Utils/mockdata";
import { useNavigate } from "react-router-dom";

const ConsultantSauvegarder = () => {
  const [viewMode, setViewMode] = useState("list"); // Added state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10)); // Convert string to integer
  };

  return (
    <div className="">
      <h1 className="text-[35px] leading-[30px] py-4 text-[#324DA9] font-montserrat font-normal">
        Consultant Sauvegarder
      </h1>
      <div className="bg-white border-[#E6E7E9] rounded-md w-full h-auto p-2">
        <form action="filter" className="space-y-4">
          <div className="flex justify-between gap-4 items-center">
            <div className="border-[#E6E7E9] flex gap-4 px-4 py-2 rounded-md bg-[#F8F8FA]">
              <div className="flex gap-4">
                <input type="checkbox" className="rounded-sm border-2" />
                <p className="text-[16px] font-montserrat">CDI</p>
              </div>
              <div className="flex gap-4 text-[16px]">
                <input type="checkbox" />
                <p className="text-[16px] font-montserrat">FreeLance</p>
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
        </form>
      </div>
      <div className="mt-4 space-y-4 ">
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
                navigate(`/demande-echange/${consultant.id.replace("#", "")}`)
              }
              className="cursor-pointer"
            >
              <Card {...consultant} />
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default ConsultantSauvegarder;
