import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = ({ isLoggedIn, formSubmit }) => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

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
    userRecord = JSON.parse(localStorage.getItem("users"));
    if (userRecord === null) {
      setvalues({
        email: "",
        password: "",
      });
      alert("no user record exists");
    } else {
      let recordFound = userRecord.some((user) => {
        return (
          user.email === newUser.email && user.password === newUser.password
        );
      });

      if (recordFound) {
        formSubmit(true);
      }
      alert("Login successfully");
      setvalues({
        email: "",
        password: "",
      });
    }
  };

  return isLoggedIn ? (
    <Redirect to="/search" />
  ) : (
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

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={inputHandle}
        />
        <button>Login</button>

        <p>
          If you are not sign up. please signup here
          <span>
            <Link to="/signup">Signup</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
