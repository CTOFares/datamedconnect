import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Nav from "../../Components/Nav";
import LeftSide from "../../Components/LeftSide";
import { assets } from "../../assets/assets";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useCVData } from "../../Context/CVDataContext";

const Details = () => {
  const navigate = useNavigate();
  const {
    setEmail: setContextEmail,
    setNumero,
    setFile: setContextFile,
    setProfileData,
    setId,
  } = useCVData();
  const [file, setFileState] = useState(null);
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
      const uploadedFile = acceptedFiles[0];
      setFileState(uploadedFile);
      setFileName(uploadedFile.name);
      setFileError("");
      console.log(
        "File dropped:",
        uploadedFile.name,
        uploadedFile.type,
        uploadedFile.size
      );
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();

    console.log("Current State:", { email, telephone, file, isChecked });

    setEmailError("");
    setTelephoneError("");
    setFileError("");
    setCheckboxError("");

    let valid = true;

    if (!email.trim()) {
      setEmailError("Veuillez remplir le champ Email.");
      valid = false;
    }
    if (!telephone.trim()) {
      setTelephoneError("Veuillez remplir le champ Téléphone.");
      valid = false;
    }
    if (!file) {
      setFileError("Veuillez télécharger un fichier PDF.");
      valid = false;
    }
    if (!isChecked) {
      setCheckboxError("Veuillez accepter les termes et conditions.");
      valid = false;
    }

    if (!valid) {
      console.log("Validation failed:", { email, telephone, file, isChecked });
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      // 1. Send OTP
      const otpResponse = await fetch(
        "https://datamedconnectbackend.onrender.com/api/otp/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const otpData = await otpResponse.json();
      if (!otpResponse.ok) {
        setEmailError(otpData.message || "Une erreur s'est produite.");
        setLoading(false);
        return;
      }

      localStorage.setItem("verificationEmail", email);
      console.log(email);
      console.log(telephone);

      // 2. Create Consultant with CV file (Send raw JSON here instead of FormData)
      const consultantData = {
        email: email,
        phone: telephone,
        // You cannot directly send the file here as JSON. You will need to handle it separately if needed.
      };
      console.log("Sending data:", consultantData);

      const consultantResponse = await fetch(
        "https://datamedconnectbackend.onrender.com/api/consultants",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(consultantData),
        }
      );

      const responseData = await consultantResponse.json();
      console.log("Consultant Response:", responseData);
      if (!consultantResponse.ok) {
        throw new Error(responseData.message || "Failed to create consultant");
      }

      const consultantId = responseData.data._id; // Fix here: access the ID from responseData.data
      console.log("Created consultant ID:", consultantId);
      setId(consultantId);
      console.log(consultantId);
      // 3. Extract CV Profile with consultant ID
      const profileFormData = new FormData();
      profileFormData.append("cv", file);
      profileFormData.append("prompt", "Extract Data From CV");
      profileFormData.append("id", consultantId);
      navigate("/Verification", { state: { email } });

      const profileResponse = await fetch(
        "https://datamedconnectbackend.onrender.com/api/cv/Profile",
        {
          method: "POST",
          body: profileFormData,
        }
      );
      const profileData = await profileResponse.json();
      if (!profileResponse.ok) {
        throw new Error(profileData.message || "Failed to process CV");
      }

      console.log("Profile API Response:", profileData);
      setProfileData(profileData.data);
      localStorage.setItem("profileData", JSON.stringify(profileData.data));

      // Update context
      setContextEmail(email);
      setNumero(telephone);
      setContextFile(fileName);

      // 4. Navigate to Verification
    } catch (error) {
      console.error("Error:", error);
      setFileError(
        error.message || "Une erreur s'est produite lors du traitement."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Nav />
      <div className="sm:flex pb-11">
        <LeftSide
          title="Déposer Votre CV"
          paragraphe=" Partagez vos coordonnées et votre CV pour que nous puissions vous proposer des opportunités adaptées à votre profil."
        />
        <div className="p-5">
          <form className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="flex w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Contact@consultingdatamed.com"
                value={email}
                onChange={(e) => setEmailState(e.target.value)}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="telephone">Téléphone*</label>
              <input
                type="tel"
                className="flex w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="+33 25 556 8855"
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
                className={`items-center justify-center w-full h-full sm:w-[641px] p-[18px_30px] rounded-[14px] border-[1px] border-dashed border-[#000] bg-white cursor-pointer ${
                  isDragActive ? "bg-gray-200" : ""
                }`}
              >
                <div className="w-full flex flex-col justify-center text-center items-center">
                  <input {...getInputProps()} />
                  <img
                    src={assets.iconpdf}
                    alt="PDF Icon"
                    className="h-12 w-12"
                  />
                  <span>{fileName || "Glisser et déposer Votre PDF"}</span>
                </div>
              </div>
              <span className="text-[#B1B1B1] text-base font-normal leading-[28px]">
                Importer un fichier PDF (15mo Max)
              </span>
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
                J’accepte{" "}
                <a href="/Politique" className="underline">
                  les termes et conditions
                </a>
                . Voir{" "}
                <a href="/Mentionlegales" className="underline">
                  les Conditions d’utilisation
                </a>
              </label>
            </div>
            {checkboxError && (
              <p className="text-red-500 text-sm">{checkboxError}</p>
            )}
            <button
              onClick={handleClick}
              className="flex w-[189px] text-white p-[13px_30px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Continuer"}
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Details;

export { Details };
