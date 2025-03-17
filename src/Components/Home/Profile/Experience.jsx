import React from "react";
import { icon } from "../../../assets/assets";

const Experience = ({
  NomEntreprise,
  Date,
  Localisation,
  Realisation,
  Description,
  context,
}) => {
  return (
    <div className="flex gap-5  w-full items-start   p-4 rounded-lg">
      <img src={icon.Building} className="h-auto" alt="Building Icon" />
      <div className="w-full">
        <h1 className="text-[#2E2E2E] font-montserrat text-[18px] font-semibold leading-[24.08px]">
          {NomEntreprise}
        </h1>
        <div className="space-y-4">
          <div className="flex gap-4">
            <p className="text-[#535353] font-montserrat text-[16px] font-normal leading-[14.448px]">
              {Date} -
            </p>
            <p className="text-[#535353] font-montserrat text-[16px] font-semibold leading-[14.448px]">
              {Localisation}
            </p>
          </div>
          <div>
            <p className="text-[#191919] font-montserrat text-[16px] font-medium leading-[14.448px]">
              Context :
            </p>
            <p className="text-[#535353] font-montserrat text-[14px] font-normal leading-[14.448px]">
              {context}
            </p>
          </div>
          <div>
            <p className="text-[#191919] font-montserrat text-[16px] font-medium leading-[14.448px]">
              Description :
            </p>
            <p className="text-[#535353] font-montserrat text-[14px] font-normal leading-[14.448px]">
              {Description}
            </p>
          </div>
          <div>
            <p className="text-[#191919] font-montserrat text-[16px] font-medium leading-[14.448px]">
              Realisation :
            </p>
            <p className="text-[#535353] font-montserrat text-[14px] font-normal leading-[14.448px]">
              {Realisation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
