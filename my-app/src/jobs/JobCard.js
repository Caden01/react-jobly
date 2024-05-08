import React from "react";

function JobCard({ id, title, salary, equity, companyName }) {
  return (
    <div>
      <div>
        <h3>{companyName}</h3>
        {salary}
        {equity}
      </div>
    </div>
  );
}

export default JobCard;
