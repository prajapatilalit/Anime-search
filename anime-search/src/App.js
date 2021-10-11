import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Header/Navbar";
import Animes from "./components/pages/Animes";
import Search from "./components/pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/animes" component={Animes} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
