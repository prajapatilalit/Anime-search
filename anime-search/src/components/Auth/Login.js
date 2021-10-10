import React, { useState } from "react";

const Login = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handlSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
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
