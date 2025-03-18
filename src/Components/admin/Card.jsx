import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const Card = ({ number, description, color, change }) => {
  const isPositiveChange = change === "up";
  const arrowIcon = isPositiveChange ? <ArrowUp size={20} /> : <ArrowDown size={20} />;
  const arrowColor = isPositiveChange ? "text-green-500" : "text-red-500";

  return (
    <div className="flex flex-col items-start bg-white shadow-lg rounded-md p-4 w-full">
      <div className="flex items-center gap-2 justify-between w-full">
        <h1 className={`font-montserrat text-[50px] font-bold ${color}`}>{number}</h1>
        <span className={`${arrowColor}`}>{arrowIcon}</span>
      </div>
      <p className="text-gray-500 font-poppins text-[18px] font-medium uppercase text-start">
        {description}
      </p>
    </div>
  );
};

export default Card;
