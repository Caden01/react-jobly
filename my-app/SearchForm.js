import React, { useState } from "react";

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div>
      <form>
        <input name="searchTerm" value={searchTerm} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
