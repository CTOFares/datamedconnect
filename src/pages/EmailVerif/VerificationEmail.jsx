import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const VerificationEmail = () => {
  const inputRefs = useRef([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  // Check if email is received correctly
  useEffect(() => {
    console.log("Email received:", email); // Log email for debugging
  }, [email]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = async () => {
    const otp = inputRefs.current.map((input) => input.value).join("");
    
    if (!email) {
      setError("Email non fourni. Veuillez réessayer.");
      return;
    }

    try {
      const response = await fetch("https://datamedconnectbackend.onrender.com/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/Info");
      } else {
        setError(data.message || "Code incorrect. Veuillez réessayer.");
      }
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <Nav />
      <div className="p-6 w-full items-center justify-center min-h-screen">
        <h1 className="text-center font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          vérifie ton email
        </h1>
        <p className="text-black text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
          Un code de vérification a été envoyé à ton email. Entrez-le ci-dessous pour continuer.
        </p>
        <div className="flex pt-8 pb-8 items-center justify-center gap-5 mt-8 mb-8">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="tel"
              className="w-[49px] sm:w-[60px] p-[15px] sm:h-[60px] border border-black bg-white rounded-[14px] text-center font-poppins text-[16px]"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
        </div>
        {error && <p className="text-[#FD7979] text-center">{error}</p>}
        <button
          onClick={handleSubmit}
          className="block mx-auto mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Vérifier
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default VerificationEmail;
