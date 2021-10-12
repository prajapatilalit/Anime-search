import React from "react";
import { Redirect } from "react-router";
import Animes from "./Animes";
// import { Link } from "react-router-dom";

const Search = ({ isLoggedIn, search, setSearch, handleSearch, animeList }) => {
  return isLoggedIn ? (
    <>
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
      {animeList.length === 0 ? "" : <Animes animeList={animeList} />}
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Search;
