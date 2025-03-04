import React from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const Mention = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col sm:mt-8 sm:mb-9 items-center sm:space-y-8">
        <h1 className="text-center sm:w-1/3 w-1/2 font-montserrat text-[30px]  sm:text-[68px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#16386C] to-[#2B6DD2] bg-clip-text text-transparent">
          Mentions légales
        </h1>
        <p className="sm:w-1/2">
          Le présent document énonce les mentions légales de la société DATAMED
          RESEARCH, une société par actions simplifiée unipersonnelle (SASU),
          dont le siège social est situé au 185 Avenue Charles de Gaulle, 92200
          Neuilly-sur-Seine, et immatriculée au registre du commerce et des
          sociétés sous le numéro SIREN 898781281. <br /> <br /> ​​ Propriété
          intellectuelle : Tous les éléments présents sur le site web de DATAMED
          RESEARCH, tels que les textes, les graphiques, les logos, les images,
          les vidéos, les marques, les logiciels, ainsi que leur compilation,
          sont la propriété exclusive de DATAMED RESEARCH ou de ses concédants
          de licence, et sont protégés par les lois relatives à la propriété
          intellectuelle. Toute reproduction, distribution, modification,
          adaptation, ou utilisation non autorisée de ces éléments est
          strictement interdite. <br /> <br /> ​​ Liens hypertextes : Le site
          web de DATAMED RESEARCH peut contenir des liens hypertextes vers des
          sites tiers. DATAMED RESEARCH n'exerce aucun contrôle sur le contenu
          de ces sites et décline toute responsabilité quant à leur contenu,
          leur fonctionnement, ou leur disponibilité. ​<br /> <br /> ​
          Responsabilité : DATAMED RESEARCH met tout en œuvre pour garantir
          l'exactitude et l'actualité des informations présentes sur son site
          web. Cependant, DATAMED RESEARCH ne saurait être tenu responsable des
          erreurs, des omissions, ou des éventuelles interruptions du site.
          L'utilisation du site web de DATAMED RESEARCH se fait aux risques et
          périls de l'utilisateur. <br /> <br /> ​​ Loi applicable et
          juridiction compétente : Les présentes mentions légales sont régies
          par le droit français. Tout litige relatif à l'interprétation,
          l'exécution, ou la résiliation des présentes sera soumis à la
          compétence exclusive des tribunaux français.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Mention;
