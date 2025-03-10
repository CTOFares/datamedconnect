import React, { useState, useCallback, memo } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Nav from "../../Components/Nav";
import LeftSide from "../../Components/LeftSide";
import { assets } from "../../assets/assets";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useCVData } from "../../Context/CVDataContext";

// Axios instance
const api = axios.create({
  baseURL: "https://datamedconnectbackend.onrender.com",
  timeout: 10000,
});

// Constants
const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ERROR_MESSAGES = {
  EMAIL_REQUIRED: "Veuillez remplir le champ Email.",
  EMAIL_INVALID: "Veuillez entrer un email valide.",
  PHONE_REQUIRED: "Veuillez remplir le champ Téléphone.",
  PHONE_INVALID: "Veuillez entrer un numéro de téléphone français valide (ex: +33 6 12 34 56 78).",
  FILE_REQUIRED: "Veuillez télécharger un fichier PDF.",
  FILE_SIZE_EXCEEDED: "Le fichier dépasse la limite de 15 Mo.",
  CHECKBOX_REQUIRED: "Veuillez accepter les termes et conditions.",
  API_ERROR: "Une erreur s'est produite lors du traitement.",
};

const Details = memo(() => {
  const navigate = useNavigate();
  const { setEmail: setContextEmail, setNumero, setFile: setContextFile, setProfileData, setId } = useCVData();

  const [formState, setFormState] = useState({
    file: null,
    fileName: "",
    email: "",
    telephone: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+33\s?[1-9](\s?\d{2}){4}$/.test(phone);

  const validateField = (name, value) => {
    switch (name) {
      case "email": return !value.trim() ? ERROR_MESSAGES.EMAIL_REQUIRED : !validateEmail(value) ? ERROR_MESSAGES.EMAIL_INVALID : "";
      case "telephone": return !value.trim() ? ERROR_MESSAGES.PHONE_REQUIRED : !validatePhone(value) ? ERROR_MESSAGES.PHONE_INVALID : "";
      case "file": return !value ? ERROR_MESSAGES.FILE_REQUIRED : value.size > MAX_FILE_SIZE ? ERROR_MESSAGES.FILE_SIZE_EXCEEDED : "";
      case "isChecked": return value ? "" : ERROR_MESSAGES.CHECKBOX_REQUIRED;
      default: return "";
    }
  };

  const handleBlur = (field) => () => setErrors((prev) => ({ ...prev, [field]: validateField(field, formState[field]) }));

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.startsWith("33") && cleaned.length <= 11) {
      return `+33 ${cleaned.slice(2, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`.trim();
    }
    return value;
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const uploadedFile = acceptedFiles[0];
    if (uploadedFile.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: ERROR_MESSAGES.FILE_SIZE_EXCEEDED }));
      return;
    }

    setFormState((prev) => ({ ...prev, file: uploadedFile, fileName: uploadedFile.name }));
    setErrors((prev) => ({ ...prev, file: "" }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  const handleChange = (field) => (e) => {
    const value = field === "isChecked" ? e.target.checked : field === "telephone" ? formatPhoneNumber(e.target.value) : e.target.value;
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateField("email", formState.email),
      telephone: validateField("telephone", formState.telephone),
      file: validateField("file", formState.file),
      isChecked: validateField("isChecked", formState.isChecked),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    setLoading(true);

    try {
      const otpResponse = await api.post("/api/otp/send", { email: formState.email });
      localStorage.setItem("verificationEmail", formState.email);

      const consultantResponse = await api.post("/api/consultants", {
        email: formState.email,
        phone: formState.telephone,
      });
      const consultantId = consultantResponse.data.data._id;
      setId(consultantId);

      const profileFormData = new FormData();
      profileFormData.append("cv", formState.file);
      profileFormData.append("prompt", "Extract Data From CV");
      profileFormData.append("id", consultantId);

      const profileResponse = await api.post("/api/cv/Profile", profileFormData);
      setProfileData(profileResponse.data.data);
      localStorage.setItem("profileData", JSON.stringify(profileResponse.data.data));

      setContextEmail(formState.email);
      setNumero(formState.telephone);
      setContextFile(formState.fileName);

      navigate("/Verification", { state: { email: formState.email } });
    } catch (error) {
      setErrors((prev) => ({ ...prev, api: error.response?.data?.message || ERROR_MESSAGES.API_ERROR }));
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
          paragraphe="Partagez vos coordonnées et votre CV pour que nous puissions vous proposer des opportunités adaptées à votre profil."
        />
        <div className="p-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="flex w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="Contact@consultingdatamed.com"
                value={formState.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                disabled={loading}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="telephone">Téléphone*</label>
              <input
                type="tel"
                className="flex w-full sm:w-[641px] p-[18px_30px] h-[45px] rounded-[14px] border-[1px] border-[#000] bg-white"
                placeholder="+33 6 12 34 56 78"
                value={formState.telephone}
                onChange={handleChange("telephone")}
                onBlur={handleBlur("telephone")}
                disabled={loading}
              />
              {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="pdfUpload">Télécharger le PDF*</label>
              <div
                {...getRootProps()}
                className={`items-center justify-center w-full h-full sm:w-[641px] p-[18px_30px] rounded-[14px] border-[1px] border-dashed border-[#000] bg-white cursor-pointer ${
                  isDragActive ? "bg-gray-200" : ""
                } ${loading ? "opacity-50 pointer-events-none" : ""}`}
                onBlur={handleBlur("file")}
                tabIndex={0}
              >
                <div className="w-full flex flex-col justify-center text-center items-center">
                  <input {...getInputProps()} disabled={loading} />
                  <img src={assets.iconpdf} alt="PDF Icon" className="h-12 w-12" />
                  <span>{formState.fileName || "Glisser et déposer Votre PDF"}</span>
                </div>
              </div>
              <span className="text-[#B1B1B1] text-base font-normal leading-[28px]">
                Importer un fichier PDF (15 Mo Max)
              </span>
              {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
            </div>
            <div className="flex gap-3 mb-4">
              <input
                id="terms-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                checked={formState.isChecked}
                onChange={handleChange("isChecked")}
                disabled={loading}
              />
              <label htmlFor="terms-checkbox" className="text-[16px] font-montserrat font-normal leading-[28px] text-black">
                J’accepte <a href="/Politique" className="underline">les termes et conditions</a>. Voir{" "}
                <a href="/Mentionlegales" className="underline">les Conditions d’utilisation</a>
              </label>
            </div>
            {errors.isChecked && <p className="text-red-500 text-sm">{errors.isChecked}</p>}
            {errors.api && <p className="text-red-500 text-sm">{errors.api}</p>}
            <button
              type="submit"
              className="flex w-[189px] text-white p-[13px_30px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Continuer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Details;