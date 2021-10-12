import React from "react";

const Animes = ({ animeList }) => {
  return (
    <div className="search_list">
      {animeList.map((item) => {
        return (
          <div className="anime_item" key={item.mal_id}>
            <img src={item.cover_image} alt="anime-pic" />

            <div>
              <p>{Object.values(item.titles)[0]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Animes;
