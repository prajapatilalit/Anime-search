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

    userRecord = localStorage.setItem("users", JSON.stringify(userRecord));
    let recordFound = userRecord.some((user) => {
      return user.email === newUser.email && user.password === newUser.password;
    });

    if (recordFound) {
      console.log("You are Already Registered");
    } else {
      userRecord.push(newUser);
    }
    setvalues({
      fullname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container_div">
      <h1>SignUp</h1>
      <form onSubmit={handlSubmitForm}>
        <input
          type="text"
          placeholder="Full name"
          name="fullname"
          value={values.fullname}
          onChange={inputHandle}
        />
        <br />

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
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
