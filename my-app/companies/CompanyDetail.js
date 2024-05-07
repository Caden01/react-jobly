import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanies() {
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }
      getCompany();
    },
    [handle],
  );

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyDetail;
