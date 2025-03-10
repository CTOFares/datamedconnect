import React from "react";
import Testimonial from "./Testimonial";

const testimonialsData = [
  {
    quote: "Une expérience fluide et rapide",
    paragraphe:
      "Grâce à DATAMED Consulting, nous avons trouvé un consultant SAP en moins de 24 heures. Le service est professionnel et efficace, je recommande vivement !",
    Name: "Sophie Martin",
    Position: "Directrice IT chez TechSolutions",
  },
  {
    quote: "Des experts qualifiés",
    paragraphe:
      "Nous avions besoin d’un freelance spécialisé en cybersécurité. En quelques heures, DATAMED Consulting nous a mis en relation avec un expert compétent qui a sécurisé notre infrastructure.",
    Name: "Mohamed Ben Ali",
    Position: "Responsable Sécurité chez SecureTech",
  },
  {
    quote: "Un recrutement sans stress",
    paragraphe:
      "Nous avons gagné un temps précieux en passant par DATAMED Consulting. Trouver un freelance adapté à nos besoins n’a jamais été aussi simple et rapide.",
    Name: "Laura Dupont",
    Position: "CEO chez DigitalWave",
  },
];

const Testimonials = () => {
  return (
    <div className="mb-16">
      <div className="sm:flex sm:justify-center sm:items-center p-6 sm:p-8">
        <p className="text-black text-start sm:text-center sm:flex font-montserrat text-4xl font-semibold leading-[120.402%] uppercase">
          Ce que nos 
          <span className="bg-gradient-to-r mx-2 from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent font-poppins text-4xl font-semibold leading-[120.402%] uppercase">
            CONSULTANT
          </span>

           disent de nous
        </p>
      </div>
      {/* <div className="mt-[90px] space-y-6 p-4  gap-6 items-center">
        <div className=" text-center sm:text-center ">
          <p className="text-black font-montserrat sm:flex text-center justify-center text-2xl sm:text-4xl font-semibold leading-[100.402%] uppercase">
            Ce que nos{" "}
            <p className=" sm:text-center font-montserrat font-semibold leading-[48.161px] sm:leading-0 bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              CONSULTANT
            </p>
            disent de nous
          </p>
        </div>
      </div> */}
      <div className="sm:mx-[120px] justify-between grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            paragraphe={testimonial.paragraphe}
            Name={testimonial.Name}
            Position={testimonial.Position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
