import React, { useState } from "react";
import { Redirect } from "react-router";

const Search = ({ isLoggedIn, search, handleSearch }) => {
  const [values, setvalues] = useState({
    text: "",
  });

  const inputHandle = (e) => {
    setvalues({ text: e.target.value });
  };

  const handlSubmitForm = (e) => {
    e.preventDefault();
    handleSearch(values.text);
  };

  return isLoggedIn ? (
    <div className="container_div">
      <form onSubmit={handlSubmitForm}>
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search by genre, titles, and description.... "
          name="fullname"
          value={values.text}
          onChange={inputHandle}
        />
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Search;
