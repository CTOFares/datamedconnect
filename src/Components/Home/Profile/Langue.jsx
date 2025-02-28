import React from "react";

const Langue = ({Name,Niveau}) => {
  return (
    <div className="flex w-full justify-between">
      <p>{Name}</p>
      <p>{Niveau}</p>
    </div>
  );
};

export default Langue;
