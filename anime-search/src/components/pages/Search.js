import React from "react";
import { Redirect } from "react-router";
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
      {animeList.length === 0 ? (
        ""
      ) : (
        <div className="search_list">
          {animeList.map((item) => {
            return (
              <div className="anime_item" key={item.mal_id}>
                <div>
                  <img src={item.cover_image} alt="anime-pic" />
                </div>
                <div>
                  <p>{Object.values(item.titles)[0]}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Search;
