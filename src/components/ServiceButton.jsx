import React from "react";
import { Link } from "react-router-dom";

function ServiceButton({ uslugi }) {
  return (
    <Link to={`/uslugi/${uslugi.id}`}>
      <button className="uslugiButton">{uslugi.name}</button>
    </Link>
  );
}

export default ServiceButton;
