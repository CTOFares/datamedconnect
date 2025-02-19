import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Nav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full items-center justify-center sm:justify-start flex p-9">
      <img
        src={assets.logo}
        alt="Logo"
        onClick={handleClick}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Nav;
