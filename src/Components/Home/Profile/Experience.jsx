import React from "react";
import { icon } from "../../../assets/assets";

const Experience = ({
  NomEntreprise,
  Date,
  Localisation,
  paragrapheExperience,
}) => {
  return (
    <div className="flex gap-5 ">
      <img src={icon.Building} alt="" />
      <div className="space-y-1">
        <h1 className="text-[#2E2E2E] font-montserrat text-[20px] font-semibold leading-[24.08px]">
          {NomEntreprise}
        </h1>
        <div className="space-y-1">
          <div className="flex gap-6">
            <p className="text-[#535353] font-montserrat text-[18px] font-normal leading-[14.448px]">
              {Date}
            </p>
            <p className="text-[#535353] font-montserrat text-[18px]  font-normal leading-[14.448px]">
              {Localisation}
            </p>
          </div>
          <div>
            <p className="text-[#535353] font-montserrat text-[14px] font-normal leading-[14.448px]">
              {paragrapheExperience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
