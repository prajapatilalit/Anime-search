import React from "react";

const Logout = () => {
  localStorage.removeItem("users");
  return <div>Logout</div>;
};

export default Logout;
