import React from "react";
import { icon } from "../../../assets/assets";

const Certification = ({ Certif, Organisme, AnnéeCertif }) => {
  return (
    <div className="flex gap-5   w-full justify-between items-center ">
      <div className="">
        <img src={icon.certif} alt="" />
      </div>
      <div className="w-full">
        <h1 className="text-[#2E2E2E] font-montserrat text-[20px] font-semibold leading-[24.08px]">
          {Certif}
        </h1>
        <div className="flex gap-6">
          <p className="text-[#535353] font-montserrat text-[12px] font-semibold leading-[14.448px]">
            {Organisme}
          </p>
          <p className="text-[#000] font-montserrat text-[12px] font-normal leading-[14.448px]">
            {AnnéeCertif}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
