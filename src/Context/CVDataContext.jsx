// CVDataContext.js
import React, { createContext, useState, useContext, use } from "react";

// Create Context
const CVDataContext = createContext();

// Provider Component
export const CVDataProvider = ({ children }) => {
  const [id,setId] = useState("")
  const [Email, setEmail] = useState("-");
  const [Numero, setNumero] = useState("-");
  const [file, setFile] = useState("");
  const [ProfileData, setProfileData] = useState({});
  const [Mission, setMission] = useState("");
  const [Experience, setExperience] = useState("");
  const [PretentionSalariale, setPretentionSalariale] = useState("Null");
  const [mobility,setMobility] =useState([])
  const [Portage, setPortage] = useState("");
  const [AutoEntrepreuneur, setAutoEntrepreuneur] = useState("");
  const [Tjm, setTjm] = useState("Null");



  // object  Porfile
  return (
    <CVDataContext.Provider
      value={{
        id,
        setId,
        mobility,
        setMobility,
        Email,
        setEmail,
        Numero,
        setNumero,
        file,
        setFile,
        ProfileData,
        setProfileData,
        Mission,
        setMission,
        Experience,
        setExperience,
        PretentionSalariale,
        setPretentionSalariale,
        Portage,
        setPortage,
        AutoEntrepreuneur,
        setAutoEntrepreuneur,
        Tjm,
        setTjm,
      }}
    >
      {children}
    </CVDataContext.Provider>
  );
};

export const useCVData = () => useContext(CVDataContext);
