import React, { useState } from "react";

const Search = () => {
  const [values, setvalues] = useState({
    text: "",
  });

  const inputHandle = (e) => {
    setvalues({ text: e.target.value });
  };

  const handlSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handlSubmitForm}>
        <label>Search</label>
        <input
          type="text"
          placeholder="Search by genre, titles, and description.... "
          name="fullname"
          value={values.text}
          onChange={inputHandle}
        />
        <br />

        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
