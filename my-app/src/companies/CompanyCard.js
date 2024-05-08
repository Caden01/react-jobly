import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <h1>
          {name} {logoUrl && <img src={logoUrl} alt={name} />}
        </h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
