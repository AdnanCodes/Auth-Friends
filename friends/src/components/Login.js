import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form entered this: ", login);
    setLogin({
      username: "",
      password: ""
    });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={login.username}
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          value={login.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Log On!</button>
      </form>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Login;
