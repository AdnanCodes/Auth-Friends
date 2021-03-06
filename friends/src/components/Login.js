import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";

const Login = props => {
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

    axiosWithAuth()
      .post(`http://localhost:5000/api/login`, login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log("Error in Login: ", err.response.data.error));

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
          type="password"
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
