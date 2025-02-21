import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Deposer");
  };
  return (
    <div className="sm:flex sm:pl-10">
      <div className="p-6 sm:space-y-6 space-y-3  sm:w-1/2 flex flex-col justify-center h-auto">
        <h1 className="text-[#02B2E1] font-montserrat text-[50px] sm:text-[90px] font-semibold leading-[120.402%] uppercase">
          DATAMED
        </h1>
        <h1 className="mx-auto text-start w-full font-display text-[80px] sm:text-[120px] font-semibold tracking-tight text-[#02B2E1] sm:text-7xl">
          <span className="relative whitespace-nowrap">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="font-montserrat text-[60px] sm:text-[120px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              CONNECT
            </span>
          </span>
        </h1>
        <p className="text-[#272727] flex gap-3 font-poppins text-[24px] sm:text-[45px] font-medium leading-[120.402%]">
          Le
          <span className="font-montserrat text-[24px] sm:text-[45px] font-bold leading-[120.402%] bg-gradient-to-b from-[#FF655C] to-[#FF3179] bg-clip-text text-transparent">
            Tinder
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="30"
            className="w-[24px] h-[30px] sm:w-[45px] sm:h-[46px]"
            viewBox="0 0 45 46"
            fill="none"
          >
            <path
              d="M34.8619 15.0561C32.2519 12.478 30 10.2524 30 4.25049C30 3.71799 29.7731 3.21174 29.3794 2.85549C28.9838 2.50111 28.455 2.33424 27.9281 2.38486C23.4563 2.85924 15 6.21174 15 15.5005C15 15.8736 15.2269 22.4099 14.085 23.5911C13.92 23.7617 13.6763 23.938 13.125 23.938C12.7838 23.938 12.5606 23.8405 12.3338 23.5874C11.2294 22.3705 11.0306 18.7874 11.2406 16.633C11.2875 16.1511 11.1469 15.6899 10.875 15.3261C10.7588 15.1705 10.6163 15.0299 10.4494 14.9136C9.78938 14.4524 8.9175 14.4655 8.27438 14.9286C8.00063 15.1274 7.77563 15.4011 7.63688 15.733L7.30125 16.5411C6.135 19.3199 4.68563 22.7811 4.6875 25.813C4.69313 36.9655 11.3513 43.6255 22.5 43.6255C33.9863 43.6255 40.3125 37.633 40.3125 26.7505C40.3125 20.4374 37.4175 17.578 34.8619 15.0561Z"
              fill="url(#paint0_linear_467_6998)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_467_6998"
                x1="22.5"
                y1="2.37598"
                x2="22.5"
                y2="43.6255"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF655C" />
                <stop offset="1" stopColor="#FF3179" />
              </linearGradient>
            </defs>
          </svg>
          des ESN
        </p>
        <p className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          Votre vitrine est conçue pour vous rendre visible auprès de 25 clients
          finaux. Grâce à cette plateforme, vous pourrez élargir votre réseau et
          maximiser vos opportunités commerciales.
        </p>
        <div className="items-start flex">
          <button
            onClick={handleClick}
            className="flex w-auto text-white p-[13px_19px] gap-[10px] rounded-[14px] bg-[#173A6D]"
          >
            Déposer Votre CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="-mt-12 py-24 pl-20   -ml-12 p-5 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          src={assets.Profile}
          alt=""
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
        />
      </div>
    </div>
  );
};

export default Hero3;
