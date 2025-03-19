import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [otherSubject, setOtherSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks form submission
  const [showCheckGif, setShowCheckGif] = useState(false); // Toggles between loading and checkmark

  // Simulate form submission with a delay
  const handleSubmit = () => {
    setIsSubmitted(true); // Hide form
    setShowCheckGif(false); // Show loading

    // Switch to checkmark after 2 seconds
    setTimeout(() => {
      setShowCheckGif(true);
    }, 2000);
  };

  // Reset form to initial state
  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setSelectedStatus("All");
    setOtherSubject("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="text-[#324DA9]  text-center text-[35px] py-4 capitalize font-montserrat font-normal leading-[60px] tracking-[-0.96px]">
        Contacter Nous
      </h1>
      <div className="w-full flex justify-center items-center">
        <p className="text-[#696A6B] w-1/2 text-center font-montserrat text-[16px] font-medium leading-[24px]">
          Vous avez des questions ou des préoccupations ? Quelque chose n’est
          pas clair ? Vous souhaitez signaler un bug ? Remplissez le formulaire
          ci-dessous et nous vous répondrons avec plaisir !
        </p>
      </div>

      {/* Conditionally render form or confirmation */}
      {!isSubmitted ? (
        <>
          <div className="flex justify-center items-center py-8">
            <div className="w-1/2 space-y-5">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nom Complet"
                  className="w-full rounded border border-[#E6E7E9] h-auto px-4 pr-12 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded border border-[#E6E7E9] h-auto px-4 pr-12 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full rounded border border-[#E6E7E9] h-auto px-4 pr-12 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
              >
                <option value="All">Type de sujet</option>
                <option value="Bug Technique">Problème technique ou bug</option>
                <option value="Acces Compte">Problème d’accès au compte</option>
                <option value="Contenu">Problème avec le contenu affiché</option>
                <option value="Performance">Lenteur ou performance du site</option>
                <option value="Autre">Autre (précisez ci-dessous)</option>
              </select>
              {selectedStatus === "Autre" && (
                <input
                  type="text"
                  value={otherSubject}
                  onChange={(e) => setOtherSubject(e.target.value)}
                  placeholder="Type de sujet (Autre)"
                  className="w-full rounded border border-[#E6E7E9] h-auto px-4 pr-12 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
                />
              )}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                className="w-full rounded border border-[#E6E7E9] h-auto px-4 pr-12 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
                rows="5"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="flex w-[151px] h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white"
            >
              <span className="text-[16px]">Soumettre</span>
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-3 py-8">
          {!showCheckGif ? (
            <>
              <p className="text-[#38383A] font-montserrat text-[16px]">
                Merci d'avoir rempli vos informations. Vous serez contacté sous peu.
              </p>
              <img src={assets.loading} alt="Loading" className="w-20 h-20" />
            </>
          ) : (
            <>
              <p className="text-[#38383A] font-montserrat text-[16px]">
                Merci pour votre patience
              </p>
              <img src={assets.checkgif} alt="Checkmark" className="w-20 h-20" />
              <button
                onClick={handleReset}
                className="flex w-auto h-full items-center justify-center gap-2 rounded-md bg-[#173A6D] px-[19px] py-2 text-white mt-4"
              >
                <span className="text-[16px]">Envoyer Un Autre</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact;