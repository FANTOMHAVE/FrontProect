import React from "react";
import { useParams } from "react-router-dom";
import { UslugiData } from "../UslugiData";

function UslugiDisplay() {
  const { id } = useParams();
  const uslugi = UslugiData.find((u) => u.id === parseInt(id));
  return (
    <div className="uslugiDisplay">
      <h1>{uslugi.name}</h1>
      <p>{uslugi.description}</p>
      <p>Цена: {uslugi.price}</p>
      <img src={uslugi.image} alt={uslugi.name} />
    </div>
  );
}

export default UslugiDisplay;
