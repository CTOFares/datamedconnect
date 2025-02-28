import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="flex justify-center items-center gap-[10px] p-[9px_25px] rounded-[10px] bg-[#EDF3F4]">
      <p className="text-[#2E2E2E] font-montserrat text-[16px] font-normal leading-[120.402%]">
        {skill}
      </p>
    </div>
  );
};

export default Skill;
