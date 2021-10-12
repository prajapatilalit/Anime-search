import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Anime = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const animeData = async () => {
      try {
        const res = await fetch(`https://api.aniapi.com/v1/anime/${id}`);

        const animeDetailData = await res.data.data;
        console.log(animeDetailData);
        setResults(animeDetailData);
      } catch (error) {
        console.log("error");
      }
    };
    animeData();
  }, [id]);

  return (
    <div className="anime_item">
      <img src={results.cover_image} alt="anime-pic" />

      <div>
        <p>{Object.values(results.titles)[0]}</p>
      </div>
    </div>
  );
};

export default Anime;
