import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const onFormSumbmit = (e) => {
    e.preventDefault();
    // axios.post("/user/signup", { userName, userPassword });
  };
  return (
    <div>
      <form onSubmit={onFormSumbmit} className="container">
        <input
          type="text"
          className="form-control mb-3"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          type="text"
          className="form-control mb-3"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />
        <button className="btn btn-primary w-100">Signup </button>
      </form>
    </div>
  );
};

export default Signup;
