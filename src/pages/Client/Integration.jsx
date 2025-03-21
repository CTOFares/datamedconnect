import React from "react";
import { assets } from "../../assets/assets";
import { Settings, SquareArrowOutUpRight } from "lucide-react";

const Integration = () => {
  const connectedApps = [
    { name: "Google Agenda", icon: assets.googleagenda, email: "faressafer@gmail.com" },
    { name: "Slack", icon: assets.slack, email: "faressafer@gmail.com" },
  ];

  const availableApps = [
    { 
      name: "Google Agenda", 
      description: "Synchronisez vos événements et réunions en toute simplicité", 
      icon: assets.googleagenda 
    },
    { 
      name: "Slack", 
      description: "Recevez des notifications et collaborez avec votre équipe", 
      icon: assets.slack 
    },
    { 
      name: "Apple Calendar", 
      description: "Planifiez vos rendez-vous directement depuis votre calendrier Apple", 
      icon: assets.appelcalendar 
    },
    { 
      name: "Zoom", 
      description: "Organisez et rejoignez des réunions vidéo en un clic", 
      icon: assets.zoom 
    },
  ];

  return (
    <div>
      <h1 className="text-[#324DA9] text-[35px] py-4 capitalize font-montserrat font-normal leading-[60px] tracking-[-0.96px]">
        Intégrations
      </h1>
      <div>
        <p className="text-[#38383A] font-montserrat p-4 text-[18px] font-semibold leading-[24px] capitalize">
          Applications Connectées
        </p>
        <div className="grid grid-cols-2 gap-4">
          {connectedApps.map((app, index) => (
            <div
              key={index}
              className="flex rounded-lg justify-between border gap-4 border-gray-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <img src={app.icon} alt={`Icône de ${app.name}`} />
                <div className="w-full space-y-1">
                  <div className="flex gap-4 justify-between items-center">
                    <p className="text-gray-700 font-montserrat text-[14px] font-bold">
                      {app.name}
                    </p>
                    <div className="flex h-[14px] px-[14px] py-[9px] justify-center items-center gap-[10px] rounded-md bg-[#F0ECBF]">
                      <p className="text-[#F19138] text-[8px] font-medium">Connecté</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-[14px] font-medium">{app.email}</p>
                </div>
              </div>
              <div className="items-center justify-center flex">
                <Settings size={24} color="#9D9D9D" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[#38383A] font-montserrat p-4 text-[18px] font-semibold leading-[24px] capitalize">
          Applications Disponibles
        </p>
        <div className="grid grid-cols-2 gap-4">
          {availableApps.map((app, index) => (
            <div
              key={index}
              className="flex rounded-lg justify-between border gap-4 border-gray-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <img src={app.icon} alt={`Icône de ${app.name}`} />
                <div className="space-y-1">
                  <p className="text-gray-700 font-montserrat text-[14px] font-bold">
                    {app.name}
                  </p>
                  <p className="text-gray-400 text-[14px] font-medium">{app.description}</p>
                </div>
              </div>
              <div className="items-center justify-center gap-4 flex">
                <p className="text-[#F19138] text-[14px] font-montserrat font-semibold">
                  Se connecter
                </p>
                <SquareArrowOutUpRight size={16} color="#F19138" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integration;