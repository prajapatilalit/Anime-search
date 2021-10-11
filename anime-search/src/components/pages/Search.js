import React from "react";
import { Redirect } from "react-router";

const Search = ({ isLoggedIn, search, setSearch, handleSearch }) => {
  return isLoggedIn ? (
    <div className="container_div">
      <form onSubmit={handleSearch}>
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search by genre, titles, and description.... "
          name="fullname"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Search;
