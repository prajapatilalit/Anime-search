import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Header/Navbar";
import Search from "./components/pages/Search";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const signupSubmit = () => {
    setFormSubmit(true);
  };

  const loginSubmit = () => {
    setIsLogin(true);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
