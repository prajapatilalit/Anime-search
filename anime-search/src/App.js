import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Header/Navbar";
import Animes from "./components/pages/Animes";
import Search from "./components/pages/Search";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const formSubmit = () => {
    setIsLoggedIn(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
    setSearch("");
  };

  const fetchAnime = async (query) => {
    const res = await fetch(`https://api.aniapi.com/v1/anime?q=${query}`).then(
      (response) => response.json().catch((error) => console.log(error))
    );
    const animeData = res.data.documents;
    let filteredArr = animeData.filter((anime) => {
      let genreArr = anime.genres;

      let compareText = genreArr.filter((item) => item === query);
      return compareText;
    });

    setAnimeList(filteredArr.slice(0, 10));
  };

  useEffect(() => {
    if (search) {
      fetchAnime(search);
    }
  }, [search]);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Login isLoggedIn={isLoggedIn} formSubmit={formSubmit} />
        </Route>
        <Route path="/animes" component={Animes} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search">
          <Search
            isLoggedIn={isLoggedIn}
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
            animeList={animeList}
          />
        </Route>
        <Route path="/search/:id">
          <Animes animeList={animeList} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
