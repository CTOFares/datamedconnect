import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Nav from "../../Components/Nav";
import LeftSide from "../../Components/LeftSide";
import { assets } from "../../assets/assets";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useCVData } from "../../Context/CVDataContext"; // Import the useCVData hook

const Details = () => {
  const navigate = useNavigate();
  const { setEmail, setNumero, setFile, setProfileData } = useCVData(); // Destructure setters from the context
  const [fileName, setFileName] = useState("");
  const [email, setEmailState] = useState("");
  const [telephone, setTelephone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [fileError, setFileError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFileName(acceptedFiles[0].name);
      setFileError("");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let valid = true;

    // Reset previous errors
    setEmailError("");
    setTelephoneError("");
    setFileError("");
    setCheckboxError("");

    // Validate fields
    if (!email) {
      setEmailError("Veuillez remplir le champ Email.");
      valid = false;
    }
    if (!telephone) {
      setTelephoneError("Veuillez remplir le champ Téléphone.");
      valid = false;
    }
    if (!fileName) {
      setFileError("Veuillez télécharger un fichier PDF.");
      valid = false;
    }
    if (!isChecked) {
      setCheckboxError("Veuillez accepter les termes et conditions.");
      valid = false;
    }

    if (!valid) return;

    setLoading(true); // Disable button during API request

    // Update context with the user input data
    setEmail(email);
    setNumero(telephone);
    setFile(fileName);
    setProfileData({
      email,
      telephone,
      file: fileName,
    });

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
        localStorage.setItem("verificationEmail", email);
        navigate(`/Verification`, { state: { email } }); // Pass email to the navigation page
      } else {
        setEmailError(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      setEmailError("Impossible d'envoyer le code OTP. Vérifiez votre connexion.");
    } finally {
      setLoading(false); // Re-enable button
    }
  };

  return (
    <div className="">
      <Nav />
      <div className="sm:flex pb-11 min-h-screen">
        <LeftSide
          title="Déposer Votre CV"
          paragraphe=" Partagez vos coordonnées et votre CV pour que nous puissions vous proposer des opportunités adaptées à votre profil."
        />
        <div className="p-5">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="flex w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Contact@consultingdatamed.com"
                value={email}
                onChange={(e) => setEmailState(e.target.value)}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="telephone">Téléphone*</label>
              <input
                type="tel"
                className="flex w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="+33 25 556  8855"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              {telephoneError && (
                <p className="text-red-500 text-sm">{telephoneError}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="pdfUpload">Télécharger le PDF*</label>
              <div
                {...getRootProps()}
                className={`flex items-center justify-center w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white cursor-pointer ${
                  isDragActive ? "bg-gray-200" : ""
                }`}
              >
                <input {...getInputProps()} />
                <img src={assets.iconpdf} alt="PDF Icon" className="h-6 w-6" />
                <span>{fileName || "Glisser et déposer Votre PDF"}</span>
              </div>
              {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
            </div>
            <div className="flex gap-3 mb-4">
              <input
                id="terms-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label
                htmlFor="terms-checkbox"
                className="text-[16px] font-montserrat font-normal leading-[28px] text-black"
              >
                J’accepte les termes et conditions. Voir les Conditions
                d’utilisation
              </label>
            </div>
            {checkboxError && <p className="text-red-500 text-sm">{checkboxError}</p>}
            <button
              onClick={handleClick}
              className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Continuer"}
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
