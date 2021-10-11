import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = ({ isLogin }) => {
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
    userRecord = localStorage.getItem("users", JSON.parse(userRecord));
    let recordFound = userRecord.some((user) => {
      return user.email === newUser.email && user.password === newUser.password;
    });

    if (recordFound) {
      return setIsLogin === true;
    } else {
      return <Redirect to="/" />;
    }
  };
  return (
    <div>
      {isLogin ? <Redirect to="/search" /> : <Redirect to="/" />}

      <form onSubmit={handlSubmitForm}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={inputHandle}
        />
        <br />
        <label>Password</label>
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
