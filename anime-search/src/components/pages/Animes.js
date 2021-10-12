import React from "react";
import { Link } from "react-router-dom";

const Animes = ({ animeList }) => {
  return (
    <div className="search_list">
      {animeList.map((item) => {
        return (
          <div className="anime_item" key={item.id}>
            <Link to={`/search/${item.id}`}>
              <img src={item.cover_image} alt="anime-pic" />

              <div>
                <p>{Object.values(item.titles)[0]}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Animes;
