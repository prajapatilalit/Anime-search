import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const inputHandle = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handlSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = values;
    let newUser = {
      email,
      password,
    };
    let userRecord = [];
    userRecord = localStorage.getItem("users", JSON.parse(userRecord));
    let recordFound = userRecord.some((user) => {
      return user.email === newUser.email && user.password === newUser.password;
    });

    if (recordFound) {
      setIsLoggedIn(true);
    }
    setvalues({
      email: "",
      password: "",
    });
  };

  if (isLoggedIn) {
    <Redirect to="/search" />;
  }

  return (
    <div className="container_div">
      <form onSubmit={handlSubmitForm}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={inputHandle}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={inputHandle}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
