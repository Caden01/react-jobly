import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../SearchForm";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <div>
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div>
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default CompanyList;
