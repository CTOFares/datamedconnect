import React from "react";
import { icon } from "../../../assets/assets";

const Formation = ({Diplome,Ecole, Année}) => {
  return (
    <div className="flex gap-5   w-full justify-between items-center ">
      <div className="">
        <img src={icon.graduation} alt="" />
      </div>
      <div className="w-full">
        <h1 className="text-[#2E2E2E]  font-montserrat text-[20px] font-semibold leading-[24.08px]">
          {Diplome}
        </h1>
        <p className="text-[#535353] font-montserrat text-[12px] font-semibold leading-[14.448px]">
          {Ecole}
        </p>
        <p className="text-[#000] font-montserrat text-[12px] font-normal leading-[14.448px]">
          {Année}
        </p>
      </div>
    </div>
  );
};

export default Formation;
