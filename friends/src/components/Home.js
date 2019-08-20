import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>Hello welcome to a simple authentication app</div>
      <Link to="/login">Click here for Login</Link>
      <Link to="/friends">Friends list</Link>
    </div>
  );
};

export default Home;
