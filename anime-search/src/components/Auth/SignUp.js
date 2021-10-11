import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setvalues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handlSubmitForm = (e) => {
    e.preventDefault();
    const { fullname, email, password } = values;
    let newUser = {
      fullname,
      email,
      password,
    };
    let userRecord = [];
    userRecord = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    let recordFound = userRecord.some(
      (user) =>
        user.fullname === newUser.fullname && user.email === newUser.email
    );

    if (recordFound) {
      alert("You are Already Registered");
    } else {
      userRecord.push(newUser);
    }
    localStorage.setItem("users", JSON.stringify(userRecord));
    setvalues({
      fullname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container_div">
      <form onSubmit={handlSubmitForm}>
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="Full name"
          name="fullname"
          value={values.fullname}
          onChange={inputHandle}
        />

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

        <button>SignUp</button>
        <p>
          If you have already account. please signIn here
          <span>
            <Link to="/">SignIn</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
