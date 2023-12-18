import React from "react";
import Search from "./Search";

function Header({ handleSearch, setNewSearch, newSearch }) {
  return (
    <header>
      <h1>
        gregslist
      </h1>
      <Search
        handleSearch={handleSearch}
        setNewSearch={setNewSearch} 
        newSearch={newSearch}
      />
    </header>
  );
}

export default Header;
