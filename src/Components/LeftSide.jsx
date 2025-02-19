import React from "react";

const leftSide = ({title,paragraphe}) => {
  return (
    <div className="p-5 sm:pl-14 sm:w-1/2">
      <h1 className="font-montserrat text-[40px] font-semibold leading-[120.402%] capitalize bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">{title}</h1>
      <p className="text-black font-montserrat text-[18px] font-normal leading-[120.402%]">{paragraphe}</p>
    </div>
  );
};

export default leftSide;
