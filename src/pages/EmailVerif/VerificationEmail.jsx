import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const VerificationEmail = () => {
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const inputValues = inputRefs.current.map((input) => input.value).join("");
    if (inputValues === "55555") {
      navigate("/Info");
    }
  };

  return (
    <div>
      <Nav />
      <div className="p-6 w-full   items-center justify-center">
        <h1 className="text-center font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          vérifie ton email
        </h1>
        <p className="text-black text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
          Lorem ipsum dolor sit amet consectetur. Pretium lectus natoque morbi
          proin varius ullamcorper quam lacus in. <br />
          Eu ac integer aliquet sit libero morbi. Pulvinar varius maecenas
          egestas ante quam nunc sapien leo. <br /> Leo porttitor viverra purus
          et viverra ullamcorper.
          <br />
          Pour le Test : 55555
        </p>
        <div className="flex   pt-8 pb-8 items-center justify-center gap-5 mt-8 mb-8">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="tel"
              className="flex w-[49px] sm:w-[60px] p-[15px] sm:h-[60px] justify-between items-center border border-black bg-white rounded-[14px] text-center font-poppins text-[16px] font-normal leading-[120.402%]"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
        </div>
        <p className="text-[#FD7979] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
          Vous Pouvez Renvoyer pendant 01:30
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default VerificationEmail;
