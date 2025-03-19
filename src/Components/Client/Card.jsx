import { BadgeInfo, Bookmark, CarFront, MapPinned } from "lucide-react";
import React, { useState } from "react";

const Card = ({
  id,
  availability,
  name,
  age,
  experience,
  mission,
  roles = [],
  skills = [],
  location,
  region,
  rate,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const availabilityStyle =
    availability <= 5
      ? "text-[#40892A]"
      : availability > 60
      ? "text-red-500"
      : "";

  const missionStyle =
    mission === "Freelance"
      ? "bg-[#89EEFF] text-[#65558F]"
      : "bg-[#89FF9D] text-[#65558F]";

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="flex flex-col justify-between h-full p-4  gap-2.5 flex-shrink-0 self-stretch rounded-[8px] border border-[#E6E7E9] bg-white cursor-pointer transition-shadow hover:shadow-lg min-h-[300px]">
      <div className="flex justify-between">
        <p className="text-[#696A6B] font-montserrat text-xs font-medium leading-[24px]">
          {id}
        </p>
        <div className="flex gap-2 items-center">
          <p className={`font-lato text-base font-normal ${availabilityStyle}`}>
            Disponible dans {availability} Jours
          </p>
          <BadgeInfo size={16} className="text-[#40892A]" />
          <Bookmark
            size={16}
            className={isBookmarked ? "text-[#65558F]" : ""}
            fill={isBookmarked ? "currentColor" : "none"}
            onClick={handleBookmarkClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <h4 className="bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent font-montserrat text-3xl font-semibold leading-[24px]">
          {name}
        </h4>
        <div>
          <p className="text-[rgba(0,0,0,0.60)] font-montserrat text-xs font-semibold leading-[24px]">
            {age} Ans
          </p>
        </div>
        <div>
          <p className="text-[rgba(0,0,0,0.60)] font-montserrat text-xs font-semibold leading-[24px]">
            {experience} Ans D'xp
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {roles?.map((role, index) => (
          <p
            key={index}
            className="flex w-[176px] p-[5px] justify-center items-center gap-2.5 rounded-[10px] bg-[#EDF3F4]"
          >
            {role}
          </p>
        ))}
      </div>
      <div className="flex gap-[6px] items-center flex-wrap max-h-[60px] overflow-hidden">
        {skills?.map((skill, index) => (
          <React.Fragment key={index}>
            <p className="text-[#2E2E2E] w-auto px-2 font-lato text-center font-normal">
              {skill}
            </p>
            {index !== skills.length - 1 && <p className="text-[#2E2E2E]">*</p>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex gap-4 items-center flex-wrap justify-between">
        <div className="flex gap-3 items-center">
          <p
            className={`flex p-2 justify-center items-center gap-2 rounded-[10px] ${missionStyle}`}
          >
            {mission}
          </p>
          <div className="flex items-center gap-1">
            <MapPinned size={16} className="text-[rgba(34,153,195,0.60)]" />
            <p className="text-[rgba(34,153,195,0.60)] font-montserrat text-[12px] font-semibold leading-6">
              {location}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CarFront size={20} className="text-[rgba(34,153,195,0.60)]" />
            <p className="text-[rgba(34,153,195,0.60)] font-montserrat text-[12px] font-semibold leading-6">
              {region}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[#65558F] font-montserrat sm:text-[30px] font-semibold leading-[0.8]">
            {rate} €/Jour
          </h1>
        </div>
      </div>


    </div>
  );
};

export default Card;