import React from "react";

function Search({ newSearch, setNewSearch, handleSearch }) {
  function handleChange(e) {
    console.log(e.target.value);
    setNewSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    handleSearch(); // Assuming this function triggers the search based on the input value
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={newSearch}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
