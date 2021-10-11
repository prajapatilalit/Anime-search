import React, { useState } from "react";

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
    userRecord = localStorage.getItem("users", JSON.parse(userRecord))
      ? localStorage.getItem("users", JSON.parse(userRecord))
      : [];

    userRecord = localStorage.setItem("users", JSON.stringify(newUser));
    let recordFound = userRecord.some((user) => {
      return user.email === newUser.email && user.password === newUser.password;
    });

    if (recordFound) {
      alert("You are Already Registered");
    }
  };
  return (
    <div>
      <form onSubmit={handlSubmitForm}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Full name"
          name="fullname"
          value={values.fullname}
          onChange={inputHandle}
        />
        <br />
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
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
