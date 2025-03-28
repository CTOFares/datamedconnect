import React, { useEffect, useState } from "react";
import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Nav";
import LeftSide from "../../../Components/LeftSide";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const [cities, setCities] = useState([]);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [prenomError, setPrenomError] = useState("");
  const [nomError, setNomError] = useState("");
  const [villeError, setVilleError] = useState("");

  useEffect(() => {
    // Fetch a list of French cities; adjust parameters as needed
    fetch("https://geo.api.gouv.fr/communes?fields=nom&limit=1000")
      .then((response) => response.json())
      .then((data) => {
        // Extract city names from the response
        const cityNames = data.map((city) => city.nom);
        setCities(cityNames);
      })
      .catch((error) => console.error("Error fetching cities: ", error));
  }, []);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    let valid = true;

    if (!prenom) {
      setPrenomError("Veuillez remplir le champ Prénom.");
      valid = false;
    } else {
      setPrenomError("");
    }

    if (!nom) {
      setNomError("Veuillez remplir le champ Nom.");
      valid = false;
    } else {
      setNomError("");
    }

    if (!ville) {
      setVilleError("Veuillez sélectionner une ville.");
      valid = false;
    } else {
      setVilleError("");
    }

    if (valid) {
      navigate("/Mission");
    }
  };

  return (
    <div>
      <Nav />
      <div className="sm:flex pb-11 min-h-screen">
        <LeftSide
          title="Qui êtes-vous ?"
          paragraphe="Quelques informations de base pour mieux cerner votre profil et vous proposer des missions en accord avec votre parcours."
        />
        <div>
          <div className="p-5">
            <form action="" className="space-y-4">
              <div className="space-y-4">
                <label htmlFor="Prenom">Prénom*</label>
                <input
                  className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                  placeholder="Fares"
                  alt="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                {prenomError && (
                  <p className="text-red-500 text-sm">{prenomError}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="Nom">Nom*</label>
                <input
                  type="text"
                  className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                  placeholder="Safer"
                  alt="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                {nomError && <p className="text-red-500 text-sm">{nomError}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="ville">Ville de Residence*</label>
                <select
                  id="ville"
                  className="flex w-full sm:w-[641px] p-[15px_15px] items-start gap-2 h-[55px] rounded-[14px] border-[1px] border-[#000] bg-white"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                >
                  <option value="">Sélectionnez une ville</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {villeError && (
                  <p className="text-red-500 text-sm">{villeError}</p>
                )}
              </div>
              <button
                onClick={handleClick}
                className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
              >
                Continuer
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
      </div>
      <Footer />
    </div>
  );
};

export default Info;
