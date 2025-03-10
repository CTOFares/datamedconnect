import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";

const VerificationEmail = () => {
  const inputRefs = useRef([]);
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState(""); // For resend feedback
  const [isResending, setIsResending] = useState(false); // Disable resend during request
  const navigate = useNavigate();
  const location = useLocation();
  const email =
    location.state?.email || localStorage.getItem("verificationEmail") || "";

  // Check if email is received correctly
  useEffect(() => {
    console.log("Email received:", email);
    if (!email) {
      setError("Email non fourni. Veuillez retourner à la page précédente.");
    }
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
      const response = await fetch(
        "https://datamedconnectbackend.onrender.com/api/otp/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        navigate("/Mission");
      } else {
        setError(data.message || "Code incorrect. Veuillez réessayer.");
      }
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      setError("Email non fourni. Veuillez retourner à la page précédente.");
      return;
    }

    setIsResending(true);
    setError(""); // Clear previous errors
    setResendMessage(""); // Clear previous messages

    try {
      const response = await fetch(
        "https://datamedconnectbackend.onrender.com/api/otp/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setResendMessage("Code renvoyé avec succès ! Vérifiez votre email.");
      } else {
        setError(data.message || "Erreur lors de l'envoi du code.");
      }
    } catch (error) {
      setError("Une erreur est survenue lors de la tentative de renvoi.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div>
      <Nav />
      <div className="p-6  w-full items-center justify-center max-h-screen">
        <h1 className="text-center font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          Vérifie ton email
        </h1>
        <p className="text-black text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
          Un code de vérification a été envoyé à ton email. Entrez-le ci-dessous
          pour continuer.
        </p>
        <div className="flex pt-4 pb-4 items-center justify-center gap-5 mt-8 mb-8">
          {[...Array(5)].map((_, index) => (
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
        {resendMessage && (
          <p className="text-green-500 text-center">{resendMessage}</p>
        )}

        <p className="text-center mb-4">
          Si vous n’avez pas reçu votre code,{" "}
          <button
            onClick={handleResendCode}
            className={`underline text-[#173A6D] ${
              isResending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isResending}
          >
            {isResending ? "Envoi en cours..." : "Envoyer le code de nouveau"}
          </button>
        </p>
        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
          >
            Vérifier
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationEmail;
