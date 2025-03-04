import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Nav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full items-center justify-between sm:justify-between flex sm:p-10">
      <img
        src={assets.logo}
        alt="Logo"
        onClick={handleClick}
        className="cursor-pointer"
      />
      <div className="sm:flex hidden gap-4 p-9">
        <a
          href="/"
          className="text-black font-montserrat text-[16px] font-normal leading-[120%]"
        >
          Acceuil
        </a>
        <a
          href="/Apropos"
          className="text-black font-montserrat text-[16px] font-normal leading-[120%]"
        >
          À propos de nous
        </a>
        <a
          href="/ContactezNous"
          className="text-black font-montserrat text-[16px] font-normal leading-[120%]"
        >
          Contactez Nous
        </a>
      </div>
    </div>
  );
};

export default Nav;
