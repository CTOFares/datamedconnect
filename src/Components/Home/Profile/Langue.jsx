import React from "react";

const Langue = ({ Name, Niveau }) => {
  return (
    <div className="w-full justify-between space-y-2">
      <p className="text-[#2E2E2E] font-lato text-[16px] font-semibold leading-[120.402%]">
        {Name}
      </p>
      <p>{Niveau}</p>
    </div>
  );
};

export default Langue;
