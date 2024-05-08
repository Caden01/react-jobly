import React, { useState } from "react";
import SearchForm from "../SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";

function JobList() {
  const [jobs, setJobs] = useState(null);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div>
      <SearchForm jobs={search} />
      {jobs.length ? <JobCardList jobs={jobs} /> : <p>No results found</p>}
    </div>
  );
}

export default JobList;
