import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Header/Navbar";
import Animes from "./components/pages/Animes";
import Search from "./components/pages/Search";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState([]);

  const formSubmit = () => {
    setIsLoggedIn(true);
  };

  const handleSearch = async (query) => {
    const res = await axios
      .get(`https://api.aniapi.com/v1/anime/`)
      .then((response) => response.json())
      .catch(console.error("error"));

    setSearch(res);
  };

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
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
